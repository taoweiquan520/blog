import React from 'react';
/* 
 * 作为一层route外的包裹层，防止路由跳转的时候render两次
 */
const connectRoute = (WrapComponent) => {
    return class extends React.Component {
        shouldComponentUpdate(nextProps) {
            return nextProps.location !== this.props.location;
        }

        render() {
            return <WrapComponent {...this.props} />
        }
    } 
}

export default connectRoute;
