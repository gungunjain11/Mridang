"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/auth-store"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, ShoppingBag, Star, Eye, Heart, MessageCircle, Calendar, Download, Lock } from "lucide-react"

export default function AnalyticsPage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push("/login")
      return
    }

    if (user.type !== "artisan") {
      router.push("/dashboard")
      return
    }
  }, [isAuthenticated, user, router])

  if (!isAuthenticated || !user || user.type !== "artisan") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Access Restricted</h2>
              <p className="text-muted-foreground mb-4">Analytics dashboard is only available for artisan accounts.</p>
              <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const salesData = [
    { month: "Jan", sales: 12500, orders: 45 },
    { month: "Feb", sales: 18200, orders: 67 },
    { month: "Mar", sales: 15800, orders: 58 },
    { month: "Apr", sales: 22100, orders: 78 },
    { month: "May", sales: 19500, orders: 71 },
    { month: "Jun", sales: 25300, orders: 89 },
  ]

  const topProducts = [
    { name: "Terracotta Vase", nameHi: "टेराकोटा फूलदान", sales: 156, revenue: "₹23,400" },
    { name: "Banarasi Silk Saree", nameHi: "बनारसी रेशम साड़ी", sales: 89, revenue: "₹89,000" },
    { name: "Wooden Sculpture", nameHi: "लकड़ी की मूर्ति", sales: 67, revenue: "₹33,500" },
    { name: "Chikankari Kurta", nameHi: "चिकनकारी कुर्ता", sales: 134, revenue: "₹40,200" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Analytics Dashboard</h1>
              <p className="text-lg text-muted-foreground mt-2">Track your performance and grow your craft business</p>
              <p className="text-base text-muted-foreground/80">अपने प्रदर्शन को ट्रैक करें और अपने शिल्प व्यवसाय को बढ़ाएं</p>
              <p className="text-sm text-primary mt-1">
                Welcome, {user.name} • {user.craftType} Artisan
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">₹1,86,500</div>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">408</div>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +8.2% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Profile Views</CardTitle>
                  <Eye className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">2,847</div>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +15.3% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">4.8</div>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +0.2 from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "New order received", item: "Terracotta Vase", time: "2 hours ago", type: "order" },
                    { action: "Workshop booking", item: "Pottery Basics", time: "4 hours ago", type: "workshop" },
                    { action: "Product review", item: "Banarasi Silk Saree", time: "6 hours ago", type: "review" },
                    { action: "Profile view", item: "Your artisan profile", time: "8 hours ago", type: "view" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.item}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">₹25,300</div>
                  <p className="text-xs text-green-600">+18% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Average Order Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">₹457</div>
                  <p className="text-xs text-green-600">+5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">3.2%</div>
                  <p className="text-xs text-green-600">+0.4% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sales Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {salesData.map((data) => (
                    <div key={data.month} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="font-medium text-foreground">{data.month}</span>
                      <div className="text-right">
                        <div className="font-bold text-foreground">₹{data.sales.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{data.orders} orders</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">#{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.nameHi}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground">{product.revenue}</div>
                        <div className="text-xs text-muted-foreground">{product.sales} sales</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Likes</CardTitle>
                  <Heart className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">1,247</div>
                  <p className="text-xs text-green-600">+23% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Comments</CardTitle>
                  <MessageCircle className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">389</div>
                  <p className="text-xs text-green-600">+15% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Workshop Bookings</CardTitle>
                  <Calendar className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">67</div>
                  <p className="text-xs text-green-600">+31% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Followers</CardTitle>
                  <Users className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">892</div>
                  <p className="text-xs text-green-600">+12% this month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "Like", content: "Your pottery collection", time: "2 hours ago", user: "Anita Sharma" },
                    { type: "Comment", content: "Beautiful Chikankari work!", time: "4 hours ago", user: "Ravi Patel" },
                    { type: "Follow", content: "Started following you", time: "6 hours ago", user: "Meera Singh" },
                    { type: "Booking", content: "Booked pottery workshop", time: "8 hours ago", user: "Vikram Kumar" },
                  ].map((engagement, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                      <Badge variant="secondary" className="text-xs">
                        {engagement.type}
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{engagement.content}</p>
                        <p className="text-xs text-muted-foreground">by {engagement.user}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{engagement.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
