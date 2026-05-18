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
  const [activeTab, setActiveTab] = useState("home"); // "home", "makaleler", "about"
  const [searchTerm, setSearchTerm] = useState("");
  const [isAiWidgetOpen, setIsAiWidgetOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiMessages, setAiMessages] = useState([
    { role: "assistant", content: "Merhaba! Ben RareCare AI. Nadir hastalıklar veya tedavi süreçleri hakkında merak ettiğiniz bilimsel bir sorunuz var mı?" }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Auth & Profile
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [savedArticles, setSavedArticles] = useState([1]);
  const [readHistory, setReadHistory] = useState([
    { id: 2, date: "Bugün 14:30" }
  ]);
  const [articleNotes, setArticleNotes] = useState({
    1: "Bu makaledeki klinik veriler üzerine doktorumla görüşeceğim."
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    if(email && password) {
      setIsAuthenticated(true);
      setIsSignInModalOpen(false);
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setIsProfileModalOpen(false);
  };

  const toggleSaveArticle = (id, e) => {
    if (e) e.stopPropagation();
    if (!isAuthenticated) {
      setIsSignInModalOpen(true);
      return;
    }
    setSavedArticles(prev => prev.includes(id) ? prev.filter(aId => aId !== id) : [...prev, id]);
  };

  const handleArticleRead = (id) => {
    if (isAuthenticated) {
      if (!readHistory.some(h => h.id === id)) {
        setReadHistory(prev => [{ id, date: "Bugün" }, ...prev]);
      }
    }
  };

  const handleNoteChange = (id, note) => {
    setArticleNotes(prev => ({ ...prev, [id]: note }));
  };

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
            {isAuthenticated ? (
              <button 
                onClick={() => setIsProfileModalOpen(true)}
                className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
                Profilim
              </button>
            ) : (
              <button 
                onClick={() => setIsSignInModalOpen(true)}
                className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                Sign In
              </button>
            )}
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
                            <div className="flex items-center gap-3">
                              <button onClick={(e) => toggleSaveArticle(makale.id, e)} className={`${savedArticles.includes(makale.id) ? 'text-error' : 'text-primary'} hover:scale-110 transition-transform`}>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: savedArticles.includes(makale.id) ? "'FILL' 1" : "'FILL' 0"}}>bookmark</span>
                              </button>
                              <button onClick={() => handleArticleRead(makale.id)} className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md font-bold shadow-lg">Makaleyi Oku</button>
                            </div>
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
                          <div className="flex items-center gap-4">
                            <button onClick={(e) => toggleSaveArticle(makale.id, e)} className={`${savedArticles.includes(makale.id) ? 'text-error' : 'text-primary'} hover:scale-110 transition-transform`}>
                              <span className="material-symbols-outlined" style={{fontVariationSettings: savedArticles.includes(makale.id) ? "'FILL' 1" : "'FILL' 0"}}>bookmark</span>
                            </button>
                            <button onClick={() => handleArticleRead(makale.id)} className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all font-label-md text-label-md">
                              Devamını Oku <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                          </div>
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
        <main>
          {/* Hero Section */}
          <section className="relative bg-surface-container-low overflow-hidden py-16 md:py-24">
            <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Nadir Hastalıklarda Umut ve Bilim Bir Arada</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                  RareCare, nadir hastalıklarla mücadele eden hastaları ve ailelerini, dünyanın dört bir yanındaki uzmanlarla ve en güncel araştırmalarla buluşturuyor. Amacımız, belirsizliği ortadan kaldırmak ve bilimin ışığında toplumsal dayanışma oluşturmaktır.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setActiveTab("makaleler")} className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:shadow-lg transition-all">Araştırmaları İncele</button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-full overflow-hidden aspect-square shadow-xl border-4 border-white">
                  <img alt="Laboratory Research" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI5tA2DLyrCVADdK9VGY2vJkejAUxx4XweDFh4pL6iDZ3LQ1BItKNUb7IPkVE9qRLR8qJODlH_IdP75rt6DOnW7buWquz1XhI9-rrTYgC2A4DxXxtZbq-t9KedMd9ukNTlhhGKFFAOH6U0aMUeYA9M0Z14vtboXQygup6GpYqmMG4hdK_MpAKI8uRLaS4Gf2bQ-3iGUlR5UEMmwFoHusjxCM2Jvz7E7hGkjeojyyRMWFoTS4saBTOfvjGSvmaXEqw8F3yWT-p4K3ch" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-2xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-4xl">biotech</span>
                    <div>
                      <p className="font-headline-md text-headline-md text-on-secondary-container">500+</p>
                      <p className="font-label-sm text-label-sm text-on-secondary-container">Aktif Araştırma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
              <div className="bg-white p-10 rounded-3xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Vizyonumuz</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Nadir hastalıkların tanısı ve tedavisi önündeki tüm engellerin kalktığı, her hastanın en ileri tıbbi bilgiye ve uzman desteğine eşit koşullarda ulaştığı bir dünya hayal ediyoruz. Bilgiyi demokratikleştirerek sağlıkta adaleti sağlamayı hedefliyoruz.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">flag</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Misyonumuz</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Hasta odaklı bir yaklaşımla, bilimsel mükemmeliyeti klinik empatiyle birleştiriyoruz. Dünyanın en nadir vakaları için bile çözüm odaklı bir ağ kurarak, hasta hikayelerini veri ile, uzmanları ise umut ile buluşturuyoruz.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-primary-container text-on-primary-container rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="font-headline-md text-headline-md mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">warning</span> Önemli Uyarı
              </h2>
              <p className="font-body-md text-body-md opacity-90 leading-relaxed">
                Bu proje bir konsept/prototip çalışmasıdır ve tıbbi tavsiye niteliği taşımaz. Platformda yer alan tüm doktor isimleri, uzmanlıkları ve makaleler örnek teşkil etmesi amacıyla sahte verilerle oluşturulmuştur. AI asistanı sadece sistemin nasıl işleyeceğini göstermek amacıyla hazırlanan bir simülasyondur. Sağlık sorunlarınız için her zaman gerçek bir uzmana başvurun.
              </p>
            </div>
          </section>

          {/* Our Approach */}
          <section className="bg-surface-dim py-24">
            <div className="px-margin-desktop max-w-container-max mx-auto">
              <div className="text-center mb-16">
                <span className="font-label-md text-label-md text-primary bg-primary-fixed px-4 py-1 rounded-full">YAKLAŞIMIMIZ</span>
                <h2 className="font-display-lg text-display-lg text-on-surface mt-4">Nadir Olanı Sıradanlaştırmak</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <div className="md:col-span-7 bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 h-64 md:h-full">
                    <img alt="Care" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAej8Xk693gUsEwbOpqVos1qtN-vVYoaacYyu1xV_KSUetbmEBGOxJVfeG7hF8KRu3jDN7rQFHWXnmItF4cWJUOcUAFvm4Hg6sdZkfVOCJ-sAhlXC8aY167MpVDFVrVL_ByQPNa9AVfSo7UGJ4Lpv6BAFyv8YkQg8J6PXQi3hu1ayyLOtqEEvCXAk9ZxMreMvrRHqLo1qT5mGAqccTs3qcO6gkGD5dLxHOH9jnfDKnjGW8L3kjnFgoHiyuW2kAjpXfLETFpK60WL2QO" />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="font-headline-md text-headline-md text-primary mb-3">Klinik Empati</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Sadece semptomları değil, insanı görüyoruz. Hastaların yaşadığı zorlukları anlıyor, süreç boyunca psikolojik ve sosyal destek mekanizmalarını canlı tutuyoruz.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5 bg-tertiary-container text-white p-8 rounded-3xl flex flex-col justify-center">
                  <span className="material-symbols-outlined text-tertiary-fixed text-5xl mb-4">science</span>
                  <h3 className="font-headline-md text-headline-md mb-3">Bilimsel Titizlik</h3>
                  <p className="font-body-md text-body-md opacity-90">
                    Veriye dayalı, kanıta dayalı tıp prensiplerinden ödün vermiyoruz. Platformumuzdaki her makale ve uzman görüşü sıkı bir denetim sürecinden geçer.
                  </p>
                </div>
                <div className="md:col-span-12 bg-white rounded-3xl border border-outline-variant p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="font-headline-md text-headline-md text-secondary mb-3">Küresel İşbirliği</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Bilgi sınır tanımaz. RareCare, kıtalar arası uzman ağları kurarak en nadir hastalıklar için bile global bir konsültasyon zemini hazırlar. Bir hastanın çözümü dünyanın öbür ucunda olabilir ve biz o bağı kurarız.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex gap-4">
                    <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant">
                      <span className="material-symbols-outlined text-primary">public</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant">
                      <span className="material-symbols-outlined text-primary">groups</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant">
                      <span className="material-symbols-outlined text-primary">hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-center mb-16">Temel Değerlerimiz</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-surface-container-high rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Güven</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Şeffaf süreçler ve güvenilir veri.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-surface-container-high rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-4xl">lightbulb</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Yenilik</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Tıbbi teknolojide son trendler.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-surface-container-high rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Şefkat</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Her vakanın arkasındaki yaşam.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-surface-container-high rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-4xl">diversity_3</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Topluluk</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Birlikte daha güçlüyüz.</p>
              </div>
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

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/40 backdrop-blur-sm">
          <div className="w-full max-w-[480px] z-10 relative">
            <button onClick={() => setIsSignInModalOpen(false)} className="absolute top-4 right-4 text-outline hover:text-on-surface p-1 z-20">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="glass-effect rounded-xl border border-outline-variant p-8 md:p-12 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] bg-surface-lowest">
              <div className="flex flex-col items-center mb-10">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-4 text-on-primary-container">
                  <span className="material-symbols-outlined text-[32px]">clinical_notes</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">RareCare</h1>
                <p className="font-label-md text-label-md text-on-surface-variant mt-1">Giriş Yap</p>
              </div>
              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">E-posta Adresi</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input 
                      className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-body-md text-on-surface" 
                      id="email" 
                      placeholder="ornek@rarecare.com" 
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Şifre</label>
                    <a className="font-label-sm text-label-sm text-primary hover:underline transition-all" href="#">Şifremi Unuttum</a>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                    <input 
                      className="w-full pl-12 pr-12 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-body-md text-on-surface" 
                      id="password" 
                      placeholder="••••••••" 
                      type="password"
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-headline-md text-body-md rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                  <span>Giriş Yap</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
              <div className="relative my-8 flex items-center">
                <div className="flex-grow border-t border-outline-variant"></div>
                <span className="mx-4 font-label-sm text-label-sm text-outline uppercase tracking-wider">veya</span>
                <div className="flex-grow border-t border-outline-variant"></div>
              </div>
              <button className="w-full py-3 bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-all flex items-center justify-center gap-3" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span>Google ile Giriş Yap</span>
              </button>
              <div className="mt-10 text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Hesabınız yok mu? <a className="font-label-md text-label-md text-primary font-bold hover:underline transition-all" href="#">Hesap Oluştur</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && isAuthenticated && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-surface text-on-surface font-body-md animate-in fade-in duration-200">
          <header className="sticky top-0 z-50 w-full bg-surface dark:bg-on-surface-variant border-b border-outline-variant dark:border-outline">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16 flex justify-between items-center">
              <div className="flex items-center gap-gutter">
                <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">RareCare</span>
                <nav className="hidden md:flex items-center gap-6">
                  <span className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 cursor-default">Dashboard</span>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setIsProfileModalOpen(false)} className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">close</button>
                <div className="h-8 w-[1px] bg-outline-variant"></div>
                <div className="flex items-center gap-2 cursor-pointer group" onClick={handleSignOut}>
                  <span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 1"}}>logout</span>
                  <span className="font-label-md text-label-md text-error hidden sm:inline">Çıkış Yap</span>
                </div>
              </div>
            </div>
          </header>
          <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 pb-32">
            <div className="grid grid-cols-12 gap-gutter">
              <aside className="col-span-12 lg:col-span-3 space-y-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-32 h-32 rounded-full border-4 border-surface-container mx-auto bg-primary-container text-on-primary-container flex items-center justify-center font-display-lg text-[64px]">
                      {email ? email[0].toUpperCase() : 'U'}
                    </div>
                    <div className="absolute bottom-1 right-1 bg-secondary w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-white" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    </div>
                  </div>
                  <h1 className="font-headline-md text-headline-md text-on-surface mb-1 truncate">{email.split('@')[0]}</h1>
                  <p className="font-label-md text-label-md text-secondary mb-4 truncate">{email}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-surface-container-high rounded-full text-on-primary-fixed-variant font-label-sm text-label-sm mb-6">
                    <span className="material-symbols-outlined text-[16px] mr-1">workspace_premium</span>
                    Premium Üye
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary p-4 rounded-xl text-white">
                    <p className="font-label-sm text-label-sm opacity-80">Okunan</p>
                    <p className="font-headline-md text-headline-md">{readHistory.length}</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-xl text-white">
                    <p className="font-label-sm text-label-sm opacity-80">Alınan Not</p>
                    <p className="font-headline-md text-headline-md">{Object.keys(articleNotes).length}</p>
                  </div>
                </div>
              </aside>

              <div className="col-span-12 lg:col-span-9 space-y-gutter">
                {/* Kaydedilenler & Notlarım */}
                <section>
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface">Kaydedilenler & Notlar</h2>
                      <p className="font-body-md text-body-md text-on-surface-variant">Takip ettiğiniz önemli araştırmalar.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedArticles.length === 0 ? (
                      <div className="col-span-full p-8 text-center bg-surface-container-lowest border border-outline-variant rounded-xl text-on-surface-variant">
                        Henüz kaydedilmiş makale yok.
                      </div>
                    ) : (
                      savedArticles.map(id => {
                        const article = MAKALELER.find(a => a.id === id);
                        if(!article) return null;
                        return (
                          <div key={id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col group">
                            <div className="flex items-start justify-between mb-3">
                              <span className="px-2 py-1 bg-surface-container-high text-on-primary-fixed-variant text-[10px] uppercase font-bold rounded">{article.tur}</span>
                              <span onClick={() => toggleSaveArticle(id)} className="material-symbols-outlined text-primary cursor-pointer" style={{fontVariationSettings: "'FILL' 1"}}>bookmark</span>
                            </div>
                            <h3 className="font-body-lg text-body-lg text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors">{article.baslik}</h3>
                            
                            <div className="mt-auto pt-4 border-t border-outline-variant">
                              <div className="bg-surface-container-low rounded-lg border border-outline-variant overflow-hidden focus-within:border-primary transition-colors">
                                <div className="bg-surface-container px-3 py-1 flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[16px] text-outline">edit_note</span>
                                  <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Kişisel Notunuz</span>
                                </div>
                                <textarea 
                                  className="w-full p-3 bg-transparent border-none focus:ring-0 text-label-md text-on-surface resize-none h-20 outline-none"
                                  placeholder="Bu makale hakkında not alın..."
                                  value={articleNotes[id] || ""}
                                  onChange={(e) => handleNoteChange(id, e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </section>

                <div className="grid grid-cols-1 gap-gutter">
                  <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined">history</span> Okuma Geçmişi
                    </h2>
                    <div className="space-y-6">
                      {readHistory.length === 0 ? (
                        <p className="text-on-surface-variant text-label-md">Okuma geçmişiniz boş.</p>
                      ) : (
                        readHistory.map((history, idx) => {
                          const article = MAKALELER.find(a => a.id === history.id);
                          if(!article) return null;
                          return (
                            <div key={idx} className="relative pl-6 border-l-2 border-surface-container-high">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                              <p className="text-[11px] font-bold text-secondary uppercase mb-1">{history.date}</p>
                              <h4 className="font-label-md text-label-md text-on-surface leading-snug">{article.baslik}</h4>
                            </div>
                          )
                        })
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
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