import userSlice from "../redux/userSlice";

const action = userSlice.actions;

export const fetchUserMiddleWare = (param) => {
    return async(dispatch) => {

        try{

            dispatch(action.setLoading());     

            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const result = await response.json();

            dispatch(action.setUser(result));
        }
        catch(err){
            dispatch(action.setError());
        }
        
    }

}