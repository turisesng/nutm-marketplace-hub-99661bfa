import { Link } from "react-router-dom";
import { Heart, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Listing } from "@/data/mockData";

const formatPrice = (price: number) => {
  if (price === 0) return "Contact for Price";
  return "₦" + price.toLocaleString();
};

const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <Link
      to={`/listing/${listing.id}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 border border-border hover:border-primary/20"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {listing.featured && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs">
            Featured
          </Badge>
        )}
        {listing.type === "service" && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs">
            Service
          </Badge>
        )}
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Heart className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Details */}
      <div className="p-3">
        <p className="text-lg font-bold text-primary mb-1">{formatPrice(listing.price)}</p>
        <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 leading-snug">
          {listing.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {listing.location}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-accent fill-accent" />
            {listing.seller.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
