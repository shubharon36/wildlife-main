# 🐾 Wildlife Sanctuary India

An immersive, animated web experience showcasing India's wildlife sanctuaries across geographical regions — built with Next.js and GSAP.

## ✨ Features

- **Cinematic Hero** — 3D sequence with ambient bird sounds and smooth scroll-driven animations
- **Interactive India Map** — SVG map with per-state hover info cards and region-based color coding
- **Explore by Regions** — Animated bubble navigation with side drawers for region details, habitat types, and featured sanctuary cards
- **Habitat & Species Distribution** — Data-driven charts and visual breakdowns
- **Sanctuary Timeline** — Historical overview of India's conservation milestones
- **Smooth Scrolling** — Lenis-powered buttery scroll with GSAP-driven reveal animations throughout

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16, React 19 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP, Motion (Framer Motion) |
| 3D | React Three Fiber, Drei |
| Scroll | Lenis |
| Icons | Lucide React |

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/shubharon36/wildlife-main.git
cd wildlife-main

# Install
npm install

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── components/
│   ├── explore/        # Region drawers, habitat cards, bubbles
│   ├── map/            # Interactive India SVG map
│   ├── footer/         # Footer with quote & credits
│   ├── HeroSequence    # 3D cinematic hero
│   └── ...             # Timeline, Distribution, Discover, etc.
├── data/               # Regions & states datasets
└── page.js             # Main page composition
```

