import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export function About() {
    const dispatch = useDispatch()
    return (
        <>
            <h2>Usaged:</h2>
            <ul className='usaged'>
                <li>react</li>
                <li>redux</li>
                <li>react-redux</li>
                <li>react-router</li>
                <li>react-router-dom</li>
                <li>connected-react-router</li>
                <li>redux-saga</li>
            </ul>
            <button
                className='btn usaged-btn'
                onClick={() => dispatch(push('/'))}
            >
                back
            </button>
        </>
    )
}
