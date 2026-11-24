# ⚡ Azizi Yahya | Technology Portfolio

[![Deployment: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-22c55e.svg)](https://aziziyahya.github.io)
[![Framework: React 19](https://img.shields.io/badge/Framework-React%2019-61dafb.svg)](https://react.dev/)
[![Bundler: Vite](https://img.shields.io/badge/Bundler-Vite-646CFF.svg)](https://vitejs.dev/)
[![Icons: Lucide](https://img.shields.io/badge/Icons-Lucide%20React-f43f5e.svg)](https://lucide.dev/)

> 🌐 **Live Portfolio Website:** [https://aziziyahya.github.io](https://aziziyahya.github.io)

Personal technology portfolio of **Nik Mohamad Azizi Bin Nik Yahya (Azizi Yahya)** — undergraduate in **Bachelor of Technology (B.Tech) in Industrial Electronic Automation** at **Universiti Malaysia Perlis (UniMAP)** with a graduated background in **Diploma Teknologi Maklumat (Teknologi Digital)**.

Built with **React 19**, **Vite**, and mobile-first responsive CSS, designed to showcase technical capabilities across industrial automation, real-time embedded systems, and software development for internship opportunities.

---

## 🛠️ Featured Technical Projects

| Project | Domain | Key Stack | Repository |
|---|---|---|---|
| **M4T-CH4: Self-Balancing Robot** | Robotics & Control | ESP32, FreeRTOS (200 Hz PID), MPU-6050, VL53L0X, WebSockets | [ESP32_SelfBalancingRobot](https://github.com/aziziyahya/ESP32_SelfBalancingRobot) |
| **Modular Conveyor Assembly & Sorting System** | Industrial Automation | Siemens S7-1500, TIA Portal V16, Festo MPS, PROFINET, Safety Interlocks | [PLC_MultiStationAssemblyAndSorting-WithFestoMPSAndSiemensPLC](https://github.com/aziziyahya/PLC_MultiStationAssemblyAndSorting-WithFestoMPSAndSiemensPLC) |
| **Assignment Management Application** | Software Development | Python 3, Tkinter / ttk Desktop GUI, Dynamic Calendar, JSON / CSV | [PYTHON_AssignmentManagementApplication](https://github.com/aziziyahya/PYTHON_AssignmentManagementApplication) |
| **Industrial Colour Counting & Sorting System** | Industrial Automation | Siemens S7-1500 (CPU 1516-3), KTP700 Basic HMI, Factory I/O 3D Twin, PROFINET, LAD | [PLC_ColourSortingAndCountingSystem-WithHMIAndFactoryIO](https://github.com/aziziyahya/PLC_ColourSortingAndCountingSystem-WithHMIAndFactoryIO) |

---

## ✨ Website Features

- **Interactive Terminal Hero:** Live status checks (`CONNECTED`, `BALANCED`, `RUNNING`) highlighting core hardware and software stacks.
- **Mobile-First & Touch Optimized:** Fluid `100dvh` layout, safe-area insets (`env(safe-area-inset-top/bottom)`) for bezel-less screens and notches, swipeable category filter pill bar, and sticky modal headers.
- **Interactive Project Modals:** Dedicated detail views with clean top navigation, hardware photos, software architecture highlights, and direct repository links.
- **Curated Skills Matrix:** Visual tech chips categorized into Industrial Automation (PLC), Embedded Systems & Hardware, and Software & Digital Technology.
- **Automated CI/CD:** GitHub Actions pipeline (`.github/workflows/deploy.yml`) builds and deploys the site to GitHub Pages on every push to `main`.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

### Installation & Run

```bash
# 1. Clone repository
git clone https://github.com/aziziyahya/aziziyahya.github.io.git
cd aziziyahya.github.io

# 2. Install dependencies
npm install

# 3. Start local development server (with HMR)
npm run dev

# 4. Build optimized production bundle
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

The repository contains an automated GitHub Actions deployment workflow:

1. Create a public repository named `aziziyahya.github.io` on GitHub.
2. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/aziziyahya/aziziyahya.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings > Pages**.
4. Under **Build and deployment > Source**, select **GitHub Actions**.
5. Subsequent pushes to `main` will automatically build and publish the latest site.

---

## 📁 Repository Structure

```
aziziyahya.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions deployment pipeline
├── public/
│   └── images/               # High-res hardware photos & application UI previews
├── src/
│   ├── components/           # Navbar, Hero, Projects, Skills, Footer, ProjectModal, Icons
│   ├── data/
│   │   └── projects.js       # Structured project specifications and technical skill arrays
│   ├── App.jsx               # Application root layout
│   ├── index.css             # Responsive design system & glassmorphic styling
│   └── main.jsx              # React DOM entry point
├── index.html                # HTML entry point with viewport-fit=cover
├── package.json
└── vite.config.js
```

---

## 👤 Profile & Contact

- **Full Name:** Nik Mohamad Azizi Bin Nik Yahya
- **Programme:** Bachelor of Technology (B.Tech) in Industrial Electronic Automation, UniMAP
- **Prior Qualification:** Diploma Teknologi Maklumat (Teknologi Digital) [Graduated]
- **Email:** [nikazizicareer@gmail.com](mailto:nikazizicareer@gmail.com)
- **GitHub:** [https://github.com/aziziyahya](https://github.com/aziziyahya)
- **Location:** Kota Bharu, Kelantan
