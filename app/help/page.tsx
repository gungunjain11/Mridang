import { Navigation } from "@/components/navigation"
import { HelpHeader } from "@/components/help/help-header"
import { FAQSection } from "@/components/help/faq-section"
import { ContactSection } from "@/components/help/contact-section"
import { SupportResources } from "@/components/help/support-resources"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HelpHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <SupportResources />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  )
}
