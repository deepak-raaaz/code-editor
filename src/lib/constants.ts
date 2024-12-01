import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { go } from "@codemirror/lang-go";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { markdown } from "@codemirror/lang-markdown";
import { FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPhp,
  SiSwift,
  SiRust,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMarkdown,
} from "react-icons/si";

const typescript = () => javascript({ typescript: true });
const swift = () => java();

// Language options for CodeMirror
export const languageOptions = {
  Python: () => python(),
  JavaScript: () => javascript(),
  TypeScript: typescript,
  Go: () => go(),
  PHP: () => php(),
  Swift: swift,
  Rust: () => rust(),
  "C/C++": () => cpp(),
  HTML: () => html(),
  CSS: () => css(),
  Markdown: () => markdown(),
} as const;

// Mapping language names to file extensions
export const fileExtensions: Record<keyof typeof languageOptions, string> = {
  Python: "py",
  JavaScript: "js",
  TypeScript: "ts",
  Go: "go",
  PHP: "php",
  Swift: "swift",
  Rust: "rs",
  "C/C++": "cpp",
  HTML: "html",
  CSS: "css",
  Markdown: "md",
};

// Mapping language names to sample code
export const sampleCode: Record<keyof typeof languageOptions, string> = {
  Python: `print("Hello, World!")`,
  JavaScript: `console.log("Hello, World!");`,
  TypeScript: `console.log("Hello, World!");`,
  Go: `package main\nimport "fmt"\nfunc main() {\n\tfmt.Println("Hello, World!")\n}`,
  PHP: `<?php\n echo "Hello, World!";\n?>`,
  Swift: `print("Hello, World!")`,
  Rust: `fn main() {\n    println!("Hello, World!");\n}`,
  "C/C++": `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`,
  HTML: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello World</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>`,
  CSS: `body {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n  color: #333;\n}`,
  Markdown: `# Hello, World!\nThis is a Markdown example.`,
};

// Mapping languages to icons
export const languages = [
  {
    icon: FaPython,
    name: "Python",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },
  {
    icon: SiGo,
    name: "Go",
  },
  {
    icon: SiPhp,
    name: "PHP",
  },
  {
    icon: SiSwift,
    name: "Swift",
  },
  {
    icon: SiRust,
    name: "Rust",
  },
  {
    icon: SiCplusplus,
    name: "C/C++",
  },
  {
    icon: SiHtml5,
    name: "HTML",
  },
  {
    icon: SiCss3,
    name: "CSS",
  },
  {
    icon: SiMarkdown,
    name: "Markdown",
  },
];


export type LanguageType = keyof typeof languageOptions;