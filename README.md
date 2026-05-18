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

### 4. Kişiselleştirilmiş Kullanıcı Paneli (Profilim)
Kullanıcılar platforma giriş yaparak ("Sign In") okuma süreçlerini kişiselleştirebilirler:
- **Okuma Geçmişi:** İncelediğiniz tüm makaleler tarih/saat bilgisiyle profilinize kaydedilir.
- **Makale Kaydetme (Bookmark):** İlgilendiğiniz araştırmaları tek tıkla kaydederek kütüphanenizde tutabilirsiniz.
- **Kişisel Not Alma:** Kaydettiğiniz her makalenin altına, okurken aklınıza takılan soruları veya doktorunuza danışmak istediğiniz konuları not alabilirsiniz.

## ⚠️ Önemli Uyarı (Feragatname)

> **Bu proje bir konsept/prototip çalışmasıdır ve tıbbi tavsiye niteliği taşımaz.**
> - Platformda yer alan tüm doktor isimleri, uzmanlıkları, makale başlıkları ve özetleri **sadece örnek teşkil etmesi amacıyla (sahte veri - mock data)** oluşturulmuştur.
> - **AI Branş Asistanı** tamamen sistemin nasıl işleyeceğini (UI/UX) göstermek amacıyla hazırlanmış bir simülasyondur. Gerçek bir tıbbi teşhis modeli içermez ve verdiği yönlendirmeler bağlayıcı değildir. Sağlık sorunlarınız için her zaman gerçek bir uzmana başvurun.

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
---
*Teknoloji Yığını: React.js, Vite, TailwindCSS, Material Symbols. Tasarım dili: Clinical Empathy System (Glassmorphism).*

---
<br>

# RareCare - Rare Disease Platform

RareCare is an AI-powered information and guidance platform developed for patients struggling with rare diseases, their families, and healthcare professionals.

## 🌟 Why was it created?

Finding accurate information about rare diseases and reaching specialized doctors in that specific field is often a tiring, long, and complex process. Additionally, the language barrier and heavy medical terminology of international scientific articles make it difficult for patients and their families to obtain reliable information about their conditions.

**RareCare was created to remove these barriers:**
1. **Fast Access to Specialist Doctors:** Ensuring patients can quickly reach doctors who specialize in their specific diseases (SMA, DMD, Cystic Fibrosis, etc.) and the hospitals where they work.
2. **Accessible Scientific Resources:** Compiling up-to-date articles from the world's prestigious medical journals to provide an accessible A-to-Z library.
3. **AI-Powered Guidance:** Providing AI-driven preliminary guidance for patients experiencing complex symptoms on which medical department (Neurology, Nephrology, Medical Genetics, etc.) they should consult.

## 🚀 How to Use?

The platform is extremely simple to use and is shaped around three main focus areas:

### 1. Finding Results with Smart Search
When you type a disease name or topic (e.g., *DMD*, *SMA*, *Alport*) into the search bar on the homepage, the system provides you with the following in seconds:
- **Specialist Doctors** dealing with that disease and their city/hospital information.
- The most up-to-date **Scientific Articles** directly related to that disease and their brief summaries.

### 2. A-to-Z Article Library
When you click on the **"Makaleler" (Articles)** tab in the top menu:
- You can examine all the scientific literature registered on the platform in an **A-to-Z alphabetical** library format.
- You can easily read the journal where the articles were published, the publication year, and the content.

### 3. AI Branch Assistant (Artificial Intelligence Guidance)
If you don't know which doctor to go to, click on the **"AI Branş Yönlendirme" (AI Branch Guidance)** card on the homepage. In the window that opens:
- Briefly write down your complaints, symptoms, or the condition you suspect (e.g., *"My child has difficulty walking and muscle weakness"*).
- When you press the **"Analiz Et" (Analyze)** button, the artificial intelligence will interpret the symptoms and recommend the most accurate polyclinic (e.g., *Pediatric Neurology*) where you should make an appointment.

### 4. Personalized User Panel (My Profile)
Users can log into the platform ("Sign In") to personalize their reading processes:
- **Reading History:** All the articles you review are saved to your profile with date/time information.
- **Save Article (Bookmark):** You can keep the research you are interested in in your library by saving it with a single click.
- **Personal Note Taking:** Under each article you save, you can take notes of the questions that come to your mind while reading or the issues you want to consult your doctor about.

## ⚠️ Important Warning (Disclaimer)

> **This project is a concept/prototype study and does not constitute medical advice.**
> - All doctor names, specialties, article titles, and summaries on the platform have been created with **fake data (mock data) for exemplary purposes only**.
> - The **AI Branch Assistant** is a simulation prepared entirely to show how the system will work (UI/UX). It does not include a real medical diagnostic model, and its guidance is not binding. Always consult a real specialist for your health problems.

## 💻 For Developers: Installation and Running

You can follow the steps below to run the project in your own environment (local):

```bash
# 1. Go to the project directory
cd nadir-hastalik-platformu

# 2. Install required dependencies
npm install

# 3. Start the development server
npm run dev
```

Once the application is successfully started, you can access the platform via your browser at `http://localhost:5173`.

---
*Tech Stack: React.js, Vite, TailwindCSS, Material Symbols. Design language: Clinical Empathy System (Glassmorphism).*
