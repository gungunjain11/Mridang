import { Navigation } from "@/components/navigation"
import { WorkshopGrid } from "@/components/workshops/workshop-grid"
import { WorkshopFilters } from "@/components/workshops/workshop-filters"
import { WorkshopHeader } from "@/components/workshops/workshop-header"

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WorkshopHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <WorkshopFilters />
          </div>
          <div className="lg:col-span-3">
            <WorkshopGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
