var todoList = [
  "calls",
  "text",
  "food",
  "office",
  "dealing-people",
  "being-nice",
];

// adding and remoing array component
todoList.push("journey");
todoList.push("pool");
todoList.push("smoking");
todoList.push("black-coffee");
todoList.push("prayer");
console.log(todoList);

var indexOfFood = todoList.indexOf("food");
console.log(indexOfFood);
var indexofBeing_nice = todoList.indexOf("being-nice");
console.log(indexofBeing_nice);
var indexOfText = todoList.indexOf("text");
console.log(indexOfText);
console.log(todoList.indexOf("calls"));
console.log(todoList.indexOf("dealing-people"));
