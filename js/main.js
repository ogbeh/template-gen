function newHead() {
    let head = prompt('Enter New Heading');
    let inp = document.createElement('INPUT');
    inp.setAttribute("type", "text");
    inp.setAttribute("title", head);
    inp.setAttribute("placeholder", head);
    inp.setAttribute("class", "w3-input w3-margin");

    let form = document.getElementById("ch2_input");
    form.appendChild(inp);
}
