import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-extrabold">N</span>
              </div>
              <span className="font-bold text-lg text-foreground">NUTM Thrift</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The exclusive marketplace for NUTM students.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/listings" className="hover:text-primary transition-colors">Browse</Link>
              <Link to="/create-listing" className="hover:text-primary transition-colors">Sell</Link>
              <Link to="/wishlist" className="hover:text-primary transition-colors">Wishlist</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Categories</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/listings?category=electronics" className="hover:text-primary transition-colors">Electronics</Link>
              <Link to="/listings?category=books" className="hover:text-primary transition-colors">Books</Link>
              <Link to="/listings?category=fashion" className="hover:text-primary transition-colors">Fashion</Link>
              <Link to="/listings?category=services" className="hover:text-primary transition-colors">Services</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Support</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>help@nutmthrift.ng</span>
              <span>NUTM Campus</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © 2026 NUTM Thrift. Built for NUTM students.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
