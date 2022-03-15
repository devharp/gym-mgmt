import { useState } from "react";

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Button } from '@mui/material/';


import img00 from '../assets/becomeacoach/00.svg';
import img01 from '../assets/becomeacoach/01.svg';
import img02 from '../assets/becomeacoach/02.svg';


function BecomeACoach(props) {
    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />

                <div className="w-100 d-block position-absolute" style={{ backgroundColor: 'none' }}>

                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: '100%' }}>
                        <Desktop className='w-100 flex-grow-1 d-flex flex-column' bheight={props.bheight} />
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                        <Mobile className='flex-grow-1' bheight={props.bheight} style={{ height: '100%', width: '100vw' }} />
                    </Box>
                    <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>
                </div>

            </div>
        </>
    );
}

function Desktop(props) {

    function Block1() {
        function BackgroundImages() {
            return (
                <div className="position-absolute p-0" style={{ top: `calc(152/1080 * ${props.bheight})`, right: '0px', overflow: 'hidden' }}>

                    <img src={img00} alt="" style={{
                        position: 'relative',
                        height: `calc(901/1080 * ${props.bheight})`,
                        width: `calc(901/1080 * ${props.bheight} * 1094/901)`,
                        left: `calc(50/1920 * 100vw)`
                    }}
                    />
                </div>
            );
        }

        function FrontContent() {
            return (
                <div className="position-absolute" style={{ top: `calc(200/1080 * ${props.bheight})`, left: `calc(324.5/1920 * 100vw)`, height: '100%' }}>

                    <div className='position-relative' style={{ fontSize: `calc(48/1080 * ${props.bheight})`, letterSpacing: `calc(14.4/1080 * ${props.bheight})` }}>WORK WITH US</div>
                    <div className='position-relative my-3' >
                        <div style={{ height: '1px', width: `calc(506/1080 * ${props.bheight})`, backgroundColor: '#04C7F4' }}></div>
                    </div>
                    <div className='position-relative my-3' style={{ fontSize: `calc(32/1080 * ${props.bheight})`, fontWeight: '500', color: '#04C7F4' }}>
                        <div>Grab an opportunity to become an</div>
                        <div>expert coach at Go Girl!</div>
                    </div>
                    <div className='position-relative my-3' style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>
                        <div>Over the past decade, health &amp; fitness has</div>
                        <div>grown tremendously and are anticipated to</div>
                        <div>become a major job creator in the service</div>
                        <div>industry. It complements our vision of</div>
                        <div>creating 100,000 jobs in the fitness</div>
                        <div>industry and becoming a household name</div>
                        <div>for all things fitness!</div>
                    </div>
                    <div className='position-relative my-3' style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>
                        <div>Are you ready to discover the path to</div>
                        <div>becoming a Go Girl Coach?</div>
                    </div>
                </div>
            );
        }

        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }
    function Block2() {
        function BackgroundImages() {
            return (
                <div className="position-absolute" style={{right: '0'}}>
                    <img className='position-relative' src={img01} style={{top: `calc(198/1080 * ${props.bheight})`, height: `calc(760/1080 * ${props.bheight})`, width: `calc(760/1920 * 100vw * 1613/760)`}} alt="" />
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="pt-5 position-absolute d-flex flex-column align-items-center" style={{left: `calc(763/1920 * 100vw)`}}>
                    <div className='my-5' style={{ fontWeight: '500', fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`}}>We Achieve this by Offering:</div>
                    <div className='d-flex flex-column align-items-center' style={{fontSize: `calc(28/1080 * ${props.bheight})`}}>
                        <div style={{ whiteSpace: 'nowrap' }}>With Go Girl, You have a lot of flexibility in terms of your</div>
                        <div style={{ whiteSpace: 'nowrap' }}>work schedule and timing. We let you communicate</div>
                        <div style={{ whiteSpace: 'nowrap' }}>directly with your clients and fix the timings that work for</div>
                        <div style={{ whiteSpace: 'nowrap' }}>you both. In addition, you won't face any peer pressure at</div>
                        <div style={{ whiteSpace: 'nowrap' }}>Go Girl so that you will have a fun and self-motivated work</div>
                        <div style={{ whiteSpace: 'nowrap' }}>environment.</div>
                    </div>
                </div>
            );
        }
        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }
    function Block3() {
        function BackgroundImages() {
            return (
                <div className="position-absolute">
                    {/* Desktop View1gmkdfk */}
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute d-flex flex-row align-items-center" style={{ width: '100%', height: props.bheight }}>
                    <img src={img02} style={{ width: `calc(985/1920 * 100vw)`, height: `calc(560/1080 * ${props.bheight})` }} alt="" />
                    <div className="d-flex flex-column align-items-center flex-grow-1">
                        <div className="mb-5" style={{
                            fontSize: `calc(36/1080 * ${props.bheight})`, 
                            letterSpacing: `calc(3.6/1080 * ${props.bheight})`,
                            fontWeight: '500'    
                        }}>Exposure to a Range of People</div>
                        <div className="d-flex flex-column align-items-center" style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>
                            <div>You can get the freedom to explore</div>
                            <div>yourself as an independent coach.</div>
                            <div>Also, you&apos;ll get the opportunity to work</div>
                            <div>along with industry experts,</div>
                            <div>nutritionists, and skilled trainers. You</div>
                            <div>can always avail of guidance and</div>
                            <div>support from experienced trainers.</div>
                            <div>Thus Go Girl works on you to make</div>
                            <div>you more proficient.</div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }
    function Block4() {
        function BackgroundImages() {
            return (
                <div className="position-absolute">
                    Desktop View1gmkdfk
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute">
                    Desktop View0
                </div>
            );
        }
        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }

    return (
        <div className={props.className} style={props.style}>
            <div className="" style={{ height: props.bheight }}>
                <Block1 />
            </div>
            <div className="" style={{ height: props.bheight, backgroundColor: '#FBE551' }}>
                <Block2 />
            </div>
            <div className="bg-info" style={{ height: props.bheight }}>
                <Block3 />

            </div>
            <div className="bg-danger1" style={{ height: props.bheight }}>
                <Block4 />

            </div>
        </div>
    );

}

function Mobile(props) {
    function Block1() {
        function BackgroundImages() {
            const h = '554'
            const w = '690'
            const h2 = '150'
            const w2 = '100'
            return (
                <>
                    <div className="position-absolute" style={{ width: '100vw', height: `calc(380/1080 * ${props.bheight})`, backgroundColor: '#FBE551' }}></div>
                    <div className="position-absolute" style={{ width: '100vw', overflow: 'hidden' }}>
                        <img className='' src={img00} alt="" style={{ height: `calc(${h}/1080 * ${props.bheight})`, maxWidth: '100vw', width: `calc(${h}/1080 * ${props.bheight} * ${w}/${h})` }} />
                    </div>
                    <div className="position-absolute d-none" style={{
                        width: `calc(${h2}/1080 * ${props.bheight} * ${w2}/${h2})`,
                        height: `calc(${h2}/1080 * ${props.bheight})`,
                        top: `calc(380/1080 * ${props.bheight})`,
                        backgroundColor: '#FBE551'
                    }}></div>
                </>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute" style={{ height: props.bheight, width: '100vw' }}>
                    <div className='d-flex justify-content-center align-items-end' style={{ height: '100%' }}>
                        <div className="d-flex flex-column align-items-center">
                            <div className='mb-2' style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(5.4/640 * ${props.bheight})` }}>WORK WITH US</div>
                            <div><div style={{ height: '2px', width: `calc(34/640 *  ${props.bheight} * 186/34)`, backgroundColor: '#04C7F4' }}></div> </div>
                            <div className="my-5">
                                <div className="mb-3 d-flex flex-column align-items-center" style={{ fontSize: `calc(16/640 * ${props.bheight})`, fontWeight: '500', color: '#04C7F4' }}>
                                    <div>Grab an opportunity to become an expert</div>
                                    <div>coach at Go Girl!</div>
                                </div>
                                <div className='mb-3 d-flex flex-column align-items-center' style={{ fontSize: `calc(14/640 * ${props.bheight})` }}>
                                    <div>Over the past decade, health &amp; fitness has grown</div>
                                    <div>tremendously and are anticipated to become a</div>
                                    <div>major job creator in the service industry. It</div>
                                    <div>complements our vision of creating 100,000 jobs</div>
                                    <div>in the fitness industry and becoming a</div>
                                    <div>household name for all things fitness!</div>
                                </div>
                                <div className='d-flex flex-column align-items-center' style={{ fontSize: `calc(14/640 * ${props.bheight})` }}>
                                    <div>Are you ready to discover the path to becoming</div>
                                    <div>a Go Girl Coach?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }
    function Block2() {
        function BackgroundImages() {
            return (
                <div className="position-absolute">
                    <img className='mt-3' src={img01} style={{height: `calc(160/640 * ${props.bheight})`, width: `calc(340/360 * 100vw)`}} alt="" />
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute d-flex flex-column justify-content-center" style={{width: '100vw', height: props.bheight}}>
                    <div className='d-flex justify-content-center my-5' style={{ fontWeight: '500', fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`}}>We Achieve this by Offering:</div>
                    <div className='d-flex justify-content-center' style={{fontSize: `calc(14/640 * ${props.bheight})`}}>
                        <div className='' style={{textAlign: 'center', maxWidth: 'calc(320px)'}}>With Go Girl, You have a lot of flexibility in terms of your work schedule and timing. We let you communicate directly with your clients and fix the timings that work for you both. In addition, you won't face any peer pressure at Go Girl so that you will have a fun and self-motivated work environment.</div>
                    </div>
                </div>
            );
        }
        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }
    function Block3() {
        function BackgroundImages() {
            return (
                <div className="position-absolute">
                    {/* Desktop View1gmkdfk */}
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute" style={{width: '100%'}}>
                    <div className="d-flex justify-content-center"><img style={{ width: `calc(287/360 * 100vw)`, height: `calc(264/640 * ${props.bheight})` }} src={img02} alt="" /></div>
                    <div className="d-flex flex-column align-items-center bg-">
                        <div className='my-4' style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>Exposure to a Range of People</div>
                        <div className="" style={{ fontSize: `calc(14/640 * ${props.bheight})`, maxWidth: '320px', textAlignLast: 'center', textAlign: 'justify' }}>
                        You can get the freedom to explore yourself as an independent coach. Also, you’ll get the opportunity to work along with industry experts, nutritionists, and skilled trainers. You can always avail of guidance and support from experienced trainers. Thus Go Girl works on you to make you more proficient.
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }
    function Block4() {
        function BackgroundImages() {
            return (
                <div className="position-absolute">
                    Desktop View1gmkdfk
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute">
                    Desktop View0
                </div>
            );
        }
        return (
            <>
                <BackgroundImages />
                <FrontContent />
            </>
        );
    }

    return (
        <div className={props.className} style={props.style}>
            <div className="" style={{ height: props.bheight }}>
                <Block1 />
            </div>
            <div className="" style={{ height: props.bheight, backgroundColor: '#FBE551' }}>
                <Block2 />
            </div>
            <div className="bg-info" style={{ height: props.bheight }}>
                <Block3 />

            </div>
            <div className="bg-danger1" style={{ height: props.bheight }}>
                <Block4 />

            </div>
        </div>
    );
}



export default BecomeACoach