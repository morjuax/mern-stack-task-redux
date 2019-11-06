import axios from 'axios';

export const handleInput = (e) => {
    return (dispatch) =>
        dispatch({
            type: "HANDLE_INPUT",
            e
        })
};

export const addTask = (e) => {
    return async (dispatch, getState) => {
        // console.log(getState);
        const {
            form
        } = getState();

        dispatch({
            type: "REQUEST_LOAD",
            e,
            loading: true,
            form
        });
        let response = await axios.post('/api/tasks', form);
        if (response.data.status) {
            dispatch({
                type: 'REQUEST_LOAD_SUCCESS',
                data: response.data
            })
        }

        // let response = await axios.post('/api/tasks', form);
        // if (response.data.status) {
        //     dispatch(saveNewTaskState)
        // }
    };
};

//
// const mapDispatchToProps = (dispatch, getState) => ({
//     handleInput(e) {
//         dispatch({
//             type: "HANDLE_INPUT",
//             e
//         })
//     },
//     addTask(e) {
//         dispatch({
//             type: "ADD_TASK",
//             e
//         })
//     }
// });


// export const saveNewTaskState = (response) => {
//     M.toast({html: response.data.message})
// };