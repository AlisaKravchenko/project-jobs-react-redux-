import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export function Card(props) {
    const { name, job } = props.props
    const dispatch = useDispatch()
    return (
        <div
            className='card'
            onClick={() => dispatch(push(`workerinfo/${name}`))}
        >
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {name}
                </span>
                <span className='grey-text text-lighten-1'>{job}</span>
                {/* <Link to='{./workerinfo/:index}'></Link> */}
            </div>
        </div>
    )
}
