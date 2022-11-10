// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

navigator.geolocation.getCurrentPosition((pos) => {
    console.log(`Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`);
}, (err) => {
    console.log("error!");
});
