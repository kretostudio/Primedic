// Content for the HeartSave myPAD product page (/urunler/heartsave-mypad).
// All copy extracted so it can be translated to EN later via next-intl.

export const heartsaveMypad = {
  seo: {
    title:
      "HeartSave myPAD — Her Yerde Kalbiniz Güvende | Primedic",
    description:
      "HeartSave myPAD: biphasic defibrilasyon teknolojisi, akıllı ritim analizi, gerçek zamanlı CPR geri bildirimi ve IoT bağlantı altyapısı ile gelişmiş AED çözümü.",
    keywords: [
      "HeartSave myPAD",
      "Primedic AED",
      "otomatik eksternal defibrilatör",
      "OED",
      "CPR geri bildirim",
      "Biphasic defibrilasyon",
      "IoT AED",
    ],
  },

  hero: {
    brand: "HeartSave myPAD",
    tagline: "Her Yerde Kalbiniz Güvende",
    description:
      "Ani kalp durması durumlarında kullanılmak üzere tasarlanan HeartSave myPAD, kalp ritmini analiz eder, gerektiğinde otomatik defibrilasyon uygular ve kullanıcıyı CPR uygulaması için adım adım yönlendirir.",
    ctaLabel: "İletişime Geç",
    ctaHref: "/iletisim",
    imageSrc: "/images/product/heartsave-mypad-hero.webp",
    imageAlt:
      "HeartSave myPAD otomatik eksternal defibrilatör (AED) — kompakt gövde, renkli ekran ve CPR geri bildirim sensörü",
  },

  overview: {
    title: "HeartSave myPAD",
    description:
      "Ani kalp durması durumlarında kullanılmak üzere tasarlanan HeartSave myPAD, kalp ritmini analiz eder, gerektiğinde otomatik defibrilasyon uygular ve kullanıcıyı CPR uygulaması için adım adım yönlendirir.",
    groups: [
      {
        tag: "Defibrilasyon Teknolojisi",
        items: [
          {
            title: "Biphasic Defibrilasyon Dalga Formu",
            body: "Biphasic Truncated Exponential (BTE) dalga formu ile akım iki fazlı iletilir. Enerji, hastanın göğüs empedansına göre otomatik olarak ayarlanır.",
          },
          {
            title: "Otomatik Enerji Optimizasyonu",
            body: "Cihaz, elektrotlar üzerinden empedansı ölçer. Uygulanan defibrilasyon enerjisini hastaya göre optimize eder.",
          },
          {
            title: "Artımlı Enerji Uygulaması",
            body: "Yetişkin hastalarda enerji kademeli olarak artırılır. 150 J → 170 J → 200 J seviyeleriyle şok etkinliği yükseltilir.",
          },
          {
            title: "Pediatrik Mod",
            body: "Tek tuşla pediatrik moda geçilir. Çocuk hastalarda şok enerjisi güvenli seviyede 50 J olarak uygulanır. CPR geri bildirim fonksiyonu bu modda devre dışıdır.",
          },
          {
            title: "Hızlı Analiz ve Müdahale Süresi",
            body: "Kalp ritmi 5–8 saniye içinde analiz edilir. Şok uygulanabilir ritim tespit edildiğinde cihaz 13–16 saniye içinde müdahale için hazır hale gelir.",
          },
          {
            title: "ECG Sinyali ile Ritim Analizi",
            body: "Sistem 30–300 bpm aralığını izler ve 25–200 Ω empedansı ölçer. IEC 60601-2-4 standardına uygun güvenli analiz sağlar.",
          },
        ],
      },
      {
        tag: "Akıllı Ritim Analiz Algoritması",
        items: [
          {
            title: "Şok Uygulanabilir Ritimler",
            body: "Cihaz hayati risk taşıyan ritimleri otomatik olarak tespit eder. VF tanıma hassasiyeti ≥ %90, Nabızsız VT tanıma hassasiyeti ≥ %75'tir.",
          },
          {
            title: "Şok Uygulanamaz Ritimler",
            body: "Gereksiz şok riskini önlemek için normal ritimler ayırt edilir. Sinüs ritmi özgüllüğü ≥ %99, asistol özgüllüğü ≥ %95 seviyesindedir.",
          },
          {
            title: "Algoritma Performansı",
            body: "Gereksiz şok verme riski son derece düşüktür. Pozitif tahmin değeri %98.2, yanlış pozitif oranı %0.9'dur. Yüksek doğruluk oranlarıyla güvenilir ritim analizi sağlar.",
          },
        ],
      },
    ],
  },

  video: {
    heading: "Cihazı Tanıyın",
    description:
      "HeartSave myPAD'in kullanım akışını ve CPR geri bildirim sensörünün çalışma prensibini kısa bir tanıtım videosu ile inceleyin.",
    youtubeId: "msKG9Ls4ecE",
    posterSrc: "/images/product/video-poster.jpg",
    posterAlt:
      "HeartSave myPAD tanıtım videosu önizleme görseli",
    playLabel: "Tanıtım videosunu oynat",
  },

  connectivity: {
    title: "Akıllı Bağlantı ve Cihaz Yönetimi",
    description:
      "HeartSave myPAD, IoT bağlantı altyapısı sayesinde cihazların uzaktan izlenmesini, yönetilmesini ve operasyonel verilerin güvenli şekilde kaydedilmesini sağlar. Cloud tabanlı sistem sayesinde AED cihazları her zaman kullanıma hazır durumda tutulabilir.",
    items: [
      {
        title: "IoT Bağlantı Altyapısı",
        body: "LTE ve Wi-Fi bağlantı seçenekleri sayesinde cihaz internete bağlanarak uzaktan izlenebilir ve yönetilebilir.",
      },
      {
        title: "Cloud Cihaz Yönetimi",
        body: "myAED Control platformu üzerinden birden fazla AED cihazı merkezi panelden takip edilebilir.",
      },
      {
        title: "Uzaktan Yönetim",
        body: "Cihaz ayarları ve sistem konfigürasyonu bilgisayar, tablet veya mobil cihaz üzerinden uzaktan yapılabilir.",
      },
      {
        title: "Cloud Bildirim Sistemi",
        body: "Self-test sonuçları ve olası hata durumları cloud platformuna iletilir ve kullanıcıya bildirim gönderilir.",
      },
      {
        title: "Otomatik Self-Test",
        body: "Cihaz günlük ve periyodik otomatik testler gerçekleştirerek batarya, elektrotlar ve sistem modüllerini kontrol eder.",
      },
      {
        title: "Veri Kaydı ve Aktarımı",
        body: "ECG, CPR ve olay kayıtları cihaz hafızasında saklanır ve USB veya cloud bağlantısı ile aktarılabilir.",
      },
    ],
  },

  details: {
    heading: "Güvenilir Müdahale İçin Gelişmiş Teknoloji",
    description:
      "Ani kalp durması durumlarında kullanılmak üzere tasarlanan HeartSave myPAD, kalp ritmini analiz eder, gerektiğinde otomatik defibrilasyon uygular ve kullanıcıyı CPR uygulaması için adım adım yönlendirir.",
    cards: [
      {
        title: "Defibrilasyon Elektrotları",
        description:
          "HeartSave myPAD cihazında kullanılan SavePads PLUS elektrotları kalp ritmini analiz etmek ve defibrilasyon enerjisini hastaya güvenli şekilde iletmek için tasarlanmıştır.",
        image: "/images/product/electrodes.webp",
        imageAlt: "SavePads PLUS defibrilasyon elektrotları",
        imageWidth: 513,
        imageHeight: 347,
        imageOnRight: true,
        specs: [
          { icon: "clock", label: "Elektrot ömrü", value: "5 Yıl" },
          { icon: "grid", label: "Elektrot yüzeyi", value: "86 ± 10 cm²" },
          { icon: "cable", label: "Kablo uzunluğu", value: "1,4 m" },
          { icon: "zap", label: "Maks. şok kapasitesi", value: "50 şok" },
        ],
      },
      {
        title: "CPR Geri Bildirim Sensörü",
        description:
          "CPR sensörlü elektrotlar kalp masajı sırasında uygulanan bası hızını ve derinliğini ölçerek kullanıcıya doğru CPR uygulaması için geri bildirim sağlar.",
        image: "/images/product/cpr-sensor.webp",
        imageAlt: "CPR geri bildirim sensörlü defibrilasyon elektrodu",
        imageWidth: 521,
        imageHeight: 388,
        imageOnRight: false,
        specs: [
          { icon: "metronome", label: "Bası hızı aralığı", value: "100–120 bası/dk" },
          { icon: "depth", label: "Bası derinliği", value: "50–60 mm" },
          { icon: "target", label: "Bası hızı doğruluğu", value: "±3 cpm" },
          { icon: "target", label: "Derinlik doğruluğu", value: "±5 mm / ±10%" },
        ],
      },
    ],
  },

  cta: {
    pretitle: "HeartSave myPad",
    title: "Bireysel ve Kurumsal AED Çözümleri",
    description:
      "İş yerleri, kurumlar ve bireysel kullanıcılar için uygun Primedic defibrilatör çözümleri hakkında bilgi almak ve sipariş oluşturmak için bizimle iletişime geçin.",
    actionLabel: "İletişime Geç",
    actionHref: "/iletisim",
  },
} as const;
