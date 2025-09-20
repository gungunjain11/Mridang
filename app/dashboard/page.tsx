"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { useAuthStore } from "@/lib/auth-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { WishlistTab } from "@/components/dashboard/wishlist-tab"
import {
  ShoppingBag,
  Calendar,
  Heart,
  Star,
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("orders")
  const [userBookings, setUserBookings] = useState<any[]>([])
  const { user } = useAuthStore()

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab) {
      setActiveTab(tab)
    }
  }, [searchParams.get("tab")]) // Use the actual value instead of the object

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("userBookings") || "[]")
    setUserBookings(bookings)
  }, []) // Only run once on mount

  const recentOrders = [
    {
      id: "ORD-2024-001",
      product: "Terracotta Vase",
      productHi: "टेराकोटा फूलदान",
      artisan: "Rajesh Kumar",
      artisanHi: "राजेश कुमार",
      amount: "₹1,500",
      status: "delivered",
      statusHi: "वितरित",
      date: "2024-01-20",
      image: "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
      tracking: {
        ordered: { date: "2024-01-15", completed: true },
        confirmed: { date: "2024-01-16", completed: true },
        shipped: { date: "2024-01-18", completed: true },
        delivered: { date: "2024-01-20", completed: true },
      },
    },
    {
      id: "ORD-2024-002",
      product: "Banarasi Silk Saree",
      productHi: "बनारसी रेशम साड़ी",
      artisan: "Meera Devi",
      artisanHi: "मीरा देवी",
      amount: "₹8,500",
      status: "shipped",
      statusHi: "भेजा गया",
      date: "2024-01-22",
      image: "/elegant-silk-dupatta-with-golden-zari-work-indian-.jpg",
      tracking: {
        ordered: { date: "2024-01-20", completed: true },
        confirmed: { date: "2024-01-21", completed: true },
        shipped: { date: "2024-01-22", completed: true },
        delivered: { date: "2024-01-25", completed: false },
      },
    },
    {
      id: "ORD-2024-003",
      product: "Wooden Sculpture",
      productHi: "लकड़ी की मूर्ति",
      artisan: "Arjun Singh",
      artisanHi: "अर्जुन सिंह",
      amount: "₹3,200",
      status: "processing",
      statusHi: "प्रसंस्करण",
      date: "2024-01-25",
      image: "/intricate-wooden-sculpture.jpg",
      tracking: {
        ordered: { date: "2024-01-24", completed: true },
        confirmed: { date: "2024-01-25", completed: true },
        shipped: { date: "", completed: false },
        delivered: { date: "", completed: false },
      },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200"
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "pending":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />
      case "shipped":
        return <Truck className="h-4 w-4" />
      case "processing":
        return <Package className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Welcome back, {user?.name?.split(" ")[0] || "User"}!
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Track your orders, manage bookings, and explore your craft journey
              </p>
              <p className="text-base text-muted-foreground/80 text-pretty max-w-2xl mx-auto">
                अपने ऑर्डर ट्रैक करें, बुकिंग प्रबंधित करें, और अपनी शिल्प यात्रा का अन्वेषण करें
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-muted">
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="workshops" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Workshops
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Wishlist
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Profile
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">My Orders</h2>
                <Badge variant="secondary" className="text-sm">
                  {recentOrders.length} orders
                </Badge>
              </div>

              <div className="space-y-6">
                {recentOrders.map((order) => (
                  <Card key={order.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-lg overflow-hidden bg-muted">
                            <img
                              src={order.image || "/placeholder.svg"}
                              alt={order.product}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{order.product}</h3>
                            <p className="text-sm text-muted-foreground">{order.productHi}</p>
                            <p className="text-sm text-muted-foreground">by {order.artisan}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-foreground">{order.amount}</div>
                          <Badge className={`${getStatusColor(order.status)} border`}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Order ID: {order.id}</span>
                          <span>Ordered on {order.date}</span>
                        </div>

                        {/* Order Tracking */}
                        <div className="space-y-3">
                          <h4 className="font-medium text-foreground">Order Tracking</h4>
                          <div className="space-y-3">
                            {Object.entries(order.tracking).map(([step, details], index) => (
                              <div key={step} className="flex items-center gap-3">
                                <div
                                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                                    details.completed ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {details.completed ? (
                                    <CheckCircle className="h-4 w-4" />
                                  ) : (
                                    <div className="h-2 w-2 rounded-full bg-current" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span
                                      className={`text-sm font-medium capitalize ${
                                        details.completed ? "text-foreground" : "text-muted-foreground"
                                      }`}
                                    >
                                      {step}
                                    </span>
                                    {details.date && (
                                      <span className="text-xs text-muted-foreground">{details.date}</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {order.status === "delivered" && (
                            <Button variant="outline" size="sm">
                              Write Review
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            Contact Artisan
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">My Workshops</h2>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Browse Workshops</Button>
              </div>

              <div className="space-y-4">
                {userBookings.length === 0 ? (
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No workshop bookings yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Book your first workshop to start learning traditional crafts!
                    </p>
                    <Button asChild>
                      <a href="/workshops">Browse Workshops</a>
                    </Button>
                  </div>
                ) : (
                  userBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-foreground">{booking.workshopTitle}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>Booking ID: {booking.id}</span>
                              <span>•</span>
                              <span>{new Date(booking.date).toLocaleDateString()}</span>
                              <span>•</span>
                              <span>{booking.time}</span>
                              <span>•</span>
                              <span>{booking.participants} participants</span>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <Badge className={`${getStatusColor(booking.status)} border`}>
                              {getStatusIcon(booking.status)}
                              <span className="ml-1 capitalize">{booking.status}</span>
                            </Badge>
                            <div className="text-lg font-bold text-foreground">₹{booking.amount.toLocaleString()}</div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              {booking.status === "confirmed" && (
                                <Button variant="outline" size="sm">
                                  Join Workshop
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="wishlist" className="space-y-6">
              <WishlistTab />
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">My Profile</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={user?.avatar || "/placeholder.svg"} alt="Profile" />
                        <AvatarFallback>
                          {user?.name
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("") || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{user?.name || "User"}</h3>
                        <p className="text-muted-foreground">
                          {user?.type === "artisan" ? `${user.craftType} Artisan` : "Craft Enthusiast"}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{user?.email || "Not provided"}</span>
                      </div>
                      {user?.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{user.phone}</span>
                        </div>
                      )}
                      {user?.location && (
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{user.location}</span>
                        </div>
                      )}
                    </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Activity Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-2xl font-bold text-foreground">12</div>
                        <div className="text-sm text-muted-foreground">Orders Placed</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-2xl font-bold text-foreground">{userBookings.length}</div>
                        <div className="text-sm text-muted-foreground">Workshops Booked</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-2xl font-bold text-foreground">8</div>
                        <div className="text-sm text-muted-foreground">Reviews Written</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-2xl font-bold text-foreground">15</div>
                        <div className="text-sm text-muted-foreground">Wishlist Items</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Profile Completion</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}
