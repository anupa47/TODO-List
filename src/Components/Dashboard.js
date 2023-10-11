import React from 'react'
import "./dashboard.css"
import { useDispatch, useSelector } from 'react-redux'
import { nameChange, numberDecrement, numberIncrement } from '../store/reducers/number'
const Dashboard = () => {

    const handleClick = () => {
        document.getElementById('5').innerHTML = "You Changed Hello"
    }

    const handleClickcss = () => {
        document.getElementById("6").style.fontSize = '30px'
    }

    const num = useSelector((store) => store.number)

    const cha = useSelector((store) => store.alexa)

    const dispatch = useDispatch()

    return (
        <div>
            <div id='5'>Hello</div>
            <div>Say Hello</div>
            <div className='bulb'></div>
            <button onClick={handleClick}>Click me</button>
            <div><hr /></div>
            <div id='6'>NEXT</div>
            <button onClick={handleClickcss}>Changed font size</button>
            <div><hr /></div>
            <div><hr /></div>
            <div>{num}</div>

            <button onClick={() => dispatch(numberIncrement())}>Increment</button>
            <button onClick={() => dispatch(numberDecrement())}> Deccrement</button>
            <div><hr /></div>
            <div>{cha}</div>
            <button onClick={() => dispatch(nameChange())}>change Name</button>
        </div >
    )

}
export default Dashboard
