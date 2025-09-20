"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Star,
  MapPin,
  Calendar,
  ShoppingBag,
  MessageCircle,
  Share2,
  Heart,
  CheckCircle,
  Award,
  TrendingUp,
  Clock,
  IndianRupee,
} from "lucide-react"

interface ArtisanProfileProps {
  artisan: {
    id: string
    name: string
    nameHi: string
    craft: string
    craftHi: string
    location: string
    locationHi: string
    rating: number
    reviewCount: number
    experience: string
    image: string
    coverImage: string
    story: string
    storyHi: string
    specialties: string[]
    achievements: string[]
    philosophy: string
    philosophyHi: string
    productCount: number
    verified: boolean
    joinedDate: string
    totalSales: number
    gallery: string[]
    workshops: Array<{
      title: string
      titleHi: string
      duration: string
      price: string
      description: string
    }>
    reviews: Array<{
      name: string
      rating: number
      comment: string
      date: string
    }>
  }
}

export function ArtisanProfile({ artisan }: ArtisanProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const stats = [
    { label: "Products", value: artisan.productCount, icon: ShoppingBag },
    { label: "Sales", value: artisan.totalSales, icon: TrendingUp },
    { label: "Reviews", value: artisan.reviewCount, icon: Star },
    { label: "Experience", value: artisan.experience, icon: Clock },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`${artisan.name}'s workshop`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Profile Header */}
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{artisan.name}</h1>
                <p className="text-lg opacity-90 mb-2">{artisan.nameHi}</p>
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
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href={`/artisans/${artisan.id}/shop`}>
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Shop Products
                    </Link>
                  </Button>
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="workshops">Workshops</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="space-y-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">My Journey</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground text-pretty leading-relaxed">{artisan.story}</p>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{artisan.storyHi}</p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-lg italic text-card-foreground border-l-4 border-primary pl-4">
                      "{artisan.philosophy}"
                    </blockquote>
                    <p className="text-muted-foreground italic">"{artisan.philosophyHi}"</p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {artisan.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2 text-card-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Craft Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={artisan.gallery[selectedImage] || "/placeholder.svg"}
                          alt={`Gallery image ${selectedImage + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {artisan.gallery.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                              selectedImage === index ? "border-primary" : "border-border"
                            }`}
                          >
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Gallery thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="workshops" className="space-y-6">
                <div className="grid gap-6">
                  {artisan.workshops.map((workshop, index) => (
                    <Card key={index} className="border-border bg-card">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-card-foreground">{workshop.title}</h3>
                            <p className="text-muted-foreground">{workshop.titleHi}</p>
                            <p className="text-card-foreground">{workshop.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {workshop.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <IndianRupee className="h-4 w-4" />
                                {workshop.price}
                              </div>
                            </div>
                          </div>
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Workshop
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-4">
                  {artisan.reviews.map((review, index) => (
                    <Card key={index} className="border-border bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-card-foreground">{review.comment}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center space-y-2">
                      <stat.icon className="h-6 w-6 mx-auto text-primary" />
                      <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href={`/artisans/${artisan.id}/shop`}>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    View All Products
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-border text-card-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Workshop
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-border text-card-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
