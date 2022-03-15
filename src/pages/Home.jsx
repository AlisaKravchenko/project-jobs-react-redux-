import { CardsList } from '../components/CardsList'
import { JobsList } from '../components/JobsList'

export function Home() {
    return (
        <div className='main row'>
            <div className='col s4 m4 l3 xl2'>
                <JobsList />
            </div>
            <div className='workers-list'>
                <CardsList />
            </div>
        </div>
    )
}
