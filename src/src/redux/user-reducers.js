import {Api} from "../Api/Api";

const FOLOW_UP = "folowUp";
const UN_FOLLOW = "unfollow";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "setCurrentPage";
const SET_TOTAL_USER_COUNT = "setTotalUserCount";
const SET_IS_FETCHER = "setIsFetcher";
let initialState = {
    users: [],
    pageSize: 75,
    totalUserCount: 0,
    currentPage: 1,
    isFetcher:true
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLOW_UP:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userId) {
                        return {...m, followed: true}
                    }
                    return m
                })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userId) {
                        return {...m, followed: false}
                    }
                    return m
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.curentPage
            }
        }


        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        }


        case SET_IS_FETCHER :
            return {
                ...state,
                isFetcher: action.fetch
            }
    }

    return state;
};


export const folowActiveCreate = (userId) => {
    return {
        type: FOLOW_UP,
        userId: userId
    }

};

export const unfolowActiveCreate = (userId) => {
    return {
        type: UN_FOLLOW,
        userId: userId
    }

};
export const setUsersActiveCreate = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentActiveCreate = (curentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        curentPage: curentPage
    }

};
export const setTotalUsersActiveCreate = (totalCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    }
};
export const setIsFetcherActiveCreate = (fetch) =>{
    return{
        type:SET_IS_FETCHER,
        fetch
    }
};


export const getUserThunk = (currentPage,pageSize)=>{
    return (dispatch) => {
        Api.getUsers(currentPage, pageSize)
            .then(response => {
                this.props.setIsFetcher(false);
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
};

export default userReducers;
