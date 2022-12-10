import React, { useEffect } from "react";
import AllCards from "./AllCards";
import CarouselBody from "./CarouselBody";

const Home = () =>{

    useEffect(() => {
        document.title="Home"
    }, [])

    return(
        <div>
            <CarouselBody />
            <AllCards />
        </div>
    )
}

export default Home;