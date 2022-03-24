import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import Block1 from "../layouts/home/Block1";
import Block2 from "../layouts/home/Block2";
import Block3 from "../layouts/home/Block3";
import Block4 from "../layouts/home/Block4";

import remote from "../modules/remote";

function Home(props) {
    useEffect(() => {

    }, [])




    function GetFromRemote() {

        const [content, setContent] = useState('');
        useEffect(() => {

            remote.getContent('HOME')
                .then(e => {
                    // console.log(data);

                    const data = e.blocks;

                    const childs = () => {
                        return (
                            <>
                                <div>
                                    <NavBar position="fixed" brand="GymFit" minHeight='50px' />
                                    <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block1 content={data[0]} bheight={props.bheight} /></div>
                                    <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block2 content={data[1]} bheight={props.bheight} /></div>
                                    <div style={{ backgroundColor: '#FBE551', minHeight: `${props.bheight}` }}><Block3 content={data[2]} bheight={props.bheight} /></div>
                                    <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block4 content={data[3]} bheight={props.bheight} /></div>
                                    <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>
                                </div>
                            </>
                        );
                    }
                    setContent(childs);
                })
                .catch(err => {
                    console.log('error occurred');
                });
        }, [])




        return (
            <>
                {content}
            </>);


    }

    return (
        <>
            <GetFromRemote />
        </>
    );
}


export default Home;