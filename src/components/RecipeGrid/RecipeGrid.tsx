import recipes  from "@/src/data/recipes.json";
import RecipeCard from "@/src/components/RecipeCard/RecipeCard";
export default function RecipeGrid() {
  return (
    <section
      className="px-8 py-8"
      style={{ background: "var(--color-light-bg)", minHeight: "60vh" }}
    >
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}