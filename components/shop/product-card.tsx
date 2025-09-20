"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { Star, Heart, ShoppingCart, Eye, MapPin } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    nameHi: string
    price: number
    originalPrice: number
    artisan: {
      name: string
      nameHi: string
      location: string
    }
    image: string
    rating: number
    reviewCount: number
    category: string
    tags: string[]
    inStock: boolean
  }
  viewMode?: "grid" | "list"
}

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCartStore()
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const isWishlisted = isInWishlist(product.id)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    addToCart(product)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsAddingToCart(false)
  }

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-lg transition-all duration-300 border-border bg-card">
        <CardContent className="p-0">
          <div className="flex gap-6">
            <div className="w-48 h-48 relative overflow-hidden rounded-l-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-accent text-accent-foreground">{discount}% OFF</Badge>
              </div>
              <button
                onClick={handleWishlistToggle}
                className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </button>
            </div>

            <div className="flex-1 p-6 space-y-4">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground text-pretty">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.nameHi}</p>
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {product.category}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-card-foreground">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{product.artisan.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">by {product.artisan.name}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {product.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-border text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-card-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                  asChild
                >
                  <Link href={`/shop/${product.id}`}>
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || !product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-accent text-accent-foreground">{discount}% OFF</Badge>
          </div>
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-white/90" asChild>
              <Link href={`/shop/${product.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                Quick View
              </Link>
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground mb-2">
              {product.category}
            </Badge>
            <h3 className="font-semibold text-card-foreground text-pretty line-clamp-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.nameHi}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-card-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
            </div>
            <p className="text-sm text-muted-foreground">by {product.artisan.name}</p>
          </div>

          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-border text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleAddToCart}
            disabled={isAddingToCart || !product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isAddingToCart ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
