# NadirRehber - Nadir Hastalık Platformu

NadirRehber, nadir hastalıklarla mücadele eden hastalar, hasta yakınları ve sağlık profesyonelleri için geliştirilmiş yapay zeka destekli bir bilgi ve yönlendirme platformudur.

## 🌟 Neden Oluşturuldu?

Nadir hastalıklarla ilgili doğru bilgiye ve o alana spesifik olarak odaklanmış uzman doktora ulaşmak çoğu zaman yorucu, uzun ve karmaşık bir süreçtir. Buna ek olarak, uluslararası bilimsel makalelerin dil bariyeri ve ağır tıbbi terimler içermesi, hastaların ve ailelerinin kendi hastalıkları hakkında güvenilir bilgi edinmesini zorlaştırmaktadır. 

**NadirRehber bu engelleri ortadan kaldırmak için oluşturuldu:**
1. **Uzman Doktorlara Hızlı Erişim:** Hastaların, kendi spesifik hastalıkları (SMA, DMD, Kistik Fibrozis vb.) konusunda uzmanlaşmış doktorlara ve çalıştıkları hastanelere vakit kaybetmeden ulaşabilmesini sağlamak.
2. **Erişilebilir Bilimsel Kaynaklar:** Dünyanın prestijli tıp dergilerindeki güncel makaleleri derleyerek A'dan Z'ye ulaşılabilir bir kütüphane sunmak.
3. **Yapay Zeka Destekli Yönlendirme:** Karmaşık semptomlar yaşayan hastaların hangi tıbbi birime (Nöroloji, Nefroloji, Tıbbi Genetik vb.) gitmeleri gerektiği konusunda AI aracılığıyla ön rehberlik sunmak.

## 🚀 Nasıl Kullanılır?

Platformun kullanımı son derece basittir ve üç temel odak noktası etrafında şekillenir:

### 1. Akıllı Arama ile Sonuç Bulma
Ana sayfada bulunan arama çubuğuna bir hastalık adı veya konu (Örn: *DMD*, *SMA*, *Alport*) yazdığınızda sistem size saniyeler içinde şunları sunar:
- O hastalıkla ilgilenen **Uzman Doktorlar** ve görev yaptıkları şehir/hastane bilgileri.
- O hastalıkla doğrudan ilgili en güncel **Bilimsel Makaleler** ve kısa özetleri.

### 2. A'dan Z'ye Makale Kütüphanesi
Üst menüdeki (Navbar) **"Makaleler"** sekmesine tıkladığınızda:
- Platformda kayıtlı olan tüm bilimsel literatürü **A'dan Z'ye alfabetik sıralanmış** bir kütüphane formatında inceleyebilirsiniz.
- Makalelerin yayınlandığı dergiyi, yayın yılını ve içeriğini kolayca okuyabilirsiniz.

### 3. AI Branş Asistanı (Yapay Zeka Yönlendirmesi)
Hangi doktora gideceğinizi bilmiyorsanız, ana sayfadaki **"AI Branş Yönlendirme"** kartına tıklayın. Açılan pencerede:
- Şikayetlerinizi, belirtilerinizi veya şüphelendiğiniz durumu kısaca yazın (Örn: *"Çocuğumda yürüme güçlüğü ve kas zayıflığı var"*).
- **Analiz Et** butonuna bastığınızda, yapay zeka belirtileri yorumlayarak randevu almanız gereken en doğru polikliniği (Örn: *Çocuk Nörolojisi*) size önerecektir.

## 💻 Geliştirici İçin: Kurulum ve Çalıştırma

Projeyi kendi ortamınızda (lokal) çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

```bash
# 1. Proje dizinine gidin
cd nadir-hastalik-platformu

# 2. Gerekli paketleri (dependencies) yükleyin
npm install

# 3. Geliştirme sunucusunu (dev server) başlatın
npm run dev
```

Uygulama başarıyla başlatıldığında tarayıcınız üzerinden `http://localhost:5173` adresinden platforma erişebilirsiniz.

---
*Teknoloji Yığını: React.js, Vite, TailwindCSS, Lucide Icons.*
