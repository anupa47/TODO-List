import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLaptop } from '../store/reducers/laptopSlice'

const LaptopComponent = () => {

    const laptop = useSelector((store) => store.laptopSlice)

    const dispatch = useDispatch()

    const price = useRef()
    const cpu = useRef()
    const gen = useRef()
    const ram = useRef()
    const hdd = useRef()

    const addLaptopHandle = () => {
        dispatch(addLaptop(
            price.current.value,
            cpu.current.value,
            gen.current.value,
            ram.current.value,
            hdd.current.value
        ))
    }

    return (
        <div>
            <div>{laptop.map((ele, index) => (
                <div key={index}>
                    <div>id = {ele.id}</div>
                    <div>price = {ele.price}</div>
                    <div>cpu = {ele.spec.cpu}</div>
                    <div>gen = {ele.spec.gen}</div>
                    <div>ram = {ele.spec.ram}</div>
                    <div>hdd = {ele.spec.hdd}</div>
                    <div><hr /></div>
                </div>
            ))}
            </div>
            <div><hr /></div>
            <div>
                <input ref={price} type='text' placeholder='price' />
                <input ref={cpu} type='text' placeholder='cpu' />
                <input ref={gen} type='text' placeholder='gen' />
                <input ref={ram} type='text' placeholder='ram' />
                <input ref={hdd} type='text' placeholder='hdd' />
            </div>
            <button onClick={addLaptopHandle}>Submit</button>
        </div>
    )
}

export default LaptopComponent