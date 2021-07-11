import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { GoPlus } from 'react-icons/go';
import { motion } from 'framer-motion';

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const add = () => {
        if (todo === '') {
            alert('Input is Empty');
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    }

    return (
        <div className="addTodos">
            <input type="text" className="todo-input" onChange={(e) => handleChange(e)} value={todo} />
            <motion.button
                className="add-btn"
                onClick={() => add()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <GoPlus />
            </motion.button>
            <br></br>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);