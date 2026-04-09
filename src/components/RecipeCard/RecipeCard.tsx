import { Recipe as RecipeType } from "@/src/types/Recipe";
import Image from "next/image";

export default function RecipeCard({ recipe }: { recipe: RecipeType }) {
  return (
    <article
      className="rounded-2xl overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        border: "1px solid var(--color-border)",
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
            className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: "var(--color-primary)",
              color: "#1a1a1a",
              fontFamily: "var(--font-body)",
            }}
          >
          </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h2
          className="font-bold text-base mb-2 leading-snug"
          style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
        >
          {recipe.name}
        </h2>
        <p
          className="text-xs leading-relaxed mb-4 line-clamp-3"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
        >
          {recipe.description}
        </p>

        {/* Ingredients list */}
        <div className="mb-4">
          <p
            className="uppercase text-xs font-semibold tracking-wider mb-2"
            style={{ color: "#bbb", fontFamily: "var(--font-body)", fontSize: "0.65rem" }}
          >
            Ingrédients
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            {recipe.ingredients.slice(0, 4).map((ing, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-xs font-medium truncate"
                  style={{ fontFamily: "var(--font-body)", color: "#333" }}
                >
                  {ing.ingredient}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {ing.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Meta info */}
        <div
          className="mt-auto pt-3 flex items-center gap-4 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          {recipe.time > 0 && (
            <div className="flex items-center gap-1">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#bbb" strokeWidth="2" />
                <path d="M12 7v5l3 3" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-xs" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
                {recipe.time}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
              <circle cx="9" cy="7" r="4" stroke="#bbb" strokeWidth="2" />
            </svg>
            <span className="text-xs" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
              {recipe.servings} pers.
            </span>
          </div>
          {/* <div
            className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              background:
                recipe.difficulty === "Facile"
                  ? "#e8f5e9"
                  : recipe.difficulty === "Moyen"
                  ? "#fff8e1"
                  : "#fce4ec",
              color:
                recipe.difficulty === "Facile"
                  ? "#2e7d32"
                  : recipe.difficulty === "Moyen"
                  ? "#f9a825"
                  : "#c62828",
              fontFamily: "var(--font-body)",
            }}
          >
            {recipe.difficulty}
          </div> */}
        </div>
      </div>
    </article>
  );
}