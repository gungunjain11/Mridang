"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { Heart, ShoppingCart, Star } from "lucide-react"

export function WishlistTab() {
  const { wishlist, removeFromWishlist, addToCart } = useCartStore()

  const handleAddToCart = (item: any) => {
    addToCart(item)
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(item.id)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">My Wishlist</h2>
        <Badge variant="secondary" className="text-sm">
          {wishlist.length} items
        </Badge>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground mb-4">Start adding items you love to keep track of them!</p>
          <Button asChild>
            <Link href="/shop">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                </button>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.nameHi}</p>
                  <p className="text-sm text-muted-foreground">by {item.artisan.name}</p>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{item.rating}</span>
                    <span className="text-sm text-muted-foreground">({item.reviewCount})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">₹{item.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => handleAddToCart(item)}
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => removeFromWishlist(item.id)}>
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}
