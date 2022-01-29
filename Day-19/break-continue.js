var numbers = [20, 25, 40, 50, 80, 78, 35];

for (var i = 0; i <= numbers.length; i++) {
  var number = numbers[i];
  if (number == 50) {
    break;
  }
  console.log(number);
}

var friends = ["Roman", "Sahjalal", "Rubel", "Bayezid", "Helal"];

var i = 0;
while (i <= friends.length) {
  var friend = friends[i];
  if (friend == "Bayezid") {
    continue;
  }
  i++;
  console.log(friend);
}
