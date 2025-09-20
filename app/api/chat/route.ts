export const maxDuration = 30

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const GEMINI_API_KEY = "AIzaSyDkvHdSdU2JfNWh1Rlu82X41DCj7USS8qc"
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

async function getGeminiResponse(message: string): Promise<string> {
  try {
    console.log("[v0] Calling Gemini API with message:", message.substring(0, 100) + "...")

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful assistant for Mridang, an Indian artisan marketplace. You help customers discover authentic handcrafted products, learn about artisans, and get support with orders. 

Context about Mridang:
- We sell authentic Indian crafts: pottery, silk products, woodwork, jewelry, textiles
- We work with 500+ skilled artisans across India
- Free shipping on orders above ₹999
- 7-day return policy
- 24/7 customer support at support@mridang.com
- We offer products in categories: pottery, silk textiles, wood carvings, jewelry, metalwork, embroidery

Please respond helpfully to this customer message: ${message}

Keep responses concise, friendly, and focused on Mridang marketplace. Use a warm, welcoming tone and include relevant product or service information when appropriate.`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    })

    console.log("[v0] Gemini API response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Gemini API error response:", errorText)
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log("[v0] Gemini API response received successfully")

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!responseText) {
      console.error("[v0] No response text in Gemini API response:", data)
      throw new Error("No response text received from Gemini")
    }

    return responseText
  } catch (error) {
    console.error("[v0] Gemini API error:", error)
    return `I'm here to help you with Mridang marketplace! 🙏

I can assist you with:
• Finding handcrafted pottery, silk products, and woodwork
• Learning about our talented artisans
• Shipping information (free shipping on orders above ₹999)
• Return policy and order support

For specific account queries, please contact our support team at support@mridang.com or call us for immediate assistance.

What would you like to know about our authentic Indian crafts?`
  }
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    const lastMessage = messages[messages.length - 1]
    const responseContent = await getGeminiResponse(lastMessage.content)

    return new Response(
      JSON.stringify({
        id: Date.now().toString(),
        role: "assistant",
        content: responseContent,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to process message",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
