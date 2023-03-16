import data from "./data.json";

let image;
let receivingElement;
let imageClone;

document.getElementById("Reaction").innerHTML = data[0].category;
document.getElementById("Reaction-score").innerHTML = data[0].score;
image = document.createElement("img");
receivingElement = document.getElementById("Reaction-img");
imageClone = image.cloneNode();
imageClone.src = data[0].icon;
receivingElement.appendChild(imageClone);

document.getElementById("Memory").innerHTML = data[1].category;
document.getElementById("Memory-score").innerHTML = data[1].score;
image = document.createElement("img");
receivingElement = document.getElementById("Memory-img");
imageClone = image.cloneNode();
imageClone.src = data[1].icon;
receivingElement.appendChild(imageClone);

document.getElementById("Verbal").innerHTML = data[2].category;
document.getElementById("Verbal-score").innerHTML = data[2].score;
image = document.createElement("img");
receivingElement = document.getElementById("Verbal-img");
imageClone = image.cloneNode();
imageClone.src = data[2].icon;
receivingElement.appendChild(imageClone);

document.getElementById("Visual").innerHTML = data[3].category;
document.getElementById("Visual-score").innerHTML = data[3].score;
image = document.createElement("img");
receivingElement = document.getElementById("Visual-img");
imageClone = image.cloneNode();
imageClone.src = data[3].icon;
receivingElement.appendChild(imageClone);
