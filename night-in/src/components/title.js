import React from "react"

function Title(){
    return(
    <div className="title">
        <h2>
        Time for a... <span className="underline" id="cycleText">NightIn?</span>
        </h2>
        <div>
        <script src="./titleCycle.js"></script>
        <div className="button-container">
            <button className="side-button"></button>
            <button className="match-button">Let's Match.</button>
            <button className="side-button"></button>
        </div>
        </div>
    </div>
    )
}

export default Title