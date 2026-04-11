export default function Footer() {
  return (
    <footer
      className="flex justify-center items-center"
      style={{ background: "var(--color-dark)", height: "138px" }}
    >
      <p
        className="text-base"
        style={{ color: "white", fontFamily: "var(--font-body)" }}
      >
        Copyright © 2025 – Les Petits Plats
      </p>
    </footer>
  );
}