export default function Fruits(){
    const fruits = ["orange", "banana", "apple", "pineapple"]
    return <div>
        <ul>
            {fruits.map(fruit=>
                <li key={fruit}>{fruit}</li>
            )}
        </ul>
    </div>
}