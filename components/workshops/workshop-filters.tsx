"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { X } from "lucide-react"

export function WorkshopFilters() {
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const crafts = [
    { id: "pottery", name: "Pottery", nameHi: "मिट्टी के बर्तन", count: 12 },
    { id: "weaving", name: "Weaving", nameHi: "बुनाई", count: 8 },
    { id: "woodwork", name: "Wood Work", nameHi: "लकड़ी का काम", count: 6 },
    { id: "embroidery", name: "Embroidery", nameHi: "कढ़ाई", count: 5 },
    { id: "jewelry", name: "Jewelry Making", nameHi: "आभूषण निर्माण", count: 4 },
    { id: "painting", name: "Traditional Painting", nameHi: "पारंपरिक चित्रकारी", count: 3 },
  ]

  const difficulty = [
    { id: "beginner", name: "Beginner", nameHi: "शुरुआती", count: 18 },
    { id: "intermediate", name: "Intermediate", nameHi: "मध्यम", count: 12 },
    { id: "advanced", name: "Advanced", nameHi: "उन्नत", count: 8 },
  ]

  const duration = [
    { id: "2-hours", name: "2 Hours", count: 8 },
    { id: "4-hours", name: "4 Hours", count: 15 },
    { id: "full-day", name: "Full Day", count: 10 },
    { id: "multi-day", name: "Multi-day", count: 5 },
  ]

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) => (prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]))
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 5000])
    setSelectedDate(undefined)
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

      {/* Date Filter */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Available Dates</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border border-border"
            disabled={(date) => date < new Date()}
          />
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={5000} min={0} step={100} className="w-full" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Craft Types */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Craft Types</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {crafts.map((craft) => (
            <div key={craft.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={craft.id}
                  checked={selectedFilters.includes(craft.id)}
                  onCheckedChange={() => toggleFilter(craft.id)}
                />
                <Label htmlFor={craft.id} className="text-card-foreground cursor-pointer">
                  {craft.name}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({craft.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Difficulty Level */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Difficulty Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {difficulty.map((level) => (
            <div key={level.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={level.id}
                  checked={selectedFilters.includes(level.id)}
                  onCheckedChange={() => toggleFilter(level.id)}
                />
                <Label htmlFor={level.id} className="text-card-foreground cursor-pointer">
                  {level.name}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({level.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Duration */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {duration.map((dur) => (
            <div key={dur.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={dur.id}
                  checked={selectedFilters.includes(dur.id)}
                  onCheckedChange={() => toggleFilter(dur.id)}
                />
                <Label htmlFor={dur.id} className="text-card-foreground cursor-pointer">
                  {dur.name}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({dur.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
