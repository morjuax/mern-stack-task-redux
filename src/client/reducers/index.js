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

    switch (action.type) {
        case 'HANDLE_INPUT':
            let {value, name} = action.e.target;
            return {
                ...state,
                form: {
                    ...state.form,
                    [name]: value
                }
            };
        //***LIST***//
        case 'REQUEST_LIST_LOAD':
            return {
                ...state,
                loading: true
            };
        case 'REQUEST_LOAD_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                tasks: action.tasks
            };
        //**FORM**//
        case 'REQUEST_LOAD':
            if (action.e !== undefined) {
                action.e.preventDefault();
            }
            return {
                ...state,
                loading: true
            };
        case 'REQUEST_LOAD_SUCCESS':
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
        //**DELETE**//
        case 'REQUEST_DELETE_LOAD_SUCCESS':
            M.toast({html: action.data.message});
            return {
                ...state,
                loading: false
            };
        //**EDIT**//
        case 'REQUEST_EDIT_LOAD_SUCCESS':
            return {
                ...state,
                form: action.task,
                loading: false
            };
        default:
            return state;
    }

    // if (action.type === "REQUEST_LIST_LOAD") {
    //     return {
    //         ...state,
    //         loading: true
    //     }
    // }
    //
    // if (action.type === "REQUEST_LOAD_LIST_SUCCESS") {
    //     // console.log("reducer: ", action.tasks);
    //     return {
    //         ...state,
    //         loading: false,
    //         tasks: action.tasks
    //     }
    // }

    // if (action.type === "HANDLE_INPUT") {
    //     let {value, name} = action.e.target;
    //     return {
    //         ...state,
    //         form: {
    //             ...state.form,
    //             [name]: value
    //         }
    //     };
    // }

    // if (action.type === "REQUEST_LOAD") {
    //     action.e.preventDefault();
    //     return {
    //         ...state,
    //         loading: true
    //     }
    // }

    // if (action.type === "REQUEST_LOAD_SUCCESS") {
    //     M.toast({html: action.data.message});
    //     return {
    //         ...state,
    //         loading: false,
    //         form: {
    //             title: '',
    //             description: '',
    //             _id: ''
    //         }
    //     };
    // }
    return state;
};

export default mainReducer;