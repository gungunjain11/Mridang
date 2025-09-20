import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link" // Fixed Link import to use default export
import {
  Star,
  Users,
  ShoppingBag,
  Palette,
  Heart,
  ArrowRight,
  Play,
  MapPin,
  Award,
  TrendingUp,
  User,
} from "lucide-react"

export default function HomePage() {
  const featuredArtisans = [
    {
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      craft: "Pottery",
      craftHi: "मिट्टी के बर्तन",
      location: "Khurja, UP",
      locationHi: "खुर्जा, उत्तर प्रदेश",
      rating: 4.9,
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      story: "Third generation potter preserving ancient techniques",
    },
    {
      name: "Meera Devi",
      nameHi: "मीरा देवी",
      craft: "Handloom Weaving",
      craftHi: "हथकरघा बुनाई",
      location: "Varanasi, UP",
      locationHi: "वाराणसी, उत्तर प्रदेश",
      rating: 4.8,
      image: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
      story: "Master weaver creating exquisite Banarasi silk",
    },
    {
      name: "Arjun Singh",
      nameHi: "अर्जुन सिंह",
      craft: "Wood Carving",
      craftHi: "लकड़ी की नक्काशी",
      location: "Saharanpur, UP",
      locationHi: "सहारनपुर, उत्तर प्रदेश",
      rating: 4.9,
      image: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
      story: "Intricate wooden sculptures with cultural motifs",
    },
  ]

  const featuredProducts = [
    {
      name: "Handcrafted Terracotta Vase",
      nameHi: "हस्तनिर्मित मिट्टी का फूलदान",
      price: "₹1,299",
      originalPrice: "₹1,599",
      artisan: "Rajesh Kumar",
      image: "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
      rating: 4.8,
      reviews: 24,
    },
    {
      name: "Pure Silk Banarasi Dupatta",
      nameHi: "शुद्ध रेशम बनारसी दुपट्टा",
      price: "₹3,499",
      originalPrice: "₹4,299",
      artisan: "Meera Devi",
      image: "/elegant-silk-dupatta-with-golden-zari-work-indian-.jpg",
      rating: 4.9,
      reviews: 18,
    },
    {
      name: "Carved Wooden Elephant",
      nameHi: "नक्काशीदार लकड़ी का हाथी",
      price: "₹2,199",
      originalPrice: "₹2,799",
      artisan: "Arjun Singh",
      image: "/intricately-carved-wooden-elephant-sculpture-india.jpg",
      rating: 4.7,
      reviews: 31,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">AI-Powered Marketplace</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                  Discover Authentic
                  <span className="text-primary block">Indian Crafts</span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                  Connect with local artisans, explore traditional crafts, and support the rich heritage of Indian
                  craftsmanship through our AI-powered platform.
                </p>
                <p className="text-base text-muted-foreground/80 text-pretty max-w-lg">
                  स्थानीय कारीगरों से जुड़ें, पारंपरिक शिल्प का अन्वेषण करें, और हमारे AI-संचालित प्लेटफॉर्म के माध्यम से भारतीय शिल्पकारी की
                  समृद्ध विरासत का समर्थन करें।
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Explore Marketplace
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                  asChild
                >
                  <Link href="/stories">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Stories
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Crafts</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card shadow-2xl">
                <img
                  src="/indian-artisan-working-on-traditional-craft-potter.jpg"
                  alt="Indian artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">10,000+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Meet Our Master Artisans
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover the stories behind the crafts and connect with skilled artisans preserving India's cultural
              heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={artisan.image || "/placeholder.svg"}
                      alt={artisan.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-card-foreground">{artisan.name}</h3>
                        <p className="text-sm text-muted-foreground">{artisan.nameHi}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-card-foreground">{artisan.rating}</span>
                      </div>
                    </div>

                    <div>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        {artisan.craft}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{artisan.craftHi}</p>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{artisan.location}</span>
                    </div>

                    <p className="text-sm text-card-foreground text-pretty">{artisan.story}</p>

                    <Button
                      variant="outline"
                      className="w-full border-border text-card-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Handpicked Treasures</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Explore our curated collection of authentic handcrafted products, each telling a unique story of Indian
              artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground">
                        {Math.round(
                          ((Number.parseInt(product.originalPrice.slice(1)) - Number.parseInt(product.price.slice(1))) /
                            Number.parseInt(product.originalPrice.slice(1))) *
                            100,
                        )}
                        % OFF
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground text-pretty">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.nameHi}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-card-foreground">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                      <p className="text-sm text-muted-foreground">by {product.artisan}</p>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Empowering Artisans with AI
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our platform combines traditional craftsmanship with modern technology to create new opportunities for
              artisans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Community Connect</h3>
              <p className="text-muted-foreground text-pretty">
                Join a vibrant community of artisans and craft enthusiasts sharing knowledge and experiences.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                <Palette className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Skill Workshops</h3>
              <p className="text-muted-foreground text-pretty">
                Learn traditional techniques through hands-on workshops led by master artisans.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Analytics</h3>
              <p className="text-muted-foreground text-pretty">
                Get insights into market trends and optimize your craft business with AI-powered analytics.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality Assured</h3>
              <p className="text-muted-foreground text-pretty">
                Every product is verified for authenticity and quality, ensuring customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
            Whether you're an artisan looking to showcase your craft or a customer seeking authentic handmade products,
            Mridang is your gateway to India's rich cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-card text-card-foreground hover:bg-card/90">
              <User className="mr-2 h-5 w-5" />
              Join
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">म</span>
                </div>
                <span className="text-xl font-bold text-card-foreground">Mridang</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Empowering Indian artisans through AI-powered marketplace solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Marketplace</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Browse Products
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Featured Artisans
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Workshops
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Community
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Support</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Help Center
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Shipping Info
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Returns
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Connect</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    About Us
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Blog
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Careers
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted-foreground hover:text-card-foreground">
                    Press
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mridang. All rights reserved. Made with ❤️ for Indian artisans.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
