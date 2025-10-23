"use client";
import { useEffect, useState } from "react";
import SwitchStyled from "../../styled/SwitchStyled";

/**
 * Component DarkOrWhite
 * 👉 Dùng để chuyển toàn bộ app giữa Light mode và Dark mode
 * - Sử dụng Tailwind + HeroUI
 * - Áp dụng class "dark" vào <html> (theo chuẩn Tailwind)
 */
export default function DarkOrWhite() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cập nhật chế độ theme khi người dùng bật / tắt
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-3 w-10">
      <SwitchStyled
        size="sm"
        // isSelected={isDarkMode}
        onValueChange={setIsDarkMode}
      />
    </div>
  );
}
