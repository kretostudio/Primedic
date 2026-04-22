// English translations for the Accessories page.

import type {
  AccessoryRow,
  AccessoryThemeId,
  AccessoryGroup,
  CategoryChip,
  FeatureCard,
} from "./content.aksesuarlar";

export const aksesuarlar = {
  seo: {
    title: "HeartSave myPAD Accessories | Primedic",
    description:
      "Electrodes, batteries, CPR sensor, IoT connectivity, carrying cases, wall mounts, and training kits for HeartSave myPAD — original Primedic accessory options.",
    keywords: [
      "HeartSave myPAD accessories",
      "AED electrodes",
      "defibrillator battery",
      "CPR sensor",
      "Primedic accessories",
      "AED training kit",
    ],
  },

  hero: {
    title: "Ready to Respond at Any Moment",
    description:
      "The Primedic AED is designed for rapid and accurate intervention in emergencies. With step-by-step user guidance, intelligent technology, and reliable performance, it ensures you manage the process correctly when it matters most.",
    actionLabel: "Request a Quote",
    actionHref: "/iletisim",
    image: {
      src: "/images/aksesuarlar/hero-device.webp",
      alt: "HeartSave myPAD and accessory kit",
    },
  },

  featureStrip: [
    {
      id: "tam-otomatik",
      label: "Fully Automatic",
      image: { src: "/images/aksesuarlar/feature-01-otomatik.webp", alt: "Fully Automatic AED" },
    },
    {
      id: "lcd-ekran",
      label: '4.3" LCD Display',
      image: { src: "/images/aksesuarlar/feature-02-lcd.webp", alt: "4.3-inch LCD display" },
    },
    {
      id: "wifi-iot",
      label: "Wi-Fi & IoT Connectivity",
      image: { src: "/images/aksesuarlar/feature-03-iot.webp", alt: "Wi-Fi and IoT connectivity" },
    },
    {
      id: "batarya",
      label: "Long-Life Battery",
      image: { src: "/images/aksesuarlar/feature-04-batarya.webp", alt: "Long-life battery" },
    },
    {
      id: "elektrotlar",
      label: "Electrodes",
      image: { src: "/images/aksesuarlar/feature-05-elektrot.webp", alt: "Electrodes" },
    },
    {
      id: "ilk-yardim",
      label: "First Aid Kit",
      image: { src: "/images/aksesuarlar/feature-06-ilk-yardim.png", alt: "First aid kit" },
    },
    {
      id: "tasima-cantasi",
      label: "Carrying Case",
      image: { src: "/images/aksesuarlar/feature-07-tasima.png", alt: "Carrying case" },
    },
  ] as ReadonlyArray<FeatureCard>,

  section: {
    pretitle: "HeartSave myPad",
    title: "HeartSave myPAD Accessories",
    categoryHeader: "Categories",
  },

  categories: [
    { id: "cat-elektrotlar", label: "Electrodes", groupId: "yedek", rowId: "elektrotlar", tone: "green", icon: "/images/aksesuarlar/icons/chip-elektrotlar.svg" },
    { id: "cat-ilk-yardim", label: "First Aid Kit", groupId: "yedek", rowId: "ilk-yardim-kiti", tone: "green", icon: "/images/aksesuarlar/icons/chip-ilk-yardim.svg" },
    { id: "cat-batarya", label: "Battery", groupId: "yedek", rowId: "batarya", tone: "green", icon: "/images/aksesuarlar/icons/chip-batarya.svg" },
    { id: "cat-cpr", label: "CPR Sensor", groupId: "akilli", rowId: "cpr-sensoru", tone: "blue", icon: "/images/aksesuarlar/icons/chip-cpr.svg" },
    { id: "cat-iot", label: "Device Management", groupId: "akilli", rowId: "cihaz-yonetimi", tone: "blue", icon: "/images/aksesuarlar/icons/chip-iot.svg" },
    { id: "cat-canta", label: "Device Case", groupId: "ek", rowId: "kucuk-canta", tone: "orange", icon: "/images/aksesuarlar/icons/chip-canta.svg" },
    { id: "cat-duvar", label: "Wall Mount", groupId: "ek", rowId: "premium-duvar", tone: "orange", icon: "/images/aksesuarlar/icons/chip-duvar.svg" },
    { id: "cat-egitim", label: "Training Kit", groupId: "egitim", rowId: "egitim-cihazi", tone: "yellow", icon: "/images/aksesuarlar/icons/chip-egitim.svg" },
  ] as ReadonlyArray<CategoryChip>,

  groups: [
    {
      id: "yedek",
      eyebrow: "Essential Accessories for Uninterrupted Operation",
      title: "Spare Accessories",
      theme: "green",
      actionLabel: "Request a Quote",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-yedek.webp", alt: "Spare accessories" },
      rows: [
        {
          id: "elektrotlar",
          title: "Electrodes",
          subtitle: "The Essential Component for Accurate Analysis and Effective Intervention",
          body: [
            "Electrodes are the fundamental component that enables the AED to analyze heart rhythm and deliver a shock when necessary. Their self-adhesive design allows for rapid and correct application to the patient, initiating the intervention process without delay.",
            "For adult patients, the electrodes are placed in an anterior-lateral position on the chest; for pediatric patients, they are applied in an anterior-posterior position to ensure accurate analysis and effective therapy. SavePads electrodes, fully compatible with the device, are specifically engineered for reliable performance.",
            "Supplied as single-use consumables, the electrodes offer a shelf life of up to 60 months, ensuring long-term readiness for deployment. They are a critical supply item that must be replaced after each use.",
          ],
          image: { src: "/images/aksesuarlar/row-elektrotlar.webp", alt: "HeartSave myPAD electrode set" },
          iconLabel: "Electrode",
        },
        {
          id: "ilk-yardim-kiti",
          title: "First Aid Kit",
          subtitle: "Ancillary Equipment to Support the Intervention Process",
          body: [
            "The first aid kit contains essential equipment that supports AED use, making the intervention process safer and more effective.",
            "The kit includes scissors, gloves, a breathing barrier, and single-use supplies used to prepare the patient, ensure correct electrode application, and maintain hygiene. Preparing the chest area prior to electrode placement is particularly critical for enabling accurate device analysis.",
            "Supplied as a single-use kit, one unit is included with the device and should be replaced after each use as a spare consumable.",
          ],
          image: { src: "/images/aksesuarlar/row-ilk-yardim.webp", alt: "HeartSave myPAD first aid kit" },
          iconLabel: "First Aid",
        },
        {
          id: "batarya",
          title: "Battery",
          subtitle: "The Power Source That Keeps the Device Operational at All Times",
          body: [
            "The lithium battery, specifically designed for HeartSave myPAD, is a reliable power source that ensures the device is always ready for use. Its non-rechargeable design delivers stable performance over an extended period.",
            "With a shelf life of approximately 60 months, the battery requires minimal maintenance. Regular monitoring of the battery level is recommended, and timely replacement ensures uninterrupted device operation during critical moments.",
            "Periodic inspection of the battery and other accessories is essential to keep the device ready for intervention at all times.",
          ],
          image: { src: "/images/aksesuarlar/row-batarya.webp", alt: "HeartSave myPAD battery" },
          iconLabel: "Battery",
        },
      ],
    },
    {
      id: "akilli",
      eyebrow: "AED System Enhancers",
      title: "Smart System Components",
      theme: "blue",
      actionLabel: "Request a Quote",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-akilli.webp", alt: "Smart system components" },
      rows: [
        {
          id: "cpr-sensoru",
          title: "CPR Sensor",
          subtitle: "A Real-Time Feedback System That Monitors CPR Quality",
          body: [
            "The CPR feedback sensor analyzes the accuracy of compressions during chest compressions and provides real-time guidance to the user. Once connected to the device, it activates automatically to make the intervention process more controlled and effective.",
            "Through real-time audio prompts, the sensor delivers feedback on compression depth and rhythm, helping maintain CPR quality at the correct level.",
            "Offered as an optional accessory, the sensor has a shelf life of up to 60 months for long-term storage readiness. It is supplied as a single-use item and must be replaced after each use.",
          ],
          image: { src: "/images/aksesuarlar/row-cpr.webp", alt: "CPR sensor" },
          iconLabel: "CPR",
        },
        {
          id: "cihaz-yonetimi",
          title: "Device Management",
          subtitle: "An Intelligent System for Remote Monitoring and Management",
          body: [
            "The device management solution is an advanced infrastructure that enables remote monitoring and centralized management of AED devices. Through the myAED Control platform, devices are tracked in real time to ensure they are always ready for use.",
            "The automated self-test system performs regular device diagnostics, and any issues are communicated to the user via instant notifications. The data storage and logging infrastructure securely archives all usage and device data.",
            "The remote management capability allows multiple devices to be monitored from a single dashboard, with device status and potential faults managed centrally. This reduces the need for physical inspections and streamlines operational workflows.",
            "This is an optional device management solution not included in the standard package. A one-time setup provides 10 years of service.",
          ],
          image: { src: "/images/aksesuarlar/row-iot.webp", alt: "Device management dashboard" },
          iconLabel: "Management",
        },
      ],
    },
    {
      id: "ek",
      eyebrow: "Protection and Positioning Accessories",
      title: "Additional Accessories",
      theme: "orange",
      actionLabel: "Request a Quote",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-ek.webp", alt: "Additional accessories" },
      rows: [
        {
          id: "kucuk-canta",
          title: "Compact Device Case",
          subtitle: "A Protective Case for Safe Transport of the Device",
          body: [
            "Specifically designed for HeartSave myPAD, this carrying case protects the device against impact and enables easy transport. Its lightweight and compact design makes it ideal for mobile use.",
            "Dimensions (H x W x D): 210 x 160 x 100 mm",
          ],
          image: { src: "/images/aksesuarlar/row-canta.webp", alt: "Compact device case" },
          iconLabel: "Case",
        },
        {
          id: "premium-duvar",
          title: "Premium Wall Mount",
          subtitle: "A Wall Mount for Securing the Device in a Fixed Location",
          body: [
            "Featuring a durable coated steel construction, the premium wall mount positions the device at a fixed and easily accessible point. Its single-hand release design provides rapid access during emergencies.",
            "Dimensions (H x W x D): 294 x 265 x 163 mm",
          ],
          image: { src: "/images/aksesuarlar/row-premium-duvar.webp", alt: "Premium wall mount" },
          iconLabel: "Wall Mount",
        },
        {
          id: "eco-duvar",
          title: "ECO Wall Mount",
          subtitle: "A Wall Mount for Securing the Device in a Fixed Location",
          body: [
            "The ECO wall mount stands out with its practical and compact design, securely holding the device in place. Easy to install, it meets essential mounting requirements.",
            "Dimensions (H x W x D): 114 x 165 x 70 mm",
          ],
          image: { src: "/images/aksesuarlar/row-eco-duvar.webp", alt: "ECO wall mount" },
          iconLabel: "ECO Wall Mount",
        },
      ],
    },
    {
      id: "egitim",
      eyebrow: "Training and Simulation Solutions",
      title: "Training Kit",
      theme: "yellow",
      actionLabel: "Request a Quote",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-egitim.webp", alt: "Training kit" },
      rows: [
        {
          id: "egitim-cihazi",
          title: "Training Device and Carrying Set",
          subtitle: "A Simulation Device for Practicing Training Scenarios",
          body: [
            "The HeartSave myPAD Trainer simulates the real device experience, enabling training scenarios to be practiced safely. Equipped with an LCD display and multiple scenario options, it helps users prepare for emergency situations.",
            "The set includes the training device, reusable electrodes, a remote control, a rechargeable battery, and a carrying case.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-cihaz.webp", alt: "Training device set" },
          iconLabel: "Training",
        },
        {
          id: "egitim-elektrot",
          title: "Training Electrode Set",
          subtitle: "A Reusable Electrode and Connection Set for Training",
          body: [
            "Compatible with the HeartSave myPAD Trainer, the training electrode set features a reusable design for practical and sustainable use during training scenarios. It is supplied with electrodes and a connection cable.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-elektrot.webp", alt: "Training electrode set" },
          iconLabel: "Training Electrode",
        },
        {
          id: "egitim-yardimci",
          title: "Training Auxiliary Electrodes",
          subtitle: "Electrodes for Ensuring Correct Placement on Training Manikins",
          body: [
            "The auxiliary electrodes support correct electrode placement on training manikins. Equipped with built-in sensors, they help the device detect proper positioning, ensuring a more realistic and accurate training experience.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-pad.webp", alt: "Training auxiliary electrodes" },
          iconLabel: "Auxiliary",
        },
        {
          id: "egitim-kumanda",
          title: "Training Remote Control",
          subtitle: "A Remote Control for Managing Training Scenarios",
          body: [
            "The training remote control enables different scenarios to be managed remotely, keeping the training process under control. It allows instructors to direct the scenario flow with ease.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-kumanda.webp", alt: "Training remote control" },
          iconLabel: "Remote",
        },
      ],
    },
  ] as ReadonlyArray<AccessoryGroup>,
} as const;
