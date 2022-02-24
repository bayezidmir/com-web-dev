const searchButton = document.getElementById("btn-search");

searchButton.addEventListener("click", () => {
  const searchText = document.getElementById("input-field").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayFood(data.meals));
});

const displayFood = (foods) => {
  console.log(foods);
  foods.forEach((food) => {
    const items = document.getElementById("seach-result");

    const item = document.createElement("div");
    item.classList.add("col");
    item.innerHTML = `
    <div class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">
            ${food.strInstructions.substring(0, 200)}
            </p>
          </div>
        </div>
    `;
    items.appendChild(item);
  });
};
