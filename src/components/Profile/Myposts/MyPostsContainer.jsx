import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {profilePage: state.profilePage}
}


const MypostsContainer = connect(mapStateToProps, {
    updateNewPostTextActionCreator, addPostActionCreator
})(Myposts);

export default MypostsContainer;