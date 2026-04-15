import { Recipe } from "@/src/types/Recipe";
import RecipeCard from "@/src/components/RecipeCard/RecipeCard";
import { useFilters } from "@/src/context/FilterContext";

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {

  const { searchQuery } = useFilters();

  if (recipes.length === 0 && searchQuery.length >= 3) {
    return (
      <section 
        className="flex justify-center items-center" 
        style={{ minHeight: "60vh" }}
      >
        <p className="text-gray-500 text-lg">
          Aucune recette ne contient &quot;{searchQuery}&quot; vous pouvez chercher &quot;tarte aux pommes&quot;, &quot;poisson&quot; etc.
        </p>
      </section>
    );
  }

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