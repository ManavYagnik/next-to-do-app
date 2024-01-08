"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import LoadingGif from "./components/LoadingGif";
import FontLoader from './components/font/FontLoader'

// const [css_value, setCss_value]=useState('');
export default function Home() {
  const pathname = usePathname();
  return (
    <div className="App">
      <div className="home-page-loading"><FontLoader /></div>
    </div>
  );
}
