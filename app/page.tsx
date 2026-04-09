import Filters from "@/src/components/Filters/Filters";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import RecipeGrid from "@/src/components/RecipeGrid/RecipeGrid";
import recipes  from "@/src/data/recipes.json";
import { extractUniqueData } from "@/src/utils/extractUniqueData";



 
export default function Home() {
  const { ingredients, appliances, ustensils } = extractUniqueData(recipes);

  //const ingredients = recipes.find((r) => r.ingredients)?.ingredients.map((i) => i.ingredient) || [];


  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Filters ingredients={ingredients as string[]} appareils={appliances as string[]} ustensiles={ustensils as string[]} />
      
      <RecipeGrid />
      <Footer />
    </main>
  );
}