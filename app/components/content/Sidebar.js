import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/sidebar.css'

class Sidebar extends React.Component {
    render() {
        const list = [
            {router: 'html'},
            {router: 'javascript'},
            {router: 'css'},
            {router: 'react'},
            {router: 'redux'},
        ];
        return (
            <div className="side">
                <div className="side-toolbar">
                    {
                        list.map((item, index) => {
                            return (
                                <div className="toolbar-item" key={index + item.router}>
                                    <NavLink to={`/category/${item.router}`} activeClassName='selected'>
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

export default Sidebar;