import React from "react";

const Dashboard = () => {

    const a = 3
    const b = 4
    console.log(a + b)

    const c = "anupa"

    return (
        <div>
            <div>
                <h1>{a + b}</h1>
                <h1>{a * b}</h1>
                <h1>{a / b}</h1>
                <h1>{a % b}</h1>
                <h1>{a ** b}</h1>
            </div>
            <h3>{a + c}</h3>
        </div>

    )

}

export default Dashboard