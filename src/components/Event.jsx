
function Event(props) {

    return (
        <>
            <h2>Concert</h2>
            <h3>{props.artist}</h3>
            <div className="date">
                {
                    props.date.map(date => {
                        return (
                            <>
                                <br />
                                <p>{date}</p>
                                <p>{props.time}</p>
                            </>
                        )
                    })
                }
                <br />
            </div>
        </>
    )
}

export default Event;