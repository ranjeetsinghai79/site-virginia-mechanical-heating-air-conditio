import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Virginia Mechanical Heating & Air Conditioning",
    tagline: "Expert climate control for Tracy homes.",
    phone: "(209) 832-2966",
    phoneHref: "tel:+12098322966",
    email: "info@virginiamechanical.com",
    address: "Tracy, CA",
    city: "Tracy",
    serviceAreas: ["Tracy"],
    license: "",
    since: "",
    google_rating: "4.9",
    review_count: "376",
    emergency: false,
    theme: "clean",
    niche: "hvac",
  },

  services: [
    { 
      icon: "thermometer", 
      title: "AC Installation", 
      desc: "High-efficiency air conditioning systems installed with precision for optimal summer cooling.", 
      urgent: false 
    },
    { 
      icon: "wrench", 
      title: "AC Repair", 
      desc: "Rapid diagnostics and lasting repairs to restore your home's comfort immediately.", 
      urgent: true 
    },
    { 
      icon: "flame", 
      title: "Heating Installation", 
      desc: "Premium furnace and heat pump installations tailored to your property's exact footprint.", 
      urgent: false 
    },
    { 
      icon: "hammer", 
      title: "Furnace Repair", 
      desc: "Expert troubleshooting for all major heating brands to keep your family warm.", 
      urgent: true 
    },
    { 
      icon: "shield-check", 
      title: "HVAC Maintenance", 
      desc: "Comprehensive seasonal tune-ups that extend equipment lifespan and lower utility bills.", 
      urgent: false 
    },
    { 
      icon: "sparkles", 
      title: "Air Filter Sales", 
      desc: "Quality filtration solutions designed to dramatically improve your indoor air quality.", 
      urgent: false 
    }
  ],

  testimonials: [
    { 
      name: "Sarah Jenkins", 
      location: "Tracy", 
      stars: 5, 
      text: "When our AC died during the July heatwave, Virginia Mechanical saved us. They arrived exactly on time, diagnosed the compressor issue in minutes, and had cold air blowing again for a very fair price. Truly exceptional service." 
    },
    { 
      name: "Marcus Thorne", 
      location: "Tracy", 
      stars: 5, 
      text: "I was dreading the cost of a new furnace, but their team walked me through the Synchrony financing options with zero pressure. The installation was flawless, and my home has never felt this consistently warm and comfortable." 
    },
    { 
      name: "Elena Rodriguez", 
      location: "Tracy", 
      stars: 5, 
      text: "Finding a reliable HVAC contractor in Tracy is tough, but these guys are the real deal. They serviced our old Trane unit, explained every step of the maintenance, and left the work area spotless. Highly recommended." 
    }
  ],

  trustBadges: [
    "Google Guaranteed", 
    "BBB Accredited", 
    "Synchrony Financing", 
    "Mon–Fri 8AM–4:30PM",
    "Licensed & Insured"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 376, label: "Verified Reviews", suffix: "+", decimals: 0 },
    { value: 100, label: "Satisfaction", suffix: "%", decimals: 0 }
  ],

  reasons: [
    { 
      icon: "award",       
      title: "Google Guaranteed",          
      desc: "Backed by Google's strict verification process for your ultimate peace of mind and protection." 
    },
    { 
      icon: "shield-check", 
      title: "BBB Accredited",        
      desc: "Committed to the highest standards of business ethics, transparency, and outstanding customer care." 
    },
    { 
      icon: "dollar-sign",       
      title: "Flexible Financing",         
      desc: "Synchrony financing options available to make your essential comfort upgrades highly affordable." 
    },
    { 
      icon: "wrench",   
      title: "All Brands Serviced", 
      desc: "Our expert technicians are rigorously trained to repair and maintain any HVAC make or model." 
    },
    { 
      icon: "clock",       
      title: "Prompt Scheduling",     
      desc: "We respect your time with reliable appointment windows and highly efficient, focused service." 
    },
    { 
      icon: "thumbs-up",       
      title: "Professional Excellence",         
      desc: "Delivering editorial-quality attention to detail in every single installation and repair project." 
    }
  ],

  formServiceOptions: [
    "AC Installation",
    "AC Repair",
    "Heating Installation",
    "Furnace Repair",
    "HVAC Maintenance",
    "Air Filter Sales"
  ]
}

export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!