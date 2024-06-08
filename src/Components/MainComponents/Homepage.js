import React from 'react'
import Results from '../Results'

const Homepage = ({searchResults}) =>{
    const tilesData = [
        {name: "Music"},
        {name: "Mixes"},
        {name: "Jukebox"},
        {name: "Live"},
        {name: "T-Series"}
    ]
    return(
        <>
    
            <div className='chips-container'>
                {
                    tilesData.map((tileData, index) =>(
                        <div className='chip' key={index}>{tileData.name}</div> 
                    ))
                }
            </div>
            <Results searchResults={searchResults}></Results>
           
        </>
    )

}

export default Homepage