"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      titleHi: "लाइव चैट",
      description: "Get instant help from our support team",
      descriptionHi: "हमारी सहायता टीम से तुरंत सहायता प्राप्त करें",
      availability: "Available 24/7",
      availabilityHi: "24/7 उपलब्ध",
      action: "Start Chat",
      color: "bg-green-500",
    },
    {
      icon: Phone,
      title: "Phone Support",
      titleHi: "फोन सहायता",
      description: "Speak directly with our support team",
      descriptionHi: "हमारी सहायता टीम से सीधे बात करें",
      availability: "Mon-Sat, 9 AM - 8 PM",
      availabilityHi: "सोम-शनि, सुबह 9 - रात 8",
      action: "Call Now",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      titleHi: "ईमेल सहायता",
      description: "Send us detailed queries via email",
      descriptionHi: "ईमेल के माध्यम से विस्तृत प्रश्न भेजें",
      availability: "Response within 24 hours",
      availabilityHi: "24 घंटे के भीतर जवाब",
      action: "Send Email",
      color: "bg-purple-500",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      titleHi: "मुख्य कार्यालय",
      details: "123 Craft Street, New Delhi, India - 110001",
      detailsHi: "123 क्राफ्ट स्ट्रीट, नई दिल्ली, भारत - 110001",
    },
    {
      icon: Clock,
      title: "Business Hours",
      titleHi: "व्यावसायिक घंटे",
      details: "Monday - Saturday: 9:00 AM - 8:00 PM",
      detailsHi: "सोमवार - शनिवार: सुबह 9:00 - रात 8:00",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground">संपर्क में रहें</p>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-1">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.titleHi}</p>
              <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
              <p className="text-xs text-muted-foreground/80 mb-4">{method.descriptionHi}</p>
              <Badge variant="outline" className="mb-4">
                {method.availability}
              </Badge>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">{method.action}</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Send us a Message</CardTitle>
            <p className="text-sm text-muted-foreground">हमें एक संदेश भेजें</p>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                <p className="text-sm text-muted-foreground/80">हम 24 घंटे के भीतर आपसे संपर्क करेंगे।</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name / नाम</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email / ईमेल</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category / श्रेणी</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Order Issues</SelectItem>
                      <SelectItem value="product">Product Questions</SelectItem>
                      <SelectItem value="shipping">Shipping & Delivery</SelectItem>
                      <SelectItem value="payment">Payment Issues</SelectItem>
                      <SelectItem value="account">Account Support</SelectItem>
                      <SelectItem value="artisan">Artisan Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject / विषय</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief description of your issue"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / संदेश</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide detailed information about your query..."
                    rows={5}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Office Information */}
        <div className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Office Information</CardTitle>
              <p className="text-sm text-muted-foreground">कार्यालय की जानकारी</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {officeInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{info.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{info.titleHi}</p>
                    <p className="text-sm text-muted-foreground">{info.details}</p>
                    <p className="text-xs text-muted-foreground/80">{info.detailsHi}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-6">
              <h3 className="font-semibold text-card-foreground mb-2">Need Immediate Help?</h3>
              <p className="text-sm text-muted-foreground mb-1">तत्काल सहायता चाहिए?</p>
              <p className="text-sm text-muted-foreground mb-4">
                For urgent issues, please use our live chat or call our support hotline.
              </p>
              <div className="flex gap-3">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
