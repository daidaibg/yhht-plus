import MarkExtension from '@/utils/marked-mark';
let mdEditorConfigFlag = false
export const generateId = (text: string, level: number, index: number): string => {
    const id = text.replace(/ /g, '-')
    return id
};

export const cdnBase = "https://cdn.bootcdn.net/ajax/libs"
export const mdEditorConfig = (MdEditor: any) => {
    if (mdEditorConfigFlag) return
    // console.log("mdEditorConfigFlag", mdEditorConfigFlag);
    try {
        MdEditor.config({
            // markedExtensions: [MarkExtension],
            editorExtensions: {
                highlight: {
                    js: `${cdnBase}/highlight.js/11.7.0/highlight.min.js`,
                    css: {
                        atom: {
                            light: `${cdnBase}/highlight.js/11.7.0/styles/atom-one-light.min.css`,
                            dark: `${cdnBase}/highlight.js/11.7.0/styles/atom-one-dark.min.css`
                        },
                        github: {
                            light: `${cdnBase}/highlight.js/11.7.0/styles/github.min.css`,
                            dark: `${cdnBase}/highlight.js/11.7.0/styles/github-dark.min.css`
                        },
                    }
                },
                katex: {
                    js: `${cdnBase}/KaTeX/0.16.4/katex.min.js`,

                    css: `${cdnBase}/KaTeX/0.16.4/katex.min.css`
                },
                mermaid:{
                    js:"https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.3.0/mermaid.min.js"
                }
                
            },
            markedRenderer: (renderer: any) => {
                renderer.heading = (text: string, level: number, raw: string, s: any, index: number) => {
                    // console.log(text,level,raw,s,index);
                    const id = generateId(text, level, index)
                    return `<h${level} id="${id}">${text}</h${level}>`;
                };
                renderer.link = (href: any, title: any, text: any) => {
                    // console.log(href,text,title);
                    return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
                };
                return renderer;
            },
        });

        mdEditorConfigFlag = true
    } catch (error) {
        mdEditorConfigFlag = false
        throw error
    }

}