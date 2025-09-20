import { Navigation } from "@/components/navigation"
import { ProductGrid } from "@/components/shop/product-grid"
import { ShopFilters } from "@/components/shop/shop-filters"
import { ShopHeader } from "@/components/shop/shop-header"
import { PromotionalSection } from "@/components/shop/promotional-section"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ShopHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PromotionalSection />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ShopFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
