import { Link } from "react-router-dom";
import { categories } from "@/data/mockData";

const CategoryGrid = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6">Browse Categories</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/listings?category=${cat.id}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-200 border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">{cat.name}</span>
              <span className="text-xs text-muted-foreground">{cat.count} ads</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
