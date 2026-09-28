import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Virginia Mechanical Heating & Air Conditioning",
    tagline: "Fast, friendly HVAC service since 1987.",
    phone: "(209) 832-2966",
    phoneHref: "tel:+12098322966",
    email: "",
    address: "7553 Carmelo Ave, Tracy, CA 95304, USA",
    city: "Tracy",
    serviceAreas: ["Antioch", "Brentwood", "Byron", "Danville", "Discovery Bay", "Escalon", "Lathrop", "Livermore", "Lodi", "Manteca", "Modesto", "Pleasanton", "Ripon", "San Ramon", "Stockton", "Tracy", "Mountain House"],
    license: "CA License #929944",
    since: "1987",
    google_rating: "4.9",
    review_count: "376",
    emergency: false,
    hours: "Mon–Fri 8:00AM–4:30PM · Saturday by appointment · Sunday closed",
    theme: "clean",
    niche: "hvac",
  },
  services: [
    { icon: "thermometer", title: "Air Conditioning Repair", desc: "Diagnostics and repair for all major residential cooling-system brands." },
    { icon: "zap", title: "Air Conditioning Installation", desc: "Free on-site installation estimates, York systems, and financing upon approved credit." },
    { icon: "flame", title: "Furnace Repair", desc: "Heating diagnostics and repair for all major residential furnace brands." },
    { icon: "home", title: "Furnace Installation", desc: "Professional York heating-system installation with free on-site estimates." },
    { icon: "wrench", title: "HVAC Maintenance", desc: "Regular maintenance and yearly agreements that help systems run efficiently." },
    { icon: "briefcase", title: "Commercial HVAC", desc: "Commercial system design, installation, repair, and preventative maintenance." },
  ],
  testimonials: [
    { name: "Natalie Bartholdi", stars: 5, text: "I recently called Virginia Mechanical for AC maintenance and was greatly impressed by their service. My AC runs better than it ever has." },
    { name: "Kelly Lewis", stars: 5, text: "The team was very professional, prompt, and respectful of our home. They did excellent work and the new system works exceptionally." },
    { name: "Amber Wallwork", stars: 5, text: "Virginia Mechanical is the only company we use for our HVAC systems. They are honest, hard-working, family owned, and reliable." },
  ],
  trustBadges: ["Google Guaranteed", "Licensed, Bonded & Insured", "York Authorized Dealer", "CA License #929944"],
  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 376, label: "Google Reviews", suffix: "+" },
    { value: 39, label: "Years Serving", suffix: "+" },
  ],
  reasons: [
    { icon: "shield-check", title: "Satisfaction Guarantee", desc: "Service is backed by a 100% customer satisfaction guarantee." },
    { icon: "briefcase", title: "Residential & Commercial", desc: "Heating and cooling expertise for homes and commercial properties." },
    { icon: "dollar-sign", title: "Financing Available", desc: "Financing plans are available upon request and approved credit." },
    { icon: "wrench", title: "Major Brands Serviced", desc: "Repair and maintenance support across major HVAC equipment brands." },
    { icon: "award", title: "Google Guaranteed", desc: "A Google Guaranteed local home-service provider." },
    { icon: "map-pin", title: "Central Valley Coverage", desc: "Serving Tracy and communities throughout the surrounding region." },
  ],
  formServiceOptions: ["AC Repair", "AC Installation", "Furnace Repair", "Furnace Installation", "HVAC Maintenance", "Commercial HVAC"],
}

export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!
