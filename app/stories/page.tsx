import { Navigation } from "@/components/navigation"
import { StoriesFeed } from "@/components/stories/stories-feed"

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StoriesFeed />
    </div>
  )
}
