import React from 'react';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import 'simplemde/dist/simplemde.min.css';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '123'
        }

        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        // 初始化markdown编辑器
        // this.smde.value()  可获取编辑器内容
        this.smde = new SimpleMDE({
            element: document.getElementById('editor').childElementCount,  
            autofocus: true,
            autosave: true,
            previewRender: function(plainText) {
                return marked(plainText, {
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

    refresh() {
        console.log(this.smde.value())
        this.setState({
            code: '321'
        })
    }

    render() {
        return (
            <div className="article-wrap">
                <textarea id="editor"></textarea>
                <div width="900" height="350">
                    {this.state.code}
                </div>
                <button onClick={this.refresh}>刷新</button>
            </div>

        )
    }
}

export default ArticleDetail;

