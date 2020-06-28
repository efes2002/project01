
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage}
}



const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageTextActionCreator, addMessageActionCreator
})(Dialogs);

export default DialogsContainer;