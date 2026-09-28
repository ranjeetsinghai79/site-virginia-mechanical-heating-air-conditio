import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Virginia Mechanical Heating & Air Conditioning",
    tagline: "Expert HVAC solutions in Tracy.",
    phone: "(209) 832-2966",
    phoneHref: "tel:+12098322966",
    email: "info@virginiamechanical.com",
    address: "7553 Carmelo Ave, Tracy, CA 95304, USA",
    city: "Tracy",
    serviceAreas: ["Tracy", "Manteca", "French Camp"],
    license: "Licensed & Insured",
    since: "2005",
    google_rating: "4.9",
    review_count: "376",
    emergency: true,
    theme: "clean",
    niche: "hvac",
  },

  services: [
    { 
      icon: "thermometer", 
      title: "Air Conditioning Repair", 
      desc: "Fast, reliable air conditioning repair to restore your home's comfort immediately.", 
      urgent: true 
    },
    { 
      icon: "zap", 
      title: "Air Conditioning Installation", 
      desc: "Professional installation of high-efficiency cooling systems tailored to your property.", 
      urgent: false 
    },
    { 
      icon: "flame", 
      title: "Furnace Repair", 
      desc: "Prompt furnace diagnostics and repairs to keep your family warm all winter.", 
      urgent: true 
    },
    { 
      icon: "home", 
      title: "Furnace Installation", 
      desc: "Expert heating system replacements featuring top-tier brands and warranties.", 
      urgent: false 
    },
    { 
      icon: "sparkles", 
      title: "Ductless Mini Splits", 
      desc: "Energy-efficient zoned heating and cooling without the need for ductwork.", 
      urgent: false 
    },
    { 
      icon: "wrench", 
      title: "HVAC Maintenance", 
      desc: "Comprehensive seasonal tune-ups to extend the lifespan of your HVAC equipment.", 
      urgent: false 
    }
  ],

  testimonials: [
    { 
      name: "Sarah Jenkins", 
      location: "Tracy, CA", 
      stars: 5, 
      text: "Our AC died during the hottest week in July. Virginia Mechanical sent a tech out the same day. He diagnosed the capacitor issue in minutes and had us cooling again for under $200. Absolute lifesavers!" 
    },
    { 
      name: "Michael Torres", 
      location: "Manteca, CA", 
      stars: 5, 
      text: "We hired them for a complete furnace and ductless mini-split installation. The crew was incredibly professional, wore shoe covers, and finished the job ahead of schedule. Our energy bills have already dropped significantly this winter." 
    },
    { 
      name: "David Reynolds", 
      location: "French Camp, CA", 
      stars: 5, 
      text: "Finding an honest HVAC company is tough, but these guys are the real deal. Upfront pricing, no high-pressure sales tactics, and the technician explained exactly what maintenance our system needed. Highly recommend their services." 
    }
  ],

  trustBadges: [
    "Google Guaranteed", 
    "BBB Accredited", 
    "NATE-Certified Techs", 
    "Mon–Fri 8AM–4:30PM"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 376, label: "Verified Reviews", suffix: "+", decimals: 0 },
    { value: 15, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { 
      icon: "award",       
      title: "NATE-Certified Techs",          
      desc: "Our highly trained experts hold the industry's most rigorous technical certification." 
    },
    { 
      icon: "clock", 
      title: "Same-Day Emergency",        
      desc: "We prioritize urgent breakdowns to restore your comfort without unnecessary delays." 
    },
    { 
      icon: "dollar-sign",       
      title: "Upfront Flat-Rate Pricing",         
      desc: "You approve the final price before any work begins, eliminating surprise fees." 
    },
    { 
      icon: "wrench",   
      title: "All Brands Serviced", 
      desc: "Our skilled technicians are equipped to repair and maintain every major manufacturer." 
    },
    { 
      icon: "shield-check",       
      title: "10-Year Parts Warranty",     
      desc: "Enjoy total peace of mind with industry-leading warranties on all replacement parts." 
    },
    { 
      icon: "briefcase",       
      title: "Financing Available",         
      desc: "Flexible payment plans make upgrading your home's climate control highly affordable." 
    }
  ],

  formServiceOptions: [
    "Air Conditioning Repair",
    "Air Conditioning Installation",
    "Furnace Repair",
    "Furnace Installation",
    "Ductless Mini Splits",
    "HVAC Maintenance"
  ]
}

export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!