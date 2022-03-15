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
    function Block3() {
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
            <div className="bg-danger0" style={{ height: props.bheight }}>
                <Block1 />
            </div>
            <div className="bg-danger1" style={{ height: props.bheight }}>
                <Block2 />
            </div>
            <div className="bg-danger" style={{ height: props.bheight }}>
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
    function Block3() {
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
            <div className="bg-danger1" style={{ height: props.bheight }}>
                <Block1 />
            </div>
            <div className="bg-danger" style={{ height: props.bheight }}>
                <Block2 />
            </div>
            <div className="bg-danger" style={{ height: props.bheight }}>
                <Block3 />

            </div>
            <div className="bg-danger1" style={{ height: props.bheight }}>
                <Block4 />

            </div>
        </div>
    );
}



export default BecomeACoach