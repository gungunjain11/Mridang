import { Navigation } from "@/components/navigation"
import { ArtisanShop } from "@/components/shop/artisan-shop"
import { notFound } from "next/navigation"

// Mock artisan shop data
const artisanShopsData = {
  "rajesh-kumar": {
    artisan: {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      craft: "Pottery",
      craftHi: "मिट्टी के बर्तन",
      location: "Khurja, UP",
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      coverImage: "/pottery-workshop-with-clay-pots-and-wheel.jpg",
      rating: 4.9,
      reviewCount: 127,
      verified: true,
    },
    products: [
      {
        id: "terracotta-vase-001",
        name: "Handcrafted Terracotta Vase",
        nameHi: "हस्तनिर्मित मिट्टी का फूलदान",
        price: 1299,
        originalPrice: 1599,
        image: "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
        rating: 4.8,
        reviewCount: 24,
        inStock: true,
        category: "Pottery",
        tags: ["Handmade", "Traditional", "Terracotta", "Home Decor"],
        artisan: {
          name: "Rajesh Kumar",
          nameHi: "राजेश कुमार",
          location: "Khurja, UP",
        },
      },
      {
        id: "clay-water-pot-002",
        name: "Traditional Clay Water Pot",
        nameHi: "पारंपरिक मिट्टी का पानी का घड़ा",
        price: 899,
        originalPrice: 1199,
        image: "/traditional-clay-water-pot.jpg",
        rating: 4.9,
        reviewCount: 18,
        inStock: true,
        category: "Pottery",
        tags: ["Handmade", "Traditional", "Clay", "Kitchen"],
        artisan: {
          name: "Rajesh Kumar",
          nameHi: "राजेश कुमार",
          location: "Khurja, UP",
        },
      },
      {
        id: "ceramic-bowl-003",
        name: "Decorative Ceramic Bowl",
        nameHi: "सजावटी सिरेमिक कटोरा",
        price: 649,
        originalPrice: 799,
        image: "/decorative-ceramic-bowl-with-patterns.jpg",
        rating: 4.7,
        reviewCount: 31,
        inStock: true,
        category: "Pottery",
        tags: ["Handmade", "Ceramic", "Decorative", "Bowl"],
        artisan: {
          name: "Rajesh Kumar",
          nameHi: "राजेश कुमार",
          location: "Khurja, UP",
        },
      },
    ],
    categories: ["Vases", "Water Pots", "Bowls", "Decorative Items", "Custom Orders"],
    totalProducts: 45,
    totalSales: 1250,
  },
  "meera-devi": {
    artisan: {
      id: "meera-devi",
      name: "Meera Devi",
      nameHi: "मीरा देवी",
      craft: "Handloom Weaving",
      craftHi: "हथकरघा बुनाई",
      location: "Varanasi, UP",
      image: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
      coverImage: "/traditional-handloom-weaving-setup.jpg",
      rating: 4.8,
      reviewCount: 89,
      verified: true,
    },
    products: [
      {
        id: "banarasi-saree-001",
        name: "Pure Silk Banarasi Saree",
        nameHi: "शुद्ध रेशम बनारसी साड़ी",
        price: 8999,
        originalPrice: 12999,
        image: "/elegant-silk-dupatta-with-golden-zari-work-indian-.jpg",
        rating: 4.9,
        reviewCount: 42,
        inStock: true,
        category: "Handloom Weaving",
        tags: ["Handwoven", "Silk", "Banarasi", "Traditional", "Bridal"],
        artisan: {
          name: "Meera Devi",
          nameHi: "मीरा देवी",
          location: "Varanasi, UP",
        },
      },
      {
        id: "silk-dupatta-002",
        name: "Golden Zari Work Dupatta",
        nameHi: "सुनहरी जरी का दुपट्टा",
        price: 3499,
        originalPrice: 4999,
        image: "/traditional-banarasi-silk-saree.jpg",
        rating: 4.8,
        reviewCount: 28,
        inStock: true,
        category: "Handloom Weaving",
        tags: ["Handwoven", "Silk", "Zari", "Golden", "Dupatta"],
        artisan: {
          name: "Meera Devi",
          nameHi: "मीरा देवी",
          location: "Varanasi, UP",
        },
      },
      {
        id: "bridal-saree-003",
        name: "Bridal Collection Saree",
        nameHi: "दुल्हन संग्रह साड़ी",
        price: 15999,
        originalPrice: 22999,
        image: "/bridal-saree-collection.jpg",
        rating: 5.0,
        reviewCount: 15,
        inStock: true,
        category: "Handloom Weaving",
        tags: ["Handwoven", "Bridal", "Luxury", "Silk", "Wedding"],
        artisan: {
          name: "Meera Devi",
          nameHi: "मीरा देवी",
          location: "Varanasi, UP",
        },
      },
    ],
    categories: ["Sarees", "Dupattas", "Bridal Wear", "Silk Fabrics", "Custom Weaving"],
    totalProducts: 32,
    totalSales: 890,
  },
  "arjun-singh": {
    artisan: {
      id: "arjun-singh",
      name: "Arjun Singh",
      nameHi: "अर्जुन सिंह",
      craft: "Wood Carving",
      craftHi: "लकड़ी की नक्काशी",
      location: "Saharanpur, UP",
      image: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
      coverImage: "/wood-carving-workshop-with-tools.jpg",
      rating: 4.9,
      reviewCount: 156,
      verified: true,
    },
    products: [
      {
        id: "ganesha-sculpture-001",
        name: "Hand Carved Ganesha Sculpture",
        nameHi: "हस्तनिर्मित गणेश मूर्ति",
        price: 4999,
        originalPrice: 6999,
        image: "/intricate-wooden-sculpture.jpg",
        rating: 4.9,
        reviewCount: 67,
        inStock: true,
        category: "Wood Carving",
        tags: ["Handcarved", "Religious", "Ganesha", "Sculpture", "Wood"],
        artisan: {
          name: "Arjun Singh",
          nameHi: "अर्जुन सिंह",
          location: "Saharanpur, UP",
        },
      },
      {
        id: "decorative-panel-002",
        name: "Decorative Wooden Panel",
        nameHi: "सजावटी लकड़ी का पैनल",
        price: 2799,
        originalPrice: 3999,
        image: "/decorative-wooden-panel.jpg",
        rating: 4.8,
        reviewCount: 34,
        inStock: true,
        category: "Wood Carving",
        tags: ["Handcarved", "Decorative", "Panel", "Wall Art", "Wood"],
        artisan: {
          name: "Arjun Singh",
          nameHi: "अर्जुन सिंह",
          location: "Saharanpur, UP",
        },
      },
      {
        id: "custom-furniture-003",
        name: "Custom Carved Furniture",
        nameHi: "कस्टम नक्काशीदार फर्नीचर",
        price: 12999,
        originalPrice: 18999,
        image: "/custom-furniture-carving.jpg",
        rating: 5.0,
        reviewCount: 23,
        inStock: true,
        category: "Wood Carving",
        tags: ["Handcarved", "Custom", "Furniture", "Luxury", "Wood"],
        artisan: {
          name: "Arjun Singh",
          nameHi: "अर्जुन सिंह",
          location: "Saharanpur, UP",
        },
      },
    ],
    categories: ["Sculptures", "Decorative Panels", "Furniture", "Religious Items", "Custom Orders"],
    totalProducts: 67,
    totalSales: 1580,
  },
  "priya-sharma": {
    artisan: {
      id: "priya-sharma",
      name: "Priya Sharma",
      nameHi: "प्रिया शर्मा",
      craft: "Embroidery",
      craftHi: "कढ़ाई",
      location: "Lucknow, UP",
      image: "/indian-woman-doing-chikankari-embroidery.jpg",
      coverImage: "/chikankari-embroidery-workshop.jpg",
      rating: 4.7,
      reviewCount: 94,
      verified: true,
    },
    products: [
      {
        id: "chikankari-kurta-001",
        name: "Pure Cotton Chikankari Kurta",
        nameHi: "शुद्ध सूती चिकनकारी कुर्ता",
        price: 2499,
        originalPrice: 3499,
        image: "/chikankari-kurta-detail.jpg",
        rating: 4.8,
        reviewCount: 56,
        inStock: true,
        category: "Embroidery",
        tags: ["Handembroidered", "Chikankari", "Cotton", "Kurta", "Traditional"],
        artisan: {
          name: "Priya Sharma",
          nameHi: "प्रिया शर्मा",
          location: "Lucknow, UP",
        },
      },
      {
        id: "embroidered-saree-002",
        name: "Traditional Chikankari Saree",
        nameHi: "पारंपरिक चिकनकारी साड़ी",
        price: 5999,
        originalPrice: 8999,
        image: "/traditional-chikankari-saree.jpg",
        rating: 4.9,
        reviewCount: 38,
        inStock: true,
        category: "Embroidery",
        tags: ["Handembroidered", "Chikankari", "Saree", "Traditional", "Elegant"],
        artisan: {
          name: "Priya Sharma",
          nameHi: "प्रिया शर्मा",
          location: "Lucknow, UP",
        },
      },
      {
        id: "bridal-lehenga-003",
        name: "Bridal Chikankari Lehenga",
        nameHi: "दुल्हन चिकनकारी लहंगा",
        price: 18999,
        originalPrice: 25999,
        image: "/bridal-chikankari-collection.jpg",
        rating: 5.0,
        reviewCount: 12,
        inStock: true,
        category: "Embroidery",
        tags: ["Handembroidered", "Chikankari", "Bridal", "Lehenga", "Wedding"],
        artisan: {
          name: "Priya Sharma",
          nameHi: "प्रिया शर्मा",
          location: "Lucknow, UP",
        },
      },
    ],
    categories: ["Kurtas", "Sarees", "Bridal Wear", "Dupattas", "Custom Embroidery"],
    totalProducts: 28,
    totalSales: 650,
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function ArtisanShopPage({ params }: PageProps) {
  const shopData = artisanShopsData[params.id as keyof typeof artisanShopsData]

  if (!shopData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ArtisanShop {...shopData} />
    </div>
  )
}
