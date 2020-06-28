import {headerAPI} from "../api/api";

const SET_USER_DATE = "SET_USER_DATE";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDate = (id, email, login) => ({type: SET_USER_DATE, data: {id, email, login}});

export const auth = ()=> {
    return (dispatch) => {
        headerAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserDate(id, email, login))
                }
            });
    }
}





export default authReducer;