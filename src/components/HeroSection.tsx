import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
            Buy & Sell Within
            <br />
            <span className="text-accent">NUTM Campus</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
            The trusted marketplace for NUTM students. Find great deals on electronics,
            books, fashion, and services — all from fellow students.
          </p>

          {/* Search */}
          <div className="flex gap-2 max-w-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="What are you looking for?"
                className="pl-11 h-12 bg-card border-0 text-foreground placeholder:text-muted-foreground shadow-lg"
              />
            </div>
            <Button size="lg" className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Search
            </Button>
          </div>

          <div className="flex gap-3 mt-5 flex-wrap">
            {["Electronics", "Books", "Fashion", "Services"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full cursor-pointer hover:bg-primary-foreground/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
