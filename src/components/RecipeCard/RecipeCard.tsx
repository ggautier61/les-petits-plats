import { Recipe as RecipeType } from "@/src/types/Recipe";
import Image from "next/image";

export default function RecipeCard({ recipe }: { recipe: RecipeType }) {
  return (
    <article
      className=" overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        width: "380px",
        border: "1px solid var(--color-border)",
        borderRadius: "21px",
      }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
        <Image
          src={'/assets/' + recipe.image}
          alt={recipe.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
          <span
            className="absolute top-[22px] right-[22px] text-xs font-semibold px-4 py-1 rounded-full"
            style={{
              background: "var(--color-primary)",
              color: "#1a1a1a",
              fontFamily: "var(--font-body)",
            }}
          >
            {recipe.time}min
          </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 pb-15">
        <h2
          className="mb-8"
          style={{ fontFamily: "var(--font-display)", fontSize: "18px" }}
        >
          {recipe.name} 
        </h2>

        <p
            className="uppercase font-bold mb-2"
            style={{ color: "#bbb", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: "700", letterSpacing: "9%" }}
          >
            Recette
          </p>
        <p
          className="text-xs leading-relaxed mb-4 line-clamp-3"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
        >
          {recipe.description}
        </p>

        {/* Ingredients list */}
        <div>
          <p
            className="uppercase font-bold mb-4"
            style={{ color: "#bbb", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: "700", letterSpacing: "9%" }}
          >
            Ingrédients
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-[21px]">
            {recipe.ingredients.map((ing, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-sm font-medium truncate"
                  style={{ fontFamily: "var(--font-body)", color: "#333" }}
                >
                  {ing.ingredient}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {ing.quantity} {ing.unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </article>
  );
}