'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Recipe } from '@/src/types/Recipe';

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedIngredient: string | null;
  setSelectedIngredient: (value: string | null) => void;
  selectedAppareil: string | null;
  setSelectedAppareil: (value: string | null) => void;
  selectedUstensile: string | null;
  setSelectedUstensile: (value: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [selectedAppareil, setSelectedAppareil] = useState<string | null>(null);
  const [selectedUstensile, setSelectedUstensile] = useState<string | null>(null);

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedIngredient,
        setSelectedIngredient,
        selectedAppareil,
        setSelectedAppareil,
        selectedUstensile,
        setSelectedUstensile,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within FilterProvider');
  }
  return context;
}

export function filterRecipes(recipes: Recipe[], filters: {
  searchQuery: string;
  selectedIngredient: string | null;
  selectedAppareil: string | null;
  selectedUstensile: string | null;
}): Recipe[] {
  return recipes.filter((recipe) => {
    const searchLower = filters.searchQuery.toLowerCase();
    
    const matchesSearch = filters.searchQuery === '' || 
      recipe.name.toLowerCase().includes(searchLower) ||
      recipe.description.toLowerCase().includes(searchLower) ||
      recipe.ingredients.some(ing => ing.ingredient.toLowerCase().includes(searchLower));
    
    const matchesIngredient = !filters.selectedIngredient || 
      recipe.ingredients.some(ing => ing.ingredient.toLowerCase() === filters.selectedIngredient!.toLowerCase());
    
    const matchesAppareil = !filters.selectedAppareil || 
      recipe.appliance?.toLowerCase() === filters.selectedAppareil.toLowerCase();
    
    const matchesUstensile = !filters.selectedUstensile || 
      recipe.ustensils?.some(u => u.toLowerCase() === filters.selectedUstensile!.toLowerCase());
    
    return matchesSearch && matchesIngredient && matchesAppareil && matchesUstensile;
  });
}
