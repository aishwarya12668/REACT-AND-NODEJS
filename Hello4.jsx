function Hello4({person}) {

    return (
        <div>
            <h1>
                Hi {person.name} {person.Message}
                Seats: {person.SeatNumbers.join(", ")}
            </h1>
        </div>
    )
}

export default Hello4