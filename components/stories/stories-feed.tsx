"use client"

import { useState } from "react"
import { StoryCard } from "./story-card"
import { StoryViewer } from "./story-viewer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter } from "lucide-react"

const stories = [
  {
    id: "pottery-master",
    title: "Master Potter at Work",
    titleHi: "मास्टर कुम्हार का काम",
    description:
      "Watch Rajesh Kumar create beautiful terracotta pottery using traditional techniques passed down through generations.",
    descriptionHi: "राजेश कुमार को पारंपरिक तकनीकों का उपयोग करके सुंदर टेराकोटा मिट्टी के बर्तन बनाते देखें।",
    artisan: "Rajesh Kumar",
    artisanHi: "राजेश कुमार",
    craft: "Pottery",
    craftHi: "मिट्टी के बर्तन",
    location: "Khurja, UP",
    locationHi: "खुर्जा, उत्तर प्रदेश",
    youtubeId: "l2EbGgHI8BU",
    thumbnail: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
    views: "12.5K",
    likes: "1.2K",
    duration: "0:45",
    tags: ["pottery", "traditional", "handmade"],
  },
  {
    id: "silk-weaving",
    title: "Banarasi Silk Weaving",
    titleHi: "बनारसी रेशम बुनाई",
    description:
      "Experience the intricate art of Banarasi silk weaving as Meera Devi creates exquisite patterns on her traditional loom.",
    descriptionHi: "मीरा देवी के पारंपरिक करघे पर जटिल बनारसी रेशम बुनाई की कला का अनुभव करें।",
    artisan: "Meera Devi",
    artisanHi: "मीरा देवी",
    craft: "Handloom Weaving",
    craftHi: "हथकरघा बुनाई",
    location: "Varanasi, UP",
    locationHi: "वाराणसी, उत्तर प्रदेश",
    youtubeId: "P0_o5iqiNXc",
    thumbnail: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
    views: "8.7K",
    likes: "892",
    duration: "1:12",
    tags: ["silk", "weaving", "banarasi"],
  },
  {
    id: "wood-carving",
    title: "Intricate Wood Carving",
    titleHi: "जटिल लकड़ी की नक्काशी",
    description:
      "Discover the precision and artistry of Arjun Singh as he carves detailed sculptures from seasoned wood.",
    descriptionHi: "अर्जुन सिंह की सटीकता और कलाकारी को देखें जब वे मौसमी लकड़ी से विस्तृत मूर्तियां तराशते हैं।",
    artisan: "Arjun Singh",
    artisanHi: "अर्जुन सिंह",
    craft: "Wood Carving",
    craftHi: "लकड़ी की नक्काशी",
    location: "Saharanpur, UP",
    locationHi: "सहारनपुर, उत्तर प्रदेश",
    youtubeId: "F_DenNbgfkY",
    thumbnail: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
    views: "15.2K",
    likes: "1.8K",
    duration: "0:58",
    tags: ["woodcarving", "sculpture", "traditional"],
  },
]

export function StoriesFeed() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filteredStories = filter === "all" ? stories : stories.filter((story) => story.tags.includes(filter))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Artisan Stories</h1>
              <p className="text-sm text-muted-foreground">कारीगर की कहानियां</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            <Badge
              variant={filter === "all" ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setFilter("all")}
            >
              All Stories
            </Badge>
            <Badge
              variant={filter === "pottery" ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setFilter("pottery")}
            >
              Pottery
            </Badge>
            <Badge
              variant={filter === "weaving" ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setFilter("weaving")}
            >
              Weaving
            </Badge>
            <Badge
              variant={filter === "woodcarving" ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setFilter("woodcarving")}
            >
              Wood Carving
            </Badge>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} onPlay={() => setSelectedStory(story.id)} />
          ))}
        </div>
      </div>

      {/* Story Viewer Modal */}
      {selectedStory && (
        <StoryViewer
          story={stories.find((s) => s.id === selectedStory)!}
          onClose={() => setSelectedStory(null)}
          onNext={() => {
            const currentIndex = stories.findIndex((s) => s.id === selectedStory)
            const nextIndex = (currentIndex + 1) % stories.length
            setSelectedStory(stories[nextIndex].id)
          }}
          onPrevious={() => {
            const currentIndex = stories.findIndex((s) => s.id === selectedStory)
            const prevIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1
            setSelectedStory(stories[prevIndex].id)
          }}
        />
      )}
    </div>
  )
}
