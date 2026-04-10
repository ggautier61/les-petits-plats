'use client';
import Filters from "@/src/components/Filters/Filters";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import RecipeGrid from "@/src/components/RecipeGrid/RecipeGrid";
import recipes from "@/src/data/recipes.json";
import { extractUniqueData } from "@/src/utils/extractUniqueData";
import { FilterProvider, useFilters, filterRecipes } from "@/src/context/FilterContext";

function HomeContent() {
  const { ingredients, appliances, ustensils } = extractUniqueData(recipes);
  const filters = useFilters();
  const filteredRecipes = filterRecipes(recipes, filters);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Filters 
        ingredients={ingredients as string[]} 
        appareils={appliances as string[]} 
        ustensiles={ustensils as string[]}
        count={filteredRecipes.length}
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <RecipeGrid recipes={filteredRecipes} />
      </div>
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <FilterProvider>
      <HomeContent />
    </FilterProvider>
  );
}