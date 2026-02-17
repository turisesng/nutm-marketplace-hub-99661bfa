import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredListings = listings.filter((l) => l.featured);
  const recentListings = listings.slice(0, 6);

  return (
    <div>
      <HeroSection />
      <CategoryGrid />

      {/* Featured */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Featured Listings</h2>
            <Button variant="ghost" size="sm" asChild className="text-primary gap-1">
              <Link to="/listings">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recent Listings</h2>
            <Button variant="ghost" size="sm" asChild className="text-primary gap-1">
              <Link to="/listings">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
