"use client";
import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizablePannel";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useTheme } from "next-themes";
import { highlightActiveLine } from "@codemirror/view";
import ThemeToggle from "./ThemeToggle";
import {
  fileExtensions,
  languageOptions,
  languages,
  sampleCode,
} from "@/lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";

type Language = keyof typeof languageOptions;
type Props = {
  selectedLanguage: Language;
};

const CodeEditor = ({ selectedLanguage }: Props) => {
  const { theme } = useTheme();

  const isMobile = useIsMobile();
  return (
    <ResizablePanelGroup direction={isMobile ? "vertical" :"horizontal"} className="min-h-full w-full">
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full flex-col">
          <div className="dark:bg-slate-800 bg-slate-200 h-16 w-full flex justify-between items-center pe-3">
            <div className="dark:bg-slate-900 bg-white p-4 h-full ">
              <span className="font-semibold text-slate-700 dark:text-slate-100">
                main.{fileExtensions[selectedLanguage]}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <div className="bg-blue-500 text-white h-11 font-semibold px-6 flex justify-center items-center cursor-pointer rounded-md shadow-md hover:bg-blue-600">
                Run
              </div>
            </div>
          </div>

          <div className="text-black">
            <ReactCodeMirror
              className="hfu"
              value={sampleCode[selectedLanguage]}
              height="calc(100vh-4rem)"
              theme={theme === "dark" ? "dark" : "light"}
              extensions={[
                languageOptions[selectedLanguage](),
                highlightActiveLine(),
              ]}
            />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className="dark:bg-slate-600 bg-slate-300" />
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full flex-col">
          <div className="dark:bg-slate-800 bg-slate-200 h-16 w-full flex items-center px-4 py-2 justify-between">
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              Output
            </span>
            <div className="border-2 dark:border-slate-600 border-slate-400 text-slate-700 dark:text-slate-200 h-11 font-semibold px-6 flex justify-center items-center cursor-pointer rounded-md shadow-md hover:bg-slate-200 dark:hover:bg-slate-700">
              Clear
            </div>
          </div>
          <div className="p-2">
            <textarea
              name="output"
              id=""
              placeholder="output...."
              className="w-full h-full bg-transparent ring-0 border-0 text-slate-800 dark:text-slate-100"
            />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default CodeEditor;
