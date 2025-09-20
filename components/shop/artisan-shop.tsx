"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProductCard } from "./product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Star,
  MapPin,
  CheckCircle,
  Heart,
  MessageCircle,
  Share2,
  Search,
  TrendingUp,
  ShoppingBag,
  Award,
} from "lucide-react"

interface ArtisanShopProps {
  artisan: {
    id: string
    name: string
    nameHi: string
    craft: string
    craftHi: string
    location: string
    image: string
    coverImage: string
    rating: number
    reviewCount: number
    verified: boolean
  }
  products: Array<{
    id: string
    name: string
    nameHi: string
    price: number
    originalPrice: number
    image: string
    rating: number
    reviewCount: number
    inStock: boolean
    category: string
    tags: string[]
    artisan: {
      name: string
      nameHi: string
      location: string
    }
  }>
  categories: string[]
  totalProducts: number
  totalSales: number
}

export function ArtisanShop({ artisan, products, categories, totalProducts, totalSales }: ArtisanShopProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const stats = [
    { label: "Products", value: totalProducts, icon: ShoppingBag },
    { label: "Sales", value: totalSales, icon: TrendingUp },
    { label: "Rating", value: artisan.rating, icon: Star },
    { label: "Reviews", value: artisan.reviewCount, icon: Award },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Section */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`${artisan.name}'s shop`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white">
                  <AvatarImage src={artisan.image || "/placeholder.svg"} alt={artisan.name} />
                  <AvatarFallback className="text-2xl">{artisan.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {artisan.verified && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Verified
                    </Badge>
                  </div>
                )}
              </div>

              <div className="flex-1 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{artisan.name}'s Shop</h1>
                <p className="text-lg opacity-90 mb-2">{artisan.nameHi} की दुकान</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {artisan.craft} • {artisan.craftHi}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{artisan.rating}</span>
                    <span className="opacity-75">({artisan.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isFollowing ? "fill-current" : ""}`} />
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                    asChild
                  >
                    <Link href={`/artisans/${artisan.id}`}>View Profile</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Shop Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center space-y-2">
                      <stat.icon className="h-6 w-6 mx-auto text-primary" />
                      <div className="text-lg font-bold text-card-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Products ({totalProducts})
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Products */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-10 bg-input border-border text-foreground" />
              </div>

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
            </div>

            {/* Products Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === "all" ? "All Products" : selectedCategory}
                </h2>
                <p className="text-muted-foreground">Showing {products.length} products</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
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
        </div>
      </div>
    </div>
  )
}
