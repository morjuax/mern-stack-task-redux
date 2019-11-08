import axios from 'axios';

// fetch tasks
export const [REQUEST_LIST_LOAD, REQUEST_LOAD_LIST_SUCCESS, REQUEST_LOAD_LIST_FAIL] =
    [`REQUEST_LIST_LOAD`, `REQUEST_LOAD_LIST_SUCCESS`, `REQUEST_LOAD_LIST_FAIL`];

//FORM TYPE
export const [REQUEST_LOAD, REQUEST_LOAD_SUCCESS, REQUEST_LOAD_FAIL] =
    [
        `REQUEST_LOAD`,
        `REQUEST_LOAD_SUCCESS`,
        `REQUEST_LOAD_FAIL`
    ];

//DELETE TASKS
export const [REQUEST_DELETE_LOAD_SUCCESS, REQUEST_DELETE_LOAD_FAIL] =
    [
        `REQUEST__DELETE_LOAD_SUCCESS`,
        `REQUEST_DELETE_LOAD_FAIL`
    ];
export const [REQUEST_EDIT_LOAD_SUCCESS, REQUEST_EDIT_LOAD_FAIL] =
    [`REQUEST_EDIT_LOAD_SUCCESS`, `REQUEST_EDIT_LOAD_FAIL`];

export const handleInput = (e) => {
    return (dispatch) =>
        dispatch({
            type: "HANDLE_INPUT",
            e
        })
};


export const fetchTasks = () => {
    return async (dispatch) => {
        await dispatchRequestListLoad(dispatch);
    }
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
        });
        let response = undefined;
        if (form._id) {
            response = await axios.put(`/api/tasks/${form._id}`, form);
        } else {
            response = await axios.post('/api/tasks', form);
        }

        if (response.data.status) {
            dispatch({
                type: REQUEST_LOAD_SUCCESS,
                data: response.data
            });
            await dispatchRequestListLoad(dispatch);
        } else { //TODO, make reducer respective;
            dispatch({
                type: REQUEST_LOAD_FAIL,
                data: response.data
            });
        }
    };
};

export const deleteTask = (id) => {
    return async (dispatch) => {
        dispatch({
            type: REQUEST_LOAD,
            loading: true,
        });

        let response = await axios.delete(`/api/tasks/${id}`);
        if (response.data.status) {
            dispatch({
                type: REQUEST_DELETE_LOAD_SUCCESS,
                data: response.data
            });
            await dispatchRequestListLoad(dispatch);
        } else { //TODO, make reducer respective;
            dispatch({
                type: REQUEST_DELETE_LOAD_FAIL,
                data: response.data
            });
        }
    }
};

export const editTask = (id) => {
    return async (dispatch) => {
        dispatch({
            type: REQUEST_LOAD,
            loading: true,
        });
        let response = await axios.get(`/api/tasks/${id}`);

        if (response.data.status) {
            dispatch({
                type: REQUEST_EDIT_LOAD_SUCCESS,
                task: response.data.data
            });
        } else {
            dispatch({
                type: REQUEST_EDIT_LOAD_FAIL,
                data: response.data
            });
        }


    }
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