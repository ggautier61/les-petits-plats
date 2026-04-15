import Image from "next/image";
import { Recipe } from "@/src/types/Recipe";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <p
        className="uppercase font-bold mb-4"
        style={{ color: "#bbb", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: "700", letterSpacing: "9%" }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

export default function RecipeDetail({ recipe }: { recipe: Recipe }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header variant="simple" />

      <div style={{ background: "var(--color-light-bg)", flex: 1, padding: "60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div>
            <Image
              src={'/assets/' + recipe.image}
              alt={recipe.name}
              width={606}
              height={738}
              style={{ borderRadius: "21px", objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "21px",
              padding: "40px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              {recipe.name}
            </h1>

            <span
              style={{
                background: "var(--color-primary)",
                padding: "8px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "var(--font-body)",
                display: "inline-block",
                marginBottom: "30px",
              }}
            >
              {recipe.time}min
            </span>

            <Section title="Ingrédients">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "21px" }}>
                {recipe.ingredients.map((ing, i) => (
                  <div key={i}>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                        display: "block",
                      }}
                    >
                      {ing.ingredient}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {ing.quantity} {ing.unit}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Ustensiles">
              {recipe.ustensils.map((u, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#333",
                    marginBottom: "8px",
                  }}
                >
                  {u}
                </div>
              ))}
            </Section>

            <Section title="Appareil">
              <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#333" }}>
                {recipe.appliance}
                <span style={{ fontSize: "12px", color: "var(--color-text-muted)", marginLeft: "8px" }}>×1</span>
              </div>
            </Section>

            <Section title="Recette">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--color-text-muted)",
                }}
              >
                {recipe.description}
              </p>
            </Section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
