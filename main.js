import { recipes } from './recipes.mjs';


const recipesContainer = document.getElementById('recipes');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search');

function renderRecipes(recipes) {
  recipesContainer.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe');
    recipeElement.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}" />
      <p>${recipe.description}</p>
      <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
      </div>
    `;
    recipesContainer.appendChild(recipeElement);
  });
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query)
  );
  renderRecipes(filteredRecipes);
});

renderRecipes(recipes);
