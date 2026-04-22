// English translations for the HeartSave myPAD product page.

export const heartsaveMypad = {
  seo: {
    title:
      "HeartSave myPAD — Your Heart Is Safe Everywhere | Primedic",
    description:
      "HeartSave myPAD: an advanced AED solution featuring biphasic defibrillation technology, intelligent rhythm analysis, real-time CPR feedback, and IoT connectivity infrastructure.",
    keywords: [
      "HeartSave myPAD",
      "Primedic AED",
      "automated external defibrillator",
      "AED",
      "CPR feedback",
      "Biphasic defibrillation",
      "IoT AED",
    ],
  },

  hero: {
    brand: "HeartSave myPAD",
    tagline: "Your Heart Is Safe Everywhere",
    description:
      "Designed for use in sudden cardiac arrest situations, the HeartSave myPAD analyzes the heart rhythm, delivers automatic defibrillation when necessary, and provides step-by-step guidance to the user for CPR administration.",
    ctaLabel: "Contact Us",
    ctaHref: "/iletisim",
    imageSrc: "/images/product/heartsave-mypad-hero.webp",
    imageAlt:
      "HeartSave myPAD automated external defibrillator (AED) — compact body, color display, and CPR feedback sensor",
  },

  overview: {
    title: "HeartSave myPAD",
    description:
      "Designed for use in sudden cardiac arrest situations, the HeartSave myPAD analyzes the heart rhythm, delivers automatic defibrillation when necessary, and provides step-by-step guidance to the user for CPR administration.",
    groups: [
      {
        tag: "Defibrillation Technology",
        items: [
          {
            title: "Biphasic Defibrillation Waveform",
            body: "Using a Biphasic Truncated Exponential (BTE) waveform, the current is delivered in two phases. The energy is automatically adjusted according to the patient's chest impedance.",
          },
          {
            title: "Automatic Energy Optimization",
            body: "The device measures impedance through the electrode pads. It optimizes the delivered defibrillation energy based on the individual patient.",
          },
          {
            title: "Escalating Energy Delivery",
            body: "Energy is incrementally escalated in adult patients. Shock efficacy is enhanced through 150 J → 170 J → 200 J levels.",
          },
          {
            title: "Pediatric Mode",
            body: "Pediatric mode is activated with a single button press. A safe shock energy of 50 J is delivered for pediatric patients. The CPR feedback function is disabled in this mode.",
          },
          {
            title: "Rapid Analysis and Response Time",
            body: "The heart rhythm is analyzed within 5–8 seconds. When a shockable rhythm is detected, the device is ready to intervene within 13–16 seconds.",
          },
          {
            title: "Rhythm Analysis via ECG Signal",
            body: "The system monitors a range of 30–300 bpm and measures impedance between 25–200 Ω. It provides safe analysis in compliance with the IEC 60601-2-4 standard.",
          },
        ],
      },
      {
        tag: "Intelligent Rhythm Analysis Algorithm",
        items: [
          {
            title: "Shockable Rhythms",
            body: "The device automatically detects life-threatening rhythms. Ventricular fibrillation (VF) detection sensitivity is ≥ 90%, and pulseless ventricular tachycardia (VT) detection sensitivity is ≥ 75%.",
          },
          {
            title: "Non-Shockable Rhythms",
            body: "Normal rhythms are differentiated to prevent unnecessary shock delivery. Sinus rhythm specificity is ≥ 99%, and asystole specificity is ≥ 95%.",
          },
          {
            title: "Algorithm Performance",
            body: "The risk of unnecessary shock delivery is extremely low. The positive predictive value is 98.2%, and the false positive rate is 0.9%. Reliable rhythm analysis is ensured through high accuracy rates.",
          },
        ],
      },
    ],
  },

  video: {
    heading: "Discover the Device",
    description:
      "Watch a brief introductory video to explore the HeartSave myPAD's workflow and the operating principle of the CPR feedback sensor.",
    youtubeId: "msKG9Ls4ecE",
    posterSrc: "/images/product/video-poster.jpg",
    posterAlt:
      "HeartSave myPAD introductory video preview image",
    playLabel: "Play introduction video",
  },

  connectivity: {
    title: "Intelligent Connectivity and Device Management",
    description:
      "With its IoT connectivity infrastructure, the HeartSave myPAD enables remote monitoring and management of devices, as well as secure recording of operational data. The cloud-based system ensures AED devices are always kept in a ready-to-use state.",
    items: [
      {
        title: "IoT Connectivity Infrastructure",
        body: "The device can be remotely monitored and managed by connecting to the internet via LTE and Wi-Fi connectivity options.",
      },
      {
        title: "Cloud Device Management",
        body: "Multiple AED devices can be tracked from a centralized dashboard through the myAED Control platform.",
      },
      {
        title: "Remote Management",
        body: "Device settings and system configuration can be performed remotely via computer, tablet, or mobile device.",
      },
      {
        title: "Cloud Notification System",
        body: "Self-test results and potential fault conditions are transmitted to the cloud platform, and notifications are sent to the user.",
      },
      {
        title: "Automatic Self-Test",
        body: "The device performs daily and periodic automatic tests, checking the battery, electrode pads, and system modules.",
      },
      {
        title: "Data Recording and Transfer",
        body: "ECG, CPR, and event records are stored in the device memory and can be transferred via USB or cloud connection.",
      },
    ],
  },

  details: {
    heading: "Advanced Technology for Reliable Intervention",
    description:
      "Designed for use in sudden cardiac arrest situations, the HeartSave myPAD analyzes the heart rhythm, delivers automatic defibrillation when necessary, and provides step-by-step guidance to the user for CPR administration.",
    cards: [
      {
        title: "Defibrillation Electrode Pads",
        description:
          "The SavePads PLUS electrode pads used with the HeartSave myPAD are designed to analyze the heart rhythm and safely deliver defibrillation energy to the patient.",
        image: "/images/product/electrodes.webp",
        imageAlt: "SavePads PLUS defibrillation electrode pads",
        imageWidth: 513,
        imageHeight: 347,
        imageOnRight: true,
        specs: [
          { icon: "clock", label: "Electrode pad lifespan", value: "5 Years" },
          { icon: "grid", label: "Electrode pad surface area", value: "86 ± 10 cm²" },
          { icon: "cable", label: "Cable length", value: "1.4 m" },
          { icon: "zap", label: "Max. shock capacity", value: "50 shocks" },
        ],
      },
      {
        title: "CPR Feedback Sensor",
        description:
          "The sensor-equipped electrode pads measure the compression rate and depth applied during chest compressions, providing the user with real-time feedback for proper CPR administration.",
        image: "/images/product/cpr-sensor.webp",
        imageAlt: "Defibrillation electrode pad with CPR feedback sensor",
        imageWidth: 521,
        imageHeight: 388,
        imageOnRight: false,
        specs: [
          { icon: "metronome", label: "Compression rate range", value: "100–120 cpm" },
          { icon: "depth", label: "Compression depth", value: "50–60 mm" },
          { icon: "target", label: "Compression rate accuracy", value: "±3 cpm" },
          { icon: "target", label: "Depth accuracy", value: "±5 mm / ±10%" },
        ],
      },
    ],
  },

  cta: {
    pretitle: "HeartSave myPad",
    title: "Individual and Institutional AED Solutions",
    description:
      "Contact us to learn more about Primedic defibrillator solutions for workplaces, institutions, and individual users, and to place an order.",
    actionLabel: "Contact Us",
    actionHref: "/iletisim",
  },
} as const;
