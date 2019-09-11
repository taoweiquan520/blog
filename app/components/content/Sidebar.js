import React from 'react';
import { connect } from 'react-redux';
import { getArticleList } from '../../actions/articleAction';
import PropTypes from 'prop-types';
import './css/sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.categoryChange = this.categoryChange.bind(this);
    }
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    categoryChange(url) {
        const {dispatch} = this.props;
        
        dispatch(getArticleList.asyncAction(url));
        this.context.router.history.push(`/category/${url}`);
    }

    componentDidMount() {
        
    }
    componentDidUpdate() {
   
    }

    render() {
        console.log(this.props)
        const list = [
            {router: 'html'},
            {router: 'javascript'},
            {router: 'css'},
            {router: 'react'},
            {router: 'redux'},
        ];
        return (
            <div className="col-md-2 side">
                <div className="side-toolbar">
                    {
                        list.map((item, index) => {
                            return (
                                <div className={false ? 'toolbar-item selected' : 'toolbar-item'} key={index}>
                                    <a onClick={() => this.categoryChange(item.router)}>
                                        <b>{index + 1}.</b>{item.router}
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return state.articleReducer;
};

export default connect(
    mapStateToProps
)(Sidebar);