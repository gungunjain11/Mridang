import { Navigation } from "@/components/navigation"
import { ProductDetail } from "@/components/shop/product-detail"
import { notFound } from "next/navigation"

// Mock product data
const productsData = {
  "terracotta-vase-001": {
    id: "terracotta-vase-001",
    name: "Handcrafted Terracotta Vase",
    nameHi: "हस्तनिर्मित मिट्टी का फूलदान",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    artisan: {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      location: "Khurja, UP",
      rating: 4.9,
    },
    images: [
      "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
      "/traditional-clay-water-pot.jpg",
      "/decorative-ceramic-bowl-with-patterns.jpg",
    ],
    category: "Pottery",
    categoryHi: "मिट्टी के बर्तन",
    rating: 4.8,
    reviewCount: 24,
    description:
      "This exquisite handcrafted terracotta vase showcases the traditional pottery techniques of Khurja. Each piece is uniquely shaped and fired using ancient methods passed down through generations. The natural clay finish and intricate patterns make it perfect for both traditional and modern home decor.",
    descriptionHi:
      "यह उत्कृष्ट हस्तनिर्मित टेराकोटा फूलदान खुर्जा की पारंपरिक मिट्टी के बर्तन बनाने की तकनीकों को प्रदर्शित करता है। प्रत्येक टुकड़ा अनूठे आकार का है और पीढ़ियों से चली आ रही प्राचीन विधियों का उपयोग करके पकाया गया है।",
    specifications: {
      Material: "Natural Terracotta Clay",
      Height: "25 cm",
      Diameter: "15 cm",
      Weight: "800g",
      Care: "Hand wash only, avoid harsh chemicals",
    },
    inStock: true,
    stockCount: 12,
    tags: ["Handmade", "Traditional", "Home Decor", "Pottery", "Terracotta"],
    shippingInfo: "Free shipping on orders above ₹999. Delivery in 5-7 business days.",
    returnPolicy: "30-day return policy. Items must be in original condition.",
  },
  "silk-dupatta-002": {
    id: "silk-dupatta-002",
    name: "Pure Silk Banarasi Dupatta",
    nameHi: "शुद्ध रेशम बनारसी दुपट्टा",
    price: 3499,
    originalPrice: 4299,
    discount: 19,
    artisan: {
      id: "meera-devi",
      name: "Meera Devi",
      nameHi: "मीरा देवी",
      image: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
      location: "Varanasi, UP",
      rating: 4.9,
    },
    images: [
      "/elegant-silk-dupatta-with-golden-zari-work-indian-.jpg",
      "/traditional-handloom-weaving-setup-with-silk-threa.jpg",
      "/silk-fabric-with-golden-threads-traditional-india.jpg",
    ],
    category: "Textiles",
    categoryHi: "वस्त्र",
    rating: 4.9,
    reviewCount: 18,
    description:
      "This luxurious pure silk Banarasi dupatta is handwoven by master artisans in Varanasi. Featuring intricate golden zari work and traditional motifs, this dupatta represents centuries of textile craftsmanship. The lustrous silk fabric drapes beautifully and adds elegance to any outfit.",
    descriptionHi:
      "यह शानदार शुद्ध रेशम बनारसी दुपट्टा वाराणसी के मास्टर कारीगरों द्वारा हाथ से बुना गया है। जटिल सुनहरे जरी के काम और पारंपरिक रूपांकनों के साथ, यह दुपट्टा सदियों की वस्त्र शिल्पकारी का प्रतिनिधित्व करता है।",
    specifications: {
      Material: "Pure Silk with Zari Work",
      Length: "2.5 meters",
      Width: "1 meter",
      Weight: "200g",
      Care: "Dry clean only",
    },
    inStock: true,
    stockCount: 8,
    tags: ["Silk", "Zari Work", "Handwoven", "Banarasi", "Traditional"],
    shippingInfo: "Free shipping on orders above ₹999. Delivery in 5-7 business days.",
    returnPolicy: "30-day return policy. Items must be in original condition.",
  },
  "wooden-elephant-003": {
    id: "wooden-elephant-003",
    name: "Carved Wooden Elephant",
    nameHi: "नक्काशीदार लकड़ी का हाथी",
    price: 2199,
    originalPrice: 2799,
    discount: 21,
    artisan: {
      id: "arjun-singh",
      name: "Arjun Singh",
      nameHi: "अर्जुन सिंह",
      image: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
      location: "Saharanpur, UP",
      rating: 4.8,
    },
    images: [
      "/intricately-carved-wooden-elephant-sculpture-india.jpg",
      "/wood-carving-workshop-with-traditional-tools-and-w.jpg",
      "/wooden-sculpture-with-intricate-patterns-indian-c.jpg",
    ],
    category: "Wood Work",
    categoryHi: "लकड़ी का काम",
    rating: 4.7,
    reviewCount: 31,
    description:
      "This intricately carved wooden elephant sculpture showcases the exceptional woodworking skills of Saharanpur artisans. Hand-carved from premium quality wood, each piece features detailed patterns and smooth finish. A perfect decorative piece that brings traditional Indian craftsmanship to your home.",
    descriptionHi:
      "यह जटिल रूप से नक्काशीदार लकड़ी का हाथी मूर्ति सहारनपुर के कारीगरों के असाधारण लकड़ी के काम के कौशल को प्रदर्शित करती है। प्रीमियम गुणवत्ता की लकड़ी से हाथ से तराशा गया, प्रत्येक टुकड़े में विस्तृत पैटर्न और चिकनी फिनिश है।",
    specifications: {
      Material: "Premium Sheesham Wood",
      Height: "20 cm",
      Length: "25 cm",
      Width: "10 cm",
      Weight: "1.2 kg",
      Care: "Dust with soft cloth, avoid moisture",
    },
    inStock: true,
    stockCount: 15,
    tags: ["Carved", "Decorative", "Wood Work", "Handmade", "Traditional"],
    shippingInfo: "Free shipping on orders above ₹999. Delivery in 5-7 business days.",
    returnPolicy: "30-day return policy. Items must be in original condition.",
  },
  "clay-water-pot-004": {
    id: "clay-water-pot-004",
    name: "Traditional Clay Water Pot",
    nameHi: "पारंपरिक मिट्टी का पानी का घड़ा",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    artisan: {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      location: "Khurja, UP",
      rating: 4.9,
    },
    images: [
      "/traditional-clay-water-pot-indian-pottery-function.jpg",
      "/pottery-workshop-with-clay-pots-and-traditional-to.jpg",
      "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
    ],
    category: "Pottery",
    categoryHi: "मिट्टी के बर्तन",
    rating: 4.9,
    reviewCount: 15,
    description:
      "This traditional clay water pot is crafted using age-old techniques that naturally cool water. Made from pure clay without any chemicals, it provides a healthy and eco-friendly way to store and drink water. The porous nature of clay keeps water naturally cool and adds beneficial minerals.",
    descriptionHi:
      "यह पारंपरिक मिट्टी का पानी का घड़ा पुरानी तकनीकों का उपयोग करके बनाया गया है जो प्राकृतिक रूप से पानी को ठंडा करता है। बिना किसी रसायन के शुद्ध मिट्टी से बना, यह पानी को स्टोर करने और पीने का एक स्वस्थ और पर्यावरण-अनुकूल तरीका प्रदान करता है।",
    specifications: {
      Material: "Natural Clay",
      Capacity: "5 Liters",
      Height: "30 cm",
      Diameter: "25 cm",
      Weight: "2 kg",
      Care: "Rinse with water, avoid soap",
    },
    inStock: true,
    stockCount: 20,
    tags: ["Traditional", "Functional", "Eco-friendly", "Clay", "Water Storage"],
    shippingInfo: "Free shipping on orders above ₹999. Delivery in 5-7 business days.",
    returnPolicy: "30-day return policy. Items must be in original condition.",
  },
  "ceramic-bowl-005": {
    id: "ceramic-bowl-005",
    name: "Decorative Ceramic Bowl",
    nameHi: "सजावटी सिरेमिक कटोरा",
    price: 649,
    originalPrice: 799,
    discount: 19,
    artisan: {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      location: "Khurja, UP",
      rating: 4.9,
    },
    images: [
      "/decorative-ceramic-bowl-with-traditional-indian-pa.jpg",
      "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
      "/traditional-clay-water-pot-indian-pottery-function.jpg",
    ],
    category: "Pottery",
    categoryHi: "मिट्टी के बर्तन",
    rating: 4.6,
    reviewCount: 22,
    description:
      "This beautiful decorative ceramic bowl features traditional Indian patterns and vibrant colors. Hand-painted by skilled artisans, each bowl is unique with intricate designs that reflect India's rich cultural heritage. Perfect for serving or as a decorative centerpiece.",
    descriptionHi:
      "यह सुंदर सजावटी सिरेमिक कटोरा पारंपरिक भारतीय पैटर्न और जीवंत रंगों की सुविधा देता है। कुशल कारीगरों द्वारा हाथ से चित्रित, प्रत्येक कटोरा जटिल डिजाइनों के साथ अनूठा है जो भारत की समृद्ध सांस्कृतिक विरासत को दर्शाता है।",
    specifications: {
      Material: "Glazed Ceramic",
      Diameter: "20 cm",
      Height: "8 cm",
      Weight: "400g",
      Care: "Hand wash recommended",
    },
    inStock: true,
    stockCount: 25,
    tags: ["Decorative", "Patterns", "Hand-painted", "Ceramic", "Colorful"],
    shippingInfo: "Free shipping on orders above ₹999. Delivery in 5-7 business days.",
    returnPolicy: "30-day return policy. Items must be in original condition.",
  },
  "clay-figurines-006": {
    id: "clay-figurines-006",
    name: "Handmade Clay Figurines Set",
    nameHi: "हस्तनिर्मित मिट्टी की मूर्तियों का सेट",
    price: 1899,
    originalPrice: 2299,
    discount: 17,
    artisan: {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      location: "Khurja, UP",
      rating: 4.9,
    },
    images: [
      "/handmade-clay-figurines-set-indian-traditional-art.jpg",
      "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      "/traditional-clay-water-pot-indian-pottery-function.jpg",
    ],
    category: "Pottery",
    categoryHi: "मिट्टी के बर्तन",
    rating: 4.8,
    reviewCount: 12,
    description:
      "This charming set of handmade clay figurines represents traditional Indian folk art. Each figurine is carefully sculpted and painted by hand, depicting various cultural themes and characters. A wonderful addition to any home decor collection or as a thoughtful gift.",
    descriptionHi:
      "हस्तनिर्मित मिट्टी की मूर्तियों का यह आकर्षक सेट पारंपरिक भारतीय लोक कला का प्रतिनिधित्व करता है। प्रत्येक मूर्ति को सावधानीपूर्वक तराशा और हाथ से चित्रित किया गया है, विभिन्न सांस्कृतिक विषयों और पात्रों को दर्शाता है।",
    specifications: {
      Material: "Natural Clay with Paint",
      "Set Contains": "5 Figurines",
      "Average Height": "12 cm",
      Weight: "600g",
      Care: "Handle with care, dust gently",
    },
    inStock: true,
    stockCount: 10,
    tags: ["Figurines", "Set", "Folk Art", "Hand-painted", "Cultural"],
    shippingInfo: "Free shipping on orders above ₹999. Delivery in 5-7 business days.",
    returnPolicy: "30-day return policy. Items must be in original condition.",
  },
}

interface PageProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = productsData[params.productId as keyof typeof productsData]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProductDetail product={product} />
    </div>
  )
}
