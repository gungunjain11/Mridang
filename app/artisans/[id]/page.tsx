import { Navigation } from "@/components/navigation"
import { ArtisanProfile } from "@/components/artisan/artisan-profile"
import { notFound } from "next/navigation"

// Mock data - in real app this would come from database
const artisansData = {
  "rajesh-kumar": {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    nameHi: "राजेश कुमार",
    craft: "Pottery",
    craftHi: "मिट्टी के बर्तन",
    location: "Khurja, Uttar Pradesh",
    locationHi: "खुर्जा, उत्तर प्रदेश",
    rating: 4.9,
    reviewCount: 127,
    experience: "25+ years",
    image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
    coverImage: "/pottery-workshop-with-clay-pots-and-wheel.jpg",
    story:
      "Born into a family of traditional potters in Khurja, Rajesh Kumar represents the third generation of master craftsmen. His journey began at the age of 8, learning the ancient art of pottery from his grandfather. Over 25 years, he has perfected the traditional techniques while incorporating contemporary designs that appeal to modern customers.",
    storyHi:
      "खुर्जा में पारंपरिक कुम्हारों के परिवार में जन्मे राजेश कुमार मास्टर शिल्पकारों की तीसरी पीढ़ी का प्रतिनिधित्व करते हैं। उनकी यात्रा 8 साल की उम्र में शुरू हुई, जब उन्होंने अपने दादाजी से मिट्टी के बर्तन बनाने की प्राचीन कला सीखी।",
    specialties: ["Terracotta Pottery", "Glazed Ceramics", "Traditional Designs", "Custom Orders"],
    achievements: [
      "National Handicrafts Award 2019",
      "Featured in UNESCO Cultural Heritage Project",
      "Trained over 50 apprentices",
      "Exhibited in 15+ international craft fairs",
    ],
    philosophy:
      "Every piece of clay tells a story. My role is to give it a voice through my hands and preserve our ancestral wisdom for future generations.",
    philosophyHi:
      "मिट्टी का हर टुकड़ा एक कहानी कहता है। मेरी भूमिका अपने हाथों से इसे आवाज देना और भावी पीढ़ियों के लिए हमारी पैतृक बुद्धि को संरक्षित करना है।",
    productCount: 45,
    verified: true,
    joinedDate: "2020-03-15",
    totalSales: 1250,
    gallery: [
      "/beautiful-terracotta-vase-with-traditional-indian-.jpg",
      "/traditional-clay-water-pot.jpg",
      "/decorative-ceramic-bowl-with-patterns.jpg",
      "/handmade-clay-figurines.jpg",
      "/glazed-pottery-collection.jpg",
      "/pottery-making-process.jpg",
    ],
    workshops: [
      {
        title: "Introduction to Pottery",
        titleHi: "मिट्टी के बर्तन का परिचय",
        duration: "2 hours",
        price: "₹1,500",
        description: "Learn basic pottery techniques and create your first clay pot",
      },
      {
        title: "Advanced Glazing Techniques",
        titleHi: "उन्नत ग्लेज़िंग तकनीक",
        duration: "4 hours",
        price: "₹3,000",
        description: "Master the art of glazing and decorating pottery",
      },
    ],
    reviews: [
      {
        name: "Anita Sharma",
        rating: 5,
        comment: "Beautiful pottery work! The attention to detail is incredible.",
        date: "2024-01-15",
      },
      {
        name: "Vikram Patel",
        rating: 5,
        comment: "Authentic traditional designs with modern appeal. Highly recommended!",
        date: "2024-01-10",
      },
    ],
  },
  "meera-devi": {
    id: "meera-devi",
    name: "Meera Devi",
    nameHi: "मीरा देवी",
    craft: "Handloom Weaving",
    craftHi: "हथकरघा बुनाई",
    location: "Varanasi, Uttar Pradesh",
    locationHi: "वाराणसी, उत्तर प्रदेश",
    rating: 4.8,
    reviewCount: 89,
    experience: "30+ years",
    image: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
    coverImage: "/traditional-handloom-weaving-setup.jpg",
    story:
      "Born into a family of traditional weavers in the holy city of Varanasi, Meera Devi has dedicated her life to preserving the ancient art of Banarasi silk weaving. For over three decades, she has been creating exquisite sarees with intricate zari work and traditional motifs that tell stories of Indian mythology and culture. Her workshop, nestled in the narrow lanes of Varanasi, echoes with the rhythmic sounds of the handloom, where she continues to train young women in this sacred craft.",
    storyHi:
      "पवित्र शहर वाराणसी में पारंपरिक बुनकरों के परिवार में जन्मी मीरा देवी ने अपना जीवन बनारसी रेशम बुनाई की प्राचीन कला को संरक्षित करने के लिए समर्पित किया है। तीन दशकों से अधिक समय से, वे जटिल जरी के काम और पारंपरिक रूपांकनों के साथ उत्कृष्ट साड़ियां बना रही हैं।",
    specialties: ["Banarasi Silk Sarees", "Zari Work", "Traditional Motifs", "Bridal Collections"],
    achievements: [
      "Padma Shri Award for Handloom Weaving 2018",
      "UNESCO Intangible Cultural Heritage Ambassador",
      "Trained over 200 women weavers",
      "Featured in National Geographic Documentary",
    ],
    philosophy:
      "Each thread I weave carries the essence of our ancestors. Through my sarees, I preserve not just a craft, but the soul of Indian womanhood and tradition.",
    philosophyHi:
      "मैं जो भी धागा बुनती हूं, उसमें हमारे पूर्वजों का सार होता है। अपनी साड़ियों के माध्यम से, मैं केवल एक शिल्प ही नहीं, बल्कि भारतीय नारीत्व और परंपरा की आत्मा को संरक्षित करती हूं।",
    productCount: 32,
    verified: true,
    joinedDate: "2020-05-20",
    totalSales: 890,
    gallery: [
      "/elegant-silk-dupatta-with-golden-zari-work-indian-.jpg",
      "/traditional-banarasi-silk-saree.jpg",
      "/handloom-weaving-process.jpg",
      "/zari-work-detail.jpg",
      "/traditional-motifs-collection.jpg",
      "/bridal-saree-collection.jpg",
    ],
    workshops: [
      {
        title: "Introduction to Handloom Weaving",
        titleHi: "हथकरघा बुनाई का परिचय",
        duration: "3 hours",
        price: "₹2,000",
        description: "Learn the basics of handloom weaving and create your first piece",
      },
      {
        title: "Advanced Zari Work Techniques",
        titleHi: "उन्नत जरी कार्य तकनीक",
        duration: "6 hours",
        price: "₹4,500",
        description: "Master the intricate art of zari work and traditional motifs",
      },
    ],
    reviews: [
      {
        name: "Kavita Gupta",
        rating: 5,
        comment: "Absolutely stunning Banarasi sarees! The craftsmanship is exceptional.",
        date: "2024-01-20",
      },
      {
        name: "Ravi Mehta",
        rating: 5,
        comment: "Bought a bridal saree for my daughter. The quality and design are unmatched!",
        date: "2024-01-18",
      },
    ],
  },
  "arjun-singh": {
    id: "arjun-singh",
    name: "Arjun Singh",
    nameHi: "अर्जुन सिंह",
    craft: "Wood Carving",
    craftHi: "लकड़ी की नक्काशी",
    location: "Saharanpur, Uttar Pradesh",
    locationHi: "सहारनपुर, उत्तर प्रदेश",
    rating: 4.9,
    reviewCount: 156,
    experience: "20+ years",
    image: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
    coverImage: "/wood-carving-workshop-with-tools.jpg",
    story:
      "Arjun Singh hails from Saharanpur, the wood carving capital of India. Following in his father's footsteps, he has mastered the art of transforming simple wood into intricate sculptures and decorative pieces. His work seamlessly blends traditional Indian motifs with contemporary designs, making his creations sought after by collectors worldwide. Each piece tells a story, whether it's a religious sculpture or a modern decorative item.",
    storyHi:
      "अर्जुन सिंह सहारनपुर से हैं, जो भारत की लकड़ी की नक्काशी की राजधानी है। अपने पिता के नक्शेकदम पर चलते हुए, उन्होंने साधारण लकड़ी को जटिल मूर्तियों और सजावटी वस्तुओं में बदलने की कला में महारत हासिल की है।",
    specialties: ["Religious Sculptures", "Decorative Items", "Custom Designs", "Furniture Carving"],
    achievements: [
      "National Award for Wood Carving Excellence 2020",
      "Featured in India Today Craft Special",
      "Exported to 25+ countries",
      "Mentored 75+ apprentices",
    ],
    philosophy:
      "Wood has a soul, and my job is to reveal it. Every carving is a conversation between the craftsman, the wood, and the divine inspiration that guides my hands.",
    philosophyHi:
      "लकड़ी में एक आत्मा होती है, और मेरा काम इसे प्रकट करना है। हर नक्काशी शिल्पकार, लकड़ी और दिव्य प्रेरणा के बीच एक बातचीत है जो मेरे हाथों का मार्गदर्शन करती है।",
    productCount: 67,
    verified: true,
    joinedDate: "2020-02-10",
    totalSales: 1580,
    gallery: [
      "/intricate-wooden-sculpture.jpg",
      "/religious-wood-carving.jpg",
      "/decorative-wooden-panel.jpg",
      "/custom-furniture-carving.jpg",
      "/wood-carving-tools.jpg",
      "/finished-sculptures-collection.jpg",
    ],
    workshops: [
      {
        title: "Basic Wood Carving",
        titleHi: "बुनियादी लकड़ी की नक्काशी",
        duration: "4 hours",
        price: "₹2,500",
        description: "Learn fundamental wood carving techniques and create your first piece",
      },
      {
        title: "Advanced Sculpture Making",
        titleHi: "उन्नत मूर्ति निर्माण",
        duration: "8 hours",
        price: "₹5,000",
        description: "Master advanced techniques for creating detailed sculptures",
      },
    ],
    reviews: [
      {
        name: "Deepak Agarwal",
        rating: 5,
        comment: "Incredible attention to detail! The Ganesha sculpture is a masterpiece.",
        date: "2024-01-22",
      },
      {
        name: "Sarah Johnson",
        rating: 5,
        comment: "Beautiful custom furniture carving. Exceeded all expectations!",
        date: "2024-01-19",
      },
    ],
  },
  "priya-sharma": {
    id: "priya-sharma",
    name: "Priya Sharma",
    nameHi: "प्रिया शर्मा",
    craft: "Embroidery",
    craftHi: "कढ़ाई",
    location: "Lucknow, Uttar Pradesh",
    locationHi: "लखनऊ, उत्तर प्रदेश",
    rating: 4.7,
    reviewCount: 94,
    experience: "15+ years",
    image: "/indian-woman-doing-chikankari-embroidery.jpg",
    coverImage: "/chikankari-embroidery-workshop.jpg",
    story:
      "Priya Sharma is a master of Chikankari, the delicate white-on-white embroidery that originated in Lucknow. She learned this intricate art form from her grandmother and has spent 15 years perfecting the traditional stitches and patterns. Her work is characterized by its ethereal beauty and precision, with each piece taking weeks to complete. She has modernized traditional designs while maintaining their authentic essence.",
    storyHi:
      "प्रिया शर्मा चिकनकारी की मास्टर हैं, यह नाजुक सफेद-पर-सफेद कढ़ाई है जो लखनऊ में उत्पन्न हुई थी। उन्होंने यह जटिल कला रूप अपनी दादी से सीखा है और 15 साल पारंपरिक टांकों और पैटर्न को परिष्कृत करने में बिताए हैं।",
    specialties: ["Chikankari Embroidery", "Hand Embroidery", "Traditional Patterns", "Bridal Wear"],
    achievements: [
      "State Award for Chikankari Excellence 2021",
      "Featured in Vogue India Craft Issue",
      "Collaborated with leading fashion designers",
      "Trained 100+ women in embroidery",
    ],
    philosophy:
      "Each stitch is a prayer, each pattern a poem. Through Chikankari, I connect with generations of women who have kept this beautiful tradition alive.",
    philosophyHi:
      "हर टांका एक प्रार्थना है, हर पैटर्न एक कविता है। चिकनकारी के माध्यम से, मैं उन महिलाओं की पीढ़ियों से जुड़ती हूं जिन्होंने इस सुंदर परंपरा को जीवित रखा है।",
    productCount: 28,
    verified: true,
    joinedDate: "2020-08-15",
    totalSales: 650,
    gallery: [
      "/chikankari-kurta-detail.jpg",
      "/white-embroidery-patterns.jpg",
      "/traditional-chikankari-saree.jpg",
      "/embroidery-work-in-progress.jpg",
      "/bridal-chikankari-collection.jpg",
      "/hand-embroidery-tools.jpg",
    ],
    workshops: [
      {
        title: "Introduction to Chikankari",
        titleHi: "चिकनकारी का परिचय",
        duration: "3 hours",
        price: "₹1,800",
        description: "Learn basic Chikankari stitches and create a simple design",
      },
      {
        title: "Advanced Chikankari Patterns",
        titleHi: "उन्नत चिकनकारी पैटर्न",
        duration: "6 hours",
        price: "₹3,500",
        description: "Master complex patterns and traditional motifs",
      },
    ],
    reviews: [
      {
        name: "Neha Kapoor",
        rating: 5,
        comment: "Exquisite Chikankari work! The detailing is absolutely beautiful.",
        date: "2024-01-25",
      },
      {
        name: "Amit Verma",
        rating: 4,
        comment: "Great quality embroidery. Perfect for special occasions.",
        date: "2024-01-23",
      },
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function ArtisanProfilePage({ params }: PageProps) {
  const artisan = artisansData[params.id as keyof typeof artisansData]

  if (!artisan) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ArtisanProfile artisan={artisan} />
    </div>
  )
}
