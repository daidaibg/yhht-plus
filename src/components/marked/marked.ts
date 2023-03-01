import MarkExtension from '@/utils/marked-mark';
let mdEditorConfigFlag = false
export const generateId = (text: string, level: number, index: number):string =>{
    const id =text.replace(/ /g, '-')
    return id
};

export const mdEditorConfig = (MdEditor: any) => {
    if (mdEditorConfigFlag) return
    // console.log("mdEditorConfigFlag", mdEditorConfigFlag);
    try {
        MdEditor.config({
            markedExtensions: [MarkExtension],
            markedRenderer: (renderer: any) => {
                renderer.heading = (text: string, level: number, raw: string, s: any, index: number) => {
                    // console.log(text,level,raw,s,index);
                    const id =generateId(text, level, index)
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