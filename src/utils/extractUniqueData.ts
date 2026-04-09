import { Recipe } from "../types/Recipe";

export function extractUniqueData(recipes: Recipe[]) {
    const ingredientsSet = new Set();
    const appliancesSet = new Set();
    const ustensilsSet = new Set();

    recipes.forEach((recipe) => {
        // ingrédients
        recipe.ingredients.forEach((item) => {
            if (item.ingredient) {
                ingredientsSet.add(item.ingredient.toLowerCase());
            }
        });

        // appareil
        if (recipe.appliance) {
            appliancesSet.add(recipe.appliance.toLowerCase());
        }

        // ustensiles
        recipe.ustensils.forEach((ustensil) => {
            ustensilsSet.add(ustensil.toLowerCase());
        });
    });

    return {
        ingredients: Array.from(ingredientsSet).sort(),
        appliances: Array.from(appliancesSet).sort(),
        ustensils: Array.from(ustensilsSet).sort(),
    };
}