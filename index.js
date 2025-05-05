let heading = document.getElementsByTagName("h1");
heading[0].innerHTML = "Hello World!";

let text = document.getElementsByClassName("text");
text[0].style.color = "green";
text[0].style.fontSize = "30px";

document.querySelector(".button").addEventListener("click", () => {
    let newDiv = document.createElement("div");
    newDiv.textContent = "Hello There!";
    document.body.appendChild(newDiv);
});