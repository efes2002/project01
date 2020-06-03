import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {profilePage: state.profilePage}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextActionCreator: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPostActionCreator: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;