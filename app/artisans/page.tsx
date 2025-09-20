import { Navigation } from "@/components/navigation"
import { ArtisanCard } from "@/components/artisan/artisan-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

export default function ArtisansPage() {
  const artisans = [
    {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      craft: "Pottery",
      craftHi: "मिट्टी के बर्तन",
      location: "Khurja, Uttar Pradesh",
      locationHi: "खुर्जा, उत्तर प्रदेश",
      rating: 4.9,
      reviewCount: 127,
      experience: "25+ years",
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      coverImage: "/pottery-workshop-with-clay-pots-and-traditional-to.jpg",
      story: "Third generation potter preserving ancient Khurja pottery techniques",
      storyHi: "खुर्जा मिट्टी के बर्तनों की प्राचीन तकनीकों को संरक्षित करने वाले तीसरी पीढ़ी के कुम्हार",
      specialties: ["Terracotta", "Glazed Pottery", "Traditional Designs"],
      productCount: 45,
      verified: true,
    },
    {
      id: "meera-devi",
      name: "Meera Devi",
      nameHi: "मीरा देवी",
      craft: "Handloom Weaving",
      craftHi: "हथकरघा बुनाई",
      location: "Varanasi, Uttar Pradesh",
      locationHi: "वाराणसी, उत्तर प्रदेश",
      rating: 4.8,
      reviewCount: 89,
      experience: "30+ years",
      image: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
      coverImage: "/traditional-handloom-weaving-setup-with-silk-threa.jpg",
      story: "Master weaver creating exquisite Banarasi silk with traditional motifs",
      storyHi: "पारंपरिक रूपांकनों के साथ उत्कृष्ट बनारसी रेशम बनाने वाली मास्टर बुनकर",
      specialties: ["Banarasi Silk", "Zari Work", "Traditional Motifs"],
      productCount: 32,
      verified: true,
    },
    {
      id: "arjun-singh",
      name: "Arjun Singh",
      nameHi: "अर्जुन सिंह",
      craft: "Wood Carving",
      craftHi: "लकड़ी की नक्काशी",
      location: "Saharanpur, Uttar Pradesh",
      locationHi: "सहारनपुर, उत्तर प्रदेश",
      rating: 4.9,
      reviewCount: 156,
      experience: "20+ years",
      image: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
      coverImage: "/wood-carving-workshop-with-traditional-tools-and-w.jpg",
      story: "Intricate wooden sculptures with cultural motifs and modern designs",
      storyHi: "सांस्कृतिक रूपांकनों और आधुनिक डिजाइनों के साथ जटिल लकड़ी की मूर्तियां",
      specialties: ["Religious Sculptures", "Decorative Items", "Custom Designs"],
      productCount: 67,
      verified: true,
    },
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      nameHi: "प्रिया शर्मा",
      craft: "Embroidery",
      craftHi: "कढ़ाई",
      location: "Lucknow, Uttar Pradesh",
      locationHi: "लखनऊ, उत्तर प्रदेश",
      rating: 4.7,
      reviewCount: 94,
      experience: "15+ years",
      image: "/indian-woman-doing-chikankari-embroidery-tradition.jpg",
      coverImage: "/chikankari-embroidery-workshop-with-traditional-pa.jpg",
      story: "Chikankari embroidery artist preserving Lucknow's heritage craft",
      storyHi: "लखनऊ की विरासत शिल्प को संरक्षित करने वाली चिकनकारी कढ़ाई कलाकार",
      specialties: ["Chikankari", "Hand Embroidery", "Traditional Patterns"],
      productCount: 28,
      verified: true,
    },
  ]

  const craftTypes = [
    "All Crafts",
    "Pottery",
    "Handloom Weaving",
    "Wood Carving",
    "Embroidery",
    "Metal Work",
    "Jewelry Making",
  ]
  const locations = ["All Locations", "Uttar Pradesh", "Rajasthan", "Gujarat", "West Bengal", "Karnataka"]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Meet Our Artisans</h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover the master craftspeople preserving India's rich cultural heritage through their exceptional
              skills and artistry.
            </p>
            <p className="text-base text-muted-foreground/80 text-pretty max-w-2xl mx-auto">
              हमारे कुशल कारीगरों से मिलें जो भारत की समृद्ध सांस्कृतिक विरासत को संरक्षित कर रहे हैं।
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search artisans..." className="pl-10 bg-input border-border text-foreground" />
              </div>

              <Select defaultValue="all-crafts">
                <SelectTrigger className="w-full sm:w-48 bg-input border-border text-foreground">
                  <SelectValue placeholder="Craft Type" />
                </SelectTrigger>
                <SelectContent>
                  {craftTypes.map((craft) => (
                    <SelectItem key={craft} value={craft.toLowerCase().replace(/\s+/g, "-")}>
                      {craft}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all-locations">
                <SelectTrigger className="w-full sm:w-48 bg-input border-border text-foreground">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase().replace(/\s+/g, "-")}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Featured Artisans</h2>
              <p className="text-muted-foreground">Showing {artisans.length} artisans</p>
            </div>

            <Select defaultValue="rating">
              <SelectTrigger className="w-48 bg-input border-border text-foreground">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
                <SelectItem value="products">Most Products</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Load More Artisans
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
