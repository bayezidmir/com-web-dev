let elements = document.getElementsByTagName("article");
// console.log(elements);

for (const element of elements) {
  // console.log(element);
}

let secondPara = document.getElementById("second-para");
// secondPara.innerText = "hello elo mello gelogara";
secondPara.style.textAlign = "right";
secondPara.style.color = "salmon";

// const text = document.getElementsByClassName("text");
// console.log(text);

// const textNode = document.querySelectorAll(".text");
// textNode.getA;

// Adding an element to ul
//_________________________________________________________________
// declaring a new listing
const newListing = document.createElement("li");
// adding text in listing
newListing.innerText = "blog-list 4";
// findingg the parent to which new listing or text to be added
const unorderedList = document.getElementById("blog-list");
// adding the newly created listing to parent
unorderedList.appendChild(newListing);
//_________________________________________________________________
