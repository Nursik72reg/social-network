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


export let folowActiveCreate = (userId) => {
    return {
        type: FOLOW_UP,
        userId: userId
    }

};

export let unfolowActiveCreate = (userId) => {
    return {
        type: UN_FOLLOW,
        userId: userId
    }

};
export let setUsersActiveCreate = (users) => {
    return {
        type: SET_USERS,
        users
    }

};
export let setCurrentActiveCreate = (curentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        curentPage: curentPage
    }

};
export let setTotalUsersActiveCreate = (totalCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    }

};
export let setIsFetcherActiveCreate = (fetch) =>{
    return{
        type:SET_IS_FETCHER,
        fetch
    }
}

export default userReducers;
