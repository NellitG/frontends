import './intel.css'

const Calculator = () => {




    return (
        <>
  <div className="header" >
  <h1>Concrete Hub Estimate Calculator</h1>

  <form id="calculatorForm" />
    <label htmlFor="acres">Number of Acres:</label>
    <input type="number" id="acres" required />

    <label htmlFor="interval">Interval between posts in Meters:</label>
    <input type="number" id="interval" required />

    <label htmlFor="corners">Number of corners on your land:</label>
    <input type="number" id="corners" required />

    <label htmlFor="barbedWire">Lines of barbed wire:</label>
    <input type="number" id="barbedWire" required />

    <label htmlFor="transportDistance">Transport - Distance from Nbi to destination in Kilometer:</label>
    <input type="number" id="transportDistance" required />

    <label htmlFor="postWeight">Weight of the posts:</label>
    <input type="number" id="postWeight" required />

    <label htmlFor="peopleOffload">Number of people to off-load posts:</label>
    <input type="number" id="peopleOffload" required />

    <label htmlFor="postCost">Cost per post:</label>
    <input type="number" id="postCost" required />

    <label htmlFor="barbedWireCost">Cost per meter of barbed wire:</label>
    <input type="number" id="barbedWireCost" required />

    <label htmlFor="uNailsCost">Cost per KG of U-nails:</label>
    <input type="number" id="uNailsCost" required />

    <label htmlFor="straightNailsCost">Cost per KG of  Straight nails:</label>
    <input type="number" id="straightNailsCost" required />

    <input type="submit" value="Calculate" />
    
    
  <h2>The answer is:</h2>
  <p>Total area of your land in m2: <span id="totalArea">0</span></p>
  <p>Length of one side of your land: <span id="sideLength">0</span></p>
  <p>Perimeter of your land: <span id="perimeter">0</span></p>
  <p>No of upright posts: <span id="uprightPosts">NAN</span></p>
  <p>Intermediate brace posts: <span id="intermediateBrace">0</span></p>
  <p>Corner Brace posts: <span id="cornerBrace">0</span></p>
  <p>Total number of posts: <span id="totalPosts">NAN</span></p>
  <p>Total cost of posts: <span id="totalCost"></span></p>
  <p>Barbed wire: <span id="barbedWireEstimate">0</span></p>
  <p>Chain-link: <span id="chainLink">0</span></p>
  <p>U-nails in KG: <span id="uNails">NAN</span></p>
  <p>Straight nails for corner & braced posts in KG: <span id="straightNails">0</span></p>
  <input type="submit" value="Order now" />

  </div>

  </>

    )
}

export default Calculator
