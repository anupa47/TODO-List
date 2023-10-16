import React from 'react'
import "./dashboard.css"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, numberSliceSelector } from '../store/reducers/numberSlice'
import LaptopComponent from './LaptopComponent'


const Dashboard = () => {

    // const num = useSelector(numberSliceSelector)
    // const num = useSelector((store) => store.numberSlice)
    const num = useSelector(numberSliceSelector)
    console.log(num)
    const dispatch = useDispatch()

    return (
        <div>
            {/* <div><h1>{num.number}</h1></div> */}
            <div><h1>{num.number}</h1></div>
            <div>Hey</div>
            <button onClick={() => dispatch(increment(2))}>INCREMENT</button>
            <button onClick={() => dispatch(decrement(5))}>DECREMENT</button>
            <div><hr /></div>
            <div><LaptopComponent /></div>
       <div>now</div>
        </div >
    )

}
export default Dashboard
