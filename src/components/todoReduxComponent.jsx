import React from 'react'
import counterSlice from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux';

const actions = counterSlice.actions;

function TodoReduxComponent() {

    const count = useSelector((store) => {
        return store.counterState.count;
    })

    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(actions.decrement())
    }

    const handleIncrement = () => {
        dispatch(actions.increment())
    }

    return (
        <div className="counter">
            <button onClick={handleIncrement}>+</button>
            <p>{count}</p>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default TodoReduxComponent

