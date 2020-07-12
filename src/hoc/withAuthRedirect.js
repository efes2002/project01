import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/Login"}/>;
            return <Component {...this.props}/>
        }
    }
    let mapStateToProps = (state) =>({isAuth: state.auth.isAuth});
    let connectRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return connectRedirectComponent;
}