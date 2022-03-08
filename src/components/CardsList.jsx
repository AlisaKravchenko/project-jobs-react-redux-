import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSetWorkers } from '../redux/workersSlice'
import { Card } from './Card'

export function CardsList() {
    const visibleJobs = useSelector((state) => state.workers.visibleJobs)
    const workers = useSelector((state) => state.workers.workers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncSetWorkers())
    }, [dispatch])
    return (
        <div className='col s8 m8 l9 xl10 cards-list'>
            {visibleJobs.length
                ? visibleJobs.map((el) => <Card props={el} key={el.id} />)
                : workers.map((el) => <Card props={el} key={el.id} />)}
        </div>
    )
}
