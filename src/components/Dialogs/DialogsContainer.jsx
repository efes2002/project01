import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class DialogsContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return <Dialogs {...this.props}/>;
    }
}
let AuthRedirectComponent = withAuthRedirect(DialogsContainer);



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {
    updateNewMessageTextActionCreator, addMessageActionCreator
})(AuthRedirectComponent);
