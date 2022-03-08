export function Card(props) {
    const { name, job } = props.props
    return (
        <div className='card'>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {name}
                </span>
                <span className='grey-text text-lighten-1'>{job}</span>
            </div>
        </div>
    )
}
