'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import Header from "@/components/Header/Header";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      jojo
      ojojo
    </div>
  );
}
