import { LanguageType, languages } from "@/lib/constants";
import React from "react";

type Props = {
  selectedLanguage: LanguageType;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
};

const Sidebar = ({ selectedLanguage, setSelectedLanguage }: Props) => {
  return (
    <div className="dark:bg-slate-800 bg-slate-200 p-3 space-y-3 overflow-auto h-screen">
      {languages.map((item) => (
        <div
          key={item.name}
          onClick={() => setSelectedLanguage(item.name as LanguageType)}
          className={`p-3 border-2 dark:border-slate-700 border-slate-400 cursor-pointer transition-all duration-200 ${
            selectedLanguage === item.name
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500 hover:text-white text-slate-700 dark:text-white"
          }`}
        >
          <item.icon size={25} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
