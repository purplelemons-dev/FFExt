
const CWID = document.getElementById("customscreenfield_CWID");

CWID.addEventListener("keyup", (e) => {
    if (e.key === ".") e.target.value = "123456789";
});
