import React from 'react'

const App = () => {
  return (
    <div>

      <div className="container">

        <h1>BMI Calculator</h1>

        {/* Height */}
        <label htmlFor="height">Height (cm)</label>
        <input type="number" id='height' placeholder="e.g. 170" />

        {/* Weight */}
        <label htmlFor="weight">Weight (kg)</label>
        <input type="number" id='weight' placeholder="e.g. 65" />

        {/* Button */}
        <button>Calculate</button>

        {/* Result */}
        <div className="result">This is a test for result</div>

        {/*  */}

      </div>

    </div>
  )
}

export default App 