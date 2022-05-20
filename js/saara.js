/* REST */
fetch('https://randomfox.ca/floof/?ref=apilist.fun')
    .then(response => response. json())
    .then(
        data => {
            document.getElementById
            ('Paina').innerHTML =
            "<img class='img-fluid' src=\"" + data.image + 
            "\"/>";
        }
    ); 

/* EVENTS */

let button = document.getElementById("Click");

button.addEventListener("mousedown", doSome);
button.addEventListener("mouseup", doSome);

function doSome(){
    button.classList.toggle("strong");
}