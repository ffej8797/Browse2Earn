"use client";

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/navigation";
import { HeroUIProvider } from "@heroui/react";


const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: Infinity } },
});

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <QueryClientProvider client={queryClient}>
            <HeroUIProvider>{children}</HeroUIProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
