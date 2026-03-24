export type Lang = 'de' | 'en'

export const translations = {
  de: {
    nav: {
      history: 'Geschichte',
      people: 'Menschen',
      site: 'Gelände',
      gallery: 'Galerie',
      join: 'Mitmachen',
      contact: 'Kontakt',
      faq: 'FAQ',
      community: 'Community',
    },
    hero: {
      tagline: 'Von der Kreidefabrik zum Kulturdorf.',
      sub: 'Lengede, Niedersachsen',
      scroll: 'Mehr entdecken',
    },
    intro: {
      heading: 'Ein Ort, der sich neu erfindet.',
      body: 'Direkt an der Landstraße 619, irgendwo zwischen Woltwiesche und Barbecke, erheben sich rote Backsteinbauten über den Feldern. Die meisten Autofahrer nehmen sie kaum wahr. Wer länger hinschaut, erkennt mehr als Verfall — er erkennt ein Experiment: den Versuch, eine stillgelegte Kreide- und Kalkfabrik in ein lebendiges Kulturdorf zu verwandeln.',
      stat1: '86.000 m²',
      stat1label: 'Gelände',
      stat2: '1 €',
      stat2label: 'Kaufpreis 2013',
      stat3: 'seit 2016',
      stat3label: 'Eingetragener Verein',
    },
    timeline: {
      heading: 'Eine Geschichte in Schichten',
      sub: 'Kreide, Verfall und Wiedergeburt — 150 Jahre komprimiert.',
      events: [
        {
          year: '1946',
          title: 'Gründung',
          text: 'Die Hansen-Werke GmbH erwirbt das Steinbruchgelände in der Nachkriegszeit. Kreide und Kalk sind begehrte Baumaterialien.',
          img: null,
        },
        {
          year: '1962',
          title: 'Das Ende des Betriebs',
          text: 'Die Produktion hört auf. Größere, mechanisierte Betriebe machen die Hansen-Werke unwirtschaftlich. Die Gebäude bleiben stehen.',
          img: 'main-hall-wheatfield.png',
        },
        {
          year: '60 Jahre',
          title: 'Langsamer Verfall',
          text: 'Industrieabfälle, Hausmüll, illegale Entsorgung. Fenster brechen, Dächer werden undicht. Urban Explorer fotografieren die Ruinen.',
          img: 'farmhouse-aerial-decay.png',
        },
        {
          year: '1992',
          title: 'Naturschutzgebiet',
          text: 'Die alten Kreidegruben haben sich zu einem Teich gefüllt. Amphibien, Insekten, Wildpflanzen. Die Natur gewinnt zurück. Der Teich wird offiziell geschützt.',
          img: 'quarry-reeds.png',
        },
        {
          year: '2013',
          title: 'Kauf für 1 Euro',
          text: 'Nach jahrelangen Verhandlungen verkauft Erbe Nico Hansen das gesamte Gelände für einen symbolischen Euro an Levi Lewandowski. Eine Tür mit der Aufschrift "Anfang" öffnet sich.',
          img: 'anfang-door.png',
        },
        {
          year: '2013–',
          title: 'Aufbau',
          text: 'Schuttberge werden abgetragen, Substanz stabilisiert, Freiwillige strömen an. Langsam, beharrlich, von Hand.',
          img: 'early-cleanup-crane.png',
        },
        {
          year: '2016',
          title: 'Verein gegründet',
          text: 'Der Hansen-Werke e.V. wird eingetragen. Ein gemeinnütziger Verein für Kunst, Kultur, Natur und Gemeinschaft.',
          img: 'team-on-scaffolding.png',
        },
        {
          year: 'Heute',
          title: 'Kulturdorf im Werden',
          text: 'Garten, Kneipe, Werkstatt, Konzerte, Tiere, Gemeinschaft. Das Projekt ist immer im Werden.',
          img: 'aerial-yeah.png',
        },
      ],
    },
    people: {
      heading: 'Levi & die Menschen',
      sub: 'Hinter dem Projekt steckt eine ungewöhnliche Geschichte — und eine Gemeinschaft.',
      leviTitle: 'Levi Lewandowski',
      leviRole: 'Gründer & Visionär',
      leviText: 'Levi wuchs in Barbecke auf, einen Kilometer von den Hansen-Werken entfernt. Mit sechzehn Jahren hatte er die Idee, das verfallene Fabrikgelände zu kaufen. Er begann einfach damit, den verwilderten Obstgarten zu pflegen — ohne Erlaubnis, weil er es nicht ertragen konnte, die Bäume sterben zu sehen. Nach Jahren der Verhandlung kaufte er das gesamte 86.000-m²-Gelände 2013 für einen symbolischen Euro.',
      leviQuote: '"Auf Dorfebene gibt es für junge Leute keinen Ort, an den sie gehen, nichts, was sie tun können. Die Hansen-Werke sollen genau dieser Ort sein."',
      communityHeading: 'Gemeinschaft',
      communityText: 'Das Projekt ist weder eine Kommune noch eine Künstlerkolonie. Es ist ein Ort, an dem Menschen zusammenkommen, um mit den Händen zu arbeiten, Wissen zu teilen und alternatives Leben zu erproben — ohne sich von der Nachbarschaft zu isolieren.',
    },
    site: {
      heading: 'Das Gelände',
      sub: '86.000 m² in vier Welten.',
      areas: [
        {
          name: 'Hauptproduktionshalle',
          text: 'Der ikonische Klinker-Rechteckbau mit "HANSEN-WERKE"-Schrift. Zukünftig: Werkstätten, Ateliers, Veranstaltungsräume.',
          img: 'main-hall-good-morning.png',
        },
        {
          name: 'Hufeisengehöft',
          text: 'Das hufeisenförmige Gehöft am südlichen Ende. Wird schrittweise restauriert — Wohnraum und gemeinschaftlicher Treffpunkt.',
          img: 'farmhouse-exterior.png',
        },
        {
          name: 'Kalkturm & Silo',
          text: 'Der vertikale Turm, der bei Sonnenuntergang wie Bernstein leuchtet. Eines der markantesten Wahrzeichen des Geländes.',
          img: 'silo-golden-hour.png',
        },
        {
          name: 'Naturschutzgebiet',
          text: 'Die alten Kreidegruben, heute ein geschützter Teich umgeben von Schilf, Kalkfelsen und Wildwuchs. Bleibt unangetastet.',
          img: 'forest-sunlight.png',
        },
      ],
    },
    gallery: {
      heading: 'Galerie',
      sub: 'Architektur, Menschen, Natur — ein Ort in Bildern.',
      close: 'Schließen',
    },
    join: {
      heading: 'Mitmachen',
      sub: 'Das Projekt lebt von Menschen, die kommen und etwas beitragen.',
      volunteerTitle: 'Ehrenamtlich mitarbeiten',
      volunteerText: 'Ob Handwerk, Gartenarbeit, Veranstaltungsorganisation oder einfach Schaufeln — jede Hand hilft. Meld dich an und komm vorbei.',
      donateTitle: 'Spenden',
      donateText: 'Der Verein finanziert sich ohne institutionelle Förderung — durch Spenden, Ehrenamt und Eigeninitiative.',
      visitTitle: 'Besuchen',
      visitText: 'Das Gelände ist noch Baustelle. Bitte melde dich vor dem Besuch an — kein spontanes Erscheinen möglich.',
      ibanLabel: 'IBAN',
      bankLabel: 'Bank',
      ctaVolunteer: 'Anmelden',
      ctaDonate: 'Spenden',
      ctaVisit: 'Besuch anfragen',
    },
    contact: {
      heading: 'Kontakt',
      sub: 'Schreib uns, ruf an — oder fahr einfach die L619 entlang und schau.',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      addressLabel: 'Adresse',
      mapLink: 'Auf Google Maps öffnen',
      social: 'Social Media',
    },
    footer: {
      tagline: 'Ein autarkes Kulturdorf. Im Werden.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      registry: 'Amtsgericht Hildesheim · VerR 201082',
    },
    faq: {
      heading: 'Häufige Fragen',
      sub: 'Alles, was du über die Hansen-Werke wissen willst — ehrlich, direkt, ohne Bürokratendeutsch.',
      backLink: '← Zurück zur Startseite',
      ctaHeading: 'Frage nicht dabei?',
      ctaText: 'Schreib uns einfach. Wir antworten, sobald wir die Schaufel aus der Hand legen.',
      ctaButton: 'Frage stellen',
      categories: [
        {
          title: 'Das Projekt',
          icon: '🏭',
          items: [
            {
              q: 'Was sind die Hansen-Werke?',
              a: 'Eine ehemalige Kreide- und Kalkfabrik auf 86.000 m² in Lengede, Niedersachsen. Seit 2013 wird das verfallene Industriegelände Stück für Stück in ein autarkes Kulturdorf verwandelt — mit Werkstätten, Gärten, Veranstaltungsräumen und Gemeinschaftsleben.',
            },
            {
              q: 'Wer hat das Gelände gekauft — und warum für 1 €?',
              a: 'Levi Lewandowski hat das gesamte Gelände 2013 für einen symbolischen Euro vom Erben Nico Hansen erworben. Der Preis war symbolisch, weil das Gelände nach Jahrzehnten des Verfalls, illegaler Müllentsorgung und Kontamination einen negativen Marktwert hatte. Der Erbe suchte jemanden mit einer Vision — nicht einen Spekulanten.',
            },
            {
              q: 'Was ist das langfristige Ziel?',
              a: 'Ein lebendiges, offenes Kulturdorf: Werkstätten, Ateliers, Wohnraum, Veranstaltungshallen, Permakultur-Gärten, erneuerbare Energie — eine echte Gemeinschaft, die sich weitgehend selbst versorgt, aber offen für die Nachbarschaft bleibt. Kein Rückzugsort, kein geschlossener Zirkel.',
            },
          ],
        },
        {
          title: 'Verein & Recht',
          icon: '⚖️',
          items: [
            {
              q: 'Was ist der Hansen-Werke e.V.?',
              a: 'Ein 2016 gegründeter gemeinnütziger Verein (eingetragener Verein), registriert beim Amtsgericht Hildesheim unter VerR 201082. Zweck: Förderung von Kunst, Kultur, Natur und Gemeinschaft auf dem Gelände der ehemaligen Hansen-Werke.',
            },
            {
              q: 'Wie finanziert sich das Projekt?',
              a: 'Komplett ohne institutionelle Förderung. Das Projekt lebt von Spenden, ehrenamtlicher Arbeit und Eigeninitiative. Jeder Euro fließt direkt in den Aufbau. Spenden gehen an: Hansen-Werke e.V., IBAN DE35 4306 0967 4111 0732 00, GLS Bank.',
            },
            {
              q: 'Ist das Gelände Privatbesitz?',
              a: 'Ja. Das Gelände gehört Levi Lewandowski bzw. wird durch den Verein bewirtschaftet. Teile des Geländes — insbesondere der alte Steinbruchteich — stehen unter Naturschutz (seit 1992) und bleiben unangetastet.',
            },
          ],
        },
        {
          title: 'Besuchen & Mitmachen',
          icon: '🤝',
          items: [
            {
              q: 'Kann ich das Gelände besuchen?',
              a: 'Ja — aber nur nach vorheriger Anmeldung. Das Gelände ist eine aktive Baustelle. Spontane Besuche sind aus Sicherheitsgründen nicht möglich. Schreib einfach eine Mail an info@hansenwerke.net und wir finden einen Termin.',
            },
            {
              q: 'Wie kann ich helfen?',
              a: 'Auf viele Arten: vor Ort mitarbeiten (Handwerk, Garten, Aufräumen, Veranstaltungen), Geld spenden, Material spenden, das Projekt weitererzählen. Meld dich per Mail an info@hansenwerke.net — wir finden das Richtige für dich.',
            },
            {
              q: 'Gibt es Veranstaltungen?',
              a: 'Ja, regelmäßig: Konzerte, Gemeinschaftsabende, Workshops, Arbeitseinsätze. Aktuelle Termine findest du auf unserer Facebook- und Instagram-Seite oder per direkter Nachricht.',
            },
          ],
        },
        {
          title: 'Sicherheit & Zustand',
          icon: '🔒',
          items: [
            {
              q: 'Ist das Gelände sicher?',
              a: 'Es ist eine aktive Restaurierungsbaustelle. Einige Gebäude sind statisch gesichert, andere noch nicht. Genau deshalb müssen Besuche koordiniert werden — das Team weiß, welche Bereiche sicher begehbar sind und welche nicht.',
            },
            {
              q: 'Gibt es Altlasten oder Kontamination?',
              a: 'Das Gelände wurde über Jahrzehnte illegal als Müllhalde genutzt. Seit 2013 wird kontinuierlich aufgeräumt und saniert. Das Naturschutzgebiet hat sich von selbst erholt. Die vollständige Sanierung ist Teil der langfristigen Planung.',
            },
          ],
        },
        {
          title: 'Zukunft',
          icon: '🌱',
          items: [
            {
              q: 'Was passiert als Nächstes?',
              a: 'Das Projekt entwickelt sich ständig weiter. Aktuelle Schwerpunkte: Stabilisierung der Haupthalle, Ausbau des Gartens, Aufbau gemeinschaftlicher Infrastruktur. Es ist eine Vision, die Jahrzehnte umfasst — nicht Quartale.',
            },
            {
              q: 'Kann ich dort wohnen?',
              a: 'Das Hufeisengehöft wird schrittweise für Wohnnutzung restauriert. Wohnen auf dem Gelände könnte in Zukunft möglich sein, sobald die Restaurierung voranschreitet. Kontaktiere das Team für den aktuellen Stand.',
            },
          ],
        },
      ],
    },
    community: {
      heading: 'Werde Teil der Gemeinschaft',
      sub: 'Austausch, Planung, Fragen — alles an einem Ort. Offen für alle, die das Projekt begleiten wollen.',
      backLink: '← Zurück zur Startseite',
      elementHeading: 'Unser Treffpunkt: Element',
      elementText: 'Wir nutzen Element — eine offene, datenschutzfreundliche Chat-Plattform auf Basis des Matrix-Protokolls. Kein US-Konzern, keine Datensammelei. Kostenlos, auf jedem Gerät nutzbar.',
      elementButton: 'Space beitreten',
      elementNote: 'Open Source · Daten in der EU · Kostenlos',
      roomsHeading: 'Unsere Räume',
      rooms: [
        { name: '#allgemein', description: 'Der Hauptraum — zum Ankommen, Vorstellen und für alles, was sonst nirgends passt.' },
        { name: '#arbeitseinsätze', description: 'Termine koordinieren, Teams bilden, Werkzeug organisieren. Wer kommt wann, was wird gemacht?' },
        { name: '#veranstaltungen', description: 'Konzerte, Workshops, Gemeinschaftsabende — hier erfährst du, was ansteht.' },
        { name: '#ideen-und-projekte', description: 'Du hast eine Idee? Teile sie. Hier entstehen neue Projekte und Initiativen.' },
        { name: '#galerie', description: 'Fotos, Videos, Drohnenflüge — zeig, was du auf dem Gelände erlebst.' },
        { name: '#fragen', description: 'Keine Frage ist zu klein. Die Community hilft gern weiter.' },
      ],
      whyHeading: 'Warum Element?',
      whyItems: [
        { title: 'Open Source & transparent', text: 'Der Code ist offen einsehbar. Keine versteckten Algorithmen, keine Werbung.' },
        { title: 'Daten in der EU', text: 'Matrix-Server in Europa. Keine Daten bei US-Konzernen.' },
        { title: 'Überall nutzbar', text: 'Apps für iOS, Android, Desktop und Web. Ein Account, alle Geräte.' },
      ],
      ctaHeading: 'Lieber per Mail?',
      ctaText: 'Kein Problem. Nicht jeder mag Chat-Plattformen — wir sind auch per Mail erreichbar.',
      ctaButton: 'Mail schreiben',
    },
    imprint: {
      heading: 'Impressum',
      org: 'Hansen-Werke e.V.',
      address: 'Am Kalkbruch 1a, 38268 Lengede OT Woltwiesche',
      court: 'Amtsgericht Hildesheim, VerR 201082',
      email: 'info@hansenwerke.net',
      phone: '+49 1525 3877652',
    },
  },
  en: {
    nav: {
      history: 'History',
      people: 'People',
      site: 'The Site',
      gallery: 'Gallery',
      join: 'Get Involved',
      contact: 'Contact',
      faq: 'FAQ',
      community: 'Community',
    },
    hero: {
      tagline: 'From chalk factory to cultural village.',
      sub: 'Lengede, Lower Saxony',
      scroll: 'Explore more',
    },
    intro: {
      heading: 'A place reinventing itself.',
      body: "Right on rural road 619, somewhere between Woltwiesche and Barbecke, red brick buildings rise above the fields. Most drivers don't notice them. Those who look longer see more than decay — they see an experiment: the attempt to transform a decommissioned chalk and lime factory into a living cultural village.",
      stat1: '86,000 m²',
      stat1label: 'Site area',
      stat2: '1 €',
      stat2label: 'Purchase price, 2013',
      stat3: 'since 2016',
      stat3label: 'Registered association',
    },
    timeline: {
      heading: 'A History in Layers',
      sub: 'Chalk, decay and rebirth — 150 years compressed.',
      events: [
        {
          year: '1946',
          title: 'Foundation',
          text: 'Hansen-Werke GmbH acquires the quarry site in the postwar years. Chalk and lime are in high demand as building materials.',
          img: null,
        },
        {
          year: '1962',
          title: 'End of Operations',
          text: 'Production stops. Larger, mechanized operations make the Hansen-Werke uneconomical. The buildings remain standing.',
          img: 'main-hall-wheatfield.png',
        },
        {
          year: '60 years',
          title: 'Slow Decay',
          text: 'Industrial waste, household rubbish, illegal dumping. Windows shatter, roofs leak. Urban explorers photograph the ruins.',
          img: 'farmhouse-aerial-decay.png',
        },
        {
          year: '1992',
          title: 'Nature Reserve',
          text: 'The old chalk quarries have filled with water, forming a pond. Amphibians, insects, wild plants. Nature takes back. The pond is officially protected.',
          img: 'quarry-reeds.png',
        },
        {
          year: '2013',
          title: 'Bought for 1 Euro',
          text: 'After years of negotiations, heir Nico Hansen sells the entire site for one symbolic euro to Levi Lewandowski. A door marked "Anfang" — Beginning — opens.',
          img: 'anfang-door.png',
        },
        {
          year: '2013–',
          title: 'Building',
          text: 'Rubble is cleared, structures stabilized, volunteers arrive. Slowly, persistently, by hand.',
          img: 'early-cleanup-crane.png',
        },
        {
          year: '2016',
          title: 'Association Founded',
          text: 'Hansen-Werke e.V. is registered. A non-profit association for art, culture, nature and community.',
          img: 'team-on-scaffolding.png',
        },
        {
          year: 'Today',
          title: 'Cultural Village in Progress',
          text: 'Garden, bar, workshops, concerts, animals, community. The project is always becoming.',
          img: 'aerial-yeah.png',
        },
      ],
    },
    people: {
      heading: 'Levi & the People',
      sub: 'Behind the project is an unusual story — and a community.',
      leviTitle: 'Levi Lewandowski',
      leviRole: 'Founder & Visionary',
      leviText: "Levi grew up in Barbecke, one kilometre from the Hansen-Werke. At sixteen, he had the idea to buy the derelict factory site. He simply started tending the overgrown orchard — without permission, because he couldn't bear to watch the trees die. After years of negotiation, he purchased the entire 86,000-m² site in 2013 for one symbolic euro.",
      leviQuote: '"At the village level, there is no place for young people to go, nothing they can do. The Hansen-Werke should be exactly that place."',
      communityHeading: 'Community',
      communityText: "The project is neither a commune nor an artists' colony. It's a place where people come together to work with their hands, share knowledge, and experiment with alternative ways of living — without isolating from the surrounding community.",
    },
    site: {
      heading: 'The Site',
      sub: '86,000 m² across four worlds.',
      areas: [
        {
          name: 'Main Production Hall',
          text: 'The iconic clinker-brick rectangle with "HANSEN-WERKE" lettering. Future use: workshops, studios, event and exhibition spaces.',
          img: 'main-hall-good-morning.png',
        },
        {
          name: 'Horseshoe Farmhouse',
          text: 'The horseshoe-shaped farmhouse at the southern end. Being gradually restored — residential space and communal meeting point.',
          img: 'farmhouse-exterior.png',
        },
        {
          name: 'Lime Tower & Silo',
          text: 'The vertical tower that glows like amber at sunset. One of the most recognisable landmarks on the site.',
          img: 'silo-golden-hour.png',
        },
        {
          name: 'Nature Reserve',
          text: 'The old chalk quarries, now a protected pond surrounded by reeds, limestone cliffs and wild vegetation. Left untouched.',
          img: 'forest-sunlight.png',
        },
      ],
    },
    gallery: {
      heading: 'Gallery',
      sub: 'Architecture, people, nature — a place in pictures.',
      close: 'Close',
    },
    join: {
      heading: 'Get Involved',
      sub: 'The project lives from people who come and contribute something.',
      volunteerTitle: 'Volunteer',
      volunteerText: "Whether it's crafts, gardening, event organisation or simply shovelling — every pair of hands helps. Register and come by.",
      donateTitle: 'Donate',
      donateText: 'The association operates without institutional funding — through donations, volunteer work and self-initiative.',
      visitTitle: 'Visit',
      visitText: "The site is still a construction zone. Please contact us before visiting — spontaneous arrivals are not possible.",
      ibanLabel: 'IBAN',
      bankLabel: 'Bank',
      ctaVolunteer: 'Register',
      ctaDonate: 'Donate',
      ctaVisit: 'Request a visit',
    },
    contact: {
      heading: 'Contact',
      sub: "Write to us, call — or simply drive along the L619 and look.",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      mapLink: 'Open in Google Maps',
      social: 'Social Media',
    },
    footer: {
      tagline: 'An autonomous cultural village. In progress.',
      imprint: 'Imprint',
      privacy: 'Privacy',
      registry: 'Amtsgericht Hildesheim · VerR 201082',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      sub: 'Everything you want to know about the Hansen-Werke — honest, direct, no jargon.',
      backLink: '← Back to homepage',
      ctaHeading: "Question not listed?",
      ctaText: "Just write to us. We'll reply as soon as we put the shovel down.",
      ctaButton: 'Ask a question',
      categories: [
        {
          title: 'The Project',
          icon: '🏭',
          items: [
            {
              q: 'What are the Hansen-Werke?',
              a: 'A former chalk and lime factory spanning 86,000 m² in Lengede, Lower Saxony. Since 2013, the derelict industrial site has been gradually transformed into a self-sufficient cultural village — with workshops, gardens, event spaces and community life.',
            },
            {
              q: 'Who bought the site — and why for 1 €?',
              a: 'Levi Lewandowski purchased the entire site in 2013 for a symbolic euro from heir Nico Hansen. The price was symbolic because after decades of decay, illegal dumping and contamination, the site had a negative market value. The heir was looking for someone with a vision — not a speculator.',
            },
            {
              q: 'What is the long-term goal?',
              a: "A living, open cultural village: workshops, studios, housing, event halls, permaculture gardens, renewable energy — a real community that is largely self-sustaining but remains open to the surrounding neighbourhood. Not a retreat, not a closed circle.",
            },
          ],
        },
        {
          title: 'Association & Legal',
          icon: '⚖️',
          items: [
            {
              q: 'What is Hansen-Werke e.V.?',
              a: 'A non-profit association (eingetragener Verein) founded in 2016, registered at Amtsgericht Hildesheim under VerR 201082. Its purpose: promoting art, culture, nature and community on the grounds of the former Hansen-Werke.',
            },
            {
              q: 'How is the project funded?',
              a: 'Entirely without institutional funding. The project lives from donations, volunteer work and self-initiative. Every euro goes directly into building. Donations go to: Hansen-Werke e.V., IBAN DE35 4306 0967 4111 0732 00, GLS Bank.',
            },
            {
              q: 'Is the site privately owned?',
              a: 'Yes. The site belongs to Levi Lewandowski and is managed through the association. Parts of the site — particularly the old quarry pond — are a protected nature reserve (since 1992) and remain untouched.',
            },
          ],
        },
        {
          title: 'Visiting & Getting Involved',
          icon: '🤝',
          items: [
            {
              q: 'Can I visit the site?',
              a: "Yes — but only by prior arrangement. The site is an active construction zone. Spontaneous visits are not possible for safety reasons. Simply send an email to info@hansenwerke.net and we'll find a time.",
            },
            {
              q: 'How can I help?',
              a: 'In many ways: work on site (crafts, gardening, clearing, events), donate money, donate materials, spread the word. Get in touch via info@hansenwerke.net — we\'ll find the right thing for you.',
            },
            {
              q: 'Are there events?',
              a: 'Yes, regularly: concerts, community evenings, workshops, work days. Check our Facebook and Instagram pages for current dates, or reach out directly.',
            },
          ],
        },
        {
          title: 'Safety & Condition',
          icon: '🔒',
          items: [
            {
              q: 'Is the site safe?',
              a: "It's an active restoration site. Some buildings are structurally secured, others are not yet. That's exactly why visits must be coordinated — the team knows which areas are safe to enter and which are not.",
            },
            {
              q: 'Are there contaminants or hazardous materials?',
              a: 'The site was used as an illegal dump for decades. Cleanup has been ongoing since 2013. The nature reserve area has recovered on its own. Full remediation is part of the long-term plan.',
            },
          ],
        },
        {
          title: 'Future',
          icon: '🌱',
          items: [
            {
              q: 'What happens next?',
              a: "The project is constantly evolving. Current priorities: stabilising the main hall, expanding the garden, building communal infrastructure. This is a vision spanning decades — not quarters.",
            },
            {
              q: 'Can I live there?',
              a: 'The horseshoe farmhouse is being gradually restored for residential use. Living on site may become possible as restoration progresses. Contact the team for the current status.',
            },
          ],
        },
      ],
    },
    community: {
      heading: 'Join the Community',
      sub: 'Discussion, planning, questions — all in one place. Open to everyone who wants to follow the project.',
      backLink: '← Back to homepage',
      elementHeading: 'Our meeting point: Element',
      elementText: "We use Element — an open, privacy-friendly chat platform based on the Matrix protocol. No US corporation, no data harvesting. Free to use, works on every device.",
      elementButton: 'Join the Space',
      elementNote: 'Open Source · Data in the EU · Free',
      roomsHeading: 'Our Rooms',
      rooms: [
        { name: '#general', description: "The main room — for introductions, general chat, and everything that doesn't fit elsewhere." },
        { name: '#work-days', description: 'Coordinate dates, form teams, organise tools. Who comes when, what needs doing?' },
        { name: '#events', description: "Concerts, workshops, community evenings — find out what's coming up." },
        { name: '#ideas-and-projects', description: 'Got an idea? Share it. This is where new projects and initiatives are born.' },
        { name: '#gallery', description: 'Photos, videos, drone flights — show what you experience on the site.' },
        { name: '#questions', description: 'No question is too small. The community is happy to help.' },
      ],
      whyHeading: 'Why Element?',
      whyItems: [
        { title: 'Open Source & transparent', text: 'The code is publicly available. No hidden algorithms, no advertising.' },
        { title: 'Data in the EU', text: 'Matrix servers in Europe. No data with US corporations.' },
        { title: 'Use anywhere', text: 'Apps for iOS, Android, desktop and web. One account, all devices.' },
      ],
      ctaHeading: 'Prefer email?',
      ctaText: "No problem. Not everyone likes chat platforms — we're reachable by email too.",
      ctaButton: 'Send an email',
    },
    imprint: {
      heading: 'Imprint',
      org: 'Hansen-Werke e.V.',
      address: 'Am Kalkbruch 1a, 38268 Lengede OT Woltwiesche',
      court: 'Amtsgericht Hildesheim, VerR 201082',
      email: 'info@hansenwerke.net',
      phone: '+49 1525 3877652',
    },
  },
}
