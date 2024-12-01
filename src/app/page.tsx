"use client";
import CodeEditor from "@/components/codeEditor";
import Sidebar from "@/components/sidebar";
import { languageOptions } from "@/lib/constants";
import { useState } from "react";
type Language = keyof typeof languageOptions;

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("Python");
  return (
    <main className="flex  w-full h-screen overflow-hidden bg-white dark:bg-slate-900">
      <Sidebar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <CodeEditor selectedLanguage={selectedLanguage} />
    </main>
  );
}
