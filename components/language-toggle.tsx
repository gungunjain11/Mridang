"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

// Define types for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate?: {
        TranslateElement: {
          new (options: {
            pageLanguage: string
            includedLanguages: string
            layout: number
            autoDisplay?: boolean
          }, element: string): void
          InlineLayout: {
            HORIZONTAL: number
            SIMPLE: number
            VERTICAL: number
            NONE: number
          }
        }
      }
    }
  }
}

export function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "hi">("en")

  useEffect(() => {
    // Add Google Translate script
    const addScript = () => {
      const script = document.createElement("script")
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.NONE,
            autoDisplay: false,
          },
          "google_translate_element"
        )
      }
    }

    addScript()

    // Cleanup
    return () => {
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit
      }
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "en" ? "hi" : "en"
    setLanguage(newLang)
    
    const selectElement = document.getElementsByClassName('goog-te-combo')[0] as HTMLSelectElement
    if (selectElement) {
      selectElement.value = newLang
      selectElement.dispatchEvent(new Event('change'))
    }
  }

  return (
    <>
      <div id="google_translate_element" className="hidden"></div>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground"
      >
        <Globe className="h-4 w-4" />
        {language === "en" ? "हिंदी" : "English"}
      </Button>
    </>
  )
}
