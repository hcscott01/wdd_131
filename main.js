import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}
// console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
    return `<div class="template">
            <img class="template-img" src="${recipe.image}" alt="image of ${recipe.name}">
            <div class="template-text">
                <h3>${tagsTemplate(recipe.tags)}</h3>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
                </span>
                <p>${recipe.description}</p>
            </div>
        </div>`;
}

function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    return tags.map(tag => `<span>${tag}</span>`).join(', ');
}

// console.log(tagsTemplate);

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
    let html = ``; 
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // check to see if the current index of the loop is less than our rating
        if (i <= rating) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    // after the loop, add the closing tag to our string
    html += `</span>`; // remove?
    // return the html string
    return html;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const outputElement = document.querySelector('.template');
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    // Set the HTML strings as the innerHTML of our output element.
    outputElement.innerHTML = recipesHTML;
}

function init() {
    // get a random recipe
    const recipeRandom = getRandomListEntry(recipes);
    // render the recipe with renderRecipes.
    renderRecipes([recipeRandom]);
}
init();