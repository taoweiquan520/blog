import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getArticleList } from '../../actions/articleAction';
import PropTypes from 'prop-types';
import './css/sidebar.css';

class Sidebar extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    
    constructor(props) {
        super(props);

        this.categoryChange = this.categoryChange.bind(this);
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
        const list = [
            {router: 'html'},
            {router: 'javascript'},
            {router: 'css'},
            {router: 'react'},
            {router: 'redux'},
        ];
        const selectStyle = {
            backgroundColor: '#ea6f5a',
            color: '#fff',
        }
        return (
            <div className="col-md-2 side left">
                <div className="side-toolbar">
                    {
                        list.map((item, index) => {
                            return (
                                <div className='toolbar-item' key={index}>
                                    <NavLink 
                                        activeStyle={selectStyle} 
                                        to={`/category/${item.router}`} 
                                        onClick={() => this.categoryChange(item.router)}
                                    >
                                        <b>{index + 1}.</b>{item.router}
                                    </NavLink>
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