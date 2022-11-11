/*
navigator.geolocation.getCurrentPosition((pos) => {
    console.log(`Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`);
}, (err) => {
    console.log("error!");
});
*/


// Replace all occurances of "orphan" or "orphans" with "abcd"
//console.log(document.getElementById("eventList").textContent);
while (true) {
    if (document.getElementById("eventList").textContent!=="") {
        document.body.innerHTML = document.body.innerHTML.replace(/orphan.?/gi, "abcd");
        break;
    }
};
