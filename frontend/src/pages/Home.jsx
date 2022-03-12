import { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Block1 from "../layouts/home/Block1";
import Block2 from "../layouts/home/Block2";
import Block3 from "../layouts/home/Block3";
import Block4 from "../layouts/home/Block4";

function Home(props) {
    


    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />
                <div style={{ backgroundColor: 'white', height: `${props.bheight}`}}><Block1 bheight={props.bheight} /></div>
                <div style={{ backgroundColor: 'white', height: `${props. bheight}`}}><Block2 bheight={props.bheight} /></div>
                <div style={{ backgroundColor: '#FBE551', height: `${props. bheight}`}}><Block3 bheight={props.bheight} /></div>
                <div style={{ backgroundColor: 'white', height: `${props.bheight}`}}><Block4 bheight={props.bheight} /></div>
            </div>
        </>
    );
}

export default Home;