import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Users, TrendingUp, Heart, Share2, Search, Plus } from "lucide-react"

export default function CommunityPage() {
  const discussions = [
    {
      id: 1,
      title: "Traditional vs Modern: Finding the Balance in Pottery",
      titleHi: "पारंपरिक बनाम आधुनिक: मिट्टी के बर्तनों में संतुलन खोजना",
      author: "Rajesh Kumar",
      authorHi: "राजेश कुमार",
      avatar: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      craft: "Pottery",
      replies: 23,
      likes: 45,
      timeAgo: "2 hours ago",
      preview:
        "How do we preserve traditional techniques while appealing to modern customers? I've been experimenting with...",
      previewHi: "आधुनिक ग्राहकों को आकर्षित करते हुए पारंपरिक तकनीकों को कैसे संरक्षित करें?",
      tags: ["pottery", "tradition", "modern-design"],
    },
    {
      id: 2,
      title: "Sustainable Materials in Handloom Weaving",
      titleHi: "हथकरघा बुनाई में टिकाऊ सामग्री",
      author: "Meera Devi",
      authorHi: "मीरा देवी",
      avatar: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
      craft: "Handloom",
      replies: 18,
      likes: 32,
      timeAgo: "5 hours ago",
      preview: "Exploring eco-friendly dyes and organic cotton for our traditional weaving practices...",
      previewHi: "हमारी पारंपरिक बुनाई प्रथाओं के लिए पर्यावरण-अनुकूल रंग और जैविक कपास की खोज...",
      tags: ["sustainability", "handloom", "eco-friendly"],
    },
    {
      id: 3,
      title: "Marketing Handmade Products Online",
      titleHi: "हस्तनिर्मित उत्पादों का ऑनलाइन विपणन",
      author: "Priya Sharma",
      authorHi: "प्रिया शर्मा",
      avatar: "/indian-woman-doing-chikankari-embroidery.jpg",
      craft: "Embroidery",
      replies: 31,
      likes: 67,
      timeAgo: "1 day ago",
      preview: "Tips and strategies for showcasing our beautiful Chikankari work to reach more customers...",
      previewHi: "अधिक ग्राहकों तक पहुंचने के लिए हमारे सुंदर चिकनकारी काम को प्रदर्शित करने के लिए सुझाव...",
      tags: ["marketing", "online-sales", "chikankari"],
    },
  ]

  const events = [
    {
      id: 1,
      title: "Virtual Craft Fair 2024",
      titleHi: "वर्चुअल शिल्प मेला 2024",
      date: "March 15-17, 2024",
      participants: 150,
      type: "Virtual Event",
      image: "/craft-fair-banner.jpg",
    },
    {
      id: 2,
      title: "Pottery Workshop Series",
      titleHi: "मिट्टी के बर्तन कार्यशाला श्रृंखला",
      date: "March 20, 2024",
      participants: 25,
      type: "Workshop",
      image: "/pottery-workshop-with-clay-pots.jpg",
    },
  ]

  const achievements = [
    {
      artisan: "Rajesh Kumar",
      artisanHi: "राजेश कुमार",
      achievement: "Completed 100 orders this month!",
      achievementHi: "इस महीने 100 ऑर्डर पूरे किए!",
      avatar: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      timeAgo: "1 day ago",
    },
    {
      artisan: "Meera Devi",
      artisanHi: "मीरा देवी",
      achievement: "Featured in National Geographic",
      achievementHi: "नेशनल ज्योग्राफिक में फीचर किया गया",
      avatar: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
      timeAgo: "3 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Community Hub</h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Connect, learn, and grow with fellow artisans and craft enthusiasts from across India.
            </p>
            <p className="text-base text-muted-foreground/80 text-pretty max-w-2xl mx-auto">
              साथी कारीगरों और शिल्प प्रेमियों के साथ जुड़ें, सीखें और बढ़ें।
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="discussions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="discussions" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search discussions..." className="pl-10" />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Start Discussion
              </Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={discussion.avatar || "/placeholder.svg"} alt={discussion.author} />
                        <AvatarFallback>
                          {discussion.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer">
                            {discussion.title}
                          </h3>
                          <p className="text-sm text-muted-foreground/80">{discussion.titleHi}</p>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{discussion.author}</span>
                          <span>•</span>
                          <Badge variant="secondary" className="text-xs">
                            {discussion.craft}
                          </Badge>
                          <span>•</span>
                          <span>{discussion.timeAgo}</span>
                        </div>

                        <p className="text-muted-foreground">{discussion.preview}</p>
                        <p className="text-sm text-muted-foreground/80">{discussion.previewHi}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {discussion.replies}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                              <Heart className="h-4 w-4 mr-1" />
                              {discussion.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                              <Share2 className="h-4 w-4 mr-1" />
                              Share
                            </Button>
                          </div>

                          <div className="flex gap-2">
                            {discussion.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground">{event.titleHi}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{event.type}</Badge>
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.participants} participants</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Join Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Community Achievements</h2>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={achievement.avatar || "/placeholder.svg"} alt={achievement.artisan} />
                        <AvatarFallback>
                          {achievement.artisan
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{achievement.artisan}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{achievement.timeAgo}</span>
                        </div>
                        <p className="text-foreground">{achievement.achievement}</p>
                        <p className="text-sm text-muted-foreground/80">{achievement.achievementHi}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Community Analytics</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">2,847</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">156</div>
                  <p className="text-xs text-muted-foreground">+8% from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Events This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">23</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Workshop Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">489</div>
                  <p className="text-xs text-muted-foreground">+22% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Popular Craft Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { craft: "Pottery", craftHi: "मिट्टी के बर्तन", percentage: 35 },
                    { craft: "Handloom", craftHi: "हथकरघा", percentage: 28 },
                    { craft: "Wood Carving", craftHi: "लकड़ी की नक्काशी", percentage: 22 },
                    { craft: "Embroidery", craftHi: "कढ़ाई", percentage: 15 },
                  ].map((item) => (
                    <div key={item.craft} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">
                          {item.craft} / {item.craftHi}
                        </span>
                        <span className="text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
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
