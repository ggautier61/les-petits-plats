"use client";
import { useState } from "react";
import SearchSelect from "./SearchSelect";

// const filterGroups = [
//   {
//     label: "Ingrédients",
//     options: ["Poulet", "Boeuf", "Poisson", "Légumes", "Pâtes", "Riz"],
//   },
//   {
//     label: "Apéros",
//     options: ["Verrines", "Toasts", "Brochettes", "Dips", "Tartines"],
//   },
//   {
//     label: "Viandes",
//     options: ["Poulet", "Boeuf", "Agneau", "Porc", "Veau"],
//   },
// ];

export default function Filters({ ingredients, appareils, ustensiles }: { ingredients: string[]; appareils: string[]; ustensiles: string[] }) {

    const [ingredient, setIngredient] = useState<string | null>(null);
    const [appareil, setAppareil] = useState<string | null>(null);
    const [ustensile, setUstensile] = useState<string | null>(null);




//   const [open, setOpen] = useState<number | null>(null);
//   const [selected, setSelected] = useState<Record<number, string>>({});

//   const toggle = (i: number) => setOpen(open === i ? null : i);
//   const select = (groupIdx: number, option: string) => {
//     setSelected((prev) => ({ ...prev, [groupIdx]: option }));
//     setOpen(null);
//   };

   return (
    <section className="px-8 py-5 flex items-center gap-3 border-b" style={{ borderColor: "var(--color-border)" }}>
        <SearchSelect
          label="Ingrédients"
          options={ingredients}
          value={ingredient}
          onChange={(val) => setIngredient(val)}
        />
        <SearchSelect
          label="Appareils"
          options={appareils}
          value={appareil}
          onChange={(val) => setAppareil(val)}
        />
        <SearchSelect
          label="Ustensiles"
          options={ustensiles}
          value={ustensile}
          onChange={(val) => setUstensile(val)}
        />

    </section>

//     <section className="px-8 py-5 flex items-center gap-3 border-b" style={{ borderColor: "var(--color-border)" }}>
//       <div className="flex items-center gap-3 flex-1">
//         {filterGroups.map((group, i) => (
//           <div key={i} className="relative">
//             <button
//               onClick={() => toggle(i)}
//               className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all"
//               style={{
//                 fontFamily: "var(--font-body)",
//                 borderColor: selected[i] ? "var(--color-primary)" : "var(--color-border)",
//                 background: selected[i] ? "var(--color-primary)" : "#fff",
//                 color: selected[i] ? "#1a1a1a" : "#444",
//               }}
//             >
//               <span>{selected[i] ?? group.label}</span>
//               <svg
//                 width="12"
//                 height="12"
//                 viewBox="0 0 12 12"
//                 style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
//               >
//                 <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
//               </svg>
//             </button>

//             {open === i && (
//               <div
//                 className="absolute top-full left-0 mt-1 rounded-xl shadow-lg border z-20 min-w-[160px] py-1"
//                 style={{ background: "#fff", borderColor: "var(--color-border)" }}
//               >
//                 {group.options.map((opt) => (
//                   <button
//                     key={opt}
//                     onClick={() => select(i, opt)}
//                     className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
//                     style={{ fontFamily: "var(--font-body)" }}
//                   >
//                     {opt}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <span
//         className="text-sm font-medium whitespace-nowrap"
//         style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
//       >
//         59 recettes
//       </span>
//     </section>
   );
}