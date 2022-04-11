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


        const data = [
            {
                heading: "LIVE RESULTS NOT PROMISE",
                paragraph: "Go Girl brings a quality lifestyle that makes fitness and nutrition accessible and affordable to every woman by focusing on health and power. You can meet your fitness goals and have fun to achieve mental wellness",
                other: "Go Girl offers it all!"
            },
            {
                heading: "How do you get fit with us?",
                paragraph: "We believe in the mantra, <b>\"Being fit is not a destination; It is the way of life.\"</b> We shape women in their health and fitness regime, though",
                other: [
                    "Identifying your goals &amp; expectation",
                    "Flexible plans to fit your lifestyle",
                    "Following a customised schedule",
                    "Providing extensive support",
                    "Monitoring on a weekly basis"
                ]
            },
            {
                heading: "How do we differ ?",
                paragraph: "Whatever life throws at you, whether it's societal barriers, hormonal imbalance like PCOD, pregnancy, postpartum, breastfeeding, or a tight work schedule, we understand! That's why we made India's first women-only fitness online program training only for you",
                other: [
                    {
                        "img": "http://15.206.215.237:3001/home/images/30.svg",
                        "text": "India's First Woman Only"
                    },
                    {
                        "img": "http://15.206.215.237:3001/home/images/31.svg",
                        "text": "We Understand Your Emotions"
                    },
                    {
                        "img": "http://15.206.215.237:3001/home/images/32.svg",
                        "text": "Qualified & Motivative Trainers"
                    }
                ]
            },
            {
                heading: "Testimonials",
                paragraph: "Over the past months, Go Girl has transformed countless women from all over India. Have a look about their journey and experiences here."
            }
        ]


        const [content, setContent] = useState('');
        // useEffect(() => {

        //     remote('HOME')
        //         .then(e => {
        //             // console.log(data);

        //             const data = e.blocks;

        //             const childs = () => {
        //                 return (
        //                     <>
        //                         <div>
        //                             <NavBar position="fixed" brand="GymFit" minHeight='50px' />
        //                             <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block1 content={data[0]} bheight={props.bheight} /></div>
        //                             <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block2 content={data[1]} bheight={props.bheight} /></div>
        //                             <div style={{ backgroundColor: '#FBE551', minHeight: `${props.bheight}` }}><Block3 content={data[2]} bheight={props.bheight} /></div>
        //                             <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block4 content={data[3]} bheight={props.bheight} /></div>
        //                             <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>
        //                         </div>
        //                     </>
        //                 );
        //             }
        //             setContent(childs);
        //         })
        //         .catch(err => {
        //             console.log('error occurred');
        //         });
        // }, [])




        return (
            <>
                {/* {content} */}
                <div>
                    <NavBar position="fixed" brand="GymFit" minHeight='50px' />
                    <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block1 content={data[0]} bheight={props.bheight} /></div>
                    <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block2 content={data[1]} bheight={props.bheight} /></div>
                    <div style={{ backgroundColor: '#FBE551', minHeight: `${props.bheight}` }}><Block3 content={data[2]} bheight={props.bheight} /></div>
                    <div style={{ backgroundColor: 'white', minHeight: `${props.bheight}` }}><Block4 content={data[3]} bheight={props.bheight} /></div>
                    <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>
                </div>
            </>);


    }

    return (
        <>
            <GetFromRemote />
        </>
    );
}


export default Home;