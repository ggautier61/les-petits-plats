"use client";
import { useFilters } from "@/src/context/FilterContext";
import SearchSelect from "./SearchSelect";
import SearchSelectTag from "./SearchSelectTag";

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
    <section className="flex justify-between w-full px-[10px] py-[60px] flex items-center justify-between" style={{ maxWidth: "1236px", gap: "65px" }}>
      <div className="grid grid-cols-3 gap-[65px]">
        <div className="flex flex-col gap-y-[20px] relative">
          <SearchSelect
            label="Ingrédients"
            options={ingredients}
            value={selectedIngredient}
            onChange={(val) => setSelectedIngredient(val)}
          />
          {selectedIngredient && (
            <div className="w-full">
              <SearchSelectTag 
                label={selectedIngredient} 
                onClear={() => setSelectedIngredient(null)} 
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-[20px] relative">
          <SearchSelect
            label="Appareils"
            options={appareils}
            value={selectedAppareil}
            onChange={(val) => setSelectedAppareil(val)}
          />
          {selectedAppareil && (
            <div className="w-full">
              <SearchSelectTag 
                label={selectedAppareil} 
                onClear={() => setSelectedAppareil(null)} 
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-[20px] relative">
          <SearchSelect
            label="Ustensiles"
            options={ustensiles}
            value={selectedUstensile}
            onChange={(val) => setSelectedUstensile(val)}
          />
          {selectedUstensile && (
            <div className="w-full">
              <SearchSelectTag 
                label={selectedUstensile} 
                onClear={() => setSelectedUstensile(null)} 
              />
            </div>
          )}
        </div>
      </div>
      <span style={{fontFamily: "var(--font-display)", fontSize: "21px"}}>{count} recette{count !== 1 ? 's' : ''}</span>
    </section>
  );
}