import { authenticateFirebase } from "../../_utils/firebase";
import axios from 'axios';
import { server } from "../../config/config";

export const getAuthenticated = identifier => async dispatch => {
    try {
        dispatch({ type: 'authRequest' });

        const { data } = await axios.get(`${server}/users/getAuthenticatedUser`, {
            params: {
                identifier: identifier
            }
        })
        // console.log(data)
        await authenticateFirebase(data.customToken)
        // console.log(data);
        dispatch({ type: 'authSuccess', payload: data });
    } catch (error) {
        // localStorage.clear();
        dispatch({ type: 'authFailure', payload: error.message });
    }
}