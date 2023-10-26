import React from 'react'
import Axios from 'axios'
import { useState } from "react";
import './index.css'

const KEY ="c30c3866d74454fba2b423d4a66862fa"



const App = () => {

    const [city,setCity] = useState("");
    const [data,setDate] = useState("");
  
    const fetchData = async() => {
        try {
            const response = await Axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
            console.log(response.data);
            setDate(response.data);
        }
        catch(error){
            alert ("Please Enter the City Name")
        }
    }
  return (
    <div className="app-container">
        <div className="container">
            <div className="heading">
            <h1 className="title">Weather Condition</h1>
            </div>

           
<div className="head">

<input type="text" 
                   placeholder="Enter the City Name" 
                   value={city}
                   onChange={e => setCity(e.target.value)}
                   className="input"
            />

            <button onClick={fetchData} className="btn">Get Weather</button>

</div>
            

            

        </div>




        

       <div>
        {data && (
            <div>
                
                
            
           
                <div className="box-container">
                
                <div className="upper">
                <h1 className="city" style={{display:'block'}}>{data.name}</h1>
                
                <img src="https://cdn-icons-png.flaticon.com/512/10127/10127236.png" alt="weather" width={100} height={100} className="png" />
                    {/* <div className="box"> */}
                    <p>Humidity</p>
                    <h1>{Math.round(data.main.humidity)}</h1>
                {/* </div> */}

                {/* <div className="box"> */}
                    <p>Weather</p>
                    <h1>{data.weather[0].main}</h1>
                {/* </div> */}
                </div>
                

                <div className="boxes">
                <div className="box">
                    <p>Tempture</p>
                    <h1>{Math.round(data.wind.deg)}°C</h1>
                </div>

                <div className="box">
                    <p>Wind Speed</p>
                    <h1>{data.wind.speed}</h1>
                </div>

                <div className="box">
                    <p>Latitude</p>
                    <h1>{Math.round(data.coord.lat)}</h1>
                </div>

                <div className="box">
                    <p>Longitude</p>
                    <h1>{Math.round(data.coord.lon)}</h1>
                </div>
                </div>

                
            </div> 
            </div>
            
        )}
      </div>
    </div>
  );
};
 export default App

