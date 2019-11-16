import React from 'react';
import { connect } from 'react-redux';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import { getArticleDetail } from '../../actions/articleAction';
// css
import 'simplemde/dist/simplemde.min.css';
import './css/content_articleDetail.less';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     code: '123'
        // }
    }

    componentDidMount() {
        // // 初始化markdown编辑器
        // // this.smde.value()  可获取编辑器内容
        // this.smde = new SimpleMDE({
        //     element: document.getElementById('editor').childElementCount,  
        //     autofocus: true,
        //     autosave: true,
        //     previewRender: function(plainText) {
        //         return marked(plainText, {
        //             renderer: new marked.Renderer(),
        //             gfm: true,
        //             pedantic: false,
        //             sanitize: false,
        //             tables: true,
        //             breaks: true,
        //             smartLists: true,
        //             smartypants: true,
        //             highlight: function (code) {
        //                 return highlight.highlightAuto(code).value;
        //             }
        //         });
        //     }
        // });
        const { dispatch, match } = this.props;
        const { params } = match;
        dispatch(getArticleDetail.asyncAction(params.type));

    }


    render() {
        const { detail = {} } = this.props;
        
        const { 
            title = '', 
            create_time, 
            content = '', 
            views = 0,
        } = detail;
        
        return (
            <div className="article-wrap">
                {/* <textarea id="editor"></textarea>
                <div width="900" height="350">
                    {this.state.code}
                </div> */}
                <div className="article-view">
                    
                    <div className="main-area">
                        <article>
                            <div className="author-block">
                                <a className="avatar"></a>
                                <div className="author-info">

                                </div>
                            </div>
                            <h1 className="article-title">{title}</h1>
                            <div className="article-content" dangerouslySetInnerHTML={{ __html: content }}>{}</div>
                        </article>
                    </div>
                    <div className="sidebar">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { allIds, byId } = state.articleReducer;

    return {
        detail: byId[allIds]
    }
}

export default connect(mapStateToProps)(ArticleDetail);

