import React, { useState } from 'react';
import { Search, BookOpen, MapPin, Hospital, X, Sparkles, BrainCircuit } from 'lucide-react';

const DOKTORLAR = [
  { id: 1, ad: "Prof. Dr. Ayşe Yılmaz", uzmanlik: "DMD (Duchenne Musküler Distrofi)", hastane: "Ankara Şehir Hastanesi", sehir: "Ankara", ilgiliHastaliklar: ["DMD", "Duchenne"] },
  { id: 2, ad: "Doç. Dr. Mehmet Demir", uzmanlik: "SMA Tipi 1 ve 2", hastane: "Hacettepe Üniversitesi Tıp Fakültesi", sehir: "Ankara", ilgiliHastaliklar: ["SMA", "Spinal Musküler Atrofi"] },
  { id: 3, ad: "Dr. Canan Erten", uzmanlik: "Kistik Fibrozis", hastane: "İstanbul Çapa Tıp Fakültesi", sehir: "İstanbul", ilgiliHastaliklar: ["Kistik Fibrozis"] },
  { id: 4, ad: "Prof. Dr. Selim Ak", uzmanlik: "DMD Uzmanı", hastane: "Ege Üniversitesi Hastanesi", sehir: "İzmir", ilgiliHastaliklar: ["DMD"] },
  { id: 5, ad: "Uzm. Dr. Kemal Yücel", uzmanlik: "Alport Sendromu", hastane: "Cerrahpaşa Tıp Fakültesi", sehir: "İstanbul", ilgiliHastaliklar: ["Alport", "Alport Sendromu"] }
];

const MAKALELER = [
  { 
    id: 1, 
    baslik: "Alport Sendromu Tedavisinde Yeni Yaklaşımlar", 
    ozet: "Alport sendromu hastalarında böbrek fonksiyonlarının korunmasına yönelik geliştirilen yeni ilaçların faz 3 çalışmaları.", 
    hastalik: "Alport Sendromu",
    kaynak: "Kidney International",
    yil: "2025"
  },
  { 
    id: 2, 
    baslik: "Batten Hastalığı İçin Gen Terapisi Umudu", 
    ozet: "NCL (Batten hastalığı) varyantlarında kullanılan viral vektör aracılı gen terapisinin çocuklardaki nörolojik etkileri.", 
    hastalik: "Batten Hastalığı",
    kaynak: "Neurology",
    yil: "2024"
  },
  { 
    id: 3, 
    baslik: "Cushing Sendromu Yönetiminde Yapay Zeka Desteği", 
    ozet: "Nadir görülen Cushing sendromu tanısında ve tedavi planlamasında makine öğrenimi modellerinin kullanımı.", 
    hastalik: "Cushing Sendromu",
    kaynak: "Endocrine Reviews",
    yil: "2026"
  },
  { 
    id: 4, 
    baslik: "Duchenne Musküler Distrofi (DMD) ve Gen Terapisi", 
    ozet: "DMD hastalarında gen terapisinin son aşama klinik sonuçları ve yan etkileri üzerine kapsamlı bir inceleme.", 
    hastalik: "DMD",
    kaynak: "Nature Medicine",
    yil: "2026"
  },
  { 
    id: 5, 
    baslik: "Ehlers-Danlos Sendromu Alt Tiplerinin Genetik Analizi", 
    ozet: "Farklı EDS alt tiplerinde görülen yeni genetik mutasyonların analizi ve tanı kriterlerinin güncellenmesi.", 
    hastalik: "Ehlers-Danlos Sendromu",
    kaynak: "Genetics in Medicine",
    yil: "2025"
  },
  { 
    id: 6, 
    baslik: "Spinal Musküler Atrofi (SMA) İçin Yeni Biyobelirteçler", 
    ozet: "SMA hastalarında tedaviye verilen yanıtın ölçülmesinde kullanılan yeni nesil biyobelirteçler.", 
    hastalik: "SMA",
    kaynak: "The Lancet",
    yil: "2025"
  },
  { 
    id: 7, 
    baslik: "Zellweger Spektrum Bozukluklarında Erken Müdahale", 
    ozet: "Zellweger sendromunda erken tanının yaşam kalitesine ve hayatta kalma süresine etkileri.", 
    hastalik: "Zellweger Sendromu",
    kaynak: "Pediatrics",
    yil: "2023"
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("home"); // "home", "makaleler"
  const [searchTerm, setSearchTerm] = useState("");
  
  // AI Modal States
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiSonuc, setAiSonuc] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const filtrelenmişDoktorlar = DOKTORLAR.filter(doktor => 
    doktor.uzmanlik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doktor.ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doktor.ilgiliHastaliklar.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filtrelenmişMakaleler = MAKALELER.filter(makale => 
    makale.hastalik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    makale.baslik.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // A'dan Z'ye sıralama (Türkçe karakterlere duyarlı)
  const siraliMakaleler = [...MAKALELER].sort((a, b) => a.baslik.localeCompare(b.baslik, 'tr-TR'));

  const handleAiSubmit = () => {
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    setAiSonuc(null);
    
    // AI düşünme süresi simülasyonu
    setTimeout(() => {
      const lowerInput = aiInput.toLowerCase();
      let alan = "Tıbbi Genetik / Dahiliye";
      let aciklama = "Belirttiğiniz bulgular çok yönlü bir değerlendirme gerektiriyor. Detaylı tanı ve yönlendirme için öncelikle Tıbbi Genetik veya Dahiliye bölümüne başvurmanız faydalı olacaktır.";
      
      if (lowerInput.includes("kas") || lowerInput.includes("yürüme") || lowerInput.includes("güçsüz") || lowerInput.includes("hareket")) {
        alan = "Çocuk Nörolojisi / Nöroloji";
        aciklama = "Kas zayıflığı ve hareket problemleri genellikle nöromüsküler hastalıklara (örn: SMA, DMD) işaret eder. Bu nedenle öncelikle bir Nöroloji uzmanına görünmelisiniz.";
      } else if (lowerInput.includes("böbrek") || lowerInput.includes("idrar") || lowerInput.includes("kan")) {
        alan = "Nefroloji";
        aciklama = "Böbrek fonksiyonları ve idrarla ilgili belirtiler (örn: Alport Sendromu) doğrudan Nefroloji uzmanlığının alanına girmektedir.";
      } else if (lowerInput.includes("solunum") || lowerInput.includes("öksürük") || lowerInput.includes("nefes") || lowerInput.includes("ciğer")) {
        alan = "Göğüs Hastalıkları";
        aciklama = "Solunum yolu problemleri Kistik Fibrozis gibi hastalıklarda sık görülür. Size en iyi bir Göğüs Hastalıkları uzmanı yardımcı olabilir.";
      } else if (lowerInput.includes("kemik") || lowerInput.includes("eklem") || lowerInput.includes("esnek")) {
        alan = "Romatoloji / Ortopedi";
        aciklama = "Eklem esnekliği veya kemik ağrıları (örn: Ehlers-Danlos) gibi durumlarda Romatoloji veya Ortopedi kliniklerinden destek almalısınız.";
      }

      setAiSonuc({ alan, aciklama });
      setIsAiLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 
            className="text-2xl font-bold text-blue-600 tracking-tight cursor-pointer"
            onClick={() => { setActiveTab("home"); setSearchTerm(""); }}
          >
            NadirRehber
          </h1>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <button 
              onClick={() => { setActiveTab("home"); setSearchTerm(""); }} 
              className={`transition ${activeTab === "home" ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-500"}`}
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => setActiveTab("makaleler")} 
              className={`transition ${activeTab === "makaleler" ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-500"}`}
            >
              Makaleler
            </button>
          </div>
        </div>
      </nav>

      {/* İçerik */}
      {activeTab === "home" && (
        <>
          {/* Header & Arama */}
          <header className="py-12 px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-slate-800">Doğru Uzmanı, Doğru Bilgiyi Bulun</h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-8">Nadir hastalıklarla mücadelede uzman doktorlara ve AI destekli bilimsel makalelere ulaşın.</p>
            
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text"
                placeholder="Hastalık adı veya konu (Örn: DMD, SMA)"
                className="w-full p-4 pl-12 rounded-full border border-slate-200 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-4 text-slate-400" />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">
                  <X size={20} />
                </button>
              )}
            </div>
          </header>

          <main className="max-w-5xl mx-auto px-4 pb-20">
            {/* ARAMA SONUÇLARI BÖLÜMÜ */}
            {searchTerm !== "" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* DOKTORLAR */}
                {filtrelenmişDoktorlar.length > 0 && (
                  <section className="mb-12">
                    <h3 className="text-xl font-bold mb-6 text-slate-700 flex items-center gap-2">
                      <Hospital className="text-blue-500" size={24}/> İlgili Uzman Doktorlar ({filtrelenmişDoktorlar.length})
                    </h3>
                    
                    <div className="grid gap-4">
                      {filtrelenmişDoktorlar.map(doktor => (
                        <div key={doktor.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <h4 className="text-lg font-bold text-slate-800">{doktor.ad}</h4>
                            <p className="text-blue-600 font-medium text-sm mb-2">{doktor.uzmanlik}</p>
                            <div className="flex flex-wrap items-center text-slate-500 text-sm gap-x-6 gap-y-2">
                              <span className="flex items-center gap-1.5"><Hospital size={16}/> {doktor.hastane}</span>
                              <span className="flex items-center gap-1.5"><MapPin size={16}/> {doktor.sehir}</span>
                            </div>
                          </div>
                          <button className="w-full md:w-auto bg-blue-50 text-blue-600 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors">
                            Randevu Al
                          </button>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* MAKALELER */}
                {filtrelenmişMakaleler.length > 0 && (
                  <section className={filtrelenmişDoktorlar.length > 0 ? "pt-8 border-t border-slate-200" : "pt-2"}>
                    <h3 className="text-xl font-bold mb-6 text-slate-700 flex items-center gap-2">
                      <BookOpen className="text-emerald-500" size={24}/> İlgili Bilimsel Makaleler ({filtrelenmişMakaleler.length})
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filtrelenmişMakaleler.map(makale => (
                        <div key={makale.id} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-emerald-400 border-slate-100 hover:shadow-md transition flex flex-col h-full">
                          <div className="mb-3">
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">
                              {makale.kaynak} • {makale.yil}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2 leading-snug flex-grow">{makale.baslik}</h4>
                          <p className="text-slate-500 text-sm line-clamp-3 mb-5 font-light">{makale.ozet}</p>
                          
                          <button className="flex items-center justify-center gap-2 text-xs font-bold text-purple-600 bg-purple-50 px-4 py-2.5 rounded-xl hover:bg-purple-600 hover:text-white transition-all group">
                            <span className="italic group-hover:scale-110 transition-transform">AI</span> 
                            Türkçe Özetini Oku
                          </button>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filtrelenmişDoktorlar.length === 0 && filtrelenmişMakaleler.length === 0 && (
                  <div className="text-center p-12 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 italic font-light">
                    Bu aramayla ilgili henüz bir doktor veya makale bulunamadı.
                  </div>
                )}
              </div>
            )}

            {/* TANITIM KARTLARI (Sadece arama yokken) */}
            {searchTerm === "" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-700 max-w-4xl mx-auto">
                <div 
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-emerald-200 transition group cursor-pointer" 
                  onClick={() => setActiveTab("makaleler")}
                >
                  <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                    <BookOpen className="text-emerald-500 group-hover:text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Bilimsel Yayınlar</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">Dünyanın en prestijli tıp dergilerindeki güncel makalelere A'dan Z'ye kütüphanemizden erişin.</p>
                </div>

                <div 
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-purple-200 transition group cursor-pointer"
                  onClick={() => setIsAiModalOpen(true)}
                >
                  <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                    <Sparkles className="text-purple-600 group-hover:text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">AI Branş Yönlendirme</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">Belirtilerinizi veya şüphelendiğiniz tanıyı yapay zekaya yazın, sizi en doğru tıbbi birime yönlendirsin.</p>
                </div>
              </div>
            )}
          </main>
        </>
      )}

      {/* Makaleler Sekmesi (Kütüphane Görünümü) */}
      {activeTab === "makaleler" && (
        <main className="max-w-5xl mx-auto px-4 py-12 pb-20 animate-in fade-in duration-500">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-emerald-500" size={32} />
            <h2 className="text-3xl font-extrabold text-slate-800">Makale Kütüphanesi</h2>
          </div>
          <p className="text-slate-500 mb-10 text-lg">Platformumuzdaki tüm makaleler A'dan Z'ye alfabetik olarak listelenmektedir.</p>
          
          <div className="space-y-5">
            {siraliMakaleler.map(makale => (
              <div key={makale.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-grow">
                  <div className="mb-3 flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      {makale.hastalik}
                    </span>
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">
                      {makale.kaynak} • {makale.yil}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 leading-snug">{makale.baslik}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{makale.ozet}</p>
                </div>
                <div className="w-full md:w-auto flex-shrink-0 pt-2 flex flex-col gap-2">
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 text-sm font-bold text-purple-600 bg-purple-50 px-6 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition-all group">
                    <span className="italic group-hover:scale-110 transition-transform">AI</span> 
                    Türkçe Özet
                  </button>
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 text-sm font-bold text-slate-600 bg-slate-50 px-6 py-3 rounded-xl hover:bg-slate-200 transition-all">
                    Orijinal Kaynak
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* AI Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col scale-in-95 animate-in duration-300">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BrainCircuit size={28} />
                <h3 className="text-xl font-bold">AI Branş Asistanı</h3>
              </div>
              <button 
                onClick={() => {
                  setIsAiModalOpen(false);
                  setAiInput("");
                  setAiSonuc(null);
                }} 
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 flex-grow flex flex-col gap-5">
              <p className="text-slate-600 font-light text-sm">
                Lütfen teşhisinizi, şüphelenilen hastalığı veya yaşadığınız belirtileri kısaca açıklayın. Yapay zeka sizi en doğru tıbbi uzmana yönlendirecektir.
              </p>
              
              <textarea 
                className="w-full border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:outline-none resize-none bg-slate-50 hover:bg-white transition-colors"
                rows="4"
                placeholder="Örn: Çocuğumda yürüme güçlüğü ve kas zayıflığı var, hangi bölüme gitmeliyim?"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
              ></textarea>
              
              <button 
                onClick={handleAiSubmit}
                disabled={isAiLoading || !aiInput.trim()}
                className="bg-purple-600 text-white font-bold py-3.5 rounded-2xl hover:bg-purple-700 transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {isAiLoading ? "Analiz Ediliyor..." : <><Sparkles size={20}/> Doğru Uzmanı Bul</>}
              </button>

              {aiSonuc && (
                <div className="mt-2 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 p-5 rounded-2xl animate-in fade-in slide-in-from-bottom-2">
                  <h4 className="text-purple-800 font-bold mb-2 flex items-center gap-2">
                    <Sparkles size={18} className="text-purple-500" />
                    Önerilen Tıbbi Birim
                  </h4>
                  <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">{aiSonuc.alan}</p>
                  <div className="w-full h-px bg-purple-200/50 mb-3"></div>
                  <p className="text-slate-700 text-sm leading-relaxed">{aiSonuc.aciklama}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;