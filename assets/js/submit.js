$(function() {
    console.log('jquery in submit works');

    // Click on the button
    $('button').on('click', function(e) {
        e.preventDefault();

        // Initialize an empty new residence object
        const newResidence = {};

        // Get all the values from the form
        const title = $('#submit-title').val();
        const price = $('#submit-price').val();
        const location = $("#submit-location option:selected").text();
        const beds = $('#submit-Beds').val();
        const baths = $('#submit-Baths').val();
        const area = $('#submit-area').val();
        const garages = $('#submit-garages').val();

        // Fill the new object with the values from the form
        newResidence.name = title;
        newResidence.bedrooms = parseInt(beds);
        newResidence.bathrooms = parseInt(baths);
        newResidence.price = price;
        newResidence.city = location;
        newResidence.garages = parseInt(garages);
        newResidence.size = area;

        // Do the AJAX request
        $.ajax({
            method:'POST',
            url: 'http://5ca1e35cc1b53400149acb87.mockapi.io/properties',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(newResidence)
        }).done(res => {
            window.location.pathname = "zoner/index.html";
        })
    })
});