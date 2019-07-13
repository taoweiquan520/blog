import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import 'simplemde/dist/simplemde.min.css';

class Add extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 初始化markdown编辑器
        // this.smde.value()  可获取编辑器内容
        this.smde = new SimpleMDE({
            element: document.getElementById('editor').childElementCount,  
            autofocus: true,
            autosave: true,
            previewRender: function(plainText) {
                return marked(plainText,{
                        renderer: new marked.Renderer(),
                        gfm: true,
                        pedantic: false,
                        sanitize: false,
                        tables: true,
                        breaks: true,
                        smartLists: true,
                        smartypants: true,
                        highlight: function (code) {
                            return highlight.highlightAuto(code).value;
                        }
                });
            }
        });
    }

    render() {
        return (
            <div className="add-wrap">
                <textarea id="editor"></textarea>
            </div>
        )
    }
}

export default Add;