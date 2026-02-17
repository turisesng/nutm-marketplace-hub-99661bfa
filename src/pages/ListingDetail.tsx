import { useParams, Link } from "react-router-dom";
import { listings } from "@/data/mockData";
import { ArrowLeft, Heart, MapPin, Star, MessageCircle, Share2, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const formatPrice = (price: number) => {
  if (price === 0) return "Contact for Price";
  return "₦" + price.toLocaleString();
};

const ListingDetail = () => {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Listing not found</h2>
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Button variant="ghost" size="sm" asChild className="mb-4 text-muted-foreground">
        <Link to="/">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-xl overflow-hidden bg-muted aspect-[4/3]">
          <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div>
          <div className="flex gap-2 mb-3">
            <Badge variant="secondary">{listing.category}</Badge>
            {listing.type === "service" && <Badge className="bg-primary text-primary-foreground">Service</Badge>}
            <Badge variant="outline">{listing.condition}</Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{listing.title}</h1>

          <p className="text-3xl font-extrabold text-primary mb-4">{formatPrice(listing.price)}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {listing.location}
            </span>
            <span>{listing.createdAt}</span>
          </div>

          {/* Seller card */}
          <div className="bg-secondary rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {listing.seller.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{listing.seller.name}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  {listing.seller.rating} rating
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            <Button size="lg" className="flex-1 gap-2">
              <MessageCircle className="w-5 h-5" /> Chat with Seller
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Heart className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="mt-4 text-muted-foreground gap-1">
            <Flag className="w-4 h-4" /> Report this listing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
