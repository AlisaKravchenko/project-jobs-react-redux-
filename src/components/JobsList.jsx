import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Job } from './Job'
import { useDispatch } from 'react-redux'
import { asyncSetJobs } from '../redux/jobsSlice'

export function JobsList(props) {
    const jobs = useSelector((state) => state.jobs.jobs)
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        // console.log(asyncSetJobs())
        dispatch(asyncSetJobs())
    }, [])

    return (
        <div className='jobs'>
            <div className='jobs-search-wrap'>
                <input
                    type='search'
                    placeholder='search...'
                    className='jobs-search'
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </div>
            <ul className='jobs-list'>
                {jobs.map(
                    (job) =>
                        job.jobId &&
                        job.title
                            .toLowerCase()
                            .includes(search.toLowerCase()) && (
                            <Job job={job} key={job.jobId} />
                        )
                )}
            </ul>
        </div>
    )
}
