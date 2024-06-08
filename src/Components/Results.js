import React from 'react'

const Results = ({searchResults}) =>{
    return(
        
        <div className='results-container'>
            {
                searchResults && (
                    <>
                        <ul>
                            {searchResults.items.map((item, index) => (
                                <li key={index}>
                                    <div className='results-image'>
                                        <img width='200px' alt={item.snippet.description} src={item.snippet.thumbnails.high.url}/>
                                    </div>
                                    <div className='results-data'>
                                        <p> Description: {item.snippet.description} </p>
                                        <p> Channel: {item.snippet.channelTitle} </p>
                                        <p> Time: {item.snippet.publishTime} </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )
            }
        </div>
    )
}

export default Results