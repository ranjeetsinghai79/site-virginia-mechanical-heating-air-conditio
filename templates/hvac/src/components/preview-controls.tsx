"use client"

import { useEffect, useState } from "react"

type Flags = { siteEnabled: boolean; aiSalespersonEnabled: boolean }
const defaults: Flags = { siteEnabled: true, aiSalespersonEnabled: true }

export function PreviewControls({ children }: { children: React.ReactNode }) {
  const [flags, setFlags] = useState(defaults)

  useEffect(() => {
    let active = true
    const load = () => fetch(`/feature-flags.json?t=${Date.now()}`, { cache: "no-store" })
      .then(r => r.ok ? r.json() : defaults)
      .then(next => { if (active) setFlags({ ...defaults, ...next }) })
      .catch(() => {})
    load()
    const timer = window.setInterval(load, 60_000)
    return () => { active = false; window.clearInterval(timer) }
  }, [])

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-webcrew-widget="true"]')
    const host = document.getElementById("webcrew-ai-widget-host")
    if (!flags.aiSalespersonEnabled) {
      existing?.remove()
      host?.remove()
      delete (window as Window & { __webcrewWidgetLoaded?: boolean }).__webcrewWidgetLoaded
      return
    }
    if (existing || host) return
    const script = document.createElement("script")
    script.src = "/widget.js"
    script.async = true
    script.dataset.webcrewWidget = "true"
    script.dataset.config = "d29a1e22-529b-474e-a176-14422d413612"
    script.dataset.ws = "wss://ai-reception-459352382653.us-central1.run.app/widget-ws"
    script.dataset.name = "Virginia Mechanical Assistant"
    script.dataset.accent = "#1478a6"
    script.dataset.dark = "#102a38"
    script.dataset.autoOpen = "true"
    document.body.appendChild(script)
  }, [flags.aiSalespersonEnabled])

  if (!flags.siteEnabled) return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#102a38",color:"white",fontFamily:"system-ui",textAlign:"center",padding:"2rem"}}><div><h1>Preview temporarily unavailable</h1><p>This private website preview has been paused.</p></div></main>
  return <>{children}</>
}
