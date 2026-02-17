import { Link, useLocation } from "react-router-dom";
import { Search, Heart, Plus, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-nav border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-lg">N</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:block">
            NUTM <span className="text-primary">Thrift</span>
          </span>
        </Link>

        {/* Search - desktop */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-0 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/listings">Browse</Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/wishlist">
              <Heart className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="w-5 h-5" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/create-listing" className="gap-1">
              <Plus className="w-4 h-4" />
              Sell
            </Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card p-4 animate-fade-in">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="ghost" asChild className="justify-start" onClick={() => setMobileOpen(false)}>
              <Link to="/listings">Browse Listings</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start" onClick={() => setMobileOpen(false)}>
              <Link to="/wishlist">Wishlist</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start" onClick={() => setMobileOpen(false)}>
              <Link to="/profile">My Profile</Link>
            </Button>
            <Button asChild onClick={() => setMobileOpen(false)}>
              <Link to="/create-listing" className="gap-2">
                <Plus className="w-4 h-4" /> Sell Something
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
