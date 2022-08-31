import { useState } from 'react'
import projects from '../styles/Projects.module.css'

function Projects(){

    const [hover, setHover] = useState(false)

    return <div className={projects.main} >

        <h1 className={projects.title}>PROJECTS</h1>

        <a className={`${projects.project} ${projects.project_1}`} href="https://stravita.surge.sh/" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
            <div className={projects.container} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
                {!hover && <div> 
                    <p className={projects.description}><text className={projects.bold}>Stravita</text>, clone from strava.</p>
                    <p className={projects.description}>It&apos;s a social media web aplication (mobile first) designed for register and share sport activities.</p>
                    <p className={projects.description}>Users can track their activities with the main focus on the elevation gain, and distance.</p>
                    <p className={projects.description}>The application shows some data in real time like altitude, distance, time, weather and map including the track registered.</p>
                </div> }
                {hover && <div> 
                    <p className={projects.description}><text className={projects.bold}>Front-end</text> made with HTML, SASS, Javascript, React, Express.</p>
                    <p className={projects.description}><text className={projects.bold}>Back-end</text> made with Javascript, NodeJS, MongoDB.</p>
                    <p className={projects.description}>Tested with Mocha - Chai</p>
                    <p className={projects.description}>Deployed with Surge, Heroku and MongoDB-Atlas</p>
                </div> }
                    <p className={projects.description}><text className={projects.bold}>Checkout GitHub</text> repositorie for more information.</p>
                    <text className={projects.description_test}>Username: </text>
                    <text className={`${projects.description_test} ${projects.bold2}`}> test</text>
                    <text className={projects.description_test}>Password: </text>
                    <text className={`${projects.description_test} ${projects.bold2}`}> 00004444</text>
            </div>       
        </a>

        <a className={`${projects.project} ${projects.project_2}`} href="https://eggtimer-app.surge.sh/" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
            <div className={projects.container}>
                <p className={projects.description}><text className={projects.bold}>Egg Timer</text>, web application that helps you boil eggs at the specific and perfect point for each one.</p>
                <p className={projects.description}>There is a countdown timer and some pictures to help you know how cooked your eggs are at that specific time.</p>
                <p className={projects.description}>The timer is set to user preference and an alarm sounds when it reaches the end.</p>
                <p className={projects.description}></p>
                <p className={projects.description}><text className={projects.bold}>Actually working, testing and learning!</text></p>
            </div>       
        </a>

        <a className={`${projects.project} ${projects.project_3}`} href="https://weather-time.surge.sh/" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
            <div className={projects.container}>
                <p className={projects.description}><text className={projects.bold}>Weather App</text>, web application that gives you the weather at that specific time from anywhere in the world.</p>
                <p className={projects.description}>Weather can be found by searching by name, using the location device, or by clicking anywhere on the map.</p>
                <p className={projects.description}>There is a button to show and hide the map, the coordinates of the point and its altitude are also displayed on the map.</p>
                <p className={projects.description}></p>
                <p className={projects.description}><text className={projects.bold}>Checkout GitHub</text> repositorie for more information.</p>
            </div>       
        </a>
   
    </div>
} 

export default Projects