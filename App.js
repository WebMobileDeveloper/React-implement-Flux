/**
 * Created by Pro on 7/19/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/actions';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
const propTypes = {};
const defaultProps = {};
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {dispatch, visibleTodos}=this.props;
        return (
            <div>App</div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;

