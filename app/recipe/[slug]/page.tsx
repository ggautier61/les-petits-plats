import RecipeDetail from "@/src/components/RecipeDetail/RecipeDetail";
import recipes from "@/src/data/recipes.json";
import { notFound } from "next/navigation";
import { FilterProvider } from "@/src/context/FilterContext";

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();
  return (
    <FilterProvider>
      <RecipeDetail recipe={recipe} />
    </FilterProvider>
  );
}
