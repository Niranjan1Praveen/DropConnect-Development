# DropConnect

**A Smart Platform for Water Resilience Volunteering & CSR Impact**

> *To build resilience, we need coordinated disaster risk reduction strategies, including strong water governance, early warning systems, and sustainable, climate-resilient infrastructure at all levels.*  
> — *UN SDG Framework*

---

## Overview

**DropConnect** is a digital platform that unites students, NGOs, and corporations to foster collective action for water resilience and climate-smart disaster management. Anchored in India’s Schedule VII CSR mandate, DropConnect empowers verified impact creation through:

- **Volunteer mobilization for water-centric initiatives** (like clean-up drives, rainwater harvesting, awareness campaigns).
- **Geo-based event matching** for students and community members.
- **Corporate dashboards** to monitor CSR, ESG, and BRSR-aligned outcomes.
- **Gamified rewards** to incentivize meaningful participation.

---

## Key Features

- 🎯 **NGO Event Listings:** Schedule and manage local water resilience events with roles, dates, and geo-tags.
- 🔍 **Smart Matching:** AI/ML-based engine aligns volunteers by region, interest, and skill.
- 📈 **Impact Dashboards for Corporates:** Track hours volunteered, trees planted, water conserved, and auto-generate reports for compliance.
- 🏆 **Student Incentives:** Points unlock internships, mentorships, leadership badges like *Green Champion*.
- 📲 **Real-time Participation:** QR and GPS-based event check-ins for transparent verification.
- 🔐 **Secure & Scalable:** AES-256 encrypted, OAuth2-authenticated, and high concurrency support.

---

## Impact Areas

- ✅ Water Conservation
- ✅ Climate Resilience
- ✅ Early Warning Awareness
- ✅ Youth Engagement for SDGs
- ✅ ESG & BRSR Corporate Compliance

---

## User Roles

| User        | Key Needs                                       |
|-------------|-------------------------------------------------|
| Students    | Recognition, internships, mentorship, upskilling|
| NGOs        | Volunteer management, event visibility          |
| Corporates  | Verified CSR metrics, Schedule VII compliance   |
| Admin       | Platform health, analytics, content moderation  |

---

## Tech Stack

| Layer             | Technology                              |
|------------------|------------------------------------------|
| Frontend         | React.js, Tailwind CSS                   |
| Backend Services | Supabase (Backend-as-a-Service)          |
| ORM & DB Layer   | Prisma ORM with PostgreSQL (via Supabase)|
| Authentication   | Supabase Auth (OAuth + Magic Links)      |
| Hosting          | Supabase Hosting                         |
| Realtime & APIs  | Supabase Realtime, Edge Functions        |
| Deployment       | GitHub Actions (CI/CD)                   |

---

## Use Case Scenarios

1. **Student Volunteer Experience**
   - Signup → Get matched to nearby events → Check-in via QR → Earn badges → Unlock internships.
2. **NGO Event Management**
   - Post event (e.g., Bhopal River Clean-up) → Attract matched volunteers → Track turnout + impact reports.
3. **Corporate CSR Compliance**
   - Monitor real-time CSR impact → Auto-generate reports for BRSR/ESG → Plan company-wide CSR Days.

---

## Future Scope

- 🤖 AI-based engagement recommendations
- 🔗 Blockchain for verifiable social impact
- 🎓 Credit-based rewards integrated with universities
- 🗣️ Multilingual voice interfaces for rural communities

---

## Team DropConnect

- **Debshata Choudhury** – Team Leader, Backend Developer  
- **Niranjan Praveen** – Frontend Developer  
- **Vaibhav Jain** – Frontend Developer  
- **Abhishek Chaubey** – Backend Developer  
- **Pratham Ranjan** – Backend Developer  

---

## Code Execution Instructions:

### 1. Clone the Repository  
```bash
git https://github.com/Niranjan1Praveen/DropConnect.git
```

### 2. Install Frontend Dependencies  
```bash
cd client
npm install
```

### 3. Install Backend Dependencies  
```bash
cd ../server
pip install -r requirements.txt
```

### 4. Start Development Servers  

#### Frontend (Next.js)  
```bash
cd client
npm run dev
```

#### Backend (FastAPI/Flask)

```bash
cd server
cd CSR
python app.py
```

```bash
cd server
cd MAP
python app.py
```

```bash
cd server
cd NGO
python app.py
```

### 5. Access the Application  
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## License

This project is developed as part of a mission-driven hackathon challenge to accelerate disaster resilience and water governance through civic tech collaboration.