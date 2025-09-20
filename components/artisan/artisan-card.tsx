import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ShoppingBag, CheckCircle } from "lucide-react"

interface ArtisanCardProps {
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
    productCount: number
    verified: boolean
  }
}

export function ArtisanCard({ artisan }: ArtisanCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden">
      <CardContent className="p-0">
        {/* Cover Image */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={artisan.coverImage || "/placeholder.svg"}
            alt={`${artisan.name}'s workshop`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-accent text-accent-foreground">{artisan.craft}</Badge>
          </div>
          {artisan.verified && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Verified
              </Badge>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border">
              <img
                src={artisan.image || "/placeholder.svg"}
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-card-foreground truncate">{artisan.name}</h3>
                  <p className="text-sm text-muted-foreground">{artisan.nameHi}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-card-foreground">{artisan.rating}</span>
                  <span className="text-xs text-muted-foreground">({artisan.reviewCount})</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{artisan.location}</span>
            </div>
            <p className="text-sm text-card-foreground text-pretty line-clamp-2">{artisan.story}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {artisan.specialties.slice(0, 2).map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                {specialty}
              </Badge>
            ))}
            {artisan.specialties.length > 2 && (
              <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                +{artisan.specialties.length - 2} more
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{artisan.experience} experience</span>
            <span>{artisan.productCount} products</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-border text-card-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <Link href={`/artisans/${artisan.id}`}>View Profile</Link>
            </Button>
            <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href={`/artisans/${artisan.id}/shop`}>
                <ShoppingBag className="h-4 w-4 mr-1" />
                Shop
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
