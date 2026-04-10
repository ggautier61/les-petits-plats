import { Recipe } from "@/src/types/Recipe";
import RecipeCard from "@/src/components/RecipeCard/RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <section
      className="px-8 py-8"
      style={{ background: "var(--color-light-bg)", minHeight: "60vh" }}
    >
      <div
        className="grid gap-6"
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