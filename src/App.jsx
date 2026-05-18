import React, { useState } from 'react';

const DOKTORLAR = [
  { 
    id: 1, 
    ad: "Prof. Dr. Elif Yılmaz", 
    uzmanlik: "Nadir Genetik Bozukluklar Uzmanı", 
    hastane: "Ankara Şehir Hastanesi", 
    sehir: "Ankara", 
    ilgiliHastaliklar: ["DMD", "Duchenne"],
    aciklama: "20 yılı aşkın süredir metabolik hastalıklar ve genomik tıp alanında öncü araştırmalar yürütmektedir.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMXznDOIn78Um2xZkiCNfCBgeP-Yh0_jFCTTiB1vfuNfdkUvVoHS-reWJ-ChIEzCmJ97ATf74FIdWmHmO0g51PD66bfkwQRpLKMzf4cI0ruJpu9lEOeJxok3256x6FJlb3kFviSwdRU4r5kkkXL18SGHY7Kr4kgxYNUJqU53zHvTgj52Pl3doiUpjlBcWcDpGmExfq_KLyyQqcJeOviokgw2nm3XHL89YpFgqOLxyeWIyixgykxs5IQy2bONMCZq0N9Gy2FbpIWqlt",
    yeniHasta: true
  },
  { 
    id: 2, 
    ad: "Doç. Dr. Caner Erkin", 
    uzmanlik: "Nöromüsküler Hastalıklar", 
    hastane: "Hacettepe Üniversitesi Tıp Fakültesi", 
    sehir: "Ankara", 
    ilgiliHastaliklar: ["SMA", "Spinal Musküler Atrofi"],
    aciklama: "SMA ve DMD hastaları için geliştirilen yeni nesil gen terapileri üzerine uzmanlaşmış klinik araştırmacı.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcpEN6DsyJNojnprTvj-rqE2iZrF07xZM3HT37FV4NvOJ0qmrAPZv5hLjvf0zmTGmtVt3Ukuur2bCoxZyRTB0IRAkXlvLvvY8fGGT3f063Q600BogTNTuVuBGxoMKPukZTYiPCC0l9axogNpzZzfBbsN0mHjJP9v27gqYHPpnSYRpeWAZvaBgbRI6Ps3t-PCOO9dFVEHsNZRN8BF5l6FK-B5AMnJIdcsvCRGXc6T7ZbBjYGK7Sg7vyLRcpfPmxz899ZzQ89f3EUZDX",
    yeniHasta: true
  },
  { 
    id: 3, 
    ad: "Dr. Selin Demir", 
    uzmanlik: "Pediatrik Onkoloji & Genetik", 
    hastane: "İstanbul Çapa Tıp Fakültesi", 
    sehir: "İstanbul", 
    ilgiliHastaliklar: ["Nadir Tümörler", "Genetik"],
    aciklama: "Çocukluk çağı nadir tümörleri ve kalıtsal kanser sendromları konusunda derinlemesine tanı çalışmaları.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxO_3ljLnfyKsqs8NvAXZ19DIM6cmAGQkAcPx5LV-PM_X04v8eb6rsHOZ7j2dLN9ralLbr-LmaGhe_-IlkkkmsdEBBY34irPXyiW6RCL04YZ30H4YgU83Icu26JMo2Zjc5oeoYnEyQeFOh8Tw6f8bledUVEd9fnUx2b8ekwjLMBHR48Din7VIoNnMXJSSiiaikIVHX6Xuyx5OnSaXZA1og3Frj3osDnCalTOGt2aD96zV3Hpm8cZ-1LEYWg6MkhwWkn8UIPSS04cVB",
    yeniHasta: false
  }
];

const MAKALELER = [
  { 
    id: 1, 
    baslik: "Gaucher Hastalığı Tip 1 Tedavisinde Yeni Yaklaşımlar", 
    ozet: "Bu çalışma, enzim replasman tedavisine direnç gösteren Tip 1 Gaucher hastalarında substrat azaltma tedavisinin uzun vadeli etkinliğini ve güvenlik profilini incelemektedir.", 
    hastalik: "Metabolik Bozukluklar",
    tur: "Klinik Deney",
    yazar: "Dr. Ayşe Yılmaz",
    tarih: "12 Mar 2024",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmgKm5Svvw4KsqtBBvGPmwymaWEuRDGoNlvkA_6Loo_MDyCbEdmU7JbQVDpm42LKd-EHvI1LZ5WLdhvcZt1tvkerw4B6dY-a-LYkSIhkN3XLu6oonUzQ3Z3QooWxgiHYQyZwL4s27Kg8EFSlQtGd2RQ1vRwCPoISruA4hJv-Qa6clWgWkvBTjstmoAviDQMufQLeQgGMu_96eTObwIPM19G4MIzCaGwU2oyIY9L9ldkbIHOKAp1MxlMJLyAMxMzlg0rL-1tfsqA2wb"
  },
  { 
    id: 2, 
    baslik: "Huntington Hastalığında Erken Tanı Yöntemleri", 
    ozet: "Moleküler genetik testlerdeki son gelişmeler, Huntington hastalığı riski taşıyan bireylerde semptomlar ortaya çıkmadan yıllar önce teşhis konulmasına olanak tanımaktadır.", 
    hastalik: "Genetik Hastalıklar",
    tur: "Vaka Çalışması",
    yazar: "Dr. Mehmet Can",
    tarih: "05 Şub 2024",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB60OqIN1CtI_SPjGHYBVTa5SWRq2AJNyd0glehGmbvd22s2BS6Xv2_vqR80Gi74ohGlp-_vPuAnIrqNOG1d16avxJBgTEmYONbKxZw9KBkQbPnGFkOhJ8aUy05Att4b8XKoVRVgQ8kTfu6tz7ci0CRJRg2w2hkY1qJLfd95miaDKo3oZwB3Q_4svPFO7FxzOe4wnvvkdgzgSnScgkjCtUESM7b-FEwLrAMAl6ja6JheqS_-KA6wOD4IcOeMVXMTqqLwGwIavWnN2Bw"
  },
  { 
    id: 3, 
    baslik: "CRISPR Teknolojisinin Nadir Hastalık Tedavisindeki Geleceği", 
    ozet: "Gen düzenleme teknolojisindeki devrim niteliğindeki gelişmeler, daha önce tedavisi imkansız kabul edilen tek gen bozuklukları için umut ışığı oluyor.", 
    hastalik: "Genetik",
    tur: "Editörün Seçimi",
    yazar: "Editör",
    tarih: "01 Oca 2024",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiIyIYjVwY3mwNRn_K4bS5m6wu8TKYCyZvmE4iOIM3wObp9lMQvfsJctKiuIG4m_xo9XaT5frzzg4Ytt5h8lF3Z2sqHQFDTc0IcnU-3jOJeS00Huv-IHgedZoEgWem-Juiu-cPGxRlZ0bxRE33BjQwTsu3giq14-Boo2mPCECf1VzVsSrpNSqvca7wUPA9LUoS-HgfP38E0Tzp43UGOHM-cUMp65QBYGpTxrNxdQ-xJUlmB5nze4m03aa7Lb26C5W6HNIyPBppiSsK"
  },
  { 
    id: 4, 
    baslik: "SMA Hastalığında Multidisipliner Yaklaşım", 
    ozet: "Spinal Müsküler Atrofi yönetiminde fizyoterapi, beslenme desteği ve yeni nesil ilaç tedavilerinin koordineli kullanımının yaşam kalitesi üzerindeki etkileri.", 
    hastalik: "Nöroloji",
    tur: "Bilgilendirme",
    yazar: "RareCare Araştırma Grubu",
    tarih: "20 Oca 2024",
    imgUrl: null
  },
  { 
    id: 5, 
    baslik: "Çocukluk Çağı Nadir Tümörlerinde İmmünoterapi", 
    ozet: "Pediatrik onkolojide hedefe yönelik tedavilerin ve bağışıklık sistemi modülatörlerinin dirençli vakalardaki başarı oranları üzerine güncel veriler.", 
    hastalik: "Onkoloji",
    tur: "Klinik Araştırma",
    yazar: "Dr. Elif Aras",
    tarih: "15 Oca 2024",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfRf1a6BWJSwGLZKnsiL-qGIoO15OlRclApm_0-Z_G3JIULyhmyhlJ5fGgZZss-1wUMSmGi7V8Zc4abe_zT-rIeUW0yJa4B3YAK_hb63hDMEDklgzexzcuAci4h_WkBruR91eHCXDOVCqCRXVt22vGPx0IvVXVLFEXjriXRCf07q8FTCDkS0SA4hp5vAK8sOZNappveAdKijaIzWni4cNomgKDaByP6fuiqeZPI4-AdVIxfhhGz_foT1Sdlk31Yk6qFb1eu7MvEYSX"
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("home"); // "home", "makaleler"
  const [searchTerm, setSearchTerm] = useState("");
  const [isAiWidgetOpen, setIsAiWidgetOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiMessages, setAiMessages] = useState([
    { role: "assistant", content: "Merhaba! Ben RareCare AI. Nadir hastalıklar veya tedavi süreçleri hakkında merak ettiğiniz bilimsel bir sorunuz var mı?" }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const filtrelenmişDoktorlar = DOKTORLAR.filter(doktor => 
    doktor.uzmanlik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doktor.ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doktor.ilgiliHastaliklar.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const siraliMakaleler = [...MAKALELER].sort((a, b) => a.baslik.localeCompare(b.baslik, 'tr-TR'));

  const handleAiSubmit = () => {
    if (!aiInput.trim()) return;
    const newMessage = { role: "user", content: aiInput };
    setAiMessages(prev => [...prev, newMessage]);
    setAiInput("");
    setIsAiLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const lowerInput = newMessage.content.toLowerCase();
      let responseContent = "Belirttiğiniz bulgular çok yönlü bir değerlendirme gerektiriyor. Detaylı tanı ve yönlendirme için öncelikle Tıbbi Genetik veya Dahiliye bölümüne başvurmanız faydalı olacaktır.";
      
      if (lowerInput.includes("kas") || lowerInput.includes("yürüme") || lowerInput.includes("güçsüz")) {
        responseContent = "Kas zayıflığı ve hareket problemleri genellikle nöromüsküler hastalıklara (örn: SMA, DMD) işaret eder. Önerilen Birim: Çocuk Nörolojisi veya Nöroloji uzmanıdır.";
      } else if (lowerInput.includes("gaucher")) {
        responseContent = "Gaucher hastalığı, vücutta belirli bir enzimin eksikliği sonucu ortaya çıkan nadir bir genetik metabolizma hastalığıdır. Genellikle dalak ve karaciğer büyümesi, anemi ve kemik ağrıları gibi belirtiler gösterir. Hematoloji ve Tıbbi Genetik uzmanlarından destek alabilirsiniz.";
      }

      setAiMessages(prev => [...prev, { role: "assistant", content: responseContent }]);
      setIsAiLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      
      {/* Top Navigation Bar */}
      <header className="bg-surface-lowest sticky top-0 z-40 border-b border-outline-variant dark:border-outline">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
          <div 
            className="text-headline-md font-headline-md font-bold text-primary cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            RareCare
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-gutter items-center">
            <button 
              onClick={() => setActiveTab("home")}
              className={`font-label-md text-label-md transition-colors duration-200 pb-1 ${activeTab === 'home' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant font-medium hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab("makaleler")}
              className={`font-label-md text-label-md transition-colors duration-200 pb-1 ${activeTab === 'makaleler' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant font-medium hover:text-primary'}`}
            >
              Articles
            </button>
            <button 
              onClick={() => setActiveTab("about")}
              className={`font-label-md text-label-md transition-colors duration-200 pb-1 ${activeTab === 'about' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant font-medium hover:text-primary'}`}
            >
              About
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">Sign In</button>
          </div>
        </nav>
      </header>

      {/* HOME PAGE */}
      {activeTab === "home" && (
        <main>
          {/* Hero Section */}
          <section className="relative bg-surface-container-low pt-16 pb-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
            <div className="max-w-container-max mx-auto text-center relative z-10">
              <h1 className="font-display-lg text-display-lg text-on-background mb-6 max-w-3xl mx-auto leading-tight">
                Nadir Hastalıklarda Doğru Uzmana ve Bilgiye Ulaşın
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
                Dünya çapındaki uzman doktorlara ve en güncel klinik araştırmalara tek bir platformdan erişin. Empati ve uzmanlık bir arada.
              </p>
              
              {/* Search Container */}
              <div className="max-w-3xl mx-auto bg-surface-lowest p-2 rounded-xl shadow-sm border border-outline-variant flex flex-col md:flex-row items-center gap-2">
                <div className="flex items-center w-full px-4 gap-3">
                  <span className="material-symbols-outlined text-outline">search</span>
                  <input 
                    className="w-full border-none focus:outline-none focus:ring-0 bg-transparent py-4 text-body-md font-body-md text-on-surface" 
                    placeholder="Hastalık, belirti veya doktor ismi ile arayın..." 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm("")} className="text-outline hover:text-on-surface">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  )}
                </div>
                <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-lg font-label-md text-label-md whitespace-nowrap hover:opacity-90 transition-all">
                  Araştır
                </button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
                <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">Popüler Aramalar:</span>
                <button onClick={() => setSearchTerm("Huntington")} className="bg-surface-container-high px-3 py-1 rounded-full text-label-sm text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors">Huntington Hastalığı</button>
                <button onClick={() => setSearchTerm("SMA")} className="bg-surface-container-high px-3 py-1 rounded-full text-label-sm text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors">SMA Araştırmaları</button>
                <button onClick={() => setSearchTerm("Genetik")} className="bg-surface-container-high px-3 py-1 rounded-full text-label-sm text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors">Genetik Uzmanlar</button>
              </div>
            </div>
            
            {/* Abstract Background Visual */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-container to-secondary-container rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
            </div>
          </section>

          {/* Featured Doctors Section */}
          <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-background mb-2">
                  {searchTerm ? `Arama Sonuçları: Doktorlar (${filtrelenmişDoktorlar.length})` : "Öne Çıkan Uzmanlar"}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Nadir genetik bozukluklar konusunda uzmanlaşmış profesyoneller.</p>
              </div>
              <button className="hidden md:flex items-center gap-1 text-primary font-label-md text-label-md hover:underline">
                Tümünü Gör <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            
            {filtrelenmişDoktorlar.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {filtrelenmişDoktorlar.map(doktor => (
                  <div key={doktor.id} className="bg-surface-lowest border border-outline-variant p-6 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-6">
                      <img alt="Doctor Profile" className="w-20 h-20 rounded-full object-cover" src={doktor.imgUrl} />
                      {doktor.yeniHasta ? (
                        <span className="flex items-center gap-1 text-secondary font-label-sm text-label-sm bg-secondary-container/30 px-3 py-1 rounded-full">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          Yeni Hasta Kabul Ediyor
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-outline font-label-sm text-label-sm bg-surface-container-high px-3 py-1 rounded-full">
                          <span className="w-2 h-2 rounded-full bg-outline"></span>
                          Sadece Danışmanlık
                        </span>
                      )}
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{doktor.ad}</h3>
                    <p className="font-label-md text-label-md text-primary mb-4">{doktor.uzmanlik}</p>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                      {doktor.aciklama}
                    </p>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all">Randevu Al</button>
                      <button className="px-3 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container transition-all">
                        <span className="material-symbols-outlined">description</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-12 border border-outline-variant rounded-xl text-outline">
                Aramanıza uygun uzman bulunamadı.
              </div>
            )}
          </section>

          {/* CTA Section: Medical Library */}
          {!searchTerm && (
            <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20">
              <div className="bg-inverse-surface text-inverse-on-surface rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg">
                <div className="flex-1 p-10 md:p-16">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest">Kütüphane</span>
                    <span className="text-label-sm opacity-70">Güncel Yayınlar</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg mb-4">En Son Klinik Araştırmalara Göz Atın</h2>
                  <p className="font-body-md text-body-md opacity-80 mb-8 max-w-lg">
                    Nadir hastalıklar dünyasındaki en son makaleler, tedavi kılavuzları ve klinik çalışma sonuçları uzmanlarımız tarafından incelenip özetlendi.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setActiveTab("makaleler")}
                      className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all"
                    >
                      Kütüphaneyi Keşfet
                    </button>
                  </div>
                </div>
                <div className="flex-1 bg-surface-container-highest min-h-[300px] relative hidden lg:block">
                  <img alt="Medical Library" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGJwUBp84Fi7XT2GxAObyrZ9gvq3724LxCveiz-BbALiciABD8NVXcL6n8RuQgBYHeLUwEqKAV7aX_cDKxa3gLrPA45qQwX5bp9WgZcG0DvkKHcYL04gmUdO3-NjHCeHKS4dGTlv3L7XmYwfsxWIkc7l8-c8wqmmQTPGzNymQeLO9cCkjyPpGM-Br1wGOV3TWZgwzDgf-XihqHeJYzM1q319NjT_iOgSKAlUWsMV_9KvJYCUQ4xbnYMkKF1hlOWn_aZHC_OFVj7r4D" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              </div>
            </section>
          )}
        </main>
      )}

      {/* ARTICLES PAGE */}
      {activeTab === "makaleler" && (
        <main className="pt-12 pb-20 min-h-screen max-w-container-max mx-auto px-margin-desktop">
          <header className="py-12 flex flex-col md:flex-row md:items-end justify-between gap-gutter">
            <div className="max-w-2xl">
              <h1 className="font-display-lg text-display-lg text-on-background mb-4">Tıbbi Araştırma Kütüphanesi</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Nadir hastalıklar dünyasındaki en son klinik araştırmaları, vaka çalışmalarını ve uzman görüşlerini keşfedin.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Sidebar / Filters */}
            <aside className="md:col-span-3 flex flex-col gap-8">
              <div>
                <h3 className="font-label-md text-label-md text-outline uppercase tracking-wider mb-4">Hastalık Kategorileri</h3>
                <nav className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md">Genetik Hastalıklar</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                    <input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md">Metabolik Bozukluklar</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md">Nörolojik Durumlar</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md">Onkoloji (Nadir)</span>
                  </label>
                </nav>
              </div>

              <div className="p-6 bg-primary-container rounded-xl text-on-primary-container">
                <span className="material-symbols-outlined text-[32px] mb-3">lightbulb</span>
                <h4 className="font-headline-md text-headline-md mb-2">Hala Aradığınızı Bulamadınız mı?</h4>
                <p className="font-body-md text-body-md mb-4 opacity-90">Yapay zeka asistanımız binlerce makaleyi sizin için tarayabilir.</p>
                <button 
                  onClick={() => setIsAiWidgetOpen(true)}
                  className="bg-on-primary-container text-primary-container w-full py-2 rounded-lg font-label-md text-label-md font-bold"
                >
                  Asistanı Başlat
                </button>
              </div>
            </aside>

            {/* Main Content Grid */}
            <section className="md:col-span-9">
              <div className="flex justify-between items-center mb-6">
                <span className="font-label-md text-label-md text-on-surface-variant">{siraliMakaleler.length} sonuç gösteriliyor</span>
                <div className="flex items-center gap-2 font-label-md text-label-md">
                  <span className="text-outline">Sırala:</span>
                  <select className="bg-transparent border-none focus:outline-none focus:ring-0 font-bold text-primary p-0">
                    <option>Alfabetik</option>
                    <option>En Yeni</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                {siraliMakaleler.map((makale, idx) => {
                  if (makale.tur === "Editörün Seçimi") {
                    return (
                      <article key={makale.id} className="lg:col-span-2 bg-primary-fixed border border-outline-variant rounded-xl overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                          <img alt="Makale Görseli" className="w-full h-full object-cover" src={makale.imgUrl} />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">{makale.tur}</span>
                            <span className="bg-surface-container-highest text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">{makale.hastalik}</span>
                          </div>
                          <h2 className="font-headline-lg text-headline-lg text-on-primary-fixed mb-4">{makale.baslik}</h2>
                          <p className="font-body-md text-body-md text-on-primary-fixed-variant mb-6">
                            {makale.ozet}
                          </p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="font-label-md text-label-md text-primary font-bold">Tam Raporu İncele</span>
                              <span className="text-outline text-label-sm">Okuma süresi: 12 dk</span>
                            </div>
                            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md font-bold shadow-lg">Makaleyi Oku</button>
                          </div>
                        </div>
                      </article>
                    );
                  }

                  return (
                    <article key={makale.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all flex flex-col">
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm">{makale.hastalik}</span>
                          <span className="bg-surface-container-highest text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">{makale.tur}</span>
                        </div>
                        <h2 className="font-headline-md text-headline-md text-on-surface mb-3">{makale.baslik}</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                          {makale.ozet}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {makale.imgUrl && (
                              <div className="w-8 h-8 rounded-full bg-surface-dim overflow-hidden">
                                <img alt="Yazar" className="w-full h-full object-cover" src={makale.imgUrl} />
                              </div>
                            )}
                            <span className="font-label-sm text-label-sm text-outline">{makale.yazar} • {makale.tarih}</span>
                          </div>
                          <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all font-label-md text-label-md">
                            Devamını Oku <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
      )}

      {/* ABOUT PAGE */}
      {activeTab === "about" && (
        <main className="pt-12 pb-20 min-h-screen max-w-container-max mx-auto px-margin-desktop">
          <header className="py-12 max-w-3xl mx-auto text-center">
            <h1 className="font-display-lg text-display-lg text-on-background mb-6">Hakkımızda</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Nadir hastalıklarla mücadele eden bireyleri uzmanlık ve empatiyle destekliyoruz.</p>
          </header>
          
          <section className="max-w-3xl mx-auto space-y-8">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Amacımız</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                Nadir hastalıklarla ilgili doğru bilgiye ve o alana spesifik olarak odaklanmış uzman doktora ulaşmak çoğu zaman yorucu, uzun ve karmaşık bir süreçtir. Uluslararası bilimsel makalelerin dil bariyeri ve ağır tıbbi terimler içermesi, hastaların ve ailelerinin kendi hastalıkları hakkında güvenilir bilgi edinmesini daha da zorlaştırmaktadır.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                <strong>RareCare (NadirRehber)</strong> bu engelleri ortadan kaldırmak için oluşturulmuştur. Platformumuzun üç temel odak noktası şunlardır:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <p className="font-body-md text-body-md text-on-surface-variant"><strong>Uzman Doktorlara Hızlı Erişim:</strong> Hastaların kendi spesifik hastalıkları konusunda uzmanlaşmış doktorlara doğrudan ulaşmasını sağlamak.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <p className="font-body-md text-body-md text-on-surface-variant"><strong>Erişilebilir Bilimsel Kaynaklar:</strong> Tıp dergilerindeki güncel makaleleri derleyerek A'dan Z'ye ulaşılabilir bir kütüphane sunmak.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <p className="font-body-md text-body-md text-on-surface-variant"><strong>Yapay Zeka Destekli Yönlendirme:</strong> Karmaşık semptomlar yaşayan hastaların hangi tıbbi birime gitmeleri gerektiği konusunda AI aracılığıyla ön rehberlik sunmak.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-container text-on-primary-container rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="font-headline-md text-headline-md mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">warning</span> Önemli Uyarı
              </h2>
              <p className="font-body-md text-body-md opacity-90 leading-relaxed">
                Bu proje bir konsept/prototip çalışmasıdır ve tıbbi tavsiye niteliği taşımaz. Platformda yer alan tüm doktor isimleri, uzmanlıkları ve makaleler örnek teşkil etmesi amacıyla sahte verilerle oluşturulmuştur. AI asistanı sadece sistemin nasıl işleyeceğini göstermek amacıyla hazırlanan bir simülasyondur. Sağlık sorunlarınız için her zaman gerçek bir uzmana başvurun.
              </p>
            </div>
          </section>
        </main>
      )}

      {/* Floating AI Widget Button */}
      {!isAiWidgetOpen && (
        <div className="fixed bottom-24 right-8 z-40 hidden md:block">
          <div 
            onClick={() => setIsAiWidgetOpen(true)}
            className="glass-effect p-4 rounded-full shadow-lg border border-primary/20 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <div className="pr-4">
              <p className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-tighter">AI Assistant</p>
              <p className="font-body-md text-body-md text-on-background">Size nasıl yardımcı olabilirim?</p>
            </div>
          </div>
        </div>
      )}

      {/* Expanded AI Widget */}
      {isAiWidgetOpen && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 max-w-[360px] w-full px-margin-mobile md:px-0">
          <div className="glass-ai rounded-2xl shadow-2xl overflow-hidden flex flex-col w-full h-[480px] border border-outline-variant">
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center text-on-primary">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>smart_toy</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md font-bold">RareCare Asistan</h4>
                  <p className="text-[10px] opacity-80 uppercase tracking-tighter">Yapay Zeka Destekli Analiz</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAiWidgetOpen(false)}
                className="hover:bg-white/10 p-1 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col">
              {aiMessages.map((msg, i) => (
                <div key={i} className={`p-3 rounded-xl max-w-[85%] ${msg.role === 'assistant' ? 'bg-surface-container-low rounded-tr-xl rounded-b-xl self-start' : 'bg-primary-container text-on-primary-container rounded-tl-xl rounded-b-xl self-end'}`}>
                  <p className="text-label-sm">{msg.content}</p>
                </div>
              ))}
              
              {aiMessages.length === 1 && (
                <div className="flex flex-col gap-2 mt-2">
                  <button 
                    onClick={() => setAiInput("Gaucher Hastalığı belirtileri nelerdir?")}
                    className="text-left text-label-sm p-3 border border-primary/20 bg-white/50 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all"
                  >
                    "Gaucher Hastalığı belirtileri nelerdir?"
                  </button>
                  <button 
                    onClick={() => setAiInput("Yürüme güçlüğü ve kas zayıflığı hangi bölüme girmeli?")}
                    className="text-left text-label-sm p-3 border border-primary/20 bg-white/50 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all"
                  >
                    "Yürüme güçlüğü için hangi bölüm?"
                  </button>
                </div>
              )}

              {isAiLoading && (
                <div className="flex gap-1 items-center px-2 py-2 self-start">
                  <div className="w-1.5 h-1.5 bg-outline rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-outline rounded-full animate-pulse delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-outline rounded-full animate-pulse delay-150"></div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white/50 border-t border-outline-variant">
              <div className="flex items-center bg-surface-lowest rounded-full px-4 py-2 border border-outline-variant focus-within:border-primary transition-all">
                <input 
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-body-md py-1" 
                  placeholder="Sorunuzu buraya yazın..." 
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAiSubmit()}
                />
                <button 
                  onClick={handleAiSubmit}
                  className="text-primary hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
              <p className="text-[10px] text-center mt-2 text-outline">Bilgiler araştırma amaçlıdır, doktora danışın.</p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container z-40 rounded-t-xl shadow-lg border-t border-outline-variant">
        <button 
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center justify-center px-4 py-1 rounded-full ${activeTab === 'home' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-[10px]">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab("about")}
          className={`flex flex-col items-center justify-center px-4 py-1 rounded-full ${activeTab === 'about' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}
        >
          <span className="material-symbols-outlined">info</span>
          <span className="font-label-sm text-[10px]">About</span>
        </button>
        <button 
          onClick={() => setActiveTab("makaleler")}
          className={`flex flex-col items-center justify-center px-4 py-1 rounded-full ${activeTab === 'makaleler' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}
        >
          <span className="material-symbols-outlined">library_books</span>
          <span className="font-label-sm text-[10px]">Library</span>
        </button>
        <button 
          onClick={() => setIsAiWidgetOpen(true)}
          className="flex flex-col items-center justify-center text-on-surface-variant"
        >
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="font-label-sm text-[10px]">Assistant</span>
        </button>
      </nav>

      {/* Footer */}
      <footer className="bg-surface-dim dark:bg-on-background text-on-surface pt-16 pb-24 md:pb-12 border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="space-y-6">
            <div className="font-headline-md text-headline-md text-on-surface font-bold">RareCare</div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Nadir hastalıklarla mücadele eden bireyleri uzmanlık ve empatiyle destekliyoruz. Bilimsel veriye dayalı güvenilir bir köprü.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-label-md text-label-md text-on-surface font-bold mb-4 uppercase">Platform</h5>
              <ul className="space-y-3">
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:underline transition-all" href="#">Privacy Policy</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:underline transition-all" href="#">Terms of Service</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:underline transition-all" href="#">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-md text-label-md text-on-surface font-bold mb-4 uppercase">Bilim</h5>
              <ul className="space-y-3">
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:underline transition-all" href="#">Research Ethics</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:underline transition-all" href="#">Klinik Çalışmalar</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:underline transition-all" href="#">Uzman Paneli</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-outline-variant max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">
            © 2024 RareCare Medical Research Platform. Expertise and Empathy.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;