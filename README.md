# Darna Navigator 🌴

**Darna Navigator** is an interactive tourism web platform that helps users explore Tunisia’s cities, culture, gastronomy, and events. It provides city guides, upcoming events, and culinary experiences in an intuitive and responsive interface.

<img width="1898" height="858" alt="image" src="https://github.com/user-attachments/assets/98ac2cae-6f67-4bdc-9bff-9f39104882f0" />


---

## 🌟 Features

- **City Guides**: Detailed pages for Tunisian cities including landmarks, culture, and local attractions.  
- **Favorites**: Users can save cities to their favorites.  
- **Events Calendar**: Browse upcoming cultural and traditional events.  
- **Gastronomy**: Discover Tunisian cuisine and regional specialties.  
- **Responsive UI**: Works on desktop, tablet, and mobile devices.

---

## 🛠 Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS  
- **Backend**: Django REST Framework  
- **Containerization**: Docker & Docker Compose  
- **Routing & State Management**: React Router, Context API  
- **UI & Notifications**: shadcn/ui components, Sonner, Lucide React Icons  

---

## 📂 Project Structure

```bash
darna-navigator/
├─ backend/                    # Django REST Framework API
│  ├─ accounts/               # User authentication & profiles
│  │  ├─ models.py           # User data structure
│  │  ├─ serializers.py       # Data validation & API responses
│  │  └─ views.py            # Auth endpoints (login, signup, profile)
│  ├─ settings.py            # Django configuration
│  └─ requirements.txt        # Python dependencies
├─ frontend/                   # React + TypeScript application
│  ├─ pages/                 # Main page components
│  │  ├─ Home.tsx            # Landing page
│  │  ├─ Destinations.tsx    # City explorer
│  │  ├─ Gastronomie.tsx     # Food & cuisine
│  │  ├─ Evenements.tsx      # Events calendar
│  │  └─ [City].tsx          # Individual city guides (Tunis, Sousse, etc.)
│  ├─ components/            # Reusable UI components
│  │  ├─ CityCard.tsx        # City information card
│  │  ├─ DishCard.tsx        # Food item card
│  │  ├─ EventCard.tsx       # Event information card
│  │  ├─ Header.tsx          # Navigation bar
│  │  ├─ Footer.tsx          # Footer layout
│  │  └─ ui/                 # shadcn/ui library (buttons, dialogs, forms, etc.)
│  ├─ hooks/                 # Custom React hooks
│  │  ├─ use-mobile.tsx      # Mobile detection
│  │  └─ use-toast.ts        # Toast notifications
│  ├─ lib/                   # Utility functions
│  ├─ vite.config.ts         # Build configuration
│  └─ tailwind.config.ts     # CSS theming
└─ docker-compose.yml        # Docker setup for frontend + backend
```

### Backend Overview

- **Django REST Framework** handles all API logic and data management
- `accounts/` manages user authentication, profiles, and login/signup endpoints

 ### Frontend Overview

- **React + TypeScript** provides the interactive UI
- `pages/` contains full page routes (home, city guides, events, etc.)
- `components/` has reusable UI elements (cards, headers, footers)
- `ui/` contains pre-built shadcn/ui components for consistent styling
- `hooks/` provides custom logic for mobile detection and notifications

---


---

## 🚀 Getting Started

### Prerequisites

- Docker desktop 

### To use the website

```c
git clone https://github.com/MedMdhaffar/darna-navigator.git
cd darne-navigator
docker-compose up --build
```
then open the browser and type :
http://localhost:5173


