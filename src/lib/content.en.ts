// English translations for homepage and shared content.

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: ReadonlyArray<NavChild>;
};

export const nav: {
  brandLogoAlt: string;
  items: ReadonlyArray<NavItem>;
} = {
  brandLogoAlt: "Primedic HeartSave myPAD",
  items: [
    {
      label: "Products",
      children: [
        { label: "HeartSave myPAD", href: "/urunler/heartsave-mypad" },
        { label: "Accessories", href: "/urunler/aksesuarlar" },
      ],
    },
    { label: "Regulations", href: "/yonetmelik" },
    { label: "About Us", href: "/hakkimizda" },
    { label: "Contact", href: "/iletisim" },
    { label: "Blog", href: "/blog" },
  ],
};

export const hero = {
  pretitle: "HeartSave myPAD",
  titleLine1: "Your Heart Is",
  titleLine2: "Safe Everywhere",
  description:
    "With its lightweight design and innovative technology, the HeartSave myPAD is purpose-built for moments when every second counts.",
  chips: [
    { label: "BATTERY LIFE", value: "5 YEARS" },
    { label: "WEIGHT", value: "1.1 KG" },
    { label: "DURABILITY", value: "IP66" },
    { label: "CONNECTIVITY", value: "LTE & Wifi" },
    { label: "PEDIATRIC MODE", value: "ONE TOUCH" },
    { label: "WARRANTY", value: "8 YEARS" },
    { label: "LANGUAGE OPTIONS", value: "6 LANGUAGES" },
    { label: "SHOCK RANGE", value: "150 – 200 J" },
  ],
};

export type StatsQuotePart = { text: string; strong?: boolean };

export const stats: {
  title: string;
  slides: ReadonlyArray<{
    source: string;
    quote: ReadonlyArray<StatsQuotePart>;
  }>;
} = {
  title: "In Cardiac Arrest\nThe Importance of Early Intervention",
  slides: [
    {
      source: "American Heart Association (AHA)",
      quote: [
        { text: "If the brain is deprived of oxygen within " },
        { text: "3–5 minutes", strong: true },
        {
          text: " after cardiac arrest, permanent damage begins. With each passing minute following cardiac arrest, the chance of survival decreases by approximately ",
        },
        { text: "10%.", strong: true },
      ],
    },
    {
      source: "American Heart Association (AHA)",
      quote: [
        {
          text: "Emergency medical services often take more than ",
        },
        { text: "10 minutes", strong: true },
        {
          text: " to reach the scene. This delay makes early intervention in cardiac arrest cases critically important.",
        },
      ],
    },
    {
      source: "American Heart Association (AHA)",
      quote: [
        {
          text: "The overall survival rate for out-of-hospital cardiac arrests is ",
        },
        { text: "below 10%.", strong: true },
        {
          text: " Without early intervention, the risk of death increases rapidly.",
        },
      ],
    },
    {
      source: "European Resuscitation Council (ERC)",
      quote: [
        { text: "When an AED is used within the first " },
        { text: "3–5 minutes", strong: true },
        { text: ", the survival rate can reach up to " },
        { text: "60–70%", strong: true },
        {
          text: ". Early defibrillation significantly increases the chance of survival.",
        },
      ],
    },
    {
      source: "American College of Cardiology (ACC)",
      quote: [
        { text: "In Turkey, approximately " },
        { text: "100,000 – 120,000", strong: true },
        {
          text: " people die each year from sudden cardiac arrest. The majority of these cases occur outside of hospitals.",
        },
      ],
    },
    {
      source: "Turkish Society of Cardiology",
      quote: [
        { text: "Approximately " },
        { text: "70–80%", strong: true },
        {
          text: " of sudden cardiac arrests occur at home, in the workplace, or in public spaces. This is why the availability of AED devices in public areas is critically important.",
        },
      ],
    },
    {
      source: "Turkish Society of Cardiology",
      quote: [
        {
          text: "The rate of AED use in cardiac arrests occurring in public spaces is only around ",
        },
        { text: "7%", strong: true },
        {
          text: ". This demonstrates that early intervention is missed in the vast majority of cases.",
        },
      ],
    },
  ],
};

export type RichPart = { text: string; strong?: boolean };
export type SpecBadge = {
  icon: "shield" | "target" | "pulse";
  label: string;
  value: string;
};
export type FeatureRow = {
  title: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  bullets: ReadonlyArray<ReadonlyArray<RichPart>>;
  badges?: ReadonlyArray<SpecBadge>;
};

export const features: {
  pretitle: string;
  title: string;
  description: string;
  rows: ReadonlyArray<FeatureRow>;
} = {
  pretitle: "Compact Design. Maximum Confidence.",
  title: "Life-Saving Technology",
  description:
    "HeartSave myPAD combines intelligent defibrillation technology, real-time CPR feedback, superior durability, and IoT connectivity in a single compact unit. Designed for confident intervention in environments where every second is critical.",
  rows: [
    {
      title: "Your Heart Is Safe at All Times",
      image: "/images/features/heartsave-mypad-device.webp",
      imageAlt: "HeartSave myPAD defibrillator device",
      imageWidth: 523,
      imageHeight: 378,
      bullets: [
        [
          {
            text: "The device analyzes the heart rhythm and automatically delivers a defibrillation shock when necessary.",
          },
        ],
        [
          {
            text: "Automatic escalating energy technology ensures the correct shock level is delivered during intervention.",
          },
        ],
        [
          { text: "Weighing approximately " },
          { text: "1.1 kg", strong: true },
          { text: " with a compact design, it is easily portable in any environment." },
        ],
        [
          { text: "With adult and " },
          { text: "pediatric mode", strong: true },
          { text: " support, it can be safely used across different patient groups." },
        ],
      ],
    },
    {
      title: "Durable and Always Ready",
      image: "/images/features/heartsave-mypad-field.webp",
      imageAlt: "HeartSave myPAD field use",
      imageWidth: 461,
      imageHeight: 323,
      bullets: [
        [
          { text: "8-year warranty", strong: true },
          {
            text: " provides long-term confidence and low maintenance costs. Battery and electrode shelf life of up to 5 years ensures extended readiness.",
          },
        ],
        [
          { text: "IP66", strong: true },
          {
            text: " protection rating delivers high resistance to water and dust.",
          },
        ],
        [
          {
            text: "Designed to operate reliably in temperatures ranging from −5°C to +55°C.",
          },
        ],
        [
          {
            text: "Safe transport and storage in conditions from −30°C to +70°C.",
          },
        ],
        [
          { text: "1.6 m drop", strong: true },
          { text: " resistance ensures reliable performance in demanding field conditions." },
        ],
      ],
      badges: [
        { icon: "shield", label: "WARRANTY", value: "8 Years" },
        { icon: "target", label: "DURABILITY", value: "IP66" },
        { icon: "pulse", label: "BATTERY LIFE", value: "5 Years" },
      ],
    },
    {
      title: "User-Friendly Design",
      image: "/images/features/heartsave-mypad-screen.webp",
      imageAlt: "HeartSave myPAD color screen interface",
      imageWidth: 545,
      imageHeight: 435,
      bullets: [
        [
          { text: "CPR feedback sensor", strong: true },
          {
            text: " analyzes the rate and pressure quality of chest compressions in real time.",
          },
        ],
        [
          { text: "4.3\" color display", strong: true },
          {
            text: " provides audio and visual guidance, directing the user step by step.",
          },
        ],
        [
          {
            text: "Metronome-assisted system helps maintain the correct compression rhythm.",
          },
        ],
        [
          { text: "Up to 6 languages", strong: true },
          { text: " with multi-language support for ease of use by diverse users." },
        ],
      ],
    },
  ],
};

export const ctaBanner = {
  pretitle: "HeartSave myPAD",
  title: "Individual and Institutional",
  titleAccent: "AED Solutions",
  description:
    "Contact us to learn more about Primedic defibrillator solutions for businesses, institutions, and individual users, and to place an order.",
  actionLabel: "Get in Touch",
  actionHref: "/iletisim",
};

export const useCases = {
  pretitle: "Life-Saving Technology",
  title: "Areas That Require AED Deployment",
  description:
    "HeartSave myPAD combines intelligent defibrillation technology, real-time CPR feedback, superior durability, and IoT connectivity in a single compact unit. Designed for confident intervention in environments where every second is critical.",
  actionLabel: "Read the Regulations",
  actionHref: "/yonetmelik",
  items: [
    {
      icon: "briefcase",
      title: "Corporate Workplaces",
      description:
        "Rapid response to sudden cardiac arrests is of paramount importance in workplaces with high employee density.",
    },
    {
      icon: "home",
      title: "Hospitality and Tourism",
      description:
        "AED devices enhance guest safety by enabling rapid response in emergency situations.",
    },
    {
      icon: "cart",
      title: "Commercial Areas",
      description:
        "Rapid intervention is critically important in shopping malls and commercial areas with heavy visitor traffic.",
    },
    {
      icon: "basketball",
      title: "Sports Facilities",
      description:
        "The risk of sudden cardiac arrest can increase in sports venues where intense physical activity takes place.",
    },
    {
      icon: "book",
      title: "Educational Institutions",
      description:
        "Ensuring a safe environment for students, staff, and visitors at schools and campuses is essential.",
    },
    {
      icon: "pin",
      title: "Public Spaces",
      description:
        "Rapid response to sudden cardiac arrests in public areas such as squares and parks can be life-saving.",
    },
    {
      icon: "plane",
      title: "Transportation and Terminals",
      description:
        "AED devices play a critical role at transportation hubs such as airports, metro stations, and bus terminals.",
    },
    {
      icon: "music",
      title: "Event Venues",
      description:
        "Health and safety are paramount at festivals, concerts, and large-scale events in crowded environments.",
    },
  ],
} as const;

export const faq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Can anyone use a Primedic AED device?",
      answer:
        "Yes. AED devices are designed to be used by individuals without medical training. The device guides the user step by step through audio and visual prompts and automatically performs the necessary safety checks to prevent incorrect intervention.",
    },
    {
      question:
        "How will I know whether a shock should be delivered? Do I need to intervene?",
      answer:
        "A fully automatic AED device analyzes the patient's heart rhythm and determines on its own whether a shock is needed. If a shockable rhythm is detected, the device performs the necessary checks and delivers the shock automatically.\n\nThe user does not need to interpret the rhythm or deliver the shock. All that is required is to turn on the device, place the electrodes correctly, and follow the device's instructions. When necessary, the device will guide the user to perform chest compressions (CPR).",
    },
    {
      question: "Can the Primedic AED device deliver a shock accidentally?",
      answer:
        "No. AED devices deliver a shock only when a shockable heart rhythm is detected. PRIMEDIC HeartSave series devices analyze the heart rhythm using an advanced algorithm and distinguish between shockable and non-shockable rhythms with high accuracy.\n\nThe device's rhythm analysis algorithm was developed using international ECG databases and tested according to the IEC 60601-2-4 medical device standard. According to test results, the device has a positive predictive value of 98.2% and a false positive rate of only 0.9%.\n\nThis means the device intervenes only during shockable rhythms such as Ventricular Fibrillation (VF) and pulseless Ventricular Tachycardia (pVT); it does not allow shock delivery during normal sinus rhythm, asystole, or other non-shockable rhythms. Thanks to this advanced analysis system, the risk of unnecessary or accidental shock delivery is extremely low.",
    },
    {
      question: "Does the CPR sensor come with the device?",
      answer:
        "The CPR sensor is offered as an optional accessory with certain models. It can be obtained separately. The CPR sensor analyzes the pressure and rhythm applied during chest compressions and provides the user with real-time feedback for proper CPR technique.",
    },
    {
      question:
        "How often should I check that the device is in working condition?",
      answer:
        "AED devices operate with an automatic self-test system. The device automatically performs its own system checks on a daily, weekly, and monthly basis and continuously monitors whether it is ready for use. If any issue is detected, it notifies the user through visual or system alerts. This eliminates the need for continuous manual inspection of the device.",
    },
    {
      question: "Is it mandatory to have an AED device in Turkey?",
      answer:
        "In Turkey, the \"Regulation on the Availability of Portable Automated External Defibrillator (AED) Devices\" published by the Ministry of Health has made it mandatory to have AED devices in certain locations. According to the regulation, AED devices must be progressively deployed in areas with heavy foot traffic. This includes airports, large shopping malls, sports facilities, high-capacity hospitality establishments, large workplaces, transportation terminals, and similar public-use areas.\n\nThis regulation aims to increase survival rates by enabling rapid intervention in cases of sudden cardiac arrest. It is an important health and safety measure for institutions to have these devices available for the protection of employees and visitors.",
    },
    {
      question: "Does the AED device require maintenance?",
      answer:
        "AED devices regularly check their own status through an advanced automatic self-test system. The device automatically tests all hardware components on daily, weekly, monthly, and periodic intervals to verify its readiness for use.\n\nThe status indicator on the device allows easy verification of whether it is ready. Additionally, in models with IoT connectivity, electrode and battery status as well as potential errors are reported through the cloud system.",
    },
    {
      question: "Where is the AED device manufactured?",
      answer:
        "Primedic AED devices are high-quality medical devices developed and manufactured in Germany. They undergo production processes compliant with European medical device standards and are used worldwide.",
    },
    {
      question: "Does it perform electrode impedance measurement?",
      answer:
        "Yes. PRIMEDIC AED devices measure the patient's chest impedance when the electrodes are placed and automatically optimize the shock energy based on this value through a biphasic waveform. The device operates within a 25–200 Ω impedance range and continuously monitors electrode contact.",
    },
    {
      question:
        "Are intervention data and device information recorded on the Primedic AED device?",
      answer:
        "Yes. The HeartSave myPAD AED device features 8 GB of internal memory and automatically records data generated during emergency interventions. This includes treatment data such as ECG recordings, CPR duration, number of shocks delivered, and energy information, along with device serial number, software version, battery and electrode information, self-test reports, and event logs. The device can store approximately 160 hours of ECG/CPR recordings, 10,000 event logs, and 3,650 self-test reports.",
    },
    {
      question: "Is it possible to remotely manage multiple AED devices?",
      answer:
        "Yes. AED devices with IoT connectivity can be monitored and managed remotely through a cloud-based management system. This system allows the status of multiple devices to be tracked from a single platform. Self-test results, battery and electrode status can be viewed, and notifications can be received for potential errors or maintenance needs. Additionally, software updates and system settings can be performed remotely via computer, tablet, or smartphone. This architecture provides centralized and convenient device management, particularly for institutions with a large number of devices.",
    },
  ],
};

export const footerContent = {
  companyColumns: [
    {
      title: "Menu",
      links: [
        { label: "Home", href: "/" },
        { label: "Regulations", href: "/yonetmelik" },
        { label: "About Us", href: "/hakkimizda" },
        { label: "Contact", href: "/iletisim" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "HeartSave myPAD", href: "/urunler/heartsave-mypad" },
        { label: "Accessories", href: "/urunler/aksesuarlar" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
        { label: "Publications", href: "/publications" },
      ],
    },
  ],
  socials: [
    { id: "facebook", label: "Facebook", href: "#" },
    { id: "instagram", label: "Instagram", href: "#" },
    { id: "twitter", label: "Twitter", href: "#" },
    { id: "linkedin", label: "LinkedIn", href: "#" },
  ],
};
