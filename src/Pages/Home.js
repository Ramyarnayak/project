import React from 'react'
import { NewsContextProvider } from "./NewsContext";
import News from "./News";
function Home() {
    return (
        <>
    
 <NewsContextProvider>
   <News/>
    </NewsContextProvider>
    </>
        
    )
}

export default Home
