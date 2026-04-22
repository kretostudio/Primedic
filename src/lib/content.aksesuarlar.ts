// Content for the Aksesuarlar (HeartSave myPAD Accessories) page (/urunler/aksesuarlar).
// Source: Figma node 1:357 and 1:1047 (expanded state). Turkish copy.

export type AccessoryRow = {
  id: string;
  title: string;
  subtitle: string;
  body: readonly string[];
  image: { src: string; alt: string };
  iconLabel: string;
};

export type AccessoryThemeId = "green" | "blue" | "orange" | "yellow";

export type AccessoryGroup = {
  id: string;
  eyebrow: string;
  title: string;
  theme: AccessoryThemeId;
  actionLabel: string;
  actionHref: string;
  defaultImage: { src: string; alt: string };
  rows: ReadonlyArray<AccessoryRow>;
};

export type CategoryChip = {
  id: string;
  label: string;
  groupId: string;
  rowId: string;
  tone: AccessoryThemeId;
  icon: string;
};

export type FeatureCard = {
  id: string;
  label: string;
  image: { src: string; alt: string };
};

export const accessoryThemes: Record<
  AccessoryThemeId,
  {
    chipBg: string;
    cardBg: string;
    cardBgActive: string;
    border: string;
    eyebrow: string;
    button: string;
    buttonHover: string;
  }
> = {
  green: {
    chipBg: "rgba(152,218,133,0.15)",
    cardBg: "rgba(152,218,133,0.10)",
    cardBgActive: "rgba(152,218,133,0.28)",
    border: "#caecc1",
    eyebrow: "#2e9f3a",
    button: "rgba(152,218,133,0.25)",
    buttonHover: "rgba(152,218,133,0.45)",
  },
  blue: {
    chipBg: "rgba(44,187,224,0.15)",
    cardBg: "rgba(44,187,224,0.10)",
    cardBgActive: "rgba(44,187,224,0.25)",
    border: "#8ed6e9",
    eyebrow: "#16bbe6",
    button: "rgba(44,187,224,0.20)",
    buttonHover: "rgba(44,187,224,0.40)",
  },
  orange: {
    chipBg: "rgba(251,133,0,0.15)",
    cardBg: "rgba(251,133,0,0.10)",
    cardBgActive: "rgba(251,133,0,0.25)",
    border: "#ffbf77",
    eyebrow: "#fb8500",
    button: "rgba(251,133,0,0.20)",
    buttonHover: "rgba(251,133,0,0.40)",
  },
  yellow: {
    chipBg: "rgba(247,208,84,0.18)",
    cardBg: "rgba(247,208,84,0.12)",
    cardBgActive: "rgba(247,208,84,0.32)",
    border: "#f3dd6a",
    eyebrow: "#c59b0c",
    button: "rgba(247,208,84,0.25)",
    buttonHover: "rgba(247,208,84,0.45)",
  },
};

export const aksesuarlar = {
  seo: {
    title: "HeartSave myPAD Aksesuarları | Primedic",
    description:
      "HeartSave myPAD için elektrotlar, bataryalar, CPR sensörü, IoT bağlantısı, taşıma çantaları, duvar aparatları ve eğitim kitleri — orijinal Primedic aksesuar seçenekleri.",
    keywords: [
      "HeartSave myPAD aksesuar",
      "AED elektrot",
      "defibrilatör batarya",
      "CPR sensörü",
      "Primedic aksesuar",
      "AED eğitim kiti",
    ],
  },

  hero: {
    title: "Her An Müdahaleye Hazır",
    description:
      "Primedic OED, acil durumlarda hızlı ve doğru müdahale için tasarlanmıştır. Kullanıcıyı adım adım yönlendiren yapısı, akıllı teknolojileri ve güvenilir performansıyla ihtiyaç anında süreci en doğru şekilde yönetmenizi sağlar.",
    actionLabel: "Teklif Alın",
    actionHref: "/iletisim",
    image: {
      src: "/images/aksesuarlar/hero-device.webp",
      alt: "HeartSave myPAD ve aksesuar kiti",
    },
  },

  featureStrip: [
    {
      id: "tam-otomatik",
      label: "Tam Otomatik",
      image: { src: "/images/aksesuarlar/feature-01-otomatik.webp", alt: "Tam Otomatik AED" },
    },
    {
      id: "lcd-ekran",
      label: '4.3" LCD Ekran',
      image: { src: "/images/aksesuarlar/feature-02-lcd.webp", alt: "4.3 inç LCD ekran" },
    },
    {
      id: "wifi-iot",
      label: "Wifi & IOT Bağlantısı",
      image: { src: "/images/aksesuarlar/feature-03-iot.webp", alt: "Wifi ve IoT bağlantısı" },
    },
    {
      id: "batarya",
      label: "Uzun Ömürlü Batarya",
      image: { src: "/images/aksesuarlar/feature-04-batarya.webp", alt: "Uzun ömürlü batarya" },
    },
    {
      id: "elektrotlar",
      label: "Elektrotlar",
      image: { src: "/images/aksesuarlar/feature-05-elektrot.webp", alt: "Elektrotlar" },
    },
    {
      id: "ilk-yardim",
      label: "İlk Yardım Kiti",
      image: { src: "/images/aksesuarlar/feature-06-ilk-yardim.png", alt: "İlk yardım kiti" },
    },
    {
      id: "tasima-cantasi",
      label: "Taşıma Çantası",
      image: { src: "/images/aksesuarlar/feature-07-tasima.png", alt: "Taşıma çantası" },
    },
  ] as ReadonlyArray<FeatureCard>,

  section: {
    pretitle: "HeartSave myPad",
    title: "HeartSave myPAD Aksesuarları",
    categoryHeader: "Kategoriler",
  },

  categories: [
    { id: "cat-elektrotlar", label: "Elektrotlar", groupId: "yedek", rowId: "elektrotlar", tone: "green", icon: "/images/aksesuarlar/icons/chip-elektrotlar.svg" },
    { id: "cat-ilk-yardim", label: "İlk Yardım Kiti", groupId: "yedek", rowId: "ilk-yardim-kiti", tone: "green", icon: "/images/aksesuarlar/icons/chip-ilk-yardim.svg" },
    { id: "cat-batarya", label: "Batarya", groupId: "yedek", rowId: "batarya", tone: "green", icon: "/images/aksesuarlar/icons/chip-batarya.svg" },
    { id: "cat-cpr", label: "CPR Sensörü", groupId: "akilli", rowId: "cpr-sensoru", tone: "blue", icon: "/images/aksesuarlar/icons/chip-cpr.svg" },
    { id: "cat-iot", label: "Cihaz Yönetimi", groupId: "akilli", rowId: "cihaz-yonetimi", tone: "blue", icon: "/images/aksesuarlar/icons/chip-iot.svg" },
    { id: "cat-canta", label: "Cihaz Çantası", groupId: "ek", rowId: "kucuk-canta", tone: "orange", icon: "/images/aksesuarlar/icons/chip-canta.svg" },
    { id: "cat-duvar", label: "Duvar Aparatı", groupId: "ek", rowId: "premium-duvar", tone: "orange", icon: "/images/aksesuarlar/icons/chip-duvar.svg" },
    { id: "cat-egitim", label: "Eğitim Kiti", groupId: "egitim", rowId: "egitim-cihazi", tone: "yellow", icon: "/images/aksesuarlar/icons/chip-egitim.svg" },
  ] as ReadonlyArray<CategoryChip>,

  groups: [
    {
      id: "yedek",
      eyebrow: "Kesintisiz Kullanım İçin Gerekli Aksesuarlar",
      title: "Yedek Aksesuarlar",
      theme: "green",
      actionLabel: "Teklif Al",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-yedek.webp", alt: "Yedek aksesuarlar" },
      rows: [
        {
          id: "elektrotlar",
          title: "Elektrotlar",
          subtitle: "Doğru Analiz ve Etkili Müdahale İçin Temel Bileşen",
          body: [
            "Elektrotlar, OED cihazının kalp ritmini analiz etmesini ve gerektiğinde şok uygulamasını sağlayan temel bileşendir. Kendinden yapışkanlı yapısı sayesinde hastaya hızlı ve doğru şekilde uygulanarak müdahale sürecini başlatır.",
            "Yetişkin hastalarda göğüs bölgesine ön-yan, çocuk hastalarda ise ön-arka pozisyonda yerleştirilerek doğru analiz ve etkili tedavi sağlanır. Cihazla tam uyumlu SavePads elektrotları, güvenilir performans için özel olarak tasarlanmıştır.",
            "Tek kullanımlık olarak sunulan elektrotlar, 60 aya kadar raf ömrü ile uzun süre kullanıma hazır şekilde saklanabilir. Her müdahale sonrasında yenilenmesi gereken kritik bir sarf malzemesidir.",
          ],
          image: { src: "/images/aksesuarlar/row-elektrotlar.webp", alt: "HeartSave myPAD elektrot seti" },
          iconLabel: "Elektrot",
        },
        {
          id: "ilk-yardim-kiti",
          title: "İlk Yardım Kiti",
          subtitle: "Müdahale Sürecini Destekleyen Yardımcı Ekipmanlar",
          body: [
            "İlk yardım kiti; OED kullanımını destekleyen temel ekipmanları içererek müdahale sürecini daha güvenli ve etkili hale getirir.",
            "Kit içerisinde yer alan makas, eldiven, solunum örtüsü ve tek kullanımlık malzemeler; hastanın hazırlanması, elektrotların doğru şekilde uygulanması ve hijyenin sağlanması için kullanılır. Özellikle elektrot yerleşimi öncesinde göğüs bölgesinin hazırlanması, cihazın doğru analiz yapabilmesi açısından kritik öneme sahiptir.",
            "Tek kullanımlık olarak sunulan bu kit, cihaz ile birlikte 1 adet olarak sağlanır ve her kullanım sonrası yenilenmesi gereken bir yedek üründür.",
          ],
          image: { src: "/images/aksesuarlar/row-ilk-yardim.webp", alt: "HeartSave myPAD ilk yardım kiti" },
          iconLabel: "İlk Yardım",
        },
        {
          id: "batarya",
          title: "Batarya",
          subtitle: "Cihazın Kesintisiz Çalışmasını Sağlayan Güç Kaynağı",
          body: [
            "HeartSave myPAD için özel olarak tasarlanan lityum batarya, cihazın her an kullanıma hazır olmasını sağlayan güvenilir enerji kaynağıdır. Şarj edilemeyen yapısı sayesinde uzun süre stabil performans sunar.",
            "Yaklaşık 60 aya kadar raf ömrü ile düşük bakım ihtiyacı sağlar. Kritik anlarda cihazın kesintisiz çalışabilmesi için batarya seviyesinin düzenli olarak kontrol edilmesi ve gerektiğinde değiştirilmesi önerilir.",
            "Cihazın her zaman müdahaleye hazır olması için batarya ve diğer aksesuarların periyodik olarak kontrol edilmesi önemlidir.",
          ],
          image: { src: "/images/aksesuarlar/row-batarya.webp", alt: "HeartSave myPAD batarya" },
          iconLabel: "Batarya",
        },
      ],
    },
    {
      id: "akilli",
      eyebrow: "OED Sistem Tamamlayıcıları",
      title: "Akıllı Sistem Bileşenleri",
      theme: "blue",
      actionLabel: "Teklif Al",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-akilli.webp", alt: "Akıllı sistem bileşenleri" },
      rows: [
        {
          id: "cpr-sensoru",
          title: "CPR Sensörü",
          subtitle: "CPR Kalitesini Analiz Eden Geri Bildirim Sistemi",
          body: [
            "CPR geri bildirim sensörü, kalp masajı sırasında uygulanan kompresyonların doğruluğunu analiz ederek kullanıcıya anlık yönlendirme sağlar. Cihaza bağlandığında devreye girerek müdahale sürecini daha kontrollü ve etkili hale getirir.",
            "Gerçek zamanlı sesli uyarılar sayesinde kompresyon derinliği ve ritmi hakkında geri bildirim vererek, CPR kalitesinin doğru seviyede tutulmasına yardımcı olur.",
            "İsteğe bağlı olarak sunulan bu sensör, 60 aya kadar raf ömrü ile uzun süre kullanıma hazır şekilde saklanabilir. Tek kullanımlık olarak sunulur ve her kullanım sonrasında yenilenmesi gerekir.",
          ],
          image: { src: "/images/aksesuarlar/row-cpr.webp", alt: "CPR sensörü" },
          iconLabel: "CPR",
        },
        {
          id: "cihaz-yonetimi",
          title: "Cihaz Yönetimi",
          subtitle: "Uzaktan İzleme ve Yönetim Sağlayan Akıllı Sistem",
          body: [
            "Cihaz yönetimi çözümü, OED cihazlarının uzaktan izlenmesini ve merkezi olarak yönetilmesini sağlayan gelişmiş bir altyapıdır. myAED Control platformu üzerinden cihazlar anlık olarak takip edilerek her zaman kullanıma hazır durumda tutulur.",
            "Otomatik self-test sistemi sayesinde cihaz düzenli olarak kendini kontrol eder, oluşabilecek durumlar anlık bildirimlerle kullanıcıya iletilir. Veri saklama ve kayıt altyapısı ile tüm kullanım ve cihaz verileri güvenli şekilde depolanır.",
            "Uzaktan yönetim özelliği ile birden fazla cihaz tek panel üzerinden izlenebilir, cihaz durumu ve olası hatalar merkezi olarak kontrol edilebilir. Bu sayede fiziksel kontrol ihtiyacı azalır ve operasyonel süreçler daha verimli hale gelir.",
            "Standart pakete dahil olmayan, isteğe bağlı bir cihaz yönetim çözümüdür. Tek seferlik kurulum ile 10 yıl boyunca kullanım sunar.",
          ],
          image: { src: "/images/aksesuarlar/row-iot.webp", alt: "Cihaz yönetimi paneli" },
          iconLabel: "Yönetim",
        },
      ],
    },
    {
      id: "ek",
      eyebrow: "Koruma ve Konumlandırma Aksesuarları",
      title: "Ek Aksesuarlar",
      theme: "orange",
      actionLabel: "Teklif Al",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-ek.webp", alt: "Ek aksesuarlar" },
      rows: [
        {
          id: "kucuk-canta",
          title: "Küçük Cihaz Çantası",
          subtitle: "Cihazın Güvenli Taşınmasını Sağlayan Çanta",
          body: [
            "HeartSave myPAD için özel olarak tasarlanan taşıma çantası, cihazın darbelere karşı korunmasını ve kolay taşınmasını sağlar. Hafif ve kompakt yapısı ile mobil kullanım için uygundur.",
            "Ölçüler (Y x G x D): 210 x 160 x 100 mm",
          ],
          image: { src: "/images/aksesuarlar/row-canta.webp", alt: "Küçük cihaz çantası" },
          iconLabel: "Çanta",
        },
        {
          id: "premium-duvar",
          title: "Premium Duvar Aparatı",
          subtitle: "Cihazın Sabit Konumda Tutulmasını Sağlayan Duvar Aparatı",
          body: [
            "Dayanıklı kaplamalı çelik yapıya sahip premium duvar aparatı, cihazın sabit ve erişilebilir bir noktada konumlandırılmasını sağlar. Tek elle kolayca alınabilen yapısı ile acil durumlarda hızlı erişim sunar.",
            "Ölçüler (Y x G x D): 294 x 265 x 163 mm",
          ],
          image: { src: "/images/aksesuarlar/row-premium-duvar.webp", alt: "Premium duvar aparatı" },
          iconLabel: "Duvar",
        },
        {
          id: "eco-duvar",
          title: "ECO Duvar Aparatı",
          subtitle: "Cihazın Sabit Konumda Tutulmasını Sağlayan Duvar Aparatı",
          body: [
            "Pratik ve kompakt tasarımıyla öne çıkan ECO duvar aparatı, cihazın güvenli şekilde sabitlenmesini sağlar. Kolay montaj imkânı sunarak temel kullanım ihtiyaçlarını karşılar.",
            "Ölçüler (Y x G x D): 114 x 165 x 70 mm",
          ],
          image: { src: "/images/aksesuarlar/row-eco-duvar.webp", alt: "ECO duvar aparatı" },
          iconLabel: "ECO Duvar",
        },
      ],
    },
    {
      id: "egitim",
      eyebrow: "Eğitim ve Simülasyon Çözümleri",
      title: "Eğitim Kiti",
      theme: "yellow",
      actionLabel: "Teklif Al",
      actionHref: "/iletisim",
      defaultImage: { src: "/images/aksesuarlar/group-egitim.webp", alt: "Eğitim kiti" },
      rows: [
        {
          id: "egitim-cihazi",
          title: "Eğitim Cihazı ve Taşıma Seti",
          subtitle: "Eğitim Senaryolarının Uygulanmasını Sağlayan Simülasyon Cihazı",
          body: [
            "HeartSave myPAD Trainer, gerçek cihaz deneyimini simüle ederek eğitim senaryolarının güvenli şekilde uygulanmasını sağlar. LCD ekranlı yapısı ve farklı senaryo seçenekleri ile kullanıcıların acil durumlara hazırlıklı olmasına yardımcı olur.",
            "Set içeriğinde eğitim cihazı, tekrar kullanılabilir elektrotlar, uzaktan kumanda, şarj edilebilir batarya ve taşıma çantası yer alır.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-cihaz.webp", alt: "Eğitim cihazı seti" },
          iconLabel: "Eğitim",
        },
        {
          id: "egitim-elektrot",
          title: "Eğitim Elektrot Seti",
          subtitle: "Eğitim İçin Tekrar Kullanılabilir Elektrot ve Bağlantı Seti",
          body: [
            "HeartSave myPAD Trainer ile uyumlu eğitim elektrot seti, tekrar kullanılabilir yapısı sayesinde eğitim senaryolarında pratik ve sürdürülebilir kullanım sağlar. Elektrotlar ve bağlantı kablosu ile birlikte sunulur.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-elektrot.webp", alt: "Eğitim elektrot seti" },
          iconLabel: "Eğitim Elektrot",
        },
        {
          id: "egitim-yardimci",
          title: "Eğitim Yardımcı Elektrotlar",
          subtitle: "Eğitim Mankenleri Üzerinde Doğru Yerleşimi Sağlayan Elektrotlar",
          body: [
            "Eğitim mankenleri üzerinde doğru elektrot yerleşimini destekleyen yardımcı elektrotlar, sensörlü yapısı sayesinde cihazın doğru konumlandırmayı algılamasına yardımcı olur. Eğitim sürecinin daha gerçekçi ve doğru ilerlemesini sağlar.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-pad.webp", alt: "Eğitim yardımcı elektrotlar" },
          iconLabel: "Yardımcı",
        },
        {
          id: "egitim-kumanda",
          title: "Eğitim Kumandası",
          subtitle: "Eğitim Senaryolarını Kontrol Etmeye Yönelik Uzaktan Kumanda",
          body: [
            "Eğitim kumandası, farklı senaryoların uzaktan yönetilmesini sağlayarak eğitim sürecini kontrol altında tutar. Eğitmenlerin senaryo akışını kolayca yönlendirmesine imkân tanır.",
          ],
          image: { src: "/images/aksesuarlar/row-egitim-kumanda.webp", alt: "Eğitim kumandası" },
          iconLabel: "Kumanda",
        },
      ],
    },
  ] as ReadonlyArray<AccessoryGroup>,
} as const;
