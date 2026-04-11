"use client";

import Image from "next/image";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFilters } from "@/src/context/FilterContext";

export default function Header() {
  const { searchQuery, setSearchQuery } = useFilters();
  return (
    <header className="relative w-full overflow-hidden" style={{ height: "667px", padding: "50px", paddingLeft: "70px", paddingRight: "70px" }}>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./assets/header.jpg')",
          filter: "brightness(0.45)",
        }}
      />  

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Logo */}
        <div className="static items-center justify-between pt-5 pb-4">
          <Image src="/assets/logo.png" alt="Les Petits Plats" height={25} width={207} />
          {/* <div className="flex items-center gap-2">
            <span
              className="font-bold tracking-widest uppercase text-white text-sm"
              style={{ fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}
            >
              LES PETITS PLATS
              <div className="circle">
                <div className="inner-circle"></div>
              </div>
            </span>
          </div> */}
          
        </div>

        {/* Hero text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center -mt-4">
          <h1
            className="text-white uppercase leading-tight mb-7"
            style={{
              fontFamily: "var(--font-display)",              
              fontWeight: 400,
              color: "var(--color-primary)",
              fontSize: "44px",
              paddingBottom: "30px",
            }}
          >
            Découvrez nos recettes
            <br />
            <span>
              du quotidien, simples et délicieuses
            </span>
          </h1>

          {/* Search bar */}
          <div className="relative w-full" style={{paddingLeft: "173px", paddingRight: "173px"}}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une recette, un ingrédient..."
              className="w-full rounded-[11px] text-sm outline-none"
              style={{
                height: "72px",
                fontFamily: "var(--font-body)",
                border: "none",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                color: "#444",
                background: "#fff",
                paddingLeft: "30px",
              }}
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "248px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faXmark} style={{ color: "#aaa", height: "20px" }} />
              </button>
            )}

            
            <button
              className="absolute right-[183px] rounded-[10px] flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ background: "black", height: "52px", width: "51px", top:"10px", bottom: "10px" }}

            >
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "rgb(255, 255, 255)", height: "28px"}} />
              {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            </button>
              {/* <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2.2" />
                <path
                  d="M16.5 16.5L21 21"
                  stroke="#1a1a1a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg> */}
          </div>
        </div>
      </div>
    </header>
  );
}