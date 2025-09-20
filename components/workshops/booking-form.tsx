"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { CreditCard, User, Mail, Phone, CheckCircle } from "lucide-react"

interface BookingFormProps {
  workshop: {
    id: string
    title: string
    price: number
    maxParticipants: number
    availableDates: Array<{
      date: string
      time: string
      spots: number
    }>
  }
  onClose: () => void
}

export function BookingForm({ workshop, onClose }: BookingFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const [bookingId, setBookingId] = useState("")
  const [formData, setFormData] = useState({
    selectedDate: "",
    participants: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    agreeToTerms: false,
    agreeToPolicy: false,
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const totalAmount = workshop.price * formData.participants
  const processingFee = Math.round(totalAmount * 0.03)
  const finalAmount = totalAmount + processingFee

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate booking ID
      const newBookingId = `WS-${Date.now()}`
      setBookingId(newBookingId)

      // Save booking to localStorage (in real app, this would be saved to database)
      const existingBookings = JSON.parse(localStorage.getItem("userBookings") || "[]")
      const newBooking = {
        id: newBookingId,
        workshopId: workshop.id,
        workshopTitle: workshop.title,
        date: formData.selectedDate.split("-")[0],
        time: formData.selectedDate.split("-")[1],
        participants: formData.participants,
        amount: finalAmount,
        status: "confirmed",
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        specialRequests: formData.specialRequests,
        bookingDate: new Date().toISOString(),
      }

      existingBookings.push(newBooking)
      localStorage.setItem("userBookings", JSON.stringify(existingBookings))

      setBookingComplete(true)
    } catch (error) {
      console.error("Booking failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleViewDashboard = () => {
    onClose()
    router.push("/dashboard?tab=workshops")
  }

  if (bookingComplete) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center space-y-6 py-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Booking Confirmed!</h2>
              <p className="text-muted-foreground">Your workshop booking has been successfully confirmed.</p>
            </div>

            <div className="bg-muted/20 p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Booking ID</span>
                <span className="font-medium text-foreground">{bookingId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Workshop</span>
                <span className="font-medium text-foreground">{workshop.title}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium text-foreground">{formatDate(formData.selectedDate.split("-")[0])}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Participants</span>
                <span className="font-medium text-foreground">{formData.participants}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleViewDashboard}
              >
                View in Dashboard
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
                Continue Browsing
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">Book Workshop</DialogTitle>
          <p className="text-muted-foreground">{workshop.title}</p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${step > stepNumber ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Date & Participants */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Select Date & Participants</h3>

                <div className="space-y-4">
                  <div>
                    <Label className="text-foreground">Choose Date</Label>
                    <Select
                      value={formData.selectedDate}
                      onValueChange={(value) => setFormData({ ...formData, selectedDate: value })}
                    >
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Select a date" />
                      </SelectTrigger>
                      <SelectContent>
                        {workshop.availableDates.map((date, index) => (
                          <SelectItem key={index} value={`${date.date}-${date.time}`}>
                            <div className="flex items-center justify-between w-full">
                              <span>{formatDate(date.date)}</span>
                              <span className="text-sm text-muted-foreground ml-4">
                                {date.time} • {date.spots} spots left
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-foreground">Number of Participants</Label>
                    <Select
                      value={formData.participants.toString()}
                      onValueChange={(value) => setFormData({ ...formData, participants: Number.parseInt(value) })}
                    >
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: Math.min(workshop.maxParticipants, 4) }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "participant" : "participants"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground">Workshop Fee</span>
                  <span className="text-foreground">
                    ₹{workshop.price.toLocaleString()} × {formData.participants}
                  </span>
                </div>
                <div className="flex items-center justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        className="pl-10 bg-input border-border text-foreground"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        className="pl-10 bg-input border-border text-foreground"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      className="pl-10 bg-input border-border text-foreground"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      className="pl-10 bg-input border-border text-foreground"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="text-foreground">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                    className="bg-input border-border text-foreground"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Payment & Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Payment & Confirmation</h3>

                {/* Booking Summary */}
                <div className="bg-muted/20 p-4 rounded-lg space-y-3">
                  <h4 className="font-semibold text-foreground">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Workshop</span>
                      <span className="text-foreground">{workshop.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date</span>
                      <span className="text-foreground">
                        {formData.selectedDate && formatDate(formData.selectedDate.split("-")[0])}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time</span>
                      <span className="text-foreground">
                        {formData.selectedDate && formData.selectedDate.split("-")[1]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Participants</span>
                      <span className="text-foreground">{formData.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name</span>
                      <span className="text-foreground">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-foreground">Workshop Fee</span>
                      <span className="text-foreground">₹{totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Fee</span>
                      <span className="text-muted-foreground">₹{processingFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span className="text-foreground">Total Amount</span>
                      <span className="text-primary">₹{finalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Payment Method</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 border border-primary rounded-lg bg-primary/5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium text-foreground">UPI Payment</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Pay securely with UPI</p>
                    </div>
                    <div className="p-3 border border-border rounded-lg opacity-50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                        <span className="text-sm text-muted-foreground">Card Payment</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Coming soon</p>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <Label htmlFor="terms" className="text-sm text-foreground">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms and Conditions
                      </a>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="policy"
                      checked={formData.agreeToPolicy}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToPolicy: checked as boolean })}
                    />
                    <Label htmlFor="policy" className="text-sm text-foreground">
                      I understand the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Cancellation Policy
                      </a>
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={step === 1 ? onClose : handleBack}
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
              disabled={isSubmitting}
            >
              {step === 1 ? "Cancel" : "Back"}
            </Button>

            <Button
              onClick={step === 3 ? handleSubmit : handleNext}
              disabled={
                isSubmitting ||
                (step === 1 && (!formData.selectedDate || !formData.participants)) ||
                (step === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) ||
                (step === 3 && (!formData.agreeToTerms || !formData.agreeToPolicy))
              }
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {step === 3 ? (
                isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay ₹{finalAmount.toLocaleString()}
                  </>
                )
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
