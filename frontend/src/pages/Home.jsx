import { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Block1 from "../layouts/home/Block1";

function Home(props) {
    


    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />
                <div style={{ backgroundColor: 'white', height: `${props.bheight}`}}><Block1 bheight={props.bheight} /></div>
                <div style={{ backgroundColor: 'yellow', height: `${props. bheight}`, fontSize: '100px' }}>Text here</div>
                <div style={{ backgroundColor: 'white', height: `${props.bheight}`, fontSize: '100px' }}>Text here</div>
                <div style={{ backgroundColor: 'yellow', height: `${props.bheight}`, fontSize: '100px' }}>Text here</div>

            </div>
        </>
    );
}

export default Home;