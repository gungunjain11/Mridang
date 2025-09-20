"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Heart, MessageCircle, Share2, MapPin } from "lucide-react"

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

interface StoryViewerProps {
  story: Story
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function StoryViewer({ story, onClose, onNext, onPrevious }: StoryViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrevious()
      if (e.key === "ArrowRight") onNext()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [onClose, onNext, onPrevious])

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
            <div>
              <h2 className="text-white font-semibold">{story.title}</h2>
              <p className="text-white/80 text-sm">
                {story.artisan} • {story.location}
              </p>
            </div>
          </div>
          <Badge className="bg-white/20 text-white border-0">{story.craft}</Badge>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Video Container */}
      <div className="flex items-center justify-center h-full">
        <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-black">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${story.youtubeId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
            title={story.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Bottom Info Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <div className="max-w-md mx-auto space-y-4">
          {/* Story Info */}
          <div className="text-white space-y-2">
            <h3 className="font-semibold text-lg">{story.title}</h3>
            <p className="text-white/80 text-sm">{story.titleHi}</p>
            <p className="text-white/90 text-sm text-pretty">{story.description}</p>

            {/* Artisan Info */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">{story.artisan.charAt(0)}</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">{story.artisan}</p>
                <div className="flex items-center gap-1 text-white/70 text-xs">
                  <MapPin className="h-3 w-3" />
                  <span>{story.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-white/70 text-sm">
              {story.views} views • {story.likes} likes
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
