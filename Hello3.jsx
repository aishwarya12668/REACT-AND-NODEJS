function Hello3() {
    const person ={
        name:"Ramya",
        Message:"hi",
        SeatNumbers:[1,2,4]
    }
    return (
        <div className="Hello3">
            <hello person={person}/>
        </div>
    )
}

export default Hello3;