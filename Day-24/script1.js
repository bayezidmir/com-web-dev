let blogList = document.getElementById("blog-list");
console.log(blogList);
console.log(blogList.getAttribute("id"));
console.log(blogList.getAttribute("class"));
blogList.setAttribute("name", "stupid");
console.log(blogList);
blogList.setAttribute("class", "blog-names");
//using newly set attribute to query an element
const secondWay = document.querySelector(".blog-names");
console.log(secondWay);
console.log(secondWay.parentNode);
console.log(secondWay.childNodes);
console.log(window);
