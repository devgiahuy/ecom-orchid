import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroUIProvider } from "@heroui/react";
import { router } from "../router";

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <BrowserRouter>{children}</BrowserRouter> */}
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
