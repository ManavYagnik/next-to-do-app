"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LoadingGif from "./components/LoadingGif";
export default function Home() {
  const pathname = usePathname();
  return (
    <div className="App">
      <div className="home-page-loading"></div>
    </div>
  );
}
