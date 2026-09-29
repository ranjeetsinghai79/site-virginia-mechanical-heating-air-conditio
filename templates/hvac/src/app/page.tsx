"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowDownRight, ArrowUpRight, BadgeCheck, CalendarDays, Check, Clock3, MapPin, Phone, ShieldCheck, Star, Wrench } from "lucide-react"
import { config } from "@/lib/config"
import styles from "./page.module.css"

const serviceImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"]

export default function Home() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from("[data-nav]", { opacity: 0, y: -20, duration: .6 })
      .from("[data-kicker]", { opacity: 0, y: 24, duration: .55 }, "-=.25")
      .from("[data-title] span", { yPercent: 110, opacity: 0, stagger: .07, duration: .85 }, "-=.35")
      .from("[data-lead]", { opacity: 0, y: 24, duration: .65 }, "-=.5")
      .from("[data-actions] > *", { opacity: 0, y: 18, stagger: .1, duration: .5 }, "-=.4")
      .from("[data-proof] > *", { opacity: 0, y: 14, stagger: .08, duration: .45 }, "-=.3")
  }, { scope: root })

  return (
    <main ref={root} className={styles.site}>
      <nav data-nav className={styles.nav}>
        <a href="#top" className={styles.brand} aria-label="Virginia Mechanical home">
          <span className={styles.mark}><Wrench size={20} /></span>
          <span><b>VIRGINIA</b><small>MECHANICAL</small></span>
        </a>
        <div className={styles.navLinks}>
          <a href="#services">Services</a><a href="#story">About</a><a href="#reviews">Reviews</a>
        </div>
        <a className={styles.navCall} href={config.business.phoneHref}><Phone size={16} /> {config.business.phone}</a>
      </nav>

      <section id="top" className={styles.hero}>
        <div className={styles.heroImage}><img src="/hero-1.jpg" alt="Virginia Mechanical HVAC technician at work" /></div>
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />
        <div className={styles.heroCopy}>
          <div data-kicker className={styles.kicker}><span /> Tracy’s hometown comfort team · Since 1987</div>
          <h1 data-title><span>Comfort</span><span>should feel</span><span className={styles.script}>effortless.</span></h1>
          <p data-lead>Heating and air conditioning expertise for homes and businesses across the Central Valley—delivered with straight answers and neighborly care.</p>
          <div data-actions className={styles.actions}>
            <a className={styles.primary} href="#contact">Request an estimate <ArrowUpRight size={18} /></a>
            <a className={styles.secondary} href={config.business.phoneHref}><Phone size={18} /> Call {config.business.phone}</a>
          </div>
          <div data-proof className={styles.heroProof}>
            <div><strong>4.9</strong><span><Star size={13} fill="currentColor" /> 376 Google reviews</span></div>
            <div><strong>39+</strong><span>years serving neighbors</span></div>
            <div><strong>#929944</strong><span>licensed, bonded & insured</span></div>
          </div>
        </div>
        <a className={styles.scrollCue} href="#services"><span>Explore</span><ArrowDownRight size={20} /></a>
      </section>

      <section className={styles.promise}>
        <p>Residential comfort</p><span /> <p>Commercial confidence</p><span /> <p>Human service</p>
      </section>

      <section id="services" className={styles.services}>
        <header className={styles.sectionHead}>
          <div><span className={styles.eyebrow}>What we do</span><h2>Built around your comfort.</h2></div>
          <p>From a summer breakdown to a full commercial system, Virginia Mechanical brings four decades of practical expertise to every call.</p>
        </header>
        <div className={styles.serviceGrid}>
          {config.services?.map((service, i) => (
            <article className={styles.serviceCard} key={service.title}>
              <img src={serviceImages[i % serviceImages.length]} alt="" />
              <div className={styles.cardShade} />
              <span className={styles.cardNo}>0{i + 1}</span>
              <div><h3>{service.title}</h3><p>{service.desc}</p><a href="#contact">Get an estimate <ArrowUpRight size={16} /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className={styles.story}>
        <div className={styles.storyImage}><img src="/hero-3.jpg" alt="Heating and air conditioning service" /><span>Serving Tracy<br />since 1987</span></div>
        <div className={styles.storyCopy}>
          <span className={styles.eyebrow}>The Virginia Mechanical difference</span>
          <h2>Big-company capability.<br /><em>Family-business care.</em></h2>
          <p>For nearly four decades, local homeowners and businesses have trusted Virginia Mechanical to keep their spaces comfortable. The approach is simple: listen carefully, explain clearly, and do the work right.</p>
          <ul>
            <li><BadgeCheck /> Google Guaranteed home-service provider</li>
            <li><ShieldCheck /> Licensed, bonded and insured in California</li>
            <li><Check /> Residential and commercial expertise</li>
            <li><CalendarDays /> Financing available upon approved credit</li>
          </ul>
        </div>
      </section>

      <section id="reviews" className={styles.reviews}>
        <div className={styles.reviewIntro}><span className={styles.eyebrow}>Real words from real customers</span><h2>Trusted when comfort matters most.</h2><div className={styles.rating}><b>4.9</b><span>★★★★★<small>376 Google reviews</small></span></div></div>
        <div className={styles.reviewStack}>
          {config.testimonials?.map((review, i) => <blockquote key={review.name} className={styles.review}><span>“</span><p>{review.text}</p><footer><b>{review.name}</b><small>Verified customer</small><i>0{i + 1}</i></footer></blockquote>)}
        </div>
      </section>

      <section className={styles.areas}>
        <span className={styles.eyebrow}>Across the Central Valley</span><h2>Local service,<br />wherever you call home.</h2>
        <div>{config.business.serviceAreas.map(area => <span key={area}><MapPin size={13} /> {area}</span>)}</div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactCopy}><span className={styles.eyebrow}>Ready when you are</span><h2>Let’s make your space feel right again.</h2><p>Tell us what’s going on. The team will follow up during business hours to talk through the best next step.</p><div className={styles.hours}><Clock3 /><span><b>Business hours</b>{config.business.hours}</span></div></div>
        <form className={styles.form} action="/api/leads" method="post">
          <label>Your name<input name="name" required placeholder="Name" /></label>
          <div><label>Phone<input name="phone" type="tel" required placeholder="(209) 555-0123" /></label><label>Email<input name="email" type="email" placeholder="you@email.com" /></label></div>
          <label>How can we help?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{config.formServiceOptions?.map(x => <option key={x}>{x}</option>)}</select></label>
          <label>Tell us more<textarea name="message" rows={4} placeholder="What’s happening with your system?" /></label>
          <button type="submit">Request my estimate <ArrowUpRight size={18} /></button>
          <small>Prefer to talk? Call <a href={config.business.phoneHref}>{config.business.phone}</a></small>
        </form>
      </section>

      <footer className={styles.footer}><div className={styles.brand}><span className={styles.mark}><Wrench size={20} /></span><span><b>VIRGINIA</b><small>MECHANICAL</small></span></div><p>7553 Carmelo Ave · Tracy, CA 95304</p><p>© 2026 · CA License #929944</p></footer>
    </main>
  )
}
