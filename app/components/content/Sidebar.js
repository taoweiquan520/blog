import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/sidebar.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="side">
                <div className="side-toolbar">
                    <div className="toolbar-item">
                        <NavLink to="/category/html" activeClassName="selected">
                            <b>1.</b>html
                        </NavLink>
                    </div>
                    <div className="toolbar-item">
                        <NavLink to="/category/javascript" activeClassName="selected">
                            <b>2.</b>javascript
                        </NavLink>
                    </div>
                    <div className="toolbar-item">
                        <NavLink to="/category/css" activeClassName="selected">
                            <b>3.</b>css
                        </NavLink>
                    </div>
                    <div className="toolbar-item">
                        <NavLink to="/category/react" activeClassName="selected">
                            <b>4.</b>react
                        </NavLink>
                    </div>
                    <div className="toolbar-item">
                        <NavLink to="/category/redux" activeClassName="selected">
                            <b>5.</b>redux
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;