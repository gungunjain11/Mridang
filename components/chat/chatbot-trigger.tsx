"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Sparkles } from "lucide-react"
import { Chatbot } from "./chatbot"

export function ChatbotTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl relative group"
          >
            <MessageCircle className="h-6 w-6" />

            {/* Notification badge */}
            <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 animate-pulse">
              <Sparkles className="h-3 w-3 mr-1" />
              AI
            </Badge>

            {/* Tooltip */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-card text-card-foreground px-3 py-2 rounded-lg shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              <div className="text-sm font-medium">Need Help?</div>
              <div className="text-xs text-muted-foreground">Chat with our AI assistant</div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-card"></div>
            </div>
          </Button>
        </div>
      )}

      <Chatbot isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  )
}
