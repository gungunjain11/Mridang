"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { BookingForm } from "./booking-form"
import {
  Star,
  Clock,
  Users,
  MapPin,
  Heart,
  Share2,
  CheckCircle,
  IndianRupee,
  Globe,
  Award,
  AlertCircle,
  Check,
} from "lucide-react"

interface WorkshopDetailProps {
  workshop: {
    id: string
    title: string
    titleHi: string
    description: string
    descriptionHi: string
    artisan: {
      id: string
      name: string
      nameHi: string
      image: string
      location: string
      rating: number
      experience: string
      verified: boolean
    }
    images: string[]
    category: string
    categoryHi: string
    duration: string
    price: number
    originalPrice: number
    maxParticipants: number
    difficulty: string
    difficultyHi: string
    rating: number
    reviewCount: number
    language: string
    languageHi: string
    includes: string[]
    includesHi: string[]
    schedule: Array<{
      time: string
      activity: string
      activityHi: string
    }>
    requirements: string[]
    requirementsHi: string[]
    availableDates: Array<{
      date: string
      time: string
      spots: number
    }>
    location: {
      name: string
      address: string
      coordinates: { lat: number; lng: number }
    }
    cancellationPolicy: string
    reviews: Array<{
      name: string
      rating: number
      comment: string
      date: string
      image?: string
    }>
  }
}

export function WorkshopDetail({ workshop }: WorkshopDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const discount = Math.round(((workshop.originalPrice - workshop.price) / workshop.originalPrice) * 100)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-lg border border-border">
              <img
                src={workshop.images[selectedImage] || "/placeholder.svg"}
                alt={workshop.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {workshop.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video overflow-hidden rounded border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Workshop ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Workshop Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-accent text-accent-foreground">
                  {workshop.category} • {workshop.categoryHi}
                </Badge>
                <Badge className="bg-primary text-primary-foreground">{discount}% OFF</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground text-balance mb-2">{workshop.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{workshop.titleHi}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">{workshop.rating}</span>
                  <span className="text-muted-foreground">({workshop.reviewCount} reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {workshop.difficulty} • {workshop.difficultyHi}
                </Badge>
              </div>
            </div>

            {/* Artisan Info */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={workshop.artisan.image || "/placeholder.svg"} alt={workshop.artisan.name} />
                    <AvatarFallback className="text-lg">{workshop.artisan.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-card-foreground">{workshop.artisan.name}</h3>
                      {workshop.artisan.verified && <CheckCircle className="h-5 w-5 text-primary" />}
                    </div>
                    <p className="text-muted-foreground mb-1">{workshop.artisan.nameHi}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{workshop.artisan.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{workshop.artisan.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{workshop.artisan.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/artisans/${workshop.artisan.id}`}>View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Workshop Details Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">About This Workshop</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground leading-relaxed">{workshop.description}</p>
                    <Separator />
                    <p className="text-muted-foreground leading-relaxed">{workshop.descriptionHi}</p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        {workshop.includes.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span className="text-card-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {workshop.includesHi.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="mt-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Workshop Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {workshop.schedule.map((item, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/20">
                          <div className="text-sm font-medium text-primary min-w-20">{item.time}</div>
                          <div className="flex-1">
                            <div className="font-medium text-card-foreground">{item.activity}</div>
                            <div className="text-sm text-muted-foreground">{item.activityHi}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="mt-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Requirements & Preparation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-card-foreground">Requirements</h4>
                        {workshop.requirements.map((req, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-card-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-muted-foreground">आवश्यकताएं</h4>
                        {workshop.requirementsHi.map((req, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-muted-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {workshop.reviews.map((review, index) => (
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
                            {review.image && (
                              <div className="mt-3">
                                <img
                                  src={review.image || "/placeholder.svg"}
                                  alt="Review"
                                  className="w-32 h-32 object-cover rounded-lg"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Price Card */}
            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">{workshop.price.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">
                      ₹{workshop.originalPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-600 font-medium">Save {discount}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Max {workshop.maxParticipants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>{workshop.language}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>In-person</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book Workshop
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Dates */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Available Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workshop.availableDates.map((date, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/20 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-card-foreground">{formatDate(date.date)}</div>
                      <div className="text-sm text-muted-foreground">{date.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-card-foreground">{date.spots} spots</div>
                      <div className="text-xs text-muted-foreground">available</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">{workshop.location.name}</h4>
                  <p className="text-sm text-muted-foreground">{workshop.location.address}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View on Map
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{workshop.cancellationPolicy}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && <BookingForm workshop={workshop} onClose={() => setShowBookingForm(false)} />}
    </div>
  )
}
