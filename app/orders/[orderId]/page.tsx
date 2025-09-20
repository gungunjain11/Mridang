import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Package, Truck, MapPin, Phone, Mail, Calendar, CreditCard, Star } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in real app this would come from database
const orderData = {
  "ORD-2024-001": {
    id: "ORD-2024-001",
    product: {
      name: "Terracotta Vase",
      nameHi: "टेराकोटा फूलदान",
      image: "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
      price: "₹1,500",
      quantity: 1,
    },
    artisan: {
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      avatar: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      location: "Khurja, Uttar Pradesh",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@mridang.com",
    },
    status: "delivered",
    statusHi: "वितरित",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-20",
    paymentMethod: "UPI",
    transactionId: "TXN123456789",
    shippingAddress: {
      name: "Ankit Kumar",
      address: "123, Green Park Extension",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110016",
      phone: "+91 98765 43210",
    },
    tracking: [
      {
        status: "Order Placed",
        statusHi: "ऑर्डर दिया गया",
        date: "2024-01-15",
        time: "10:30 AM",
        completed: true,
        description: "Your order has been placed successfully",
      },
      {
        status: "Order Confirmed",
        statusHi: "ऑर्डर पुष्ट",
        date: "2024-01-16",
        time: "2:15 PM",
        completed: true,
        description: "Artisan has confirmed your order",
      },
      {
        status: "In Production",
        statusHi: "उत्पादन में",
        date: "2024-01-17",
        time: "9:00 AM",
        completed: true,
        description: "Your item is being crafted with care",
      },
      {
        status: "Shipped",
        statusHi: "भेजा गया",
        date: "2024-01-18",
        time: "4:30 PM",
        completed: true,
        description: "Package dispatched from Khurja",
      },
      {
        status: "Out for Delivery",
        statusHi: "डिलीवरी के लिए निकला",
        date: "2024-01-20",
        time: "8:00 AM",
        completed: true,
        description: "Package is out for delivery",
      },
      {
        status: "Delivered",
        statusHi: "वितरित",
        date: "2024-01-20",
        time: "2:45 PM",
        completed: true,
        description: "Package delivered successfully",
      },
    ],
  },
}

interface PageProps {
  params: {
    orderId: string
  }
}

export default function OrderDetailPage({ params }: PageProps) {
  const order = orderData[params.orderId as keyof typeof orderData]

  if (!order) {
    notFound()
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "shipped":
      case "out for delivery":
        return <Truck className="h-5 w-5 text-blue-600" />
      case "in production":
        return <Package className="h-5 w-5 text-orange-600" />
      default:
        return <div className="h-2 w-2 rounded-full bg-primary" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Order Details</h1>
              <p className="text-muted-foreground">Order ID: {order.id}</p>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-3 py-1">
              <CheckCircle className="h-4 w-4 mr-1" />
              {order.status}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Details */}
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={order.product.image || "/placeholder.svg"}
                      alt={order.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{order.product.name}</h3>
                    <p className="text-sm text-muted-foreground">{order.product.nameHi}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-muted-foreground">Quantity: {order.product.quantity}</span>
                      <span className="text-lg font-bold text-foreground">{order.product.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Order Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.tracking.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        {getStatusIcon(step.status)}
                        {index < order.tracking.length - 1 && <div className="w-px h-8 bg-border mt-2" />}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-foreground">{step.status}</h4>
                          <div className="text-right">
                            <div className="text-sm font-medium text-foreground">{step.date}</div>
                            <div className="text-xs text-muted-foreground">{step.time}</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.statusHi}</p>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Artisan Details */}
            <Card>
              <CardHeader>
                <CardTitle>Artisan Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={order.artisan.avatar || "/placeholder.svg"} alt={order.artisan.name} />
                    <AvatarFallback>
                      {order.artisan.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{order.artisan.name}</h3>
                    <p className="text-sm text-muted-foreground">{order.artisan.nameHi}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{order.artisan.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Order Date</div>
                    <div className="text-sm text-muted-foreground">{order.orderDate}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Delivery Date</div>
                    <div className="text-sm text-muted-foreground">{order.deliveryDate}</div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Payment Method</div>
                    <div className="text-sm text-muted-foreground">{order.paymentMethod}</div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">Transaction ID: {order.transactionId}</div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Total Amount</span>
                  <span className="text-lg font-bold text-foreground">{order.product.price}</span>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-foreground">{order.shippingAddress.name}</div>
                  <div className="text-muted-foreground">{order.shippingAddress.address}</div>
                  <div className="text-muted-foreground">
                    {order.shippingAddress.city}, {order.shippingAddress.state}
                  </div>
                  <div className="text-muted-foreground">{order.shippingAddress.pincode}</div>
                  <div className="text-muted-foreground">{order.shippingAddress.phone}</div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              {order.status === "delivered" && (
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Star className="h-4 w-4 mr-2" />
                  Write Review
                </Button>
              )}
              <Button variant="outline" className="w-full bg-transparent">
                Download Invoice
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Need Help?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
