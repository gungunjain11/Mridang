"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Heart, Eye, MapPin } from "lucide-react"

interface Story {
  id: string
  title: string
  titleHi: string
  description: string
  descriptionHi: string
  artisan: string
  artisanHi: string
  craft: string
  craftHi: string
  location: string
  locationHi: string
  youtubeId: string
  thumbnail: string
  views: string
  likes: string
  duration: string
  tags: string[]
}

interface StoryCardProps {
  story: Story
  onPlay: () => void
}

export function StoryCard({ story, onPlay }: StoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden">
      <CardContent className="p-0">
        {/* Thumbnail with Play Button */}
        <div className="relative aspect-[9/16] overflow-hidden bg-muted">
          <img
            src={story.thumbnail || "/placeholder.svg"}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="lg" className="rounded-full bg-white/90 text-black hover:bg-white" onClick={onPlay}>
              <Play className="h-6 w-6 ml-1" />
            </Button>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-3 right-3">
            <Badge className="bg-black/70 text-white border-0">{story.duration}</Badge>
          </div>

          {/* Craft Type Badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {story.craft}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-card-foreground text-pretty line-clamp-2">{story.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{story.titleHi}</p>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 text-pretty">{story.description}</p>

          {/* Artisan Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-card-foreground">{story.artisan}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{story.location}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{story.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{story.likes}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onPlay} className="text-primary hover:text-primary/80">
              <Play className="h-4 w-4 mr-1" />
              Watch
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
