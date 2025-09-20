"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List } from "lucide-react"

export function ProductGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const products = [
    {
      id: "terracotta-vase-001",
      name: "Handcrafted Terracotta Vase",
      nameHi: "हस्तनिर्मित मिट्टी का फूलदान",
      price: 1299,
      originalPrice: 1599,
      artisan: {
        name: "Rajesh Kumar",
        nameHi: "राजेश कुमार",
        location: "Khurja, UP",
      },
      image: "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
      rating: 4.8,
      reviewCount: 24,
      category: "Pottery",
      tags: ["Handmade", "Traditional"],
      inStock: true,
    },
    {
      id: "silk-dupatta-002",
      name: "Pure Silk Banarasi Dupatta",
      nameHi: "शुद्ध रेशम बनारसी दुपट्टा",
      price: 3499,
      originalPrice: 4299,
      artisan: {
        name: "Meera Devi",
        nameHi: "मीरा देवी",
        location: "Varanasi, UP",
      },
      image: "/elegant-silk-dupatta-with-golden-zari-work-indian-.jpg",
      rating: 4.9,
      reviewCount: 18,
      category: "Textiles",
      tags: ["Silk", "Zari Work"],
      inStock: true,
    },
    {
      id: "wooden-elephant-003",
      name: "Carved Wooden Elephant",
      nameHi: "नक्काशीदार लकड़ी का हाथी",
      price: 2199,
      originalPrice: 2799,
      artisan: {
        name: "Arjun Singh",
        nameHi: "अर्जुन सिंह",
        location: "Saharanpur, UP",
      },
      image: "/intricately-carved-wooden-elephant-sculpture-india.jpg",
      rating: 4.7,
      reviewCount: 31,
      category: "Wood Work",
      tags: ["Carved", "Decorative"],
      inStock: true,
    },
    {
      id: "clay-water-pot-004",
      name: "Traditional Clay Water Pot",
      nameHi: "पारंपरिक मिट्टी का पानी का घड़ा",
      price: 899,
      originalPrice: 1199,
      artisan: {
        name: "Rajesh Kumar",
        nameHi: "राजेश कुमार",
        location: "Khurja, UP",
      },
      image: "/traditional-clay-water-pot-indian-pottery-function.jpg",
      rating: 4.9,
      reviewCount: 15,
      category: "Pottery",
      tags: ["Traditional", "Functional"],
      inStock: true,
    },
    {
      id: "ceramic-bowl-005",
      name: "Decorative Ceramic Bowl",
      nameHi: "सजावटी सिरेमिक कटोरा",
      price: 649,
      originalPrice: 799,
      artisan: {
        name: "Rajesh Kumar",
        nameHi: "राजेश कुमार",
        location: "Khurja, UP",
      },
      image: "/decorative-ceramic-bowl-with-traditional-indian-pa.jpg",
      rating: 4.6,
      reviewCount: 22,
      category: "Pottery",
      tags: ["Decorative", "Patterns"],
      inStock: true,
    },
    {
      id: "clay-figurines-006",
      name: "Handmade Clay Figurines Set",
      nameHi: "हस्तनिर्मित मिट्टी की मूर्तियों का सेट",
      price: 1899,
      originalPrice: 2299,
      artisan: {
        name: "Rajesh Kumar",
        nameHi: "राजेश कुमार",
        location: "Khurja, UP",
      },
      image: "/handmade-clay-figurines-set-indian-traditional-art.jpg",
      rating: 4.8,
      reviewCount: 12,
      category: "Pottery",
      tags: ["Figurines", "Set"],
      inStock: true,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">All Products</h2>
          <p className="text-muted-foreground">Showing {products.length} of 419 products</p>
        </div>

        <div className="flex items-center gap-4">
          <Select defaultValue="featured">
            <SelectTrigger className="w-48 bg-input border-border text-foreground">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center border border-border rounded-md bg-input">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button
          variant="outline"
          size="lg"
          className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          Load More Products
        </Button>
      </div>
    </div>
  )
}
