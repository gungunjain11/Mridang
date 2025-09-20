import { Navigation } from "@/components/navigation"
import { WorkshopDetail } from "@/components/workshops/workshop-detail"
import { notFound } from "next/navigation"

// Mock workshop data
const workshopsData = {
  "pottery-basics-rajesh": {
    id: "pottery-basics-rajesh",
    title: "Introduction to Traditional Pottery",
    titleHi: "पारंपरिक मिट्टी के बर्तन का परिचय",
    description:
      "Learn the ancient art of pottery from master craftsman Rajesh Kumar. This hands-on workshop covers basic techniques including clay preparation, wheel throwing, and traditional firing methods. Perfect for beginners who want to experience the meditative art of pottery making.",
    descriptionHi:
      "मास्टर शिल्पकार राजेश कुमार से मिट्टी के बर्तन की प्राचीन कला सीखें। यह व्यावहारिक कार्यशाला बुनियादी तकनीकों को कवर करती है जिसमें मिट्टी की तैयारी, चाक फेंकना और पारंपरिक फायरिंग विधियां शामिल हैं।",
    artisan: {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      image: "/indian-potter-working-on-clay-pottery-wheel-tradit.jpg",
      location: "Khurja, UP",
      rating: 4.9,
      experience: "25+ years",
      verified: true,
    },
    images: [
      "/pottery-workshop-with-clay-pots-and-wheel.jpg",
      "/pottery-making-process.jpg",
      "/traditional-clay-water-pot.jpg",
    ],
    category: "Pottery",
    categoryHi: "मिट्टी के बर्तन",
    duration: "4 hours",
    price: 2500,
    originalPrice: 3000,
    maxParticipants: 8,
    difficulty: "Beginner",
    difficultyHi: "शुरुआती",
    rating: 4.8,
    reviewCount: 34,
    language: "Hindi & English",
    languageHi: "हिंदी और अंग्रेजी",
    includes: [
      "All materials and tools",
      "Clay and glazes",
      "Firing service",
      "Take home your creations",
      "Certificate of completion",
      "Refreshments",
    ],
    includesHi: [
      "सभी सामग्री और उपकरण",
      "मिट्टी और ग्लेज़",
      "फायरिंग सेवा",
      "अपनी कृतियां घर ले जाएं",
      "पूर्णता का प्रमाण पत्र",
      "जलपान",
    ],
    schedule: [
      { time: "9:00 AM", activity: "Welcome & Introduction", activityHi: "स्वागत और परिचय" },
      { time: "9:30 AM", activity: "Clay Preparation", activityHi: "मिट्टी की तैयारी" },
      { time: "10:30 AM", activity: "Wheel Throwing Basics", activityHi: "चाक फेंकने की मूल बातें" },
      { time: "12:00 PM", activity: "Lunch Break", activityHi: "दोपहर का भोजन" },
      { time: "1:00 PM", activity: "Shaping & Decorating", activityHi: "आकार देना और सजाना" },
      { time: "2:30 PM", activity: "Firing Process Demo", activityHi: "फायरिंग प्रक्रिया प्रदर्शन" },
    ],
    requirements: [
      "No prior experience needed",
      "Wear comfortable clothes",
      "Closed-toe shoes recommended",
      "Bring apron or old clothes",
    ],
    requirementsHi: [
      "कोई पूर्व अनुभव की आवश्यकता नहीं",
      "आरामदायक कपड़े पहनें",
      "बंद पैर के जूते की सिफारिश",
      "एप्रन या पुराने कपड़े लाएं",
    ],
    availableDates: [
      { date: "2024-02-15", time: "9:00 AM - 1:00 PM", spots: 3 },
      { date: "2024-02-22", time: "9:00 AM - 1:00 PM", spots: 5 },
      { date: "2024-03-01", time: "9:00 AM - 1:00 PM", spots: 2 },
      { date: "2024-03-08", time: "9:00 AM - 1:00 PM", spots: 8 },
    ],
    location: {
      name: "Rajesh Kumar Pottery Studio",
      address: "123 Pottery Lane, Khurja, Uttar Pradesh 203131",
      coordinates: { lat: 28.0495, lng: 77.8746 },
    },
    cancellationPolicy:
      "Free cancellation up to 48 hours before the workshop. 50% refund for cancellations within 24-48 hours. No refund for same-day cancellations.",
    reviews: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment:
          "Amazing experience! Rajesh ji is such a patient teacher. I made my first pot and it turned out beautiful!",
        date: "2024-01-20",
        image: "/pottery-student-work.jpg",
      },
      {
        name: "Amit Gupta",
        rating: 5,
        comment: "Learned so much about traditional pottery techniques. The studio atmosphere is very authentic.",
        date: "2024-01-15",
      },
    ],
  },
  "woodcarving-arjun": {
    id: "woodcarving-arjun",
    title: "Traditional Wood Carving Techniques",
    titleHi: "पारंपरिक लकड़ी नक्काशी तकनीक",
    description:
      "Learn intricate wood carving patterns and create beautiful sculptures with master craftsman Arjun Singh. This comprehensive workshop covers traditional tools, wood selection, carving techniques, and finishing methods used in Saharanpur's famous wood carving industry.",
    descriptionHi:
      "मास्टर शिल्पकार अर्जुन सिंह के साथ जटिल लकड़ी की नक्काशी के पैटर्न सीखें और सुंदर मूर्तियां बनाएं। यह व्यापक कार्यशाला पारंपरिक उपकरण, लकड़ी का चयन, नक्काशी तकनीक और सहारनपुर के प्रसिद्ध लकड़ी नक्काशी उद्योग में उपयोग की जाने वाली फिनिशिंग विधियों को कवर करती है।",
    artisan: {
      id: "arjun-singh",
      name: "Arjun Singh",
      nameHi: "अर्जुन सिंह",
      image: "/indian-craftsman-carving-intricate-wooden-sculptur.jpg",
      location: "Saharanpur, UP",
      rating: 4.9,
      experience: "30+ years",
      verified: true,
    },
    images: [
      "/wood-carving-workshop-with-traditional-tools-and-w.jpg",
      "/intricate-wooden-sculpture-carving-process.jpg",
      "/traditional-wood-carving-tools-and-materials.jpg",
    ],
    category: "Wood Work",
    categoryHi: "लकड़ी का काम",
    duration: "5 hours",
    price: 3200,
    originalPrice: 4000,
    maxParticipants: 10,
    difficulty: "Intermediate",
    difficultyHi: "मध्यम",
    rating: 4.7,
    reviewCount: 22,
    language: "Hindi & English",
    languageHi: "हिंदी और अंग्रेजी",
    includes: [
      "All carving tools and materials",
      "Premium wood blocks",
      "Safety equipment",
      "Take home your sculpture",
      "Certificate of completion",
      "Traditional lunch",
    ],
    includesHi: [
      "सभी नक्काशी उपकरण और सामग्री",
      "प्रीमियम लकड़ी के ब्लॉक",
      "सुरक्षा उपकरण",
      "अपनी मूर्ति घर ले जाएं",
      "पूर्णता का प्रमाण पत्र",
      "पारंपरिक दोपहर का भोजन",
    ],
    schedule: [
      { time: "9:00 AM", activity: "Welcome & Tool Introduction", activityHi: "स्वागत और उपकरण परिचय" },
      { time: "9:30 AM", activity: "Wood Selection & Preparation", activityHi: "लकड़ी का चयन और तैयारी" },
      { time: "11:00 AM", activity: "Basic Carving Techniques", activityHi: "बुनियादी नक्काशी तकनीक" },
      { time: "12:30 PM", activity: "Lunch Break", activityHi: "दोपहर का भोजन" },
      { time: "1:30 PM", activity: "Advanced Pattern Work", activityHi: "उन्नत पैटर्न कार्य" },
      { time: "3:00 PM", activity: "Finishing & Polishing", activityHi: "फिनिशिंग और पॉलिशिंग" },
    ],
    requirements: [
      "No prior experience needed",
      "Wear comfortable clothes",
      "Closed-toe shoes mandatory",
      "Bring safety glasses if you have them",
    ],
    requirementsHi: [
      "कोई पूर्व अनुभव की आवश्यकता नहीं",
      "आरामदायक कपड़े पहनें",
      "बंद पैर के जूते अनिवार्य",
      "यदि आपके पास हैं तो सुरक्षा चश्मा लाएं",
    ],
    availableDates: [
      { date: "2024-02-20", time: "9:00 AM - 2:00 PM", spots: 5 },
      { date: "2024-02-27", time: "9:00 AM - 2:00 PM", spots: 7 },
      { date: "2024-03-05", time: "9:00 AM - 2:00 PM", spots: 3 },
      { date: "2024-03-12", time: "9:00 AM - 2:00 PM", spots: 10 },
    ],
    location: {
      name: "Arjun Singh Wood Carving Studio",
      address: "456 Craftsman Street, Saharanpur, Uttar Pradesh 247001",
      coordinates: { lat: 29.968, lng: 77.5552 },
    },
    cancellationPolicy:
      "Free cancellation up to 72 hours before the workshop. 50% refund for cancellations within 24-72 hours. No refund for same-day cancellations.",
    reviews: [
      {
        name: "Vikram Sharma",
        rating: 5,
        comment:
          "Incredible experience! Arjun ji taught us traditional techniques passed down through generations. My wooden elephant sculpture turned out amazing!",
        date: "2024-01-25",
        image: "/wooden-elephant-sculpture.jpg",
      },
      {
        name: "Neha Gupta",
        rating: 5,
        comment:
          "The attention to detail and patience of the instructor was remarkable. Learned so much about wood selection and carving.",
        date: "2024-01-18",
      },
    ],
  },
  "weaving-silk-meera": {
    id: "weaving-silk-meera",
    title: "Banarasi Silk Weaving Workshop",
    titleHi: "बनारसी रेशम बुनाई कार्यशाला",
    description:
      "Master the intricate art of Banarasi silk weaving with traditional techniques passed down through generations. Learn from expert weaver Meera Devi in this immersive workshop covering silk preparation, loom setup, and the famous brocade patterns of Varanasi.",
    descriptionHi:
      "पीढ़ियों से चली आ रही पारंपरिक तकनीकों के साथ बनारसी रेशम बुनाई की जटिल कला में महारत हासिल करें। विशेषज्ञ बुनकर मीरा देवी से इस व्यापक कार्यशाला में सीखें जो रेशम की तैयारी, करघा सेटअप और वाराणसी के प्रसिद्ध ब्रोकेड पैटर्न को कवर करती है।",
    artisan: {
      id: "meera-devi",
      name: "Meera Devi",
      nameHi: "मीरा देवी",
      image: "/indian-woman-weaving-silk-saree-on-traditional-han.jpg",
      location: "Varanasi, UP",
      rating: 4.8,
      experience: "35+ years",
      verified: true,
    },
    images: [
      "/traditional-handloom-weaving-setup-with-silk-threa.jpg",
      "/banarasi-silk-weaving-process.jpg",
      "/intricate-silk-brocade-patterns.jpg",
    ],
    category: "Weaving",
    categoryHi: "बुनाई",
    duration: "6 hours",
    price: 4500,
    originalPrice: 5500,
    maxParticipants: 6,
    difficulty: "Intermediate",
    difficultyHi: "मध्यम",
    rating: 4.9,
    reviewCount: 28,
    language: "Hindi & English",
    languageHi: "हिंदी और अंग्रेजी",
    includes: [
      "Premium silk threads",
      "Traditional handloom access",
      "Pattern design templates",
      "Take home silk fabric piece",
      "Certificate of completion",
      "Traditional Banarasi lunch",
    ],
    includesHi: [
      "प्रीमियम रेशम के धागे",
      "पारंपरिक हथकरघा पहुंच",
      "पैटर्न डिज़ाइन टेम्प्लेट",
      "रेशम के कपड़े का टुकड़ा घर ले जाएं",
      "पूर्णता का प्रमाण पत्र",
      "पारंपरिक बनारसी दोपहर का भोजन",
    ],
    schedule: [
      { time: "9:00 AM", activity: "Introduction to Silk Weaving", activityHi: "रेशम बुनाई का परिचय" },
      { time: "10:00 AM", activity: "Loom Setup & Threading", activityHi: "करघा सेटअप और धागा डालना" },
      { time: "11:30 AM", activity: "Basic Weaving Techniques", activityHi: "बुनियादी बुनाई तकनीक" },
      { time: "1:00 PM", activity: "Lunch Break", activityHi: "दोपहर का भोजन" },
      { time: "2:00 PM", activity: "Brocade Pattern Creation", activityHi: "ब्रोकेड पैटर्न निर्माण" },
      { time: "3:30 PM", activity: "Finishing Techniques", activityHi: "फिनिशिंग तकनीक" },
    ],
    requirements: [
      "Basic understanding of textiles helpful",
      "Comfortable seating for long periods",
      "Wear cotton clothes",
      "Bring reading glasses if needed",
    ],
    requirementsHi: ["कपड़ों की बुनियादी समझ सहायक", "लंबे समय तक आरामदायक बैठना", "सूती कपड़े पहनें", "यदि आवश्यक हो तो चश्मा लाएं"],
    availableDates: [
      { date: "2024-02-18", time: "9:00 AM - 3:00 PM", spots: 2 },
      { date: "2024-02-25", time: "9:00 AM - 3:00 PM", spots: 4 },
      { date: "2024-03-03", time: "9:00 AM - 3:00 PM", spots: 6 },
      { date: "2024-03-10", time: "9:00 AM - 3:00 PM", spots: 1 },
    ],
    location: {
      name: "Meera Devi Silk Weaving Center",
      address: "789 Weaver's Lane, Varanasi, Uttar Pradesh 221001",
      coordinates: { lat: 25.3176, lng: 82.9739 },
    },
    cancellationPolicy:
      "Free cancellation up to 48 hours before the workshop. 50% refund for cancellations within 24-48 hours. No refund for same-day cancellations.",
    reviews: [
      {
        name: "Anjali Patel",
        rating: 5,
        comment:
          "Absolutely mesmerizing! Meera ji's expertise in Banarasi weaving is unmatched. The silk fabric I created is now my prized possession.",
        date: "2024-01-22",
        image: "/banarasi-silk-fabric-sample.jpg",
      },
      {
        name: "Rohit Kumar",
        rating: 5,
        comment:
          "Learned the intricate art of brocade weaving. The traditional techniques are truly fascinating and well-preserved.",
        date: "2024-01-16",
      },
    ],
  },
  "embroidery-chikankari": {
    id: "embroidery-chikankari",
    title: "Chikankari Embroidery Masterclass",
    titleHi: "चिकनकारी कढ़ाई मास्टरक्लास",
    description:
      "Discover the delicate art of Lucknow's famous Chikankari embroidery with master artisan Priya Sharma. Learn traditional stitches, pattern creation, and the cultural significance of this UNESCO-recognized craft in this hands-on workshop.",
    descriptionHi:
      "मास्टर शिल्पकार प्रिया शर्मा के साथ लखनऊ की प्रसिद्ध चिकनकारी कढ़ाई की नाजुक कला की खोज करें। इस व्यावहारिक कार्यशाला में पारंपरिक टांके, पैटर्न निर्माण और इस यूनेस्को-मान्यता प्राप्त शिल्प के सांस्कृतिक महत्व को सीखें।",
    artisan: {
      id: "priya-sharma",
      name: "Priya Sharma",
      nameHi: "प्रिया शर्मा",
      image: "/indian-woman-doing-chikankari-embroidery-tradition.jpg",
      location: "Lucknow, UP",
      rating: 4.7,
      experience: "20+ years",
      verified: true,
    },
    images: [
      "/chikankari-embroidery-workshop-with-traditional-pa.jpg",
      "/delicate-chikankari-stitching-process.jpg",
      "/beautiful-chikankari-patterns-on-fabric.jpg",
    ],
    category: "Embroidery",
    categoryHi: "कढ़ाई",
    duration: "3 hours",
    price: 1800,
    originalPrice: 2200,
    maxParticipants: 12,
    difficulty: "Beginner",
    difficultyHi: "शुरुआती",
    rating: 4.6,
    reviewCount: 19,
    language: "Hindi & English",
    languageHi: "हिंदी और अंग्रेजी",
    includes: [
      "All embroidery materials",
      "Traditional needles and threads",
      "Practice fabric pieces",
      "Take home embroidered item",
      "Certificate of completion",
      "Light refreshments",
    ],
    includesHi: [
      "सभी कढ़ाई सामग्री",
      "पारंपरिक सुई और धागे",
      "अभ्यास कपड़े के टुकड़े",
      "कढ़ाई की वस्तु घर ले जाएं",
      "पूर्णता का प्रमाण पत्र",
      "हल्का नाश्ता",
    ],
    schedule: [
      { time: "2:00 PM", activity: "Introduction to Chikankari", activityHi: "चिकनकारी का परिचय" },
      { time: "2:30 PM", activity: "Basic Stitches Practice", activityHi: "बुनियादी टांकों का अभ्यास" },
      { time: "3:30 PM", activity: "Pattern Transfer", activityHi: "पैटर्न स्थानांतरण" },
      { time: "4:00 PM", activity: "Embroidery Creation", activityHi: "कढ़ाई निर्माण" },
      { time: "4:45 PM", activity: "Finishing & Care Tips", activityHi: "फिनिशिंग और देखभाल टिप्स" },
    ],
    requirements: [
      "No prior experience needed",
      "Good eyesight or reading glasses",
      "Comfortable seating",
      "Patience for detailed work",
    ],
    requirementsHi: ["कोई पूर्व अनुभव की आवश्यकता नहीं", "अच्छी दृष्टि या चश्मा", "आरामदायक बैठना", "विस्तृत कार्य के लिए धैर्य"],
    availableDates: [
      { date: "2024-02-22", time: "2:00 PM - 5:00 PM", spots: 8 },
      { date: "2024-03-01", time: "2:00 PM - 5:00 PM", spots: 10 },
      { date: "2024-03-08", time: "2:00 PM - 5:00 PM", spots: 5 },
      { date: "2024-03-15", time: "2:00 PM - 5:00 PM", spots: 12 },
    ],
    location: {
      name: "Priya Sharma Chikankari Studio",
      address: "321 Embroidery Street, Lucknow, Uttar Pradesh 226001",
      coordinates: { lat: 26.8467, lng: 80.9462 },
    },
    cancellationPolicy:
      "Free cancellation up to 24 hours before the workshop. 50% refund for cancellations within 12-24 hours. No refund for same-day cancellations.",
    reviews: [
      {
        name: "Kavya Singh",
        rating: 5,
        comment:
          "Beautiful introduction to Chikankari! Priya ji explained the history and cultural significance while teaching us the delicate stitches.",
        date: "2024-01-20",
        image: "/chikankari-embroidered-handkerchief.jpg",
      },
      {
        name: "Deepika Agarwal",
        rating: 4,
        comment:
          "Loved learning the traditional patterns. The workshop was well-organized and the instructor was very patient.",
        date: "2024-01-14",
      },
    ],
  },
}

interface PageProps {
  params: {
    workshopId: string
  }
}

export default function WorkshopDetailPage({ params }: PageProps) {
  const workshop = workshopsData[params.workshopId as keyof typeof workshopsData]

  if (!workshop) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WorkshopDetail workshop={workshop} />
    </div>
  )
}
