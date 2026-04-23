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
      label: "Ürünler",
      children: [
        { label: "HeartSave myPAD", href: "/urunler/heartsave-mypad" },
        { label: "Aksesuarlar", href: "/urunler/aksesuarlar" },
      ],
    },
    { label: "Yönetmelik", href: "/yonetmelik" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Blog", href: "/blog" },
  ],
};

export const hero = {
  pretitle: "HeartSave myPAD",
  titleLine1: "Her Yerde",
  titleLine2: "Kalbiniz Güvende",
  description:
    "HeartSave myPAD cihazı hafif yapısı ve yenilikçi teknolojisi sayesinde, her saniyenin kritik olduğu anlar için özel olarak tasarlanmıştır.",
  chips: [
    { label: "BATARYA ÖMRÜ", value: "5 YIL" },
    { label: "AĞIRLIK", value: "1,1 KG" },
    { label: "DAYANIKLILIK", value: "IP66" },
    { label: "BAĞLANTI", value: "LTE & Wifi" },
    { label: "PEDİATRİK MODU", value: "TEK TUŞLA" },
    { label: "GARANTİ", value: "8 YIL" },
    { label: "DİL SEÇENEĞİ", value: "6 DİL" },
    { label: "ŞOK ARALIĞI", value: "150 – 200 J" },
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
  title: "Kalp Durmasında\nErken Müdahalenin Önemi",
  slides: [
    {
      source: "American Heart Association (AHA)",
      quote: [
        { text: "Kalp durmasından sonra " },
        { text: "3–5 dakika", strong: true },
        {
          text: " içinde beyne oksijen gitmezse kalıcı hasar başlar. Kalp durması sonrasında her geçen dakika hayatta kalma ihtimali yaklaşık ",
        },
        { text: "%10 azalır.", strong: true },
      ],
    },
    {
      source: "American Heart Association (AHA)",
      quote: [
        {
          text: "Acil sağlık ekipleri çoğu zaman olay yerine ulaşana kadar ",
        },
        { text: "10 dakikadan fazla", strong: true },
        {
          text: " süre geçebilir. Bu süre kalp durması vakalarında erken müdahaleyi hayati hale getirir.",
        },
      ],
    },
    {
      source: "American Heart Association (AHA)",
      quote: [
        {
          text: "Hastane dışında gerçekleşen kalp durmalarında genel hayatta kalma oranı ",
        },
        { text: "%10'un altındadır.", strong: true },
        {
          text: " Erken müdahale yapılmadığında ölüm riski hızla artar.",
        },
      ],
    },
    {
      source: "European Resuscitation Council (ERC)",
      quote: [
        { text: "İlk " },
        { text: "3–5 dakika", strong: true },
        { text: " içinde OED kullanılması durumunda hayatta kalma oranı " },
        { text: "%60–70", strong: true },
        {
          text: "'e kadar çıkabilir. Erken defibrilasyon yaşam şansını önemli ölçüde artırır.",
        },
      ],
    },
    {
      source: "American College of Cardiology (ACC)",
      quote: [
        { text: "Türkiye'de her yıl yaklaşık " },
        { text: "100.000 – 120.000", strong: true },
        {
          text: " kişi ani kalp durması nedeniyle hayatını kaybetmektedir. Bu vakaların büyük bölümü hastane dışında gerçekleşir.",
        },
      ],
    },
    {
      source: "Türk Kardiyoloji Derneği",
      quote: [
        { text: "Ani kalp durmalarının yaklaşık " },
        { text: "%70–80", strong: true },
        {
          text: "'i ev, iş yeri veya kamusal alanlarda meydana gelir. Bu nedenle OED cihazlarının kamuya açık alanlarda bulunması kritik önem taşır.",
        },
      ],
    },
    {
      source: "Türk Kardiyoloji Derneği",
      quote: [
        {
          text: "Kamusal alanlarda gerçekleşen kalp durmalarında OED kullanım oranı yalnızca ",
        },
        { text: "%7", strong: true },
        {
          text: " civarındadır. Bu durum erken müdahalenin çoğu zaman kaçırıldığını göstermektedir.",
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
  pretitle: "Kompakt Tasarım. Maximum Güven.",
  title: "Hayat Kurtaran Teknoloji",
  description:
    "HeartSave myPAD; akıllı defibrilasyon teknolojisi, gerçek zamanlı CPR geri bildirimi, üstün dayanıklılık ve IoT bağlantı özelliklerini tek bir kompakt yapıda birleştirir. Her saniyenin kritik olduğu ortamlarda güvenle müdahale için tasarlanmıştır.",
  rows: [
    {
      title: "Her An Kalbiniz Güvende",
      image: "/images/features/heartsave-mypad-device.webp",
      imageAlt: "HeartSave myPAD defibrilatör cihazı",
      imageWidth: 523,
      imageHeight: 378,
      bullets: [
        [
          {
            text: "Cihaz kalp ritmini analiz eder ve gerekli durumlarda defibrilasyon şokunu otomatik olarak uygular.",
          },
        ],
        [
          {
            text: "Otomatik artan enerji teknolojisi sayesinde müdahale sırasında doğru şok seviyesini sağlar.",
          },
        ],
        [
          { text: "Yaklaşık " },
          { text: "1,1 kg ağırlığı", strong: true },
          { text: " ve kompakt tasarımı sayesinde her ortamda kolay taşınabilir." },
        ],
        [
          { text: "Yetişkin ve " },
          { text: "pediatrik mod", strong: true },
          { text: " desteği ile farklı hasta gruplarında güvenle kullanılabilir." },
        ],
      ],
    },
    {
      title: "Dayanıklı ve Her Zaman Hazır",
      image: "/images/features/heartsave-mypad-field.webp",
      imageAlt: "HeartSave myPAD saha kullanımı",
      imageWidth: 461,
      imageHeight: 323,
      bullets: [
        [
          { text: "8 yıl garanti", strong: true },
          {
            text: " ile uzun vadeli güven ve düşük bakım maliyeti sunar. 5 yıla kadar batarya ve elektrot raf ömrü ile uzun süre hazır kalır.",
          },
        ],
        [
          { text: "IP66", strong: true },
          {
            text: " koruma sınıfı sayesinde cihaz suya ve toza karşı yüksek dayanıklılık gösterir.",
          },
        ],
        [
          {
            text: "−5°C ile +55°C çalışma sıcaklığı aralığında güvenle çalışacak şekilde tasarlanmıştır.",
          },
        ],
        [
          {
            text: "−30°C ile +70°C depolama koşullarında güvenli taşıma ve saklama imkânı sunar.",
          },
        ],
        [
          { text: "1.6 m düşme", strong: true },
          { text: " dayanımı ile zorlu saha koşullarında güvenilir performans sağlar." },
        ],
      ],
      badges: [
        { icon: "shield", label: "GARANTİ", value: "8 Yıl" },
        { icon: "target", label: "DAYANIKLILIK", value: "IP66" },
        { icon: "pulse", label: "BATARYA ÖMRÜ", value: "5 Yıl" },
      ],
    },
    {
      title: "Kullanıcı Dostu Tasarım",
      image: "/images/features/heartsave-mypad-screen.webp",
      imageAlt: "HeartSave myPAD renkli ekran arayüzü",
      imageWidth: 545,
      imageHeight: 435,
      bullets: [
        [
          { text: "CPR geri bildirim sensörü", strong: true },
          {
            text: ", kalp masajının hız ve basınç kalitesini gerçek zamanlı analiz eder.",
          },
        ],
        [
          { text: "4.3” renkli ekranı", strong: true },
          {
            text: " ile sesli ve görsel yönlendirme yaparak kullanıcıyı adım adım yönlendirir.",
          },
        ],
        [
          {
            text: "Metronom destekli sistem, doğru kompresyon ritmini korumaya yardımcı olur.",
          },
        ],
        [
          { text: "6 dile", strong: true },
          { text: " kadar çoklu dil desteği farklı kullanıcılar için kolay kullanım sağlar." },
        ],
      ],
    },
  ],
};

export const ctaBanner = {
  pretitle: "HeartSave myPAD",
  title: "Bireysel ve Kurumsal",
  titleAccent: "AED Çözümleri",
  description:
    "İş yerleri, kurumlar ve bireysel kullanıcılar için uygun Primedic defibrilatör çözümleri hakkında bilgi almak ve sipariş oluşturmak için bizimle iletişime geçin.",
  actionLabel: "İletişime Geç",
  actionHref: "/iletisim",
};

export const useCases = {
  pretitle: "Hayat Kurtaran Teknoloji",
  title: "OED Kullanımı Gereken Alanlar",
  description:
    "HeartSave myPAD; akıllı defibrilasyon teknolojisi, gerçek zamanlı CPR geri bildirimi, üstün dayanıklılık ve IoT bağlantı özelliklerini tek bir kompakt yapıda birleştirir. Her saniyenin kritik olduğu ortamlarda güvenle müdahale için tasarlanmıştır.",
  actionLabel: "Yönetmeliği Oku",
  actionHref: "/yonetmelik",
  items: [
    {
      icon: "briefcase",
      title: "Kurumsal İş Yerleri",
      description:
        "Çalışan yoğunluğunun yüksek olduğu iş yerlerinde ani kalp durmalarına hızlı müdahale büyük önem taşır.",
    },
    {
      icon: "home",
      title: "Konaklama ve Turizm",
      description:
        "OED cihazları acil durumlarda hızlı müdahale sağlayarak misafir güvenliğini artırır.",
    },
    {
      icon: "cart",
      title: "Ticari Alanlar",
      description:
        "AVM'ler ve yoğun ziyaretçi trafiğine sahip ticari alanlarda hızlı müdahale kritik önem taşır.",
    },
    {
      icon: "basketball",
      title: "Spor Tesisleri",
      description:
        "Yoğun fiziksel aktivitenin gerçekleştiği spor alanlarında ani kalp durması riski artabilir.",
    },
    {
      icon: "book",
      title: "Eğitim Kurumları",
      description:
        "Okullar ve kampüslerde öğrenciler, çalışanlar ve ziyaretçiler için güvenli bir ortam sağlamak önemlidir.",
    },
    {
      icon: "pin",
      title: "Kamusal Alanlar",
      description:
        "Meydanlar ve parklar gibi kamuya açık alanlarda ani kalp durmalarına hızlı müdahale hayat kurtarıcıdır.",
    },
    {
      icon: "plane",
      title: "Ulaşım ve Terminaller",
      description:
        "Havalimanları, metro ve otobüs terminalleri gibi ulaşım noktalarında OED cihazları kritik rol oynar.",
    },
    {
      icon: "music",
      title: "Etkinlik Alanları",
      description:
        "Festival, konser ve büyük organizasyonlarda kalabalık ortamlarda sağlık güvenliği önemlidir.",
    },
  ],
} as const;

export const faq = {
  title: "Sıkça Sorulan Sorular",
  items: [
    {
      question: "Primedic OED cihazını herkes kullanabilir mi?",
      answer:
        "Evet. OED cihazları sağlık personeli olmayan kişiler tarafından da kullanılabilecek şekilde tasarlanmıştır. Cihaz, sesli ve görsel yönlendirmeler ile kullanıcıyı adım adım yönlendirir ve yanlış müdahaleyi önlemek için gerekli güvenlik kontrollerini otomatik olarak yapar.",
    },
    {
      question:
        "Şok verilip verilmeyeceğini nasıl anlayacağım? Müdahale etmem gerekir mi?",
      answer:
        "Tam otomatik OED cihazı hastanın kalp ritmini analiz eder ve şok gerekip gerekmediğine kendisi karar verir. Şok uygulanması gereken bir ritim tespit edilirse cihaz gerekli kontrolleri yaptıktan sonra şoku otomatik olarak uygular.\n\nKullanıcının ritmi yorumlamasına veya şok vermesine gerek yoktur. Yapılması gereken; cihazı açmak, elektrotları doğru şekilde yerleştirmek ve cihazın yönlendirmelerini takip etmektir. Cihaz gerektiğinde kullanıcıyı kalp masajı (CPR) için yönlendirir.",
    },
    {
      question: "Primedic OED cihazı yanlışlıkla şok verebilir mi?",
      answer:
        "Hayır. OED cihazları yalnızca şok uygulanabilir bir kalp ritmi tespit edildiğinde şok uygular. PRIMEDIC HeartSave serisi cihazlar kalp ritmini gelişmiş bir algoritma ile analiz eder ve şok uygulanabilir ritimler ile uygulanamaz ritimleri yüksek doğrulukla ayırt eder.\n\nCihazın ritim analiz algoritması, uluslararası EKG veri tabanları kullanılarak geliştirilmiş ve IEC 60601-2-4 medikal cihaz standardına göre test edilmiştir. Test sonuçlarına göre cihazın pozitif tahmin değeri %98,2 ve yanlış pozitiflik oranı yalnızca %0,9 olarak raporlanmıştır.\n\nBu sayede cihaz, yalnızca Ventriküler Fibrilasyon (VF) ve nabızsız Ventriküler Taşikardi (pVT) gibi şok uygulanabilir ritimlerde müdahale eder; normal sinüs ritmi, asistol veya diğer şok gerektirmeyen ritimlerde şok uygulanmasına izin vermez. Bu gelişmiş analiz sistemi sayesinde gereksiz veya yanlış şok verme riski son derece düşüktür.",
    },
    {
      question: "CPR sensörü cihazla birlikte mi gelir?",
      answer:
        "CPR sensörü bazı modellerde opsiyonel bir aksesuar olarak sunulmaktadır. Ayrı olarak temin edilebilir. CPR sensörü, kalp masajı sırasında uygulanan basınç ve ritmi analiz ederek kullanıcıya doğru CPR uygulaması için geri bildirim verir.",
    },
    {
      question:
        "Ürünün çalışır durumda olduğunu ne sıklıkla kontrol etmem gerekir?",
      answer:
        "OED cihazları otomatik self-test (kendi kendini kontrol) sistemi ile çalışır. Cihaz günlük, haftalık ve aylık olarak kendi sistem kontrollerini otomatik şekilde gerçekleştirir ve çalışır durumda olup olmadığını sürekli denetler. Herhangi bir sorun tespit edilmesi durumunda kullanıcıyı görsel veya sistem uyarıları ile bilgilendirir. Bu sayede cihazın manuel olarak sürekli kontrol edilmesine gerek kalmaz.",
    },
    {
      question: "Türkiye'de OED cihazı bulundurmak zorunlu mu?",
      answer:
        "Türkiye'de Sağlık Bakanlığı tarafından yayımlanan \"Taşınabilir Otomatik Şok Cihazı (OED) Bulundurulması Hakkında Yönetmelik\" kapsamında bazı alanlarda OED cihazı bulundurulması zorunlu hale getirilmiştir. Yönetmeliğe göre özellikle yoğun insan trafiğinin bulunduğu alanlarda OED cihazlarının kademeli olarak bulundurulması gerekmektedir. Bu kapsamda havalimanları, büyük alışveriş merkezleri, spor tesisleri, yüksek kapasiteli konaklama işletmeleri, büyük iş yerleri, ulaşım terminalleri ve benzeri toplu kullanım alanları OED cihazı bulundurması gereken yerler arasında yer almaktadır.\n\nBu düzenleme, ani kalp durması durumlarında hızlı müdahale edilmesini sağlayarak hayat kurtarma oranını artırmayı amaçlamaktadır. Kurumların çalışan ve ziyaretçi güvenliği için bu cihazları bulundurması önemli bir sağlık ve güvenlik önlemidir.",
    },
    {
      question: "OED cihazının bakımı gerekir mi?",
      answer:
        "OED cihazları gelişmiş otomatik self-test sistemi sayesinde düzenli olarak kendi durumunu kontrol eder. Cihaz günlük, haftalık, aylık ve belirli periyotlarda tüm donanım bileşenlerini otomatik olarak test ederek kullanıma hazır olup olmadığını denetler.\n\nCihaz üzerindeki durum göstergesi sayesinde cihazın hazır olup olmadığı kolayca görülebilir. Ayrıca IoT bağlantısı bulunan modellerde elektrot ve batarya süreleri ile olası hatalar cloud sistemi üzerinden bildirilir.",
    },
    {
      question: "OED cihazı nerede üretilmektedir?",
      answer:
        "Primedic OED cihazları Almanya'da geliştirilen ve üretilen yüksek kaliteli medikal cihazlardır. Avrupa tıbbi cihaz standartlarına uygun üretim süreçlerinden geçerek dünya genelinde kullanılmaktadır.",
    },
    {
      question: "Elektrot empedans ölçümü yapıyor mu?",
      answer:
        "Evet. PRIMEDIC AED cihazları elektrot yerleştirildiğinde hastanın göğüs direncini ölçer ve iki fazlı dalga formu sayesinde şok enerjisini otomatik olarak bu değere göre optimize eder. Cihaz 25–200 Ω empedans aralığında çalışır ve elektrot temasını sürekli kontrol eder.",
    },
    {
      question:
        "Primedic OED cihazında müdahale verileri ve cihaz bilgileri kaydediliyor mu?",
      answer:
        "Evet. HeartSave myPAD OED cihazı 8 GB dahili hafızaya sahiptir ve acil müdahale sırasında oluşan verileri otomatik olarak kaydeder. Bu kapsamda ECG kayıtları, CPR süresi, uygulanan şok sayısı ve enerji bilgileri gibi tedavi verileri ile birlikte cihazın seri numarası, yazılım versiyonu, batarya ve elektrot bilgileri, self-test raporları ve olay kayıtları saklanır. Cihaz yaklaşık 160 saat ECG/CPR kaydı, 10.000 olay kaydı ve 3650 self-test raporu depolayabilir.",
    },
    {
      question: "Birden fazla OED cihazını uzaktan yönetmek mümkün mü?",
      answer:
        "Evet. IoT bağlantısına sahip OED cihazları cloud tabanlı yönetim sistemi üzerinden uzaktan izlenebilir ve yönetilebilir. Bu sistem sayesinde birden fazla cihazın durumu tek bir platformdan takip edilebilir. Cihazların self-test sonuçları, batarya ve elektrot durumları görüntülenebilir; olası hata veya bakım ihtiyaçları için bildirim alınabilir. Ayrıca yazılım güncellemeleri ve sistem ayarları bilgisayar, tablet veya telefon üzerinden uzaktan gerçekleştirilebilir. Bu yapı özellikle çok sayıda cihazın bulunduğu kurumlarda merkezi ve kolay bir cihaz yönetimi sağlar.",
    },
  ],
};

export const footerContent = {
  companyColumns: [
    {
      title: "Menü",
      links: [
        { label: "Ana Sayfa", href: "/" },
        { label: "Yönetmelik", href: "/yonetmelik" },
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "İletişim", href: "/iletisim" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Ürünler",
      links: [
        { label: "HeartSave myPAD", href: "/urunler/heartsave-mypad" },
        { label: "Aksesuarlar", href: "/urunler/aksesuarlar" },
      ],
    },
    {
      title: "Yasal",
      links: [
        { label: "Gizlilik Politikası", href: "/privacy" },
        { label: "Kullanım Şartları", href: "/terms" },
        { label: "Yayınlar", href: "/publications" },
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
