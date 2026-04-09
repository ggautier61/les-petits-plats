"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SearchSelectProps {
  label?: string;
  options: string[];
  value?: string | null;
  onChange?: (value: string | null) => void;
  placeholder?: string;
}

// ─── Composant ────────────────────────────────────────────────────────────────

export default function SearchSelect({
  label = "Ingrédients",
  options,
  value = null,
  onChange,
  placeholder = "",
}: SearchSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(value);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fermer si clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input à l'ouverture
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) setSearch("");
  };

  const handleSelect = useCallback(
    (option: string) => {
      const next = selected === option ? null : option;
      setSelected(next);
      onChange?.(next);
      setIsOpen(false);
      setSearch("");
    },
    [selected, onChange]
  );

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearch("");
    setSelected(null);
    onChange?.(null);
  };

  return (
    <div ref={containerRef} className="relative w-56 font-sans select-none">
      {/* ── Trigger ── */}
      <button
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`
          flex w-full items-center justify-between
          rounded-xl bg-white px-4 py-3
          text-sm font-medium text-gray-800
          shadow-sm border border-gray-100
          transition-all duration-150
          hover:shadow-md focus:outline-none
          ${isOpen ? "rounded-b-none border-b-0 shadow-md" : ""}
        `}
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronUp size={16} className="text-gray-500" />
        ) : (
          <ChevronDown size={16} className="text-gray-500" />
        )}
      </button>

      {/* ── Dropdown ── */}
      {isOpen && (
        <div
          role="listbox"
          aria-label={label}
          className="
            absolute left-0 right-0 z-50
            rounded-b-xl bg-white
            border border-t-0 border-gray-100
            shadow-md overflow-hidden
          "
        >
          {/* Champ de recherche */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
                className="
                  w-full text-sm text-gray-700 bg-transparent
                  pr-6 focus:outline-none placeholder-gray-300
                "
              />
              {/* Croix ou loupe */}
              {search ? (
                <button
                  onClick={handleClear}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Effacer la recherche"
                >
                  <X size={14} />
                </button>
              ) : (
                <Search
                  size={14}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              )}
            </div>
          </div>

          {/* Liste des options */}
          <ul className="max-h-52 overflow-y-auto py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = option === selected;
                return (
                  <li
                    key={option}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option)}
                    className={`
                      px-4 py-2 text-sm cursor-pointer
                      transition-colors duration-100
                      ${
                        isSelected
                          ? "bg-[#F5C842] text-gray-900 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    {option}
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-3 text-sm text-gray-400 text-center">
                Aucun résultat
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
