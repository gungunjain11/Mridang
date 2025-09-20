import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Users, Truck, CreditCard, Shield, BookOpen, Video, FileText, ArrowRight } from "lucide-react"

export function SupportResources() {
  const categories = [
    {
      title: "Orders & Shopping",
      titleHi: "ऑर्डर और खरीदारी",
      icon: ShoppingBag,
      color: "bg-blue-500",
      articles: 12,
      topics: ["Placing Orders", "Order Tracking", "Cancellations", "Returns"],
    },
    {
      title: "Account & Profile",
      titleHi: "खाता और प्रोफ़ाइल",
      icon: Users,
      color: "bg-green-500",
      articles: 8,
      topics: ["Account Setup", "Profile Management", "Password Reset", "Privacy Settings"],
    },
    {
      title: "Shipping & Delivery",
      titleHi: "शिपिंग और डिलीवरी",
      icon: Truck,
      color: "bg-orange-500",
      articles: 10,
      topics: ["Delivery Times", "Shipping Costs", "International Shipping", "Tracking"],
    },
    {
      title: "Payments & Billing",
      titleHi: "भुगतान और बिलिंग",
      icon: CreditCard,
      color: "bg-purple-500",
      articles: 9,
      topics: ["Payment Methods", "Billing Issues", "Refunds", "Invoices"],
    },
    {
      title: "Product Quality",
      titleHi: "उत्पाद गुणवत्ता",
      icon: Shield,
      color: "bg-red-500",
      articles: 6,
      topics: ["Authenticity", "Quality Assurance", "Defects", "Warranties"],
    },
    {
      title: "Artisan Support",
      titleHi: "कारीगर सहायता",
      icon: Users,
      color: "bg-indigo-500",
      articles: 15,
      topics: ["Seller Registration", "Product Listing", "Commission", "Analytics"],
    },
  ]

  const quickLinks = [
    {
      title: "Getting Started Guide",
      titleHi: "शुरुआती गाइड",
      icon: BookOpen,
      description: "Complete guide for new users",
      badge: "Popular",
    },
    {
      title: "Video Tutorials",
      titleHi: "वीडियो ट्यूटोरियल",
      icon: Video,
      description: "Step-by-step video guides",
      badge: "New",
    },
    {
      title: "Terms & Policies",
      titleHi: "नियम और नीतियां",
      icon: FileText,
      description: "Legal documents and policies",
      badge: null,
    },
  ]

  return (
    <div className="space-y-12">
      {/* Support Categories */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
          <p className="text-muted-foreground">श्रेणी के अनुसार ब्राउज़ करें</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {category.articles} articles
                  </Badge>
                </div>
                <CardTitle className="text-card-foreground">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.titleHi}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{topic}</span>
                      <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Quick Links</h2>
          <p className="text-muted-foreground">त्वरित लिंक</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  {link.badge && <Badge className="bg-accent text-accent-foreground">{link.badge}</Badge>}
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">{link.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{link.titleHi}</p>
                <p className="text-sm text-muted-foreground">{link.description}</p>
                <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto text-primary hover:text-primary/80">
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
