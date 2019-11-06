import axios from "axios";

let defaultState = {
    appTitle: 'MERN Stack + REDUX',
    form: {
        title: '',
        description: '',
        _id: ''
    },
    loading: false
};

const mainReducer = (state = defaultState, action) => {
    console.log(action.type);
    if (action.type === "HANDLE_INPUT") {
        let {value, name} = action.e.target;
        return {
            ...state,
            form: {
                ...state.form,
                [name]: value
            }
        };
    }
    if (action.type === "REQUEST_LOAD") {
        action.e.preventDefault();
        state.loading = true;
        //console.log("form from action: ", action.form);
    }

    if (action.type === "REQUEST_LOAD_SUCCESS") {
        state.loading = false;
        //action.e.preventDefault();
        //console.log("agregar de vuelta ", state.form);
        // let response = await axios.post('/api/tasks', state.form);
        M.toast({html: action.data.message});
    }
    return state;
};

export default mainReducer;