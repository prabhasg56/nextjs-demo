'use client'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter/counter-slice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='flex justify-center mt-10 '>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment 
        </button>
        <span className='px-6'>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;