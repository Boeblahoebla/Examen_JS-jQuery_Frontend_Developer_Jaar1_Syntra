$(function(){
    console.log('jquery works!');

    let residences = [];

    // Load all the data from the API
    loadData(residences);

    // Recall the load data method each 60 seconds
    setTimeout(function () { loadData(residences); }, 60000);

});


// Function to load all the data from the api;
function loadData(residenceArray) {

    $.ajax({
        method:'GET',
        url: 'http://5ca1e35cc1b53400149acb87.mockapi.io/properties'
    }).done(res => {
        // Clear the array to start fresh
        residenceArray = [];

        // Fill the array with all the residences
        res.forEach(residence => {
            residenceArray.push(residence);
        });

        // Generate all the html elements per residence & add them to the DOM
        generateHTMLElements(residenceArray);

        // Annotate the amount of residences
        document.getElementById('residenceAmount').innerText = residenceArray.length.toString();
    })
}


// Function to generate al the HTML elements for the residences
function generateHTMLElements(residenceList) {

    // Fetch the row as a destination for all the residences
    const items = document.getElementById('items');
    console.log(items);
    items.innerHTML = '';

    // Loop through all the residences & create a card for each of them
    residenceList.forEach(residence => {

        // Create card
        let cardCol = document.createElement('div');
        cardCol.classList.add('col-md-3', 'col-sm-6');

        // Create property div
        let propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');

        // Create the delete figure
        let figure = document.createElement('figure');
        figure.setAttribute("class", "type");
        figure.setAttribute("title", "Apertment");

        figure.addEventListener('click', function() {
            console.log('clicked');
            removeItem(residence.id, residenceList)
        });

        // Create the fontawesome trash icon
        let fontAwesomeDeleteIcon = document.createElement('i');
        fontAwesomeDeleteIcon.classList.add('fa', 'fa-trash-o');

        // Create the link tag
        let link = document.createElement('a');
        link.setAttribute('href', 'property-detail.html');

        // Create the div property image
        let divPropertyImage = document.createElement('div');
        divPropertyImage.classList.add('property-image');

        // Create the property image
        let propertyImage = document.createElement('img');
        propertyImage.setAttribute('src', 'https://placeimg.com/640/480/arch/' + residence.garages.toString());

        // Create the overlay
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Create the info div
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        // Create the price div
        let priceDiv = document.createElement('div');
        priceDiv.classList.add('tag', 'price');
        priceDiv.innerHTML = '$ ' + residence.price;

        // Create the location header
        let locationHeader = document.createElement('h3');
        locationHeader.innerHTML = residence.city;

        // Create the additional info ul
        let additionalInfoUl = document.createElement('ul');
        additionalInfoUl.classList.add('additional-info');

        // Create the li for the area
        let areaLi = document.createElement('li');
        let areaLiHeader = document.createElement('header');
        areaLiHeader.innerHTML = 'Area:';
        let areaLiFigure = document.createElement('figure');
        areaLiFigure.innerHTML = residence.size.toString();

        areaLi.appendChild(areaLiHeader);
        areaLi.appendChild(areaLiFigure);

        // Create the li for the beds
        let bedsLi = document.createElement('li');
        let bedsLiHeader = document.createElement('header');
        bedsLiHeader.innerHTML = 'Beds:';
        let bedsLiFigure = document.createElement('figure');
        bedsLiFigure.innerHTML = residence.bedrooms.toString();

        bedsLi.appendChild(bedsLiHeader);
        bedsLi.appendChild(bedsLiFigure);

        // Create the li for the baths
        let bathsLi = document.createElement('li');
        let bathsLiHeader = document.createElement('header');
        bathsLiHeader.innerHTML = 'Baths:';
        let bathsLiFigure = document.createElement('figure');
        bathsLiFigure.innerHTML = residence.bathrooms.toString();

        bathsLi.appendChild(bathsLiHeader);
        bathsLi.appendChild(bathsLiFigure);

        // Create the li for the garages
        let garagesLi = document.createElement('li');
        let garagesLiHeader = document.createElement('header');
        garagesLiHeader.innerHTML='Garages:';
        let garagesLiFigure = document.createElement('figure');
        garagesLiFigure.innerHTML = residence.garages.toString();

        garagesLi.appendChild(garagesLiHeader);
        garagesLi.appendChild(garagesLiFigure);

        // Add the li's to the ul
        additionalInfoUl.appendChild(areaLi);
        additionalInfoUl.appendChild(bedsLi);
        additionalInfoUl.appendChild(bathsLi);
        additionalInfoUl.appendChild(garagesLi);

        // Add the pricediv & loationheader to the infodiv
        infoDiv.appendChild(priceDiv);
        infoDiv.appendChild(locationHeader);

        // Add the infodiv & additional info ul to the overlay
        overlay.appendChild(infoDiv);
        overlay.appendChild(additionalInfoUl);

        // Add the property image to its div
        divPropertyImage.appendChild(propertyImage);

        // Add the overlay & property image div to the link tag
        link.appendChild(divPropertyImage);
        link.appendChild(overlay);

        // Add the fontawesome icon to the figure
        figure.appendChild(fontAwesomeDeleteIcon);

        // Add the figure & link to the property div
        propertyDiv.appendChild(figure);
        propertyDiv.appendChild(link);

        // Add the property div to the card
        cardCol.appendChild(propertyDiv);

        // Add the full residence card to the items div
        items.appendChild(cardCol);
    })
}


function removeItem(indexToRemove, residenceArray) {

    // Initialize array index
    let arrayIndex = -1;

    // Find array of index to Remove
    residenceArray.forEach((residence, index) => {
        if (residence.id === indexToRemove) {
            arrayIndex = index;
        }
    });

    // If the residence is found, delete it from the array
    if (residenceArray !== -1) {
        residenceArray.splice(arrayIndex, 1);
    }

    // Do the AJAX request to delete the residence
    $.ajax({
        method:'DELETE',
        url:'http://5ca1e35cc1b53400149acb87.mockapi.io/properties/'+indexToRemove
    }).done(res => {
        console.log(res);
        loadData(residenceArray)
    })
}