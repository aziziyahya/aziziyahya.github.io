export const projectsData = [
  {
    id: "esp32-self-balancing-robot",
    title: "M4T-CH4: Autonomous Self-Balancing Robot",
    category: "Robotics & Embedded",
    categoryKey: "embedded",
    course: "NMT22104: Data Acquisition Technology and Analysis II",
    institution: "Universiti Malaysia Perlis (UniMAP)",
    date: "Jan 2026",
    summary:
      "Autonomous inverted pendulum robot built on ESP32 running a deterministic 200 Hz FreeRTOS PID loop. Features sensor fusion, obstacle clearing, and an OTA Wi-Fi telemetry dashboard for live tuning.",
    fullDescription:
      "Developed for NMT22104: Data Acquisition Technology and Analysis II at UniMAP. The robot overcomes inverted pendulum structural instability while executing an autonomous arena-clearing mission: scanning, pursuing, and pushing five obstacles out of a 1-meter radius circular arena without crossing boundary lines. Includes an asynchronous Wi-Fi Web Dashboard for live telemetry and dynamic PID gain calibration.",
    image: "/images/robot_front.png",
    gallery: [
      { url: "/images/robot_front.png", caption: "Front chassis view with MPU-6050 & VL53L0X ToF laser sensor" },
      { url: "/images/robot_isometric.png", caption: "Assembled physical prototype 3/4 perspective view on workbench" },
      { url: "/images/robot_balancing_test.png", caption: "Autonomous 200 Hz PID dynamic upright balance test on floor" },
      { url: "/images/robot_arena_pushing.png", caption: "Tournament arena trial: Obstacle tracking and high-torque pushing" },
      { url: "/images/robot_arena_boundary.png", caption: "Tournament arena trial: TCRT5000 IR perimeter line containment" },
      { url: "/images/robot_circuit.png", caption: "Complete schematic & dual-bus I2C power regulation architecture" },
      { url: "/images/robot_dashboard_monitoring.png", caption: "Web Dashboard Suite (1/4): Real-time telemetry monitoring" },
      { url: "/images/robot_dashboard_pid.png", caption: "Web Dashboard Suite (2/4): Dynamic over-the-air PID parameter tuning" },
      { url: "/images/robot_dashboard_motor.png", caption: "Web Dashboard Suite (3/4): Motor deadband & acceleration calibration" },
      { url: "/images/robot_dashboard_update.png", caption: "Web Dashboard Suite (4/4): Manual update, gyro recalibration & flash persistence" }
    ],
    tags: ["ESP32", "FreeRTOS", "PID Control", "C++", "MPU-6050", "VL53L0X", "TB6612FNG", "WebSockets"],
    features: [
      "Real-time deterministic PID stabilization loop executed at 200 Hz under FreeRTOS",
      "Sensor fusion using a complementary filter (α = 0.96) combining MPU-6050 accelerometer & gyro rate",
      "Autonomous 3-state finite state machine: Search (scanning), Attack (+3.5° tilt thrust), and Escape (IR line detection)",
      "Millimeter-accurate obstacle targeting using VL53L0X laser Time-of-Flight ranging",
      "Dual-core asynchronous Web Dashboard (192.168.4.1) for live telemetry and flash-persistent PID tuning"
    ],
    links: {
      github: "https://github.com/aziziyahya/ESP32_SelfBalancingRobot",
      badge: "Robotics & Control"
    }
  },
  {
    id: "plc-automated-conveyor-sorting",
    title: "Automated Modular Conveyor Assembly & Sorting System",
    category: "Industrial Automation",
    categoryKey: "automation",
    course: "NMT12505: Industrial Automation II",
    institution: "Universiti Malaysia Perlis (UniMAP)",
    date: "2025",
    summary:
      "3-station Festo MPS manufacturing line integrated with Siemens PLC (TIA Portal V16) featuring a zero-latency hardwired safety interlock system.",
    fullDescription:
      "Designed and deployed a synchronized multi-station industrial automation manufacturing cell utilizing Festo Modular Production System (MPS) hardware and Siemens SIMATIC S7 PLC programmed in TIA Portal V16. Orchestrates raw workpiece distribution, precision cap assembly pressing, and multi-sensor automated sorting into target chutes.",
    image: "/images/plc_system.png",
    gallery: [
      { url: "/images/plc_system.png", caption: "3-Station Festo MPS Conveyor Assembly & Sorting Line" },
      { url: "/images/plc_distribution.png", caption: "Distribution Station: Workpiece gravity feeder & pneumatic ejector" },
      { url: "/images/plc_joining.png", caption: "Joining Station: Pneumatic assembly head & cap insertion cylinder" },
      { url: "/images/plc_sorting.png", caption: "Sorting Station: Optical/inductive sensors & pneumatic deflector chutes" }
    ],
    tags: ["Siemens S7 PLC", "TIA Portal V16", "Festo MPS", "PROFINET", "Ladder Logic (LAD)", "Pneumatics", "Safety Interlocks"],
    features: [
      "Distribution Station: Gravity magazine feed with optical timeout detection (3-second starvation alert)",
      "Joining Station: Precision pneumatic assembly cylinder with cap presence verification and jamming protection",
      "Sorting Station: Multi-sensor identification (inductive & optical) with pneumatic deflector chutes",
      "Hardwired Jumper Safety Interlock: Zero-latency fault propagation across all three stations for immediate E-Stop and beacon indication",
      "Root Cause Analysis and preventive maintenance protocols developed for minimal production downtime"
    ],
    links: {
      github: "https://github.com/aziziyahya/PLC_AutomatedConveyorSorting",
      badge: "Festo MPS + Siemens"
    }
  },
  {
    id: "python-assignment-manager",
    title: "Academic Assignment Management Application",
    category: "Software & GUI",
    categoryKey: "software",
    course: "NMT12704: System Programming Technology II",
    institution: "Universiti Malaysia Perlis (UniMAP)",
    date: "2025",
    summary:
      "Python desktop application built with Tkinter/ttk featuring comprehensive CRUD operations, smart calendar month validation, and CSV export.",
    fullDescription:
      "Academic productivity tool developed in Python with Tkinter / ttk to manage student deadlines and coursework. Built without heavy third-party dependencies, the system features an intelligent calendar validation engine using calendar.monthrange, atomic JSON data persistence, and priority-sorted upcoming assignments.",
    image: "/images/python_dashboard.png",
    gallery: [
      { url: "/images/python_dashboard.png", caption: "Executive Dashboard: Real-time metrics & urgent upcoming deadlines" },
      { url: "/images/python_courses.png", caption: "Subject Management: Full CRUD operations & unique code validation" },
      { url: "/images/python_assignments.png", caption: "Assignment Tracker: Treeview sorting & dynamic calendar date picker" },
      { url: "/images/python_export.png", caption: "Data Portability: Native OS file dialog for CSV report exporting" }
    ],
    tags: ["Python 3", "Tkinter", "ttk", "JSON Persistence", "CSV Export", "Desktop GUI", "Zero Dependencies"],
    features: [
      "Executive Dashboard: Real-time academic metrics and top-10 urgent deadlines sorted via datetime.strptime",
      "Course & Subject Management: Full CRUD operations with uppercase uniqueness constraints",
      "Dynamic Calendar Engine: Computes exact valid days per month and handles leap years seamlessly",
      "Data Portability: One-click CSV export via native OS file dialog for spreadsheet analysis",
      "Ergonomic UI: Custom-styled ttk visual hierarchy with responsive layout and confirmation prompts"
    ],
    links: {
      github: "https://github.com/aziziyahya/PYTHON_AssignmentManagementApplication",
      badge: "Desktop Application"
    }
  },
  {
    id: "plc-colour-sorting-machine",
    title: "Industrial Colour Counting & Sorting System",
    category: "Industrial Automation",
    categoryKey: "automation",
    course: "TIA Portal Programming Level 1 (TIA-PRO1)",
    institution: "Universiti Malaysia Perlis (UniMAP)",
    date: "2026",
    summary:
      "Siemens S7-1500 PLC & KTP700 Basic HMI automated sorting system with Factory I/O 3D simulation, pneumatic pushers, and closed-loop fault detection.",
    fullDescription:
      "Developed as part of the Siemens TIA Portal Programming Level 1 (TIA-PRO1) certification at UniMAP. Controls a multi-conveyor automated sorting system (6m main belt, curved belt, and 3 sort chutes) via Siemens SIMATIC S7-1500 (CPU 1516-3 PN/DP) and KTP700 Basic PN HMI. Features optical vision and diffuse sensor part discrimination (Metal, Green, Blue), pneumatic pushers with limit reed switch stroke feedback, batch setpoint controls, and a multi-scenario safety fault matrix (lost part / conveyor jam detection and pusher obstruction monitoring).",
    image: "/images/plc_sorting_system.png",
    gallery: [
      { url: "/images/plc_sorting_system.png", caption: "Full 3D digital twin Factory I/O simulation cell overview" },
      { url: "/images/plc_sorting_hmi.png", caption: "WinCC KTP700 Basic HMI live running dashboard with animated sensors" },
      { url: "/images/plc_sorting_panel.png", caption: "Physical control cabinet with illuminated buttons and digital LED counters" },
      { url: "/images/plc_sorting_network.png", caption: "PROFINET subnet network topology connecting S7-1500 and KTP700" },
      { url: "/images/plc_sorting_action.png", caption: "Pneumatic pusher diverting green raw material into chute" }
    ],
    tags: ["Siemens S7-1500", "TIA Portal v16", "KTP700 HMI", "Factory I/O", "PROFINET", "Ladder Logic (LAD)", "PLCSIM"],
    features: [
      "Modular Ladder Logic program structure using OB1, FCs (FC1–FC8), and instance-based FBs (FB1–FB3)",
      "Multi-sensor discrimination using synchronized optical colour vision sensors and diffuse counters",
      "Pneumatic pushers with closed-loop magnetic reed switch limit confirmation for jam prevention",
      "WinCC Basic HMI with live plant layout animation, batch setpoint inputs, and real-time piece counting",
      "Two-stage industrial fault alarm matrix with mandatory operator acknowledgment and reset protocols"
    ],
    links: {
      github: "https://github.com/aziziyahya/PLC_AutomatedModularProduction WithSiemensAndFesto",
      badge: "Siemens S7-1500 + HMI"
    }
  }
];

export const personalInfo = {
  name: "Nik Mohamad Azizi Bin Nik Yahya",
  preferredName: "Azizi Yahya",
  title: "Industrial Electronic Automation & Embedded Systems",
  degree: "Bachelor of Technology (B.Tech) in Industrial Electronic Automation",
  diploma: "Diploma Teknologi Maklumat (Teknologi Digital)",
  institution: "Universiti Malaysia Perlis (UniMAP)",
  email: "nikazizicareer@gmail.com",
  github: "https://github.com/aziziyahya",
  githubUsername: "aziziyahya",
  linkedin: "https://linkedin.com/in/",
  location: "Kota Bharu, Kelantan",
  bio: "Undergraduate in Bachelor of Technology (B.Tech) in Industrial Electronic Automation at UniMAP with a graduated background in Diploma Teknologi Maklumat (Teknologi Digital). Experienced in combining industrial PLC automation and real-time embedded systems with practical software development and programming practices."
};

export const skillsData = [
  {
    category: "Industrial Automation & PLC",
    icon: "Factory",
    subtitle: "PLCs, Pneumatics & Fieldbuses",
    highlight: "Configured Siemens S7-1500 PLC with Festo CTEU-PN valve terminal over PROFINET for automated 3-tier optical/inductive sorting.",
    skills: [
      "Siemens S7-1500 (TIA Portal)",
      "Ladder Logic (LAD)",
      "Festo MPS & PROFINET",
      "Pneumatics & Sensor Interlocks"
    ]
  },
  {
    category: "Embedded Systems & Hardware",
    icon: "Cpu",
    subtitle: "Microcontrollers, Sensors & Control",
    highlight: "Developed 200 Hz FreeRTOS closed-loop PID balancing robot with MPU-6050 sensor fusion, ToF laser obstacle targeting, and live Wi-Fi telemetry.",
    skills: [
      "ESP32 & Arduino C/C++",
      "Closed-Loop PID Control",
      "Sensor Fusion (MPU-6050)",
      "Hardware Circuit Troubleshooting"
    ]
  },
  {
    category: "Software & Digital Technology",
    icon: "Code",
    subtitle: "Application Development & Tooling",
    highlight: "Built desktop GUI applications in Python with dynamic calendar calculation, JSON database persistence, and CSV export.",
    skills: [
      "Python 3 Programming",
      "CSV Data Portability",
      "Git & GitHub Version Control",
      "CLI / Scripting",
      "Hardware Repair & Tech Support"
    ]
  }
];
