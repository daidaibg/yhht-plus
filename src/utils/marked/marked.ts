import { marked, Renderer } from 'marked';
import Alert from "./alert"
// marked渲染实例
let renderer = new marked.Renderer();

//挂在扩展
marked.use({
    extensions: [Alert]
});

