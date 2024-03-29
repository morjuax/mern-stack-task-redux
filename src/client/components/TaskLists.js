import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchTasks, deleteTask, editTask} from '../actions'

const TaskList = ({tasks, fetchTasks, deleteTask, editTask}) => {

    useEffect(() => {
        fetchTasks(); //equivalent to componentDidMount
    }, []);
    return (
        <section>
            <table className="">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <button
                                    onClick={() => editTask(task._id)}
                                    className="btn light-blue darken-4">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button
                                    onClick={() => deleteTask(task._id)}
                                    className="btn light-blue darken-4" style={{margin: '4px'}}>
                                    <i className="material-icons">delete</i>
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </section>
    );
};

const mapStateToProps = state => ({
    tasks: state.tasks
});

const mapDispatchToProps = {fetchTasks, deleteTask, editTask};


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);