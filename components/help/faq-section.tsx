"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = [
    {
      category: "Orders",
      question: "How do I track my order?",
      questionHi: "मैं अपने ऑर्डर को कैसे ट्रैक करूं?",
      answer:
        "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive a tracking number via email once your order ships.",
      answerHi: "आप अपने खाते में लॉग इन करके और 'मेरे ऑर्डर' सेक्शन में जाकर अपने ऑर्डर को ट्रैक कर सकते हैं।",
      popular: true,
    },
    {
      category: "Shipping",
      question: "What are the shipping charges?",
      questionHi: "शिपिंग चार्ज क्या हैं?",
      answer:
        "We offer free shipping on orders above ₹999. For orders below this amount, shipping charges vary based on location and weight.",
      answerHi: "हम ₹999 से अधिक के ऑर्डर पर मुफ्त शिपिंग प्रदान करते हैं।",
      popular: true,
    },
    {
      category: "Returns",
      question: "What is your return policy?",
      questionHi: "आपकी रिटर्न नीति क्या है?",
      answer:
        "We accept returns within 7 days of delivery for unused items in original packaging. Handcrafted items may have specific return conditions.",
      answerHi: "हम डिलीवरी के 7 दिनों के भीतर अप्रयुक्त वस्तुओं की वापसी स्वीकार करते हैं।",
      popular: false,
    },
    {
      category: "Payments",
      question: "What payment methods do you accept?",
      questionHi: "आप कौन से भुगतान तरीके स्वीकार करते हैं?",
      answer:
        "We accept all major credit/debit cards, UPI, net banking, and digital wallets like Paytm, PhonePe, and Google Pay.",
      answerHi: "हम सभी प्रमुख क्रेडिट/डेबिट कार्ड, UPI, नेट बैंकिंग और डिजिटल वॉलेट स्वीकार करते हैं।",
      popular: true,
    },
    {
      category: "Products",
      question: "How do I know if a product is authentic?",
      questionHi: "मैं कैसे जानूं कि कोई उत्पाद प्रामाणिक है?",
      answer:
        "All our products are verified by our quality team. Each item comes with an authenticity certificate and artisan details.",
      answerHi: "हमारे सभी उत्पाद हमारी गुणवत्ता टीम द्वारा सत्यापित हैं।",
      popular: false,
    },
    {
      category: "Account",
      question: "How do I reset my password?",
      questionHi: "मैं अपना पासवर्ड कैसे रीसेट करूं?",
      answer:
        "Click on 'Forgot Password' on the login page and enter your email. You'll receive a password reset link within a few minutes.",
      answerHi: "लॉगिन पेज पर 'पासवर्ड भूल गए' पर क्लिक करें और अपना ईमेल दर्ज करें।",
      popular: false,
    },
    {
      category: "Artisans",
      question: "How can I become a seller on Mridang?",
      questionHi: "मैं मृदंग पर विक्रेता कैसे बन सकता हूं?",
      answer:
        "Click on 'Join as Artisan' and complete the registration process. You'll need to provide craft samples and documentation for verification.",
      answerHi: "जॉइन एज़ आर्टिज़न पर क्लिक करें और पंजीकरण प्रक्रिया पूरी करें।",
      popular: true,
    },
    {
      category: "Support",
      question: "How can I contact customer support?",
      questionHi: "मैं ग्राहक सहायता से कैसे संपर्क कर सकता हूं?",
      answer: "You can reach us via live chat, email at support@mridang.com, or call our helpline at +91-XXXX-XXXX-XX.",
      answerHi: "आप लाइव चैट, ईमेल या हमारी हेल्पलाइन के माध्यम से हमसे संपर्क कर सकते हैं।",
      popular: true,
    },
  ]

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.questionHi.includes(searchTerm) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = [...new Set(faqs.map((faq) => faq.category))]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mb-6">अक्सर पूछे जाने वाले प्रश्न</p>

        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <Card key={index} className="border-border bg-card">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full p-6 justify-between text-left h-auto"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                      {faq.category}
                    </Badge>
                    {faq.popular && <Badge className="bg-accent text-accent-foreground text-xs">Popular</Badge>}
                  </div>
                  <h3 className="font-semibold text-card-foreground text-left">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground text-left">{faq.questionHi}</p>
                </div>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>

              {openFAQ === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground mb-2">{faq.answer}</p>
                    <p className="text-sm text-muted-foreground/80">{faq.answerHi}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No FAQs found matching your search.</p>
          <p className="text-sm text-muted-foreground/80">आपकी खोज से मेल खाने वाले कोई FAQ नहीं मिले।</p>
        </div>
      )}
    </div>
  )
}
