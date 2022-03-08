import { useDispatch } from 'react-redux'
import { selectJob } from '../redux/workersSlice'

export function Job(props) {
    const dispatch = useDispatch()
    const { job } = props
    return (
        <li>
            <button
                className='job-btn'
                data-job={job.title}
                onClick={(e) => {
                    dispatch(selectJob(e.target.dataset.job))
                }}
            >
                {job.title}
            </button>
        </li>
    )
}
