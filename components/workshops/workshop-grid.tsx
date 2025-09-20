"use client"
import { WorkshopCard } from "./workshop-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function WorkshopGrid() {
  const workshops = [
    {
      id: "pottery-basics-rajesh",
      title: "Introduction to Traditional Pottery",
      titleHi: "पारंपरिक मिट्टी के बर्तन का परिचय",
      description: "Learn the ancient art of pottery from master craftsman Rajesh Kumar",
      artisan: {
        name: "Rajesh Kumar",
        nameHi: "राजेश कुमार",
        image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
        location: "Khurja, UP",
        rating: 4.9,
        verified: true,
      },
      image: "/pottery-workshop-with-clay-pots-and-pottery-wheel-.jpg",
      category: "Pottery",
      categoryHi: "मिट्टी के बर्तन",
      duration: "4 hours",
      price: 2500,
      originalPrice: 3000,
      difficulty: "Beginner",
      difficultyHi: "शुरुआती",
      rating: 4.8,
      reviewCount: 34,
      maxParticipants: 8,
      nextDate: "2024-02-15",
      spotsLeft: 3,
    },
    {
      id: "weaving-silk-meera",
      title: "Banarasi Silk Weaving Workshop",
      titleHi: "बनारसी रेशम बुनाई कार्यशाला",
      description: "Master the intricate art of Banarasi silk weaving with traditional techniques",
      artisan: {
        name: "Meera Devi",
        nameHi: "मीरा देवी",
        image: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
        location: "Varanasi, UP",
        rating: 4.8,
        verified: true,
      },
      image: "/traditional-handloom-weaving-setup-with-silk-threa.jpg",
      category: "Weaving",
      categoryHi: "बुनाई",
      duration: "6 hours",
      price: 4500,
      originalPrice: 5500,
      difficulty: "Intermediate",
      difficultyHi: "मध्यम",
      rating: 4.9,
      reviewCount: 28,
      maxParticipants: 6,
      nextDate: "2024-02-18",
      spotsLeft: 2,
    },
    {
      id: "woodcarving-arjun",
      title: "Traditional Wood Carving Techniques",
      titleHi: "पारंपरिक लकड़ी नक्काशी तकनीक",
      description: "Learn intricate wood carving patterns and create beautiful sculptures",
      artisan: {
        name: "Arjun Singh",
        nameHi: "अर्जुन सिंह",
        image: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
        location: "Saharanpur, UP",
        rating: 4.9,
        verified: true,
      },
      image: "/wood-carving-workshop-with-traditional-tools-and-w.jpg",
      category: "Wood Work",
      categoryHi: "लकड़ी का काम",
      duration: "5 hours",
      price: 3200,
      originalPrice: 4000,
      difficulty: "Intermediate",
      difficultyHi: "मध्यम",
      rating: 4.7,
      reviewCount: 22,
      maxParticipants: 10,
      nextDate: "2024-02-20",
      spotsLeft: 5,
    },
    {
      id: "embroidery-chikankari",
      title: "Chikankari Embroidery Masterclass",
      titleHi: "चिकनकारी कढ़ाई मास्टरक्लास",
      description: "Discover the delicate art of Lucknow's famous Chikankari embroidery",
      artisan: {
        name: "Priya Sharma",
        nameHi: "प्रिया शर्मा",
        image: "/indian-woman-doing-chikankari-embroidery-tradition.jpg",
        location: "Lucknow, UP",
        rating: 4.7,
        verified: true,
      },
      image: "/chikankari-embroidery-workshop-with-traditional-pa.jpg",
      category: "Embroidery",
      categoryHi: "कढ़ाई",
      duration: "3 hours",
      price: 1800,
      originalPrice: 2200,
      difficulty: "Beginner",
      difficultyHi: "शुरुआती",
      rating: 4.6,
      reviewCount: 19,
      maxParticipants: 12,
      nextDate: "2024-02-22",
      spotsLeft: 8,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Search and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search workshops..." className="pl-10 bg-input border-border text-foreground" />
        </div>

        <Select defaultValue="upcoming">
          <SelectTrigger className="w-48 bg-input border-border text-foreground">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="upcoming">Upcoming Dates</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="duration">Duration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Available Workshops</h2>
          <p className="text-muted-foreground">Showing {workshops.length} workshops</p>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button
          variant="outline"
          size="lg"
          className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          Load More Workshops
        </Button>
      </div>
    </div>
  )
}
