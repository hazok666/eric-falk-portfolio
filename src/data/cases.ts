import bossImage from "@/imports/BOSS.webp";
import bossImg1 from "@/imports/2025_BOSS_x_AMF1_immersive_spatial_experience_16x9_001__original_kopiera.webp";
import bossImg2 from "@/imports/2025_BOSS_x_AMF1_immersive_spatial_experience_16x9_002__original_kopiera.webp";
import bossImg3 from "@/imports/2025_BOSS_x_AMF1_immersive_spatial_experience_16x9_003__original_kopiera.webp";
import bossImg4 from "@/imports/2025_BOSS_x_AMF1_immersive_spatial_experience_16x9_004__original_kopiera.webp";
import burberryImage from "@/imports/Burberry_cover.webp";
import dinaImage from "@/imports/Dina_Fo_rsa_kringar_KV_dator_1200x1200px.webp";
import dinaPrint from "@/imports/DINA_PRINT_MOCK-UP_BIL.webp";
import unileverKV from "@/imports/Unilever_WC_KV.webp";
import unileverArrive from "@/imports/Unilever_WC_00a_arrive.webp";
import unileverEnter from "@/imports/Unilever_WC_00b_enter.webp";
import unileverHouse from "@/imports/Unilever_WC_00c_house.webp";
import unileverSpray from "@/imports/Unilever_WC_01_spray.webp";
import unileverAiStation from "@/imports/Unilever_WC_02_ai_station.webp";
import unileverMakeItYours from "@/imports/Unilever_WC_03_make_it_yours.webp";
import unileverPrint from "@/imports/Unilever_WC_04_print.webp";
import unileverCollect from "@/imports/Unilever_WC_05_collect.webp";
import unileverWear from "@/imports/Unilever_WC_06_wear.webp";
import ikeaImage from "@/imports/IKEA_COVER.webp";
import trialLoanImage from "@/imports/IMG_7190.webp";
import fjallfillImage from "@/imports/Fjallfil_squarespace_cover.webp";
import vbImage from "@/imports/VB_COVER.webp";
import vbPng from "@/imports/VB_png2.webp";
import rfsuImage from "@/imports/RFSU_COVER.webp";
import rfsuPrint from "@/imports/RFSU_print.webp";
import rfsu2 from "@/imports/RFSU2_RFSU.webp";
import rfsu3 from "@/imports/RFSU3_RBG.webp";
import rfsu4 from "@/imports/RFSU4_RBG.webp";

export interface Credit {
  label: string;
  value: string;
}

export interface Quote {
  text: string;
  author: string;
  role: string;
}

export interface Media {
  type: "vimeo" | "image";
  src: string | unknown;
  title?: string;
  /** "story" = 3-column grid of 16:9 photos with captions, in reading order */
  layout?: "full" | "third" | "story";
  caption?: string;
}

export interface Case {
  id: string;
  category: string;
  client: string;
  title: string;
  tagline: string;
  brief: string;
  idea: string;
  execution: string;
  quote?: Quote;
  results?: string;
  role: string;
  year: string;
  credits: Credit[];
  media?: Media[];
  image: string | unknown;
  imagePosition?: string;
}

export const cases: Case[] = [
  {
    id: "boss-vision-pro",
    category: "Spatial Experience",
    client: "BOSS × EPAM",
    title: "BOSS — Step Inside the Mind of a Boss",
    tagline: "We took fans inside the mind of a BOSS, powered by Apple Vision Pro.",
    brief:
      "HUGO BOSS approached Empathy Lab and EPAM to cement its position as the world's leading premium, tech-driven fashion brand. The world of motor racing is notoriously inaccessible. With the Aston Martin Aramco Formula One® Team, we set out to turn the unattainable into the unforgettable. By fusing precision engineering, the thrill of speed and emotional storytelling, our goal was to create an experience that pushes the limits of innovation, reshaping fan engagement and raising the bar for how luxury brands connect with audiences everywhere.",
    idea:
      "Transforming fan engagement takes more than technology. It takes artistry, insight and precision. We assembled a multidisciplinary team of creatives, UX/UI designers, 3D artists, sound engineers, VFX specialists and developers with deep expertise in spatial computing, AR/VR and gaming. We started with research to explore the emotional connection fans have with the sport. Storytelling was paramount. From there, rapid prototyping and creative experimentation allowed us to explore how spatial computing could unlock deeper immersion. Spatial technology gave us the perfect canvas, experienced through Apple Vision Pro in an elevated, in-store-only installation. Coupled with Unity's game engine, we designed a cinematic journey into the mind of a motor racing driver.",
    execution:
      "We brought Step Inside the Mind of a Boss to life as an exclusive two-week global activation at BOSS halo stores in seven iconic cities: London, Paris, Düsseldorf, Barcelona, Las Vegas, Dubai and Singapore. Guided by store associates, visitors wore Apple Vision Pro headsets to be transported into the minds of Aston Martin Aramco drivers Fernando Alonso and Lance Stroll. From precision visual targeting exercises to 3D spatial puzzles inspired by strategic race decisions, every step demanded sharp focus and split-second reflexes. The experience culminated in a breathtaking Test Lap in the AMR25. Built natively for Apple Vision Pro and powered by Unity, weaving spatial realism, real-time rendering, physics simulation and immersive audio into every moment.",
    results: "Record-breaking in-store engagement globally · Significant uplift in brand affinity and social amplification · Higher dwell time across all seven markets",
    role: "Creative Director",
    year: "2025",
    credits: [
      { label: "Technology", value: "Apple Vision Pro · Unity" },
      { label: "Partner", value: "EPAM Empathy Lab" },
      { label: "Collaborators", value: "HUGO BOSS · Aston Martin Aramco F1® Team · Apple" },
      { label: "Launch", value: "October 2, 2025" },
      { label: "Markets", value: "London · Paris · Düsseldorf · Barcelona · Las Vegas · Dubai · Singapore" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/1194032721?h=5d6405228f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479", title: "BOSS — Step Inside the Mind of a Boss" },
      { type: "image", src: bossImg1 },
      { type: "image", src: bossImg2 },
      { type: "image", src: bossImg3 },
      { type: "image", src: bossImg4 },
    ],
    image: bossImage,
  },
  {
    id: "unilever-world-cup",
    category: "Phygital Experience",
    client: "Unilever × EPAM",
    title: "Unilever × World Cup",
    tagline: "Create Your Fit: fans sprayed, AI styled, and 600+ one-of-a-kind jerseys were printed on the spot at the FIFA World Cup 2026™.",
    brief:
      "The FIFA World Cup 2026™ is Unilever's biggest-ever sports partnership. In New York City and Miami, its House of Fresh creator hubs put Rexona, Dove and Dove Men+Care at the heart of football culture. Coca-Cola, adidas and FIFA itself competed for the same attention, in the same city, in the same weeks. The ask: first-of-its-kind technology with AI and personalisation at its core. Brand presence that didn't feel promotional, and a reason for creators to make, wear and share.",
    idea:
      "Football fandom is collective. Self-expression is individual. We set out to connect the two. Robots, light installations and AR were all on the table. But anything the room can't see isn't shareable, and a spectacle stays in the building. A memento leaves it. So we turned every creator into a designer: spray your own graffiti, let AI turn it into a one-of-a-kind jersey, and walk out wearing it.",
    execution:
      "Create Your Fit was a guided journey inside House of Fresh. At the Graffiti Station, guests picked up a phygital spray can, wrapped as Rexona, Dove or Dove Men+Care, and painted freehand on an LED canvas. At the AI Station, Google's Nano Banana 2 reinterpreted each sketch in six custom styles, from Retro and Street to Anime Panel, with every design checked against Unilever and FIFA guidelines. Anything that broke a rule was corrected, never rejected. Guests added their name and number, and minutes later collected a premium printed jersey in a House of Fresh gift box.",
    results: "600+ creators · 600+ one-of-a-kind jerseys · 1M+ social media interactions · Top visited experience in House of Fresh",
    role: "Idea & Concept",
    year: "2026",
    credits: [
      { label: "Activation", value: "Create Your Fit" },
      { label: "Agency", value: "EPAM Empathy Lab" },
      { label: "Partners", value: "Made Real Lab · EPAM Physical Technology · Graffiti Plus" },
      { label: "Technology", value: "Google Cloud · Nano Banana 2 · Unity" },
      { label: "Brands", value: "Rexona · Dove · Dove Men+Care" },
      { label: "Location", value: "House of Fresh, New York City & Miami" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/1241285803?h=8f4fe9820d&badge=0&autopause=0&player_id=0&app_id=58479", title: "Unilever x World Cup" },
      { type: "image", src: unileverArrive, layout: "story", caption: "Arrive" },
      { type: "image", src: unileverEnter, layout: "story", caption: "Step inside" },
      { type: "image", src: unileverHouse, layout: "story", caption: "House of Fresh" },
      { type: "image", src: unileverSpray, layout: "story", caption: "Spray your graffiti" },
      { type: "image", src: unileverAiStation, layout: "story", caption: "AI styles it" },
      { type: "image", src: unileverMakeItYours, layout: "story", caption: "Make it yours" },
      { type: "image", src: unileverPrint, layout: "story", caption: "Printed live" },
      { type: "image", src: unileverCollect, layout: "story", caption: "Collect your box" },
      { type: "image", src: unileverWear, layout: "story", caption: "Wear it" },
    ],
    image: unileverKV,
    imagePosition: "35% center",
  },
  {
    id: "burberry-innovation",
    category: "Fashion + Futures",
    client: "Burberry × EPAM",
    title: "Burberry Innovation Day",
    tagline: "A future-facing exploration of loyalty, personalization and customer experience.",
    brief:
      "Once a year, Burberry convenes an Innovation Day: a structured process for identifying what comes next for the brand. EPAM Empathy Lab was invited to host the 2023 edition. The starting point was open: fifty technology-enabled ideas, all plausible, none yet proven. The mandate was to get to three.",
    idea:
      "Rather than a conventional pitch process, we built a collaborative refinement framework. Each round of ideas was stress-tested against a single question: does this move the brand closer to its customer in 2030? The result was a deliberate narrowing, from fifty to eighteen and eighteen to three, with each stage sharpening rather than discarding.",
    execution:
      "The three finalist concepts addressed loyalty, personalisation, and the future of in-store and online customer experience. Each was backed by proof-of-concept prototyping, developed in collaboration with Burberry's own Innovation Champions. The day included a teaser film and an Open Spaces Runway Experience that made the ideas tangible.",
    role: "Creative Lead",
    year: "2023",
    credits: [
      { label: "Client", value: "Burberry" },
      { label: "Host", value: "EPAM Empathy Lab" },
      { label: "Date", value: "November 22, 2023" },
      { label: "Deliverables", value: "Innovation Day · Teaser film · Runway Experience" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/1000383165?title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Burberry Innovation Day — Teaser" },
      { type: "vimeo", src: "https://player.vimeo.com/video/1079712416?title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Burberry — Open Spaces Runway Experience" },
      { type: "vimeo", src: "https://player.vimeo.com/video/1000381688?title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Burberry Innovation Day 2023" },
    ],
    image: burberryImage,
  },
  {
    id: "dina-test-lab",
    category: "Campaign Platform",
    client: "Dina Försäkringar",
    title: "Dina Försäkringar — Test Lab",
    tagline: "A vibrant test-lab world for a brand built around preparing for the unexpected.",
    brief:
      "Insurance advertising tends to default to reassurance: soft music, smiling families, fine print. Dina Försäkringar wanted something that stood out within a category built on caution. The brief: show what insurance actually covers, in the most direct and entertaining way possible.",
    idea:
      "We built a fictional test lab, a world where Dina's team methodically staged real-life disasters to verify their policies worked. Fire. Hockey puck cannons. Computers destroyed on command. The logic was simple: if the lab tests it, the insurance covers it. The lab became the brand.",
    execution:
      "Three films, each built around a different scenario: Cycle, Slap Shot, and Computer. Produced by HOBBY Film and directed by Magnus Renfors, the campaign leaned into practical stunts and genuine physical destruction. No CGI, no euphemism. The green brand identity threaded through every set and costume.",
    quote: {
      text: "Fire. Explosions. Hockey puck cannons. Honestly, what's not to love?",
      author: "Magnus Renfors",
      role: "Director",
    },
    role: "Art Director",
    year: "2018",
    credits: [
      { label: "Agency", value: "Emakina" },
      { label: "Production", value: "HOBBY Film" },
      { label: "Director", value: "Magnus Renfors" },
      { label: "Films", value: "Cycle · Slap Shot · Computer" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/1221116239?h=4f817916de&title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Dina Försäkringar — Cycle" },
      { type: "vimeo", src: "https://player.vimeo.com/video/1221116238?h=4c390d58eb&title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Dina Försäkringar — Slap Shot" },
      { type: "vimeo", src: "https://player.vimeo.com/video/1221116240?h=c8571309f8&title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Dina Försäkringar — Computer" },
      { type: "image", src: dinaPrint, layout: "full" },
    ],
    image: dinaImage,
    imagePosition: "top",
  },
  {
    id: "ikea-midsommar",
    category: "Film",
    client: "IKEA Germany",
    title: "IKEA — Midsommar Wahnsinns Preise",
    tagline: "A deliberately unexpected take on IKEA Germany's midsummer sale campaign.",
    brief:
      "IKEA Germany's midsummer sale had always been handled with the familiar warmth of Swedish advertising: cosy, approachable, tonally safe. The ask was to make something that felt right for the German market without abandoning what makes IKEA IKEA. The catch: it had to be genuinely bold.",
    idea:
      "Rather than export Swedish cosiness to a different culture, we went somewhere neither market had been before. The campaign didn't explain itself or apologise for its tone. It committed fully to an unexpected register that the brand had never quite occupied.",
    execution:
      "Developed with agency King and produced by Traktor, the campaign delivered a long version plus four 30\" spots. Each piece held the same deliberate strangeness, making the collection feel like a genuine creative stance rather than a one-off experiment.",
    role: "Art Director / Creative",
    year: "2016",
    credits: [
      { label: "Agency", value: "King" },
      { label: "Production", value: "Traktor" },
      { label: "Deliverables", value: "Long version · 4×30\" spots" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/192279986?title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "IKEA — Midsommar Wahnsinns Preise" },
    ],
    image: ikeaImage,
  },
  {
    id: "vasterbottensost",
    category: "Outdoor Campaign",
    client: "Västerbottensost",
    title: "Västerbottensost — Conspiracy Theories",
    tagline: "The cheese nobody can explain. So we made that the campaign.",
    brief:
      "Västerbottensost has a genuine mystery at its core: nobody, not even NASA scientists, has been able to identify why it tastes the way it does. The cheese is produced once a year, in a single village in northern Sweden, and every attempt to replicate or explain its flavour has failed. The brief was to launch a new product variant without losing what makes the original brand extraordinary.",
    idea:
      "We made the mystery the campaign. Rather than explain the cheese or dress it up in Nordic lifestyle imagery, we invited the public to submit their own theories about why it tastes the way it does. The brand became an open forum for the genuinely strange. We didn't need to invent the content. We just needed to give people permission to be weird about it.",
    execution:
      "An outdoor and digital campaign seeded the conspiracy theory platform, inviting submissions from across Sweden. The resulting content was stranger and more compelling than anything we could have written ourselves. The audience did the creative work. We gave them the framework, the brief, and the audacity to take it seriously.",
    role: "Art Director",
    year: "2017",
    credits: [
      { label: "Copywriter", value: "Staffan Ryberg" },
      { label: "Format", value: "Outdoor · Digital · UGC platform" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/192295331?title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Västerbottensost — Conspiracy Theories" },
      { type: "image", src: vbPng, layout: "full" },
    ],
    image: vbImage,
  },
  {
    id: "rfsu-mix-pack",
    category: "Outdoor & Print Campaign",
    client: "RFSU",
    title: "RFSU — Mix Pack",
    tagline: "A playful, unapologetically fun outdoor and print campaign inspired by the language of old adult 70's cinema.",
    brief:
      "RFSU is a sex-positive, politically and religiously independent non-profit with a long history of honest, direct communication about sexual health. The brief was as uncomplicated as it gets: sex is fun. Portray that. Make it feel good to look at.",
    idea:
      "We drew from the visual language of vintage adult cinema from the 1970s: soft focus, warm analogue palettes, unhurried compositions, an atmosphere of cheerful confidence. The reference wasn't ironic. It was genuinely the right aesthetic for a campaign that wanted to feel warm, human, and unembarrassed.",
    execution:
      "Shot by Andreas Sjödin, the outdoor campaign ran without a copywriter. The images did everything. The art direction by Alexander Elers, Patrik Reuterskiöld, and Eric Falk kept every frame in the same tonal register: playful without being juvenile, explicit in concept but tasteful in execution.",
    role: "Art Director",
    year: "2017",
    credits: [
      { label: "Photography", value: "Andreas Sjödin" },
      { label: "Art Direction", value: "Alexander Elers · Patrik Reuterskiöld · Eric Falk" },
      { label: "Format", value: "Outdoor / OOH · Print" },
    ],
    media: [
      { type: "image", src: rfsuPrint, layout: "full" },
      { type: "image", src: rfsu2, layout: "third" },
      { type: "image", src: rfsu3, layout: "third" },
      { type: "image", src: rfsu4, layout: "third" },
    ],
    image: rfsuImage,
    imagePosition: "50% 80%",
  },
  {
    id: "fjallfil",
    category: "Social Film",
    client: "Fjällfil",
    title: "Sweden's Highest Tasting",
    tagline: "Took a yogurt to the top of Sweden. 3.2 million people followed.",
    brief:
      "Fjällfil launched two new flavours, Cloudberry and Birch sap, and needed a campaign that felt as distinctly northern Swedish as the product itself. The brief was to create genuine interest in a low-involvement category, on platforms where content had to earn its keep.",
    idea:
      "We took the tasting to the top of Sweden. Literally. A five-episode series filmed at the summit of Kebnekaise, Sweden's highest mountain, turning a simple product launch into an episodic event. The idea was absurd enough to be watchable and true enough to earn trust.",
    execution:
      "Produced with Thelma & Louis, the series ran across YouTube and Facebook as episodic content. Each episode followed the journey upward, with the tasting itself as the payoff. Seventeen people sampled the product on-location. 3.2 million watched from home.",
    results: "3.2M+ views · 30% social follower growth",
    role: "Art Director",
    year: "2015",
    credits: [
      { label: "Copywriter", value: "Adam Strandberg" },
      { label: "Production", value: "Thelma & Louis" },
      { label: "Platform", value: "YouTube · Facebook" },
      { label: "Episodes", value: "5" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/192159644?title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Sweden's Highest Tasting — EP01" },
    ],
    image: fjallfillImage,
  },
  {
    id: "ikano-trial-loan",
    category: "Social Film",
    client: "Ikano Bank",
    title: "Ikano Bank — Trial Loan",
    tagline: "A contextual borrowing concept for the things customers dream of trying before buying.",
    brief:
      "Loan products are hard to sell emotionally. The decision to borrow money is rational, cautious, often anxious. Ikano Bank needed a campaign that made the prospect feel lighter, something that addressed the hesitation without dismissing it.",
    idea:
      "Trial Loans. Before you borrow money to buy something, try the thing first. A jacuzzi for a weekend. A 1980s Porsche for an afternoon. A summer house for a few days. The experience would make the case better than any claim could. Desire confirmed through proof, not promise.",
    execution:
      "Director Jonas Helgeson and production company Thelma & Louis brought each scenario to life across social media. The films were contextual by design, placed where people were already thinking about the things they wanted. Kristin Bergem and Eric Falk wrote and directed the creative.",
    role: "Art Director",
    year: "2020",
    credits: [
      { label: "Copywriter", value: "Kristin Bergem" },
      { label: "Director", value: "Jonas Helgeson / Thelma & Louis" },
      { label: "Format", value: "Social media campaign" },
    ],
    media: [
      { type: "vimeo", src: "https://player.vimeo.com/video/192293534?title=0&byline=0&portrait=0&badge=0&autopause=0&app_id=58479", title: "Ikano Bank — Trial Loan" },
    ],
    image: trialLoanImage,
  },
];
