[![CI - React Vite TS](https://github.com/devgiahuy/ecom-orchid/actions/workflows/ci.yml/badge.svg)](https://github.com/devgiahuy/ecom-orchid/actions/workflows/ci.yml)

# 🪴 Ecom Orchid

Ecom Orchid là dự án thương mại điện tử mini bán **hoa lan**, được xây dựng bằng **React + TypeScript + Vite** với cấu trúc hiện đại, tối ưu và dễ mở rộng.  
Dự án áp dụng các công nghệ mới như Zustand, Axios, TailwindCSS, HeroUI và Firebase để tạo nên trải nghiệm mua sắm mượt mà, nhanh và dễ bảo trì.

---

## ⚙️ Công nghệ sử dụng

| 🧩 Công nghệ | 📝 Mô tả |
|--------------|----------|
| ⚛️ **React + TypeScript + Vite** | Nền tảng phát triển SPA với HMR và build cực nhanh |
| 🧠 **Zustand** | Quản lý state toàn cục nhẹ, dễ mở rộng |
| 🌐 **Axios** | Gọi API với interceptor và cấu hình tùy chỉnh |
| 🎨 **TailwindCSS** | Xây dựng giao diện nhanh, hỗ trợ responsive & dark mode |
| 💎 **HeroUI / ShadCN** | Bộ component UI hiện đại, tương thích Tailwind |
| 🔥 **Firebase Auth** | Đăng nhập, xác thực người dùng |
| 🧰 **MockAPI.io** | Giả lập backend phục vụ thử nghiệm dữ liệu |
| 🧪 **ESLint + Prettier** | Chuẩn hóa và định dạng code tự động |
| 🧭 **React Router DOM** | Điều hướng trang & bảo vệ route người dùng |
| ⚙️ **GitHub Actions (CI)** | Tự động lint + build + test khi commit |

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
│       └── them.css
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
│   └── ProtectedRote.tsx
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
