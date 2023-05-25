import './Tag.css'

function Tag({ value }) {
    return (
        <div className='tag'>
            <p>{value}</p>
        </div>
    )
}

export default Tag