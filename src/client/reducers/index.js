import axios from "axios";

let defaultState = {
    appTitle: 'MERN Stack + REDUX',
    form: {
        title: '',
        description: '',
        _id: ''
    },
    tasks: [],
    loading: false
};

const mainReducer = (state = defaultState, action) => {

    if (action.type === "REQUEST_LIST_LOAD") {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === "REQUEST_LOAD_LIST_SUCCESS") {
        // console.log("reducer: ", action.tasks);
        return {
            ...state,
            loading: false,
            tasks: action.tasks
        }
    }

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
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === "REQUEST_LOAD_SUCCESS") {
        M.toast({html: action.data.message});
        return {
            ...state,
            loading: false,
            form: {
                title: '',
                description: '',
                _id: ''
            }
        };
    }
    return state;
};

export default mainReducer;