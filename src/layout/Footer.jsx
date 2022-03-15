import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export function Footer() {
    const dispatch = useDispatch()
    return (
        <footer className='page-footer blue lighten-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © 2022 Copyright Text
                    <span
                        className='grey-text text-lighten-4 right'
                        href='#!'
                        onClick={() => {
                            dispatch(push('/about'))
                        }}
                    >
                        More info about application...
                    </span>
                </div>
            </div>
        </footer>
    )
}
