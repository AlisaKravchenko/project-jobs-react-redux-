import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'

export function WorkerInfo() {
    const workers = useSelector((state) => state.workers.workers)
    const pathname = useSelector((state) => state.router.location.pathname)
    const param = pathname.split('/')[2]
    const person = workers.filter((el) => el.name === param)[0]
    const dispatch = useDispatch()
    return (
        <div className='info'>
            <h2>Info</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td className='infostr'>{person && person.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td className='infostr'>{person && person.email}</td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td className='infostr'>
                            {person && person.companyName}
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td className='infostr'>{person && person.address}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td className='infostr'>{person && person.phone}</td>
                    </tr>
                    <tr>
                        <td>Job</td>
                        <td className='infostr'>{person && person.job}</td>
                    </tr>
                    <tr>
                        <td>About</td>
                        <td className='infostr'>{person && person.about}</td>
                    </tr>
                </tbody>
            </table>
            <button className='btn' onClick={() => dispatch(push('/'))}>
                back
            </button>
        </div>
    )
}
