"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  MapPin,
  CheckCircle,
} from "lucide-react"

interface ProductDetailProps {
  product: {
    id: string
    name: string
    nameHi: string
    price: number
    originalPrice: number
    discount: number
    artisan: {
      id: string
      name: string
      nameHi: string
      image: string
      location: string
      rating: number
    }
    images: string[]
    category: string
    categoryHi: string
    rating: number
    reviewCount: number
    description: string
    descriptionHi: string
    specifications: Record<string, string>
    inStock: boolean
    stockCount: number
    tags: string[]
    shippingInfo: string
    returnPolicy: string
  }
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border border-border">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                  selectedImage === index ? "border-primary" : "border-border"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="bg-accent text-accent-foreground mb-3">
              {product.category} • {product.categoryHi}
            </Badge>
            <h1 className="text-3xl font-bold text-foreground text-balance mb-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{product.nameHi}</p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-foreground">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
              <Badge className="bg-primary text-primary-foreground">{product.discount}% OFF</Badge>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-xl text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-lg text-green-600 font-medium">
                Save ₹{(product.originalPrice - product.price).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Artisan Info */}
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={product.artisan.image || "/placeholder.svg"} alt={product.artisan.name} />
                  <AvatarFallback>{product.artisan.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-card-foreground">{product.artisan.name}</h3>
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{product.artisan.nameHi}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{product.artisan.location}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/artisans/${product.artisan.id}`}>View Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quantity and Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-md bg-input">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 text-foreground">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={quantity >= product.stockCount}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">
                {product.inStock ? `${product.stockCount} in stock` : "Out of stock"}
              </span>
            </div>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="text-center space-y-2">
              <Truck className="h-6 w-6 mx-auto text-primary" />
              <div className="text-sm">
                <div className="font-medium text-foreground">Free Shipping</div>
                <div className="text-muted-foreground">On orders ₹999+</div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <Shield className="h-6 w-6 mx-auto text-primary" />
              <div className="text-sm">
                <div className="font-medium text-foreground">Authentic</div>
                <div className="text-muted-foreground">Verified artisan</div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <RotateCcw className="h-6 w-6 mx-auto text-primary" />
              <div className="text-sm">
                <div className="font-medium text-foreground">30-Day Returns</div>
                <div className="text-muted-foreground">Easy returns</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-border text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Product Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground leading-relaxed">{product.description}</p>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">{product.descriptionHi}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-card-foreground">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Shipping & Returns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Shipping Information</h4>
                  <p className="text-muted-foreground">{product.shippingInfo}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Return Policy</h4>
                  <p className="text-muted-foreground">{product.returnPolicy}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
