import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import TaskForm from "./components/TaskForm";
import {Provider} from 'react-redux';
import store from './store';
import Loading from "./components/Loading";
import TaskList from "./components/TaskLists";

const App = () => (
    <Provider store={store}>
        <main>
            <Loading/>
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
                    <div className="col s7">
                        <TaskList/>
                    </div>
                </div>
            </div>
        </main>
    </Provider>
);

export default App;
