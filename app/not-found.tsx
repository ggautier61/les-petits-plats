"use client";
import Image from "next/image";
import Footer from "@/src/components/Footer/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <header 
        className="relative w-full overflow-hidden flex flex-col"
        style={{ padding: "50px 70px", flex: 1, minHeight: "calc(100vh - 138px)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./assets/header.jpg')",
            filter: "brightness(0.35)",
          }}
        />
        
        <div className="relative z-10">
          <Image src="/assets/logo.png" alt="Les Petits Plats" height={25} width={207} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
          <h1
            className="text-white uppercase leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--color-primary)",
              fontSize: "70px",
            }}
          >
            404 :(
            <br />
            <span style={{ fontSize: "40px", color: "white"}}>
              La page que vous demandez est introuvable.
            </span>
          </h1>
        </div>
      </header>

      <Footer />
    </main>
  );
}
