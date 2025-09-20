"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Gift, Truck, Star, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function PromotionalSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 29,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-red-500 text-white border-0 px-3 py-1">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Flash Sale
                </Badge>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Diwali Mega Sale</h2>
              <p className="text-lg text-gray-600 mb-1">Up to 50% off on selected handcrafted items</p>
              <p className="text-sm text-gray-500">चुनिंदा हस्तनिर्मित वस्तुओं पर 50% तक की छूट</p>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                  <span>⏰</span> Sale ends in:
                </p>
                <div className="flex gap-2">
                  {[
                    { value: timeLeft.days, label: "Days" },
                    { value: timeLeft.hours, label: "Hours" },
                    { value: timeLeft.minutes, label: "Minutes" },
                    { value: timeLeft.seconds, label: "Seconds" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-orange-600 text-white px-3 py-2 rounded-lg font-bold text-lg min-w-[50px]">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Festival Special Card */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 relative">
              <div className="absolute top-4 right-4">
                <Gift className="w-8 h-8 opacity-30" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Festival Special</h3>
                  <p className="text-sm opacity-90">त्योहार विशेष</p>
                </div>
                <div className="text-3xl font-bold">40% OFF</div>
                <div>
                  <p className="text-sm">On all pottery and ceramic items</p>
                  <p className="text-xs opacity-80">सभी मिट्टी के बर्तनों पर</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Code:</span>
                    <code className="bg-white/20 px-2 py-1 rounded text-xs">FESTIVAL40</code>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Free Shipping Card */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 relative">
              <div className="absolute top-4 right-4">
                <Truck className="w-8 h-8 opacity-30" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Free Shipping</h3>
                  <p className="text-sm opacity-90">मुफ्त शिपिंग</p>
                </div>
                <div className="text-3xl font-bold">₹0 Delivery</div>
                <div>
                  <p className="text-sm">On orders above ₹999</p>
                  <p className="text-xs opacity-80">₹999 से अधिक के ऑर्डर पर</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Code:</span>
                    <code className="bg-white/20 px-2 py-1 rounded text-xs">FREESHIP</code>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Artisan Choice Card */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 relative">
              <div className="absolute top-4 right-4">
                <Star className="w-8 h-8 opacity-30" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Artisan Choice</h3>
                  <p className="text-sm opacity-90">कारीगर की पसंद</p>
                </div>
                <div className="text-3xl font-bold">25% OFF</div>
                <div>
                  <p className="text-sm">Handpicked premium collection</p>
                  <p className="text-xs opacity-80">चुनिंदा प्रीमियम संग्रह</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Code:</span>
                    <code className="bg-white/20 px-2 py-1 rounded text-xs">PREMIUM25</code>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
