"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const categories = [
    { id: "pottery", name: "Pottery", nameHi: "मिट्टी के बर्तन", count: 156 },
    { id: "textiles", name: "Textiles", nameHi: "वस्त्र", count: 89 },
    { id: "woodwork", name: "Wood Work", nameHi: "लकड़ी का काम", count: 67 },
    { id: "jewelry", name: "Jewelry", nameHi: "आभूषण", count: 45 },
    { id: "metalwork", name: "Metal Work", nameHi: "धातु का काम", count: 34 },
    { id: "embroidery", name: "Embroidery", nameHi: "कढ़ाई", count: 28 },
  ]

  const locations = [
    { id: "uttar-pradesh", name: "Uttar Pradesh", count: 234 },
    { id: "rajasthan", name: "Rajasthan", count: 156 },
    { id: "gujarat", name: "Gujarat", count: 89 },
    { id: "west-bengal", name: "West Bengal", count: 67 },
    { id: "karnataka", name: "Karnataka", count: 45 },
  ]

  const features = [
    { id: "handmade", name: "Handmade", count: 419 },
    { id: "eco-friendly", name: "Eco-Friendly", count: 234 },
    { id: "traditional", name: "Traditional", count: 345 },
    { id: "modern", name: "Modern Design", count: 156 },
    { id: "customizable", name: "Customizable", count: 89 },
  ]

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) => (prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]))
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 10000])
  }

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <Card className="border-border bg-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm text-card-foreground">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filterId) => (
                <Badge key={filterId} variant="secondary" className="bg-secondary text-secondary-foreground">
                  {filterId}
                  <button
                    onClick={() => toggleFilter(filterId)}
                    className="ml-1 hover:bg-secondary-foreground/20 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={10000} min={0} step={100} className="w-full" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedFilters.includes(category.id)}
                  onCheckedChange={() => toggleFilter(category.id)}
                />
                <Label htmlFor={category.id} className="text-card-foreground cursor-pointer">
                  {category.name}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Locations */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Locations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locations.map((location) => (
            <div key={location.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={location.id}
                  checked={selectedFilters.includes(location.id)}
                  onCheckedChange={() => toggleFilter(location.id)}
                />
                <Label htmlFor={location.id} className="text-card-foreground cursor-pointer">
                  {location.name}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({location.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={selectedFilters.includes(feature.id)}
                  onCheckedChange={() => toggleFilter(feature.id)}
                />
                <Label htmlFor={feature.id} className="text-card-foreground cursor-pointer">
                  {feature.name}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({feature.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
