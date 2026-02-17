import { Laptop, Shirt, BookOpen, BedDouble, Smartphone, Wrench, MoreHorizontal } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", icon: Laptop, count: 124 },
  { id: "fashion", name: "Fashion", icon: Shirt, count: 89 },
  { id: "books", name: "Books", icon: BookOpen, count: 67 },
  { id: "hostel-items", name: "Hostel Items", icon: BedDouble, count: 45 },
  { id: "gadgets", name: "Gadgets", icon: Smartphone, count: 78 },
  { id: "services", name: "Services", icon: Wrench, count: 34 },
  { id: "others", name: "Others", icon: MoreHorizontal, count: 56 },
];

export interface Listing {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  condition: "New" | "Used";
  location: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  type: "product" | "service";
  featured: boolean;
  createdAt: string;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "iPhone 13 Pro Max - Excellent Condition",
    price: 350000,
    image: "https://images.unsplash.com/photo-1632661674596-df8be59a8056?w=400&h=300&fit=crop",
    category: "electronics",
    condition: "Used",
    location: "Male Hostel A",
    seller: { name: "Adebayo O.", avatar: "", rating: 4.8 },
    type: "product",
    featured: true,
    createdAt: "2026-02-15",
  },
  {
    id: "2",
    title: "HP Pavilion Laptop 15\" - 16GB RAM",
    price: 280000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    category: "electronics",
    condition: "Used",
    location: "Faculty of Engineering",
    seller: { name: "Chioma E.", avatar: "", rating: 4.5 },
    type: "product",
    featured: true,
    createdAt: "2026-02-14",
  },
  {
    id: "3",
    title: "Calculus Textbook - Stewart 8th Edition",
    price: 5000,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    category: "books",
    condition: "Used",
    location: "Library Block",
    seller: { name: "Fatima M.", avatar: "", rating: 4.9 },
    type: "product",
    featured: false,
    createdAt: "2026-02-13",
  },
  {
    id: "4",
    title: "Standing Fan - Rechargeable",
    price: 18000,
    image: "https://images.unsplash.com/photo-1617375407633-acd67e130e5a?w=400&h=300&fit=crop",
    category: "hostel-items",
    condition: "New",
    location: "Female Hostel B",
    seller: { name: "Grace A.", avatar: "", rating: 4.2 },
    type: "product",
    featured: true,
    createdAt: "2026-02-12",
  },
  {
    id: "5",
    title: "Graphic Design Services",
    price: 0,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    category: "services",
    condition: "New",
    location: "Campus Wide",
    seller: { name: "Emeka N.", avatar: "", rating: 5.0 },
    type: "service",
    featured: true,
    createdAt: "2026-02-11",
  },
  {
    id: "6",
    title: "Nike Air Force 1 - Size 43",
    price: 25000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    category: "fashion",
    condition: "Used",
    location: "Male Hostel C",
    seller: { name: "Tunde K.", avatar: "", rating: 4.6 },
    type: "product",
    featured: false,
    createdAt: "2026-02-10",
  },
  {
    id: "7",
    title: "Samsung Galaxy Buds Pro",
    price: 45000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=300&fit=crop",
    category: "gadgets",
    condition: "New",
    location: "SUG Building",
    seller: { name: "Blessing I.", avatar: "", rating: 4.7 },
    type: "product",
    featured: true,
    createdAt: "2026-02-09",
  },
  {
    id: "8",
    title: "Tutoring - Mathematics & Physics",
    price: 3000,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    category: "services",
    condition: "New",
    location: "Campus Wide",
    seller: { name: "Dr. Yusuf A.", avatar: "", rating: 4.9 },
    type: "service",
    featured: false,
    createdAt: "2026-02-08",
  },
];
