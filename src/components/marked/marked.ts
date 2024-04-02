import { config } from "md-editor-v3";
import MarkExtension from "@/utils/marked-mark";
import TargetBlankExtension from "@/utils/marked/target-blank-extension";

let mdEditorConfigFlag = false;
export const generateId = (text: string, level: number, index: number): string => {
  const id = text.replace(/ /g, "-");
  return id;
};

export const cdnBase = "https://cdn.bootcdn.net/ajax/libs";
export const mdEditorConfig = () => {
  if (mdEditorConfigFlag) return;
  // console.log("mdEditorConfigFlag", mdEditorConfigFlag);
  try {
    config({
      // markedExtensions: [MarkExtension],
      editorExtensions: {
        highlight: {
          js: `${cdnBase}/highlight.js/11.7.0/highlight.min.js`,
          css: {
            atom: {
              light: `${cdnBase}/highlight.js/11.7.0/styles/atom-one-light.min.css`,
              dark: `${cdnBase}/highlight.js/11.7.0/styles/atom-one-dark.min.css`,
            },
            github: {
              light: `${cdnBase}/highlight.js/11.7.0/styles/github.min.css`,
              dark: `${cdnBase}/highlight.js/11.7.0/styles/github-dark.min.css`,
            },
          },
        },
        katex: {
          js: `${cdnBase}/KaTeX/0.16.4/katex.min.js`,

          css: `${cdnBase}/KaTeX/0.16.4/katex.min.css`,
        },
        mermaid: {
          js: `${cdnBase}/mermaid/10.6.1/mermaid.min.js`,
        },
      },
      markdownItConfig: (mdit) => {
        // console.log(mdit);
        mdit.use(TargetBlankExtension);
      },
    });

    mdEditorConfigFlag = true;
  } catch (error) {
    mdEditorConfigFlag = false;
    throw error;
  }
};
