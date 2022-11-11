
/*document.oncontextmenu = (ev) => {
    console.log(ev);
    console.log("context menu activated");
};*/

document.addEventListener("contextmenu", (ev) => {
    console.log("stopping context menu");
    ev.preventDefault();
    /*return <ul>
        <li>Copy</li>
    </ul>*/
});

document.addEventListener("copy", (ev) => {
    console.log(document.oncontextmenu);
    console.log("copy activated");
});
