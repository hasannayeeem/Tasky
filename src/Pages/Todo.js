import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addTodo, deleteTodo, removeTodo, updateTodo } from './store/actions/actionTypes';

const Todo = () => {


    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.TodoReducer.list);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        // list.map((elem) => {
        //     if (e.target.checked) {
        //         console.log(list);
        //     }

        // })
    }
// time Refresh 
// function timedRefresh(timeoutPeriod) {
//     setTimeout("location.reload(true);", timeoutPeriod);
// }
// handlekeyDown

// handlekeyDown
const handleKeyDown = (event) => {
    let value = event.target.value
    const data = { value }
    if (event.key === 'Enter') {
        // send data to the server
        fetch('https://tasky-tool.herokuapp.com/todos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                dispatch(addTodo(inputData), setInputData(''))
            })
        // window.onload = timedRefresh(1000)
        
    }
    value= '';
}

    return (
        <>
            <div className='main-div bg-gradient-to-r from-secondary to-primary min-h-screen '>
                <div className="child-div ">
                    <figure className='py-8 text-2xl font-bold'>
                        <figcaption> Add Your Task Here </figcaption>
                    </figure>
 
                    <div className="addItems flex justify-center">
                   
                        <input type="text" placeholder='Add Items...' class="input input-bordered input-secondary w-full max-w-xs"
                            value={inputData}
                            onKeyDown={handleKeyDown}
                            onChange={(event) => setInputData(event.target.value)}
                            
                        />
                        <button type='submit' className="bg-white text-2xl py-2 rounded-lg px-4" onClick={() => dispatch(addTodo(inputData),
                            setInputData(''))}><FontAwesomeIcon icon={faPlus}
                            ></FontAwesomeIcon>Add</button>
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem flex justify-center" key={elem.id}>
                                        <input type="checkbox" name="task" id="task" onClick={handleClick} />
                                        <h3 className='mx-8' >{elem.data}</h3>
                                        <div className="todo-btn mr-2">
                                            <FontAwesomeIcon icon={faPencil} title="upDate Task" onClick={() => dispatch(updateTodo(elem.id))}></FontAwesomeIcon>
                                        </div>
                                        <div className="todo-btn">
                                            <FontAwesomeIcon icon={faTrash} title="Delete Task" onClick={() => dispatch(deleteTodo(elem.id))}></FontAwesomeIcon>
                                        </div>

                                    </div>
                                )

                            })
                        }


                    </div>

                    <div>
                        <button class="btn btn-xs pb-6 pt-4 inline-block mt-8 w-96" onClick={() => dispatch(removeTodo())}>Remove list</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Todo;