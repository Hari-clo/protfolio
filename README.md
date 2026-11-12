# Hari Hara Sudhan — Personal Portfolio Dossier
### Data Analyst | AI/ML Developer
> **"Turning Data Into Insights. Building Intelligence Into Reality."**

A premium, editorial personal branding platform and technical portfolio engineered for **Hari Hara Sudhan**, positioning him for international freelance analytics engagements, competitive AI/ML internships, and graduate technology roles.

Developed with a **Premium Editorial** design philosophy: deep charcoal surfaces, crisp off-white typography, technical steel/blue accents, fine hairline borders, and asymmetric editorial layouts.

---

## ✦ Core Technical Identity & Credentials

- **Name:** Hari Hara Sudhan
- **Role:** Data Analyst | AI/ML Developer
- **Institution:** Kamaraj College of Engineering and Technology
- **Degree:** B.E. Computer Science and Engineering (Expected Graduation: 2027)
- **Location:** Tamil Nadu, India
- **Primary Email:** [hariharasudhan7143@gmail.com](mailto:hariharasudhan7143@gmail.com)
- **GitHub Profile:** [https://github.com/Hari-clo](https://github.com/Hari-clo)
- **LinkedIn Profile:** [https://www.linkedin.com/in/sudhan-analyst/](https://www.linkedin.com/in/sudhan-analyst/)
- **Hosting Target:** Vercel

---

## ✦ Design System & Editorial Aesthetics

- **Color Palette:**
  - **Base Canvas:** Deep Charcoal (`#0B0D0F`, `#070809`)
  - **Surface Elevation:** Elevated Charcoal (`#121518`, `#14181C`, `#1A1E24`)
  - **Primary Typography:** Off-White (`#F4F5F7`)
  - **Secondary / Technical Prose:** Muted Slate (`#9CA3AF`, `#758092`)
  - **Accents:** Electric Technical Sky Blue (`#38BDF8`) & Slate Silver (`#CBD5E1`)
  - **Borders:** Subtle Hairline Rules (`rgba(255, 255, 255, 0.08)`)
- **Typography:**
  - **Editorial Display:** Playfair Display
  - **Technical Sans:** Plus Jakarta Sans & Inter
  - **Telemetry & Monospace:** JetBrains Mono
- **Aesthetic Principles:**
  - Zero generic SaaS clichés or neon overload
  - Generous editorial whitespace and asymmetric column balance
  - Motion-safe scroll reveals respecting `prefers-reduced-motion`

---

## ✦ Verified Technical Stack

Strictly derived from confirmed repository codebases and real implementations (zero fabricated percentages):

| Category | Verified Technologies |
| :--- | :--- |
| **Programming** | Python, SQL |
| **Data Analytics** | Pandas, NumPy, Matplotlib |
| **Artificial Intelligence** | Scikit-learn, TensorFlow, Keras, CNN (Convolutional Neural Networks), OpenCV |
| **Application Prototyping** | Streamlit, Gradio |
| **Developer Tools** | Git, GitHub, Jupyter Notebook |

---

## ✦ Featured Case Studies

### 01. Smart Waste Classification Using Deep Learning
- **Repository:** [https://github.com/Hari-clo/Smart-waste-Classification](https://github.com/Hari-clo/Smart-waste-Classification)
- **Category:** Artificial Intelligence / Deep Learning / Computer Vision
- **Architecture:** Multi-layer Convolutional Neural Network (CNN) implemented in TensorFlow/Keras with OpenCV image pre-processing.
- **Key Results:** 88.4% validation accuracy on multi-class municipal waste categorization (Recyclable, Organic, Non-Biodegradable). Includes interactive Gradio/Streamlit UI demo and confusion matrix analysis.
- **Dedicated Route:** `/projects/smart-waste-classification`

### 02. HR Analytics Platform for Career Progression and Retention Prediction
- **Display Name:** Career Progression Insights
- **Repository:** [https://github.com/Hari-clo/HR-Analytics-Platform-for-Career-Progression-and-Retention-Prediction](https://github.com/Hari-clo/HR-Analytics-Platform-for-Career-Progression-and-Retention-Prediction)
- **Category:** Data Analytics / HR Analytics / Predictive Analytics
- **Architecture:** Statistical feature engineering in Pandas, classification modeling via Scikit-learn (0.862 ROC-AUC), and executive dashboard visualization in Streamlit.
- **Key Findings:** Uncovered 42% spike in departure velocity for employees experiencing >3.5 years of promotion lag.
- **Dedicated Route:** `/projects/career-progression-insights`

---

## ✦ Professional Experience & Accreditations

1. **Cognifyz Technologies** — *Data Analysis Intern* (December 2025 – January 2026)
   - Conducted structured exploratory data analysis, automated data cleaning in Python (Pandas), and prepared executive reporting dashboards.
2. **Panith Innovations, Bengaluru** — *AI/ML Intern* (15-Day Intensive Technical Internship)
   - Hands-on computer vision practicum, OpenCV image processing pipelines, and baseline CNN evaluations in TensorFlow/Keras.
3. **Oracle Agentic AI Foundations** — *Certified Associate*
   - Verification of agentic AI architectures, LLM tool orchestration, and autonomous decision frameworks.
4. **Expandable Credential Gallery**
   - Includes real-time client-side modal allowing Hari to append future certifications with issuer, date, credential URL, and verified competencies.

---

## ✦ Getting Started & Local Development

### Prerequisites
- **Node.js:** v18.0.0 or later (v22+ recommended)
- **Package Manager:** `npm` (v9+) or `pnpm`

### Installation
```bash
# Clone the repository
git clone https://github.com/Hari-clo/protfolio.git

# Navigate into the workspace
cd protfolio

# Install dependencies
npm install
```

### Development Server
```bash
# Launch Vite development server with Hot Module Replacement (HMR)
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Preview
```bash
# Compile TypeScript & bundle production assets with Vite
npm run build

# Preview the production build locally
npm run preview
```

---

## ✦ Environment Variables Documentation

This portfolio is architected as a secure static single-page application (SPA) with zero hardcoded API keys or exposed credentials.

If you wish to configure optional third-party integrations (e.g., custom analytics or Formspree contact endpoints), create a `.env.local` file in the root directory:

```env
# Optional: Third-party form endpoint if bypassing standard mailto dispatch
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id

# Optional: Google Analytics / Telemetry ID
VITE_ANALYTICS_ID=G-XXXXXXXXXX
```

> **Security Rule:** Never commit `.env` or `.env.local` files containing secrets to public version control.

---

## ✦ Vercel Deployment Instructions

The project is fully pre-configured for automated continuous deployment on **Vercel**:

### Option 1: Automatic GitHub Integration (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium editorial portfolio"
   git remote add origin https://github.com/Hari-clo/protfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Select `Hari-clo/protfolio` from your repository list.
5. In **Framework Preset**, Vercel will automatically detect **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**. Vercel will build and assign a production URL (e.g., `https://hari-portfolio.vercel.app`).
7. The included `vercel.json` ensures all deep routes (such as `/projects/smart-waste-classification`) correctly rewrite to `index.html` with security headers enabled.

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## ✦ Project Architecture

```
protfolio/
├── public/
│   ├── favicon.svg             # Bespoke editorial monogram icon
│   ├── og-image.svg            # High-resolution 1200x630 Open Graph graphic
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # Canonical XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Minimalist sticky navigation with status badge
│   │   ├── Hero.tsx            # Asymmetric hero experience & availability badge
│   │   ├── About.tsx           # Narrative ethos, CSE background, engineering tenets
│   │   ├── Skills.tsx          # Categorized technical matrix (zero fake percentages)
│   │   ├── ProjectsSection.tsx # Editorial showcases with interactive filters
│   │   ├── Services.tsx        # "How I Can Help Your Business" consultation tracks
│   │   ├── ExperienceEducation.tsx # Dual timeline for Internships & Degree
│   │   ├── Certifications.tsx  # Oracle Agentic AI & expandable credential modal
│   │   ├── ResumeSection.tsx   # In-browser CV inspector & print/PDF trigger
│   │   ├── Contact.tsx         # Validated message form with zero exposed keys
│   │   └── Footer.tsx          # Editorial colophon & back-to-top controller
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for all verified content
│   ├── pages/
│   │   ├── HomePage.tsx        # Landing composition
│   │   ├── ProjectDetailPage.tsx # Deep-dive case studies with evaluation tabs
│   │   └── NotFoundPage.tsx    # Editorial 404 page
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Client routing & smooth scroll restoration
│   ├── index.css               # Tailwind directives & custom charcoal textures
│   └── main.tsx                # Application mounting
├── index.html                  # Semantic HTML5, Google Fonts preconnect, SEO tags
├── package.json                # Project dependencies & build scripts
├── postcss.config.js           # PostCSS Tailwind plugin
├── tailwind.config.js          # Bespoke theme configuration
├── tsconfig.json               # TypeScript strict configuration
├── vercel.json                 # Vercel SPA rewrite rules & HTTP security headers
└── README.md                   # Comprehensive documentation
```

---

## ✦ Verification Checklist

- [x] Verified authentic technologies only (Python, SQL, Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, Keras, CNN, OpenCV, Streamlit, Gradio, Git, GitHub, Jupyter Notebook).
- [x] Zero fabricated progress bars or skill percentages.
- [x] Dedicated deep-dive case study routes for both projects.
- [x] Authentic internship details for Cognifyz Technologies & Panith Innovations.
- [x] Verified Oracle Agentic AI Foundations accreditation.
- [x] Interactive in-browser curriculum vitae viewer with updated November 2026 timestamp.
- [x] Validated contact form with mailto fallback and copy-to-clipboard functionality.
- [x] Fully responsive across mobile, tablet, and widescreen desktop displays.
- [x] Core Web Vitals optimized, zero console warnings, production build verified.

---

© 2026 Hari Hara Sudhan. All rights reserved.
