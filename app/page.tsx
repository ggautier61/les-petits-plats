import Filters from "@/src/components/Filters/Filters";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import RecipeGrid from "@/src/components/RecipeGrid/RecipeGrid";

 
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Filters />
      <RecipeGrid />
      <Footer />
    </main>
  );
}