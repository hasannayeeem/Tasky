import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useState } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../../../store/actions/actionTypes';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.TodoReducer.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className="child-div">
                    <figure>
                        <figcaption> Add Your List Here </figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder='add Items...'
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <FontAwesomeIcon icon={faPlus} onClick={() => dispatch(addTodo(inputData),
                            setInputData(''))}></FontAwesomeIcon>
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className="todo-btn">
                                            <FontAwesomeIcon icon={faTrash} title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></FontAwesomeIcon>
                                        </div>
                                        
                                    </div>
                                )

                            })
                        }


                    </div>

                        <div>
                            <button onClick={() => dispatch(removeTodo())}>Remove list</button>
                        </div>

                </div>
            </div>
        </>
    );
};

export default Todo;