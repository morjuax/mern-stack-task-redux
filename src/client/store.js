import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import axios from "axios";
import reducer from './reducers'

// const initialState = {
//     appTitle: 'MERN Stack + REDUX',
//     form: {
//         title: '',
//         description: '',
//         _id: ''
//     },
//     loading: true
// };

// const reducer = (state = initialState, action) => {
//
//     if (action.type === "HANDLE_INPUT") {
//         let {value, name} = action.e.target;
//         return {
//             ...state,
//             form: {
//                 [name]: value
//             }
//         };
//     }
//     if (action.type === "ADD_TASK") {
//         action.e.preventDefault();
//         console.log("agregar");
//        // let response = await axios.post('/api/tasks', state.form);
//         //M.toast({html: response.data.message});
//     }
//     return state;
// };


export default createStore(reducer, applyMiddleware(thunk))