[![CI - React Vite TS](https://github.com/devgiahuy/ecom-orchid/actions/workflows/ci.yml/badge.svg)](https://github.com/devgiahuy/ecom-orchid/actions/workflows/ci.yml)

# 🪴 Ecom Orchid

Ecom Orchid là dự án thương mại điện tử mini bán **hoa lan**, được xây dựng bằng **React + TypeScript + Vite** với cấu trúc hiện đại, tối ưu và dễ mở rộng.  
Dự án áp dụng các công nghệ mới như Zustand, Axios, TailwindCSS, HeroUI và Firebase để tạo nên trải nghiệm mua sắm mượt mà, nhanh và dễ bảo trì.

---

## ⚙️ Công nghệ sử dụng

### 🧠 **Ngôn ngữ & Nền tảng**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### ⚙️ **Frontend Framework & UI**
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HeroUI](https://img.shields.io/badge/HeroUI-00A97F?style=for-the-badge&logo=vercel&logoColor=white)
![ShadCN](https://img.shields.io/badge/ShadCN-18181B?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### 💾 **State & API**
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

### 🔥 **Backend & Auth**
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![MockAPI.io](https://img.shields.io/badge/MockAPI.io-8A2BE2?style=for-the-badge&logo=json&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white)

### 🧹 **Linting & Format**
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

### 🧪 **CI/CD**
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

Ngo Gia Huy
📧 ngogiahuy.dev@gmail.com
🌐 github.com/devgiahuy

---

## 🗂️ Cấu trúc thư mục

```bash
src/
├── 📦 api
│   ├── axiosClient.ts
│   ├── http.ts
│   └── wrapper.ts
│
├── ⚙️ app
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── index.css
│
├── 🖼️ assets
│   └── react.svg
│
├── 🧩 components
│   ├── modals/
│   ├── models/
│   │   ├── AddToCartButton/
│   │   ├── FormField/
│   │   └── OrchidCard/
│   │
│   ├── pages/
│   │   ├── Admin/
│   │   ├── Gest/
│   │   └── User/
│   │
│   ├── share/
│   │   ├── DarkOrWhite/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   ├── OrchidCardList/
│   │   └── ProfileDropdown/
│   │
│   └── styled/
│       ├── AutocompleteStyle/
│       ├── ButtonStyled/
│       ├── CardStyled/
│       ├── DetailItem/
│       ├── Dropdown/
│       ├── GoogleLoginButton/
│       ├── InputStyled/
│       ├── SectionStyled/
│       ├── SpinnerStyled/
│       ├── SwitchStyled/
│       └── TableStyled/
│
├── 🧱 constants
│   ├── apiKey.ts
│   └── queryKey.ts
│
├── 🌸 data
│   └── ListOfOrchids.ts
│
├── 🪝 hooks
│   ├── queries/
│   └── singleton/
│       ├── useApiHandler.ts
│       └── store/
│           ├── useAuthStore.ts
│           ├── useCartStore.ts
│           └── useItemStore.ts
│
├── 💎 lib
│   └── heroUI/
│       ├── hero.ts
│       └── theme.css
│
├── 🧾 model
│   ├── authState.ts
│   ├── cart.ts
│   ├── orchid.ts
│   └── user.ts
│
├── 🧩 provider
│   ├── AppProvider.tsx
│   └── AuthProvider.tsx
│
├── 🧭 router
│   ├── index.tsx
│   └── ProtectedRoute.tsx
│
├── 🔧 service
│   ├── firebase.ts
│   ├── firebaseAuthService.ts
│   ├── orchidApi.ts
│   ├── useAuthApi.ts
│   └── userApi.ts
│
└── 🪄 utils
    ├── tokent.ts
    └── helper/
        └── currency.ts
