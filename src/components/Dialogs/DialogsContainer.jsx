import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return <Dialogs {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage,}
}

export default compose(
    connect(mapStateToProps, {updateNewMessageTextActionCreator, addMessageActionCreator}),
    withAuthRedirect
    )(DialogsContainer);
