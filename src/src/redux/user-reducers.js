const FOLOW_UP = "folowUp";
const UN_FOLLOW = "unfollow";
const SETUSERS = "setUsers";

let initialState = {
  users: []
};

const userReducers = (state = initialState,action)=>{
    switch (action.type) {
        case FOLOW_UP:
           return{
               ...state,
               users: state.users.map(m=>{
                   if(m.id===action.userId){
                       return{...m, followed:true}
                   }
                   return m
               })
           };
            /*  if(u.id===action.userId){
                  return(u.followed = true)
              }
           });
           return state;*/
        case UN_FOLLOW:
            return{
                ...state,
                users: state.users.map(m=>{
                    if(m.id===action.userId){
                        return{...m, followed:false}
                    }
                    return m
                })
            };


          /*  state.users.map((m)=>{
               if(m.id === action.userId){
                   return(m.followed = false)
               }

           });
            return state;*/
        case SETUSERS:
          return {...state,
          users:[...state.users, ...action.userId]}

    }
    return state;
};


export let folowActiveCreate = (userId)=>{
    return{
        type:FOLOW_UP,
        userId:userId
    }

};

export let unfolowActiveCreate = (userId)=>{
    return{
        type:UN_FOLLOW,
        userId:userId
    }

};
export let setUsersActiveCreate = (user)=>{
    return{
        type:SETUSERS,
        userId:user
    }

};

export default userReducers;

