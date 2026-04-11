"use client";
import { X } from "lucide-react";

interface SearchSelectTagProps {
  label: string;
  onClear: () => void;
}

export default function SearchSelectTag({ label, onClear }: SearchSelectTagProps) {
  return (
    <div 
      className="flex items-center justify-between px-3 rounded-[10px] text-sm text-gray-700"
      style={{ backgroundColor: "#F5C842", height: "53px" }}
    >
      <span>{label}</span>
      <button 
        onClick={onClear}
        className="flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        <X size={14} />
      </button>
    </div>
  );
}
