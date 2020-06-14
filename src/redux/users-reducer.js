const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const follow = (userId) => {return {type: FOLLOW, userId}};
export const unfollow = (userId) => {return {type: UNFOLLOW, userId}};
export const setUsers = (users) => {return {type: SET_USERS, users}};
export const setCurrentPage = (currentNumber) => {return {type: SET_CURRENT_PAGE, currentNumber}};
export const setTotalUsersCount = (totalCount) => {return {type: SET_TOTAL_COUNT, totalCount}};
export const toggleIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}};

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FOLLOW): {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case (UNFOLLOW): {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case (SET_USERS): {
            return {
                ...state,
                users: action.users
            };
        }
        case (SET_CURRENT_PAGE): {
            return {
                ...state,
                currentPage: action.currentNumber
            };
        }
        case (TOGGLE_IS_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }

        case (SET_TOTAL_COUNT): {
            let p = 100;
            action.totalCount >= 100 ? p = 100 : p = action.totalCount;
            return {
                ...state,
                totalUsersCount: p
            };
        }

        default:
    }
    return state;
}

export default userReducer;