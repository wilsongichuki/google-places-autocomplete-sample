// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
    
    var input = /** @type {!HTMLInputElement} */(
        document.getElementById('pac-input'));

    var types = "address";
    var autocomplete = new google.maps.places.Autocomplete(input);
    var infowindow = new google.maps.InfoWindow();
    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            console.warn("Autocomplete's returned place contains no geometry");
            return;
        }

        var address = '';
        if (place.address_components) {
        address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
        }
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);

        placeInfo = {
            country: {
                name: "Kenya",
                iso2: "ke",
                dialCode: "254",
                priority: 0,
                areaCodes: null
            },
            town: {
                name: place.name,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng(),
                google_place_id: place.place_id
            }
        };

        placeInfoJSON = JSON.stringify(placeInfo);
        console.log(placeInfoJSON);
    });
}