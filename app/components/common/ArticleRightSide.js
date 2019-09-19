/**
 * @param
 * title 标题
 * list 渲染的列表
 * className 自定义class
 */
import React from "react";
import { Link } from 'react-router-dom';
import './css/hot.less';

class ArticleRightSide extends React.Component {
    // 月份英文前三个字母缩写
    mon(dateStr) {
        switch (dateStr) {
            case '01':
                return 'JAN'
            case '02':
                return 'FEB'
            case '03':
                return 'MAR'
            case '04':
                return 'APR'
            case '05':
                return 'MAY'
            case '06':
                return 'JUN'
            case '07':
                return 'JUL'
            case '08':
                return 'AUG'
            case '09':
                return 'SEP'
            case '10':
                return 'OCT'
            case '11':
                return 'NOV'
            case '12':
                return 'DEC'
            default:
                return ''
        }
    }
    
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
                        <div className="date-wrapp pull-left">
                            <div className="date-up">{this.mon(item.create_time && item.create_time.slice(5, 7))}</div>
                            <div className="date-down">{item.create_time && item.create_time.slice(8, 10)}</div>
                        </div>
                        <div className="date-detail">
                            <div className="date-detail-title">{item.title}</div>
                            <span>{item.create_time && item.create_time.slice(5, 10)}</span>
                            &nbsp;·&nbsp;
                            <span>{item.views}人浏览</span>
                        </div>
                    </Link>
                ))
            }
            </div>
        )
    }
}

export default ArticleRightSide;