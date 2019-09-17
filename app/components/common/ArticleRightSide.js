import React from "react";
import { Link } from 'react-router-dom';
import './css/hot.css';

class ArticleRightSide extends React.Component {
    render() {
        const {list, title, className} = this.props;

        return (
            <div 
                className={className && typeof className === 'string' ? `right-side ${className}` : 'right-side'}
            >
                <div className="right-side-title">{title}</div>
            {
                list.map((item, index) => (
                    <Link 
                        to={`/article/${item.article_id}`}
                        title={item.title}
                        key={index}
                    >
                        {`${index + 1}. ${item.title}`}
                    </Link>
                ))
            }
            </div>
        )
    }
}

export default ArticleRightSide;