import { Recipe } from "@/src/types/Recipe";
import RecipeCard from "@/src/components/RecipeCard/RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <section
      
      style={{ minHeight: "60vh" }}
    >
      <div
        className="grid gap-[48px] justify-center"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}