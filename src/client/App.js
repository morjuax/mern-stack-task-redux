import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import TaskForm from "./components/TaskForm";
import {Provider} from 'react-redux';
import store from './store';
import Loading from "./components/Loading";

const App = () => (
    <Provider store={store}>
        <main>
            <Loading/>
            {/*NAVIGATION*/}
            <Navigation/>

            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div className="card">
                            <div className="card-content">
                                <TaskForm/>
                            </div>
                        </div>
                    </div>
            {/*        <div className="col s7">*/}
            {/*            <table className="">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th>#</th>*/}
            {/*                    <th>Title</th>*/}
            {/*                    <th>Description</th>*/}
            {/*                    <th>Actions</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {this.state.tasks.map((task, i) => {*/}
            {/*                    return (*/}
            {/*                        <tr key={i}>*/}
            {/*                            <td>{i + 1}</td>*/}
            {/*                            <td>{task.title}</td>*/}
            {/*                            <td>{task.description}</td>*/}
            {/*                            <td>*/}
            {/*                                <button onClick={() => this.editTask(task._id)}*/}
            {/*                                        className="btn light-blue darken-4">*/}
            {/*                                    <i className="material-icons">edit</i>*/}
            {/*                                </button>*/}
            {/*                                <button onClick={() => this.deleteTask(task._id)}*/}
            {/*                                        className="btn light-blue darken-4" style={{margin: '4px'}}>*/}
            {/*                                    <i className="material-icons">delete</i>*/}
            {/*                                </button>*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                    );*/}
            {/*                })}*/}
            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
                </div>
            </div>
        </main>
    </Provider>
);

export default App;
