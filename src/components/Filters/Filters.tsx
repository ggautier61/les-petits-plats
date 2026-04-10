"use client";
import { useFilters } from "@/src/context/FilterContext";
import SearchSelect from "./SearchSelect";

export default function Filters({ ingredients, appareils, ustensiles, count }: { ingredients: string[]; appareils: string[]; ustensiles: string[]; count: number }) {
  const {
    selectedIngredient,
    setSelectedIngredient,
    selectedAppareil,
    setSelectedAppareil,
    selectedUstensile,
    setSelectedUstensile,
  } = useFilters();

  return (
    <section className="px-8 py-[60px] flex items-center justify-between border-b" style={{ borderColor: "var(--color-border)", gap: "65px" }}>
      <div className="flex items-center gap-[65px]">
        <SearchSelect
          label="Ingrédients"
          options={ingredients}
          value={selectedIngredient}
          onChange={(val) => setSelectedIngredient(val)}
        />
        <SearchSelect
          label="Appareils"
          options={appareils}
          value={selectedAppareil}
          onChange={(val) => setSelectedAppareil(val)}
        />
        <SearchSelect
          label="Ustensiles"
          options={ustensiles}
          value={selectedUstensile}
          onChange={(val) => setSelectedUstensile(val)}
        />
      </div>
      <span>{count} recette{count !== 1 ? 's' : ''}</span>
    </section>
  );
}