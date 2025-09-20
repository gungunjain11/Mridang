import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, Phone, Mail } from "lucide-react"

export function HelpHeader() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Badge className="bg-accent text-accent-foreground">24/7 Support Available</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">How Can We Help You?</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Get instant answers to your questions or connect with our support team
          </p>
          <p className="text-base text-muted-foreground/80 text-pretty">
            हम आपकी कैसे सहायता कर सकते हैं? अपने प्रश्नों के तुरंत उत्तर पाएं या हमारी सहायता टीम से जुड़ें
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help articles, FAQs, or guides..."
              className="pl-12 pr-4 py-3 text-lg bg-background border-border"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Live Chat
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Support
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Us
          </Button>
        </div>
      </div>
    </section>
  )
}
