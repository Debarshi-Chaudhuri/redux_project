const initialState={
    users:[
        {
            name:'ABC',
            address:'XYZ'
        },
        {
            name:'CDF',
            address:'QWE'
        }
    ],
    currentUser:{}
}
const user=(state=initialState,action)=>{
    switch(action.type){
        case 'CLICK':return{
            ...state,
            currentUser:action.payload
        }
        default:
                return state;
    }
}
export default user;