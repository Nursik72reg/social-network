import {Api} from "../Api/Api";

const FOLOW_UP = "folowUp";
const UN_FOLLOW = "unfollow";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "setCurrentPage";
const SET_TOTAL_USER_COUNT = "setTotalUserCount";
const SET_IS_FETCHER = "setIsFetcher";
const BTN_DISABLE = "btnDisable"
let initialState = {
    users: [],
    pageSize: 75,
    totalUserCount: 0,
    currentPage: 1,
    isFetcher:true,
    isDisable:false
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

        case BTN_DISABLE:{
            return {
                ...state,
                isDisable: action.status
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
export const isBtnDisable = (status) =>{
    return{
        type:BTN_DISABLE,
        status
    }
};



export const getUserThunk = (currentPage,pageSize)=>{
    return (dispatch) => {
        Api.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setIsFetcherActiveCreate(false));
                dispatch(setUsersActiveCreate(response.data.items));
                dispatch(setTotalUsersActiveCreate(response.data.totalCount))
            });
    }
};

export const getPageUserThunk =(pageNumber, pageSize)=>{
    return (dispatch)=>{
        dispatch(setCurrentActiveCreate(pageNumber));
        dispatch(setIsFetcherActiveCreate(true));
        Api.getUsers(pageNumber, pageSize)
            .then(response => {
                dispatch(setIsFetcherActiveCreate(false));
                dispatch(setUsersActiveCreate(response.data.items));
            });
    }
};

export const unFollowThunk = (id) =>{
    return (dispatch)=>{
        dispatch(isBtnDisable(true));
        Api.unFollowed(id)
            .then(response =>{
            if(response.data.resultCode == 0){
                dispatch(unfolowActiveCreate(id))
            }
                dispatch(isBtnDisable(false));
        })
    }
};
export const followThunk = (id) =>{
    return (dispatch) =>{
        dispatch(isBtnDisable(true));
        Api.upFollowed(id)
            .then(response=>{
                if(response.data.resultCode==0){
                    dispatch(folowActiveCreate(id))
                }
                dispatch(isBtnDisable(false));
            })

    }
}

export default userReducers;
