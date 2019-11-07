import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions'

const TaskForm = ({form, handleInput, addTask}) => (
    <form
        onSubmit={addTask}
    >
        <div className="row">
            <div className="input-field col s12">
                <input name="title" type="text" placeholder='Task Title'
                       onChange={handleInput}
                        value={form.title}
                />
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                                                <textarea name="description" className="materialize-textarea"
                                                          placeholder='Task Description'
                                                          onChange={handleInput}
                                                     value={form.description}
                                                ></textarea>
            </div>
        </div>
        <button type="submit" className="btn light-blue darken-4">
            Send
        </button>
    </form>
);

const mapStateToProps = state => ({
    form: state.form
});

// const mapDispatchToProps = dispatch => ({
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

export default connect(mapStateToProps, actionCreators)(TaskForm);