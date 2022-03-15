import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export function Header() {
    const dispatch = useDispatch()
    return (
        <nav>
            <div className='nav-wrapper blue lighten-3'>
                <span
                    className='grey-text text-lighten-4 right more-info'
                    onClick={() => {
                        dispatch(push('/about'))
                    }}
                >
                    More info about application
                </span>
                <a
                    href='https://github.com/AlisaKravchenko/project-jobs-react-redux-saga'
                    className='brand-logo right'
                >
                    Repo
                </a>
            </div>
        </nav>
    )
}
