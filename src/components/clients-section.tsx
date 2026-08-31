const clients = [
  { name: "CoFoundersLab", sector: "Startup Network", result: "+312% signups" },
  { name: "UpFounder", sector: "Founder Media", result: "18M organic views" },
  { name: "ZeeWork", sector: "Future of Work", result: "4.1x pipeline" },
  { name: "Miracle Regenerative Center", sector: "Healthcare", result: "+220% bookings" },
  { name: "U-Topia", sector: "Hospitality", result: "Sold out launch" },
  { name: "Astra Healthcare", sector: "Health Systems", result: "+96% brand recall" },
  { name: "Vymune", sector: "Wellness / CPG", result: "$2.4M creator-led rev" },
];

export function ClientsSection() {
  return (
    <section className="border-t border-border bg-background py-24" id="clients">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-primary">
              Previous clients
            </p>
            <h2 className="mt-4 text-4xl sm:text-6xl">
              Brands we've
              <br />
              <span className="text-acid">put on the map</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From venture-backed startups to regenerative medicine, we build attention engines
            that move real business metrics.
          </p>
        </div>

        <div className="mt-14 border-t border-border">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="group grid grid-cols-1 items-center gap-2 border-b border-border py-6 transition-colors hover:bg-card sm:grid-cols-12 sm:gap-6"
            >
              <span className="font-mono text-xs text-muted-foreground sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl transition-colors group-hover:text-primary sm:col-span-6 sm:text-3xl">
                {client.name}
              </h3>
              <span className="text-sm text-muted-foreground sm:col-span-3">
                {client.sector}
              </span>
              <span className="font-display text-sm uppercase text-primary sm:col-span-2 sm:text-right">
                {client.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
