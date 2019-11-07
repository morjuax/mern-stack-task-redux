import axios from 'axios';

export const [REQUEST_LIST_LOAD, REQUEST_LOAD_LIST_SUCCESS, REQUEST_LOAD_LIST_FAIL] =
    [`REQUEST_LIST_LOAD`, `REQUEST_LOAD_LIST_SUCCESS`, `REQUEST_LOAD_LIST_FAIL`];

//FORM TYPE
export const [REQUEST_LOAD, REQUEST_LOAD_SUCCESS, REQUEST_LOAD_FAIL] =
    [
        `REQUEST_LOAD`,
        `REQUEST_LOAD_SUCCESS`,
        `REQUEST_LOAD_FAIL`
    ];

export const fetchTasks = () => {
    return async (dispatch) => {
        await dispatchRequestListLoad(dispatch);
    }
};

export const handleInput = (e) => {
    return (dispatch) =>
        dispatch({
            type: "HANDLE_INPUT",
            e
        })
};

export const addTask = (e) => {
    return async (dispatch, getState) => {
        const {
            form
        } = getState();

        dispatch({
            type: REQUEST_LOAD,
            e,
            loading: true,
            form
        });
        let response = await axios.post('/api/tasks', form);
        if (response.data.status) {
            dispatch({
                type: REQUEST_LOAD_SUCCESS,
                data: response.data
            });
            await dispatchRequestListLoad(dispatch);

        } else { //TODO, make reducer respective
            dispatch({
                type: REQUEST_LOAD_FAIL,
                data: response.data
            })
        }

    };
};


const dispatchRequestListLoad = async (dispatch) => {
    dispatch({
        type: REQUEST_LIST_LOAD,
        loading: true,
    });
    let response = await axios.get('/api/tasks');
    if (response.data.status) {
        dispatch({
            type: REQUEST_LOAD_LIST_SUCCESS,
            tasks: response.data.data
        });
    } else { //TODO, make reducer respective
        dispatch({
            type: REQUEST_LOAD_LIST_FAIL,
            data: response.data
        })
    }
};