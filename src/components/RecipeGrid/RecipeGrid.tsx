import { Recipe } from "@/src/types/Recipe";
import RecipeCard from "@/src/components/RecipeCard/RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <section
      className="flex justify-center pb-15"
      style={{ minHeight: "60vh" }}
    >
      <div
        className="grid gap-[48px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        style={{
        //   gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}