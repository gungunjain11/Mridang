"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Users, MapPin, Calendar, Heart, CheckCircle, IndianRupee, AlertCircle } from "lucide-react"

interface WorkshopCardProps {
  workshop: {
    id: string
    title: string
    titleHi: string
    description: string
    artisan: {
      name: string
      nameHi: string
      image: string
      location: string
      rating: number
      verified: boolean
    }
    image: string
    category: string
    categoryHi: string
    duration: string
    price: number
    originalPrice: number
    difficulty: string
    difficultyHi: string
    rating: number
    reviewCount: number
    maxParticipants: number
    nextDate: string
    spotsLeft: number
  }
}

export function WorkshopCard({ workshop }: WorkshopCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discount = Math.round(((workshop.originalPrice - workshop.price) / workshop.originalPrice) * 100)
  const isAlmostFull = workshop.spotsLeft <= 2

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden">
      <CardContent className="p-0">
        {/* Workshop Image */}
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={workshop.image || "/placeholder.svg"}
            alt={workshop.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-accent text-accent-foreground">{discount}% OFF</Badge>
            <Badge className="bg-primary text-primary-foreground">{workshop.category}</Badge>
          </div>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
          {isAlmostFull && (
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-red-500 text-white flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                Only {workshop.spotsLeft} spots left!
              </Badge>
            </div>
          )}
        </div>

        {/* Workshop Info */}
        <div className="p-6 space-y-4">
          {/* Title and Description */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground text-pretty line-clamp-2 mb-1">
              {workshop.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{workshop.titleHi}</p>
            <p className="text-sm text-card-foreground text-pretty line-clamp-2">{workshop.description}</p>
          </div>

          {/* Artisan Info */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={workshop.artisan.image || "/placeholder.svg"} alt={workshop.artisan.name} />
              <AvatarFallback>{workshop.artisan.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <p className="text-sm font-medium text-card-foreground truncate">{workshop.artisan.name}</p>
                {workshop.artisan.verified && <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{workshop.artisan.location}</span>
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{workshop.artisan.rating}</span>
              </div>
            </div>
          </div>

          {/* Workshop Details */}
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
              <Calendar className="h-4 w-4" />
              <span>{formatDate(workshop.nextDate)}</span>
            </div>
            <Badge variant="secondary" className="w-fit bg-secondary text-secondary-foreground">
              {workshop.difficulty}
            </Badge>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-card-foreground">{workshop.rating}</span>
              <span className="text-sm text-muted-foreground">({workshop.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 text-primary" />
                <span className="text-xl font-bold text-primary">{workshop.price.toLocaleString()}</span>
              </div>
              <span className="text-sm text-muted-foreground line-through">
                ₹{workshop.originalPrice.toLocaleString()}
              </span>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href={`/workshops/${workshop.id}`}>Book Now</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
