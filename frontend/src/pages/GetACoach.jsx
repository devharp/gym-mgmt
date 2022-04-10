import NavBar from "../components/navbar/NavBar";

import { Box, Button, TextField } from '@mui/material'
import { ArrowBack, ArrowForward, NavigateNext, NavigateBefore } from '@mui/icons-material/';


import img00 from '../assets/getacoach/00.svg'
import img01 from '../assets/getacoach/01.svg'
import img02 from '../assets/getacoach/02.svg'
import img10 from '../assets/getacoach/10.svg'
import img11 from '../assets/getacoach/11.svg'
import img12 from '../assets/getacoach/12.svg'
import img13 from '../assets/getacoach/13.svg'
import img14 from '../assets/getacoach/14.svg'
import img15 from '../assets/getacoach/15.svg'
import img16 from '../assets/getacoach/16.svg'
import img17 from '../assets/getacoach/17.svg'
import img18 from '../assets/getacoach/18.svg'
import img19 from '../assets/getacoach/19.svg'
import img110 from '../assets/getacoach/110.svg'
import img111 from '../assets/getacoach/111.svg'

import imgtrans00 from '../assets/getacoach/trans-00.svg'
import imgtranslines from '../assets/getacoach/trans-lines.png'

import arrowltr from '../assets/getacoach/arrow.png'
import badge from '../assets/getacoach/badge.svg'
import oldlady from '../assets/getacoach/oldlady.svg'

import { useState } from 'react'
import { Link } from "react-router-dom";

function GetACoach(props) {
    const [block0, setBlock0] = useState('d-flex');
    const [block1, setBlock1] = useState('d-none');
    const [block2, setBlock2] = useState('d-none');
    const [firstblock, setFirstBlock] = useState('d-flex');

    const handleClick = (type) => {

        switch (type) {
            case 'block0Next':
                setBlock0('d-none');
                setBlock1('d-flex');
                setBlock2('d-none');

                setFirstBlock('d-flex');
                break;

            case 'block1Back':
                setBlock0('d-flex');
                setBlock1('d-none');
                setBlock2('d-none');

                setFirstBlock('d-flex');
                break;
            case 'block1Next':
                // console.error('not set yet');
                setBlock0('d-none');
                setBlock1('d-none');
                setBlock2('d-block');

                setFirstBlock('d-none');
                break;
            default:
                console.error('Unknown btn request', type);
        }
    }

    function Desktop() {
        function ImageBlock(props) {
            let mouse_button_clicked = false;
            const [imgbstate, setImgBState] = useState(false);

            const [mouseover, setMouseOver] = useState(0);

            function imgBlockClicked() {
                mouse_button_clicked = !mouse_button_clicked;
                setImgBState(!imgbstate);
            }

            function getValueOfState(key) {
                switch (key) {
                    case 'backgroundColor':
                        if (imgbstate === false) {
                            return 'white';
                        }
                        else if (imgbstate === true) {
                            return '#FBE551';
                        }
                        break;
                    case 'fontSize':
                        if (imgbstate === false) {
                            return 20;
                        }
                        else if (imgbstate === true) {
                            return 17;
                        }
                        break;
                    default:
                        break;
                }
            }

            function onMouseEnterBlock(state) {
                setMouseOver(state);

                if (mouse_button_clicked === false) {
                    if (state === true) {
                        setImgBState(true)
                    }

                    else if (state === false) {
                        setImgBState(false);
                    }
                }
            }
            return (
                <>
                    <div className="" style={{ backgroundColor: 'none' }}>
                        <div className='d-flex flex-column align-items-center mx-3' onMouseLeave={() => { onMouseEnterBlock(false) }} onMouseOver={() => { onMouseEnterBlock(true) }} onClick={imgBlockClicked} style={{
                            backgroundColor: getValueOfState('backgroundColor'),
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029',
                            cursor: 'pointer'
                        }}>
                            <div className='d-flex justify-content-center w-100' style={{
                                backgroundColor: '#FFF5CC',
                                // backgroundColor: '#F00',
                                maxHeight: `calc(10vw)`,
                                maxWidth: `calc(10vw)`,
                                height: `calc(${(mouseover === true) ? (180) : (150)}/1080 * ${props.bheight})`, flexShrink: '0'
                            }}>
                                <img src={props.src} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                            </div>
                            {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                            <div className="d-flex align-items-center flex-grow-1" style={{ userSelect: 'none', fontSize: `calc(${getValueOfState('fontSize')}/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>{props.label}</div>
                        </div>
                    </div>
                </>
            );
        }

        function Block0() {

            return (
                <>
                    <div className={`position-absolute ${block0} flex-column justify-content-center align-items-center w-100`} style={{ height: props.bheight, zIndex: '1' }}>
                        <div className="mb-4">
                            <div className="mb-3" style={{
                                fontSize: `calc(36/1080 * ${props.bheight})`,
                                letterSpacing: `calc(3.6/1080 * ${props.bheight})`,
                                fontWeight: '500'
                            }}>CHOOSE YOUR FITNESS GOAL</div>
                            <div className='d-flex justify-content-center'>
                                <div style={{
                                    height: '2px',
                                    width: `calc(250/1920 * ${props.bheight})`,
                                    backgroundColor: '#FBE551'
                                }}></div>
                            </div>

                        </div>
                        <div className="d-flex flex-column mb-2">
                            <div className="d-flex mb-3">
                                <ImageBlock src={img10} label='Weight Loss' bheight={props.bheight} />
                                <ImageBlock src={img11} label='Weight Gain' bheight={props.bheight} />
                                <ImageBlock src={img12} label='Body Toning' bheight={props.bheight} />
                                <ImageBlock src={img13} label='General Fitness' bheight={props.bheight} />
                            </div>
                            <div className="d-flex justify-content-end mx-3">
                                <Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} endIcon={<ArrowForward />} onClick={() => { handleClick('block0Next') }} variant="contained">Next</Button>
                            </div>
                        </div>

                    </div>
                </>
            );
        }

        function Block1() {
            const [optionpane, setOptionPane] = useState(0);
            return (
                <>
                    <div className={`position-absolute ${block1} flex-column justify-content-center align-items-center w-100`} style={{ height: props.bheight, zIndex: '1' }}>
                        <div className="mb-4">
                            <div className="mb-3 d-flex flex-column align-items-center" style={{
                                fontSize: `calc(36/1080 * ${props.bheight})`,
                                letterSpacing: `calc(3.6/1080 * ${props.bheight})`,
                                fontWeight: '500'
                            }}>
                                <div>For Personalised expert guidance</div>
                                <div>Select relevant option below</div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div style={{
                                    height: '2px',
                                    width: `calc(250/1920 * ${props.bheight})`,
                                    backgroundColor: '#FBE551'
                                }}></div>
                            </div>

                        </div>
                        <div className="d-flex flex-column mb-2">
                            <div className="d-flex">
                                <div className="d-flex align-items-center">
                                    <div onClick={() => { setOptionPane(0) }} style={{ borderRadius: '50%', cursor: 'pointer', backgroundColor: ((optionpane === 0) ? '#FBE551' : '#DCDCDC') }}><NavigateBefore /></div>
                                </div>
                                <div className={`${((optionpane === 0) ? 'd-flex' : 'd-none')} flex-row mb-3`}>
                                    <ImageBlock src={img14} bheight={props.bheight} label='PCOD' />
                                    <ImageBlock src={img15} bheight={props.bheight} label='Diabetes' />
                                    <ImageBlock src={img16} bheight={props.bheight} label='Thyroid' />
                                    <ImageBlock src={img17} bheight={props.bheight} label='Osteoporosis' />
                                </div>
                                <div className={`${((optionpane === 1) ? 'd-flex' : 'd-none')} flex-row mb-3`}>
                                    <ImageBlock src={img18} bheight={props.bheight} label='Pre-Pregnancy' />
                                    <ImageBlock src={img19} bheight={props.bheight} label='Trimester' />
                                    <ImageBlock src={img110} bheight={props.bheight} label='Post-Pregnancy' />
                                    <ImageBlock src={img111} bheight={props.bheight} label='Teen' />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div onClick={() => { setOptionPane(1) }} style={{ borderRadius: '50%', cursor: 'pointer', backgroundColor: ((optionpane === 1) ? '#FBE551' : '#DCDCDC') }}><NavigateNext /></div>
                                </div>


                            </div>
                            <div className="d-flex justify-content-between mx-3">
                                <Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} onClick={() => { handleClick('block1Back') }} startIcon={<ArrowBack />} variant="contained">Back</Button>
                                <TextField size='small' InputProps={{ style: { fontSize: `calc(20/1080 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(20/1080 * ${props.bheight})` } }} variant='standard' label='other' />

                                <Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} onClick={() => { handleClick('block1Next') }} endIcon={<ArrowForward />} variant="contained">Next</Button>
                            </div>
                        </div>

                    </div>
                </>
            );
        }

        function Block2() {

            function TopSection() {
                return (
                    <>
                        <div className="d-flex flex-row justify-content-center mt-3">
                            <div className="d-flex flex-column justify-content-between me-5 pe-5">
                                <div>
                                    <div className='mt-5 mb-2' style={{
                                        fontWeight: '500',
                                        fontSize: `calc(36/1080 * ${props.bheight})`,
                                        letterSpacing: `calc(3.6/1080 * ${props.bheight})`
                                    }}>Select Your Transformation Level</div>
                                    <div className="d-flex justify-content-center">
                                        <div style={{ width: 'calc(180/1920 * 100vw)', height: '2px', backgroundColor: '#04C7F4' }}></div>
                                    </div>
                                </div>
                                <div style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>
                                    <div>It's quick, simple, and will help you drastically</div>
                                    <div>improve your fitness levels and physique whether</div>
                                    <div>you have never worked out before or just starting out.</div>
                                    <div>Depending on the level you select, you will have</div>
                                    <div>access to more experienced trainers.</div>
                                </div>
                                <div style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>Level up or down? Choose your transformation level</div>
                            </div>
                            <img className="ms-5" src={oldlady} style={{ height: `calc(400/1080 * ${props.bheight})`, width: `calc(400/1080 * ${props.bheight}) * 1.102` }} alt="" />
                        </div>
                    </>
                );
            }

            function BottomSection() {

                function PlanTablet(props) {
                    const [tabbg, setTabBg] = useState(350);

                    function badgeColor() {
                        switch (props.badge) {
                            case 'bronze':
                                return 'none'
                            case 'silver':
                                return 'sepia(100%)'
                            case 'gold':
                                return 'sepia(100%) hue-rotate(350deg) saturate(400%)';
                                break;
                            default:
                                break;

                        }
                    }
                    function mouseOnTablet() {
                        // const elem = document.getElementById('plan-tablet-headbg');
                        // elem.style.transform = `translateX(0)`;
                        setTabBg(-100);
                    }

                    function mouseLeaveTablet() {
                        // const elem = document.getElementById('plan-tablet-headbg');
                        // elem.style.transform = `translateX(calc(350/1080 * ${props.bheight} * 0.79))`;
                        setTabBg(350);
                    }

                    return (
                        <>
                            <div onMouseEnter={mouseOnTablet} onMouseLeave={mouseLeaveTablet} style={{ height: `calc(477/1080 * ${props.bheight})`, borderRadius: `calc(20/1080 * ${props.bheight})`, width: `calc(477/1080 * ${props.bheight} * 0.79)`, backgroundColor: '#FFF5CC', overflow: 'hidden' }}>
                                <div className='d-flex flex-column py-3 justify-content-between' style={{ height: '100%' }}>
                                    <div className="position-absolute" style={{ backgroundColor: 'none', height: `calc(52/1080 * ${props.bheight})`, width: `calc(477/1080 * ${props.bheight} * 0.79)`, overflow: 'hidden' }}>
                                        <div style={{
                                            borderRadius: `calc(26/1080 * ${props.bheight})`,
                                            height: '100%',
                                            width: '100%',
                                            backgroundColor: '#FBE551', transform: `translateX(calc(${tabbg}/1080 * ${props.bheight} * 0.79))`, transition: '0.3s'
                                        }}>

                                        </div>
                                    </div>
                                    <div className="ms-3" style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(1.8/1080 * ${props.bheight})`, fontWeight: 'bolder', zIndex: '1', userSelect: 'none' }}>{props.title}</div>
                                    <div className="ms-3" style={{ fontSize: `calc(24/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                        <div className='d-flex flex-row align-items-center' style={{ userSelect: 'none' }}>
                                            <img className="me-3 my-3" src={arrowltr} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                            <div>
                                                <div>{props.years}+ Years Experience</div>
                                                <div>Trainers</div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img className="me-3 my-3" src={arrowltr} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                            <div>
                                                <div>Certified Trainers</div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img className="me-3 my-3" src={badge} style={{ filter: badgeColor(), height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                            <div>
                                                <div>Badged Trainers</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='d-flex flex-row justify-content-center w-100' style={{ width: 'max-content' }}>
                                            {/* <div className='p-1' style={{ borderRadius: `calc(5/1080 * ${props.bheight})`, fontWeight: '500', backgroundColor: '#04C7F4', fontSize: `calc(18/1080 * ${props.bheight})`, letterSpacing: `calc(2.7/1080 * ${props.bheight})` }}>Select Trainers</div> */}
                                            <Link to='/trainers' style={{ textDecoration: 'none' }}>

                                                <Button className='p-1' variant='contained' sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)', fontSize: `calc(18/1080 * ${props.bheight})` }}>
                                                    Select Trainers
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                    );
                }

                return (
                    <>
                        <div className="d-flex flex-row w-100 justify-content-around mt-4">
                            <PlanTablet years='2' badge='bronze' title='Basic' bheight={props.bheight} />
                            <PlanTablet years='5' badge='silver' title='Intermediate' bheight={props.bheight} />
                            <PlanTablet years='8' badge='gold' title='Advanced' bheight={props.bheight} />
                        </div>
                    </>);
            }

            return (
                <>
                    <div className={`${block2} position-absolute w-100`}>
                        <div className="position-absolute" style={{ zIndex: '-1', height: props.bheight, width: '100vw', overflow: 'hidden' }}>
                            <img src={imgtrans00} style={{ height: `calc(1618/1080 * ${props.bheight})`, width: `calc(1618/1080 * ${props.bheight} * 2316/1618)`, transform: `translate(calc(-600/1920 * 100vw), calc(-600/1080 * ${props.bheight}))` }} alt="" />
                        </div>
                        <div className="position-absolute w-100 d-flex justify-content-center" style={{ bottom: '0', zIndex: '-1' }}>
                            <img src={imgtranslines} style={{ height: `calc(310/1080 * ${props.bheight})`, width: `calc(310/1080 * ${props.bheight} * 1000/310)` }} alt="" />
                        </div>
                        <div className='pt-3' style={{ height: props.bheight, overflowY: 'scroll' }}>

                            <div className="mt-5 d-flex flex-column justify-content-around">
                                <TopSection />
                                <BottomSection />
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        function BackgroundImg00() {

            return (
                <>
                    <div className="position-absolute" style={{ height: props.bheight, width: '100vw', overflow: 'hidden', zIndex: '0' }}>
                        <img src={img02} style={{
                            transform: `translate(calc(839/1920 * 100vw), calc(653/1080 * ${props.bheight}))`,
                            height: `calc(578/1080 * ${props.bheight})`,
                            width: `calc(578/1080 * ${props.bheight} * 953/578)`
                        }} alt="" />
                    </div>

                    <div className="position-absolute" style={{
                        left: `calc(-350/1920 * ${props.bheight})`,
                        height: props.bheight,
                        overflow: 'hidden'
                    }}>
                        <img src={img00} style={{
                            height: `calc(1156/1080 * ${props.bheight})`,
                            width: `calc(1156/1080 * ${props.bheight}) * 0.669`,
                            transform: `translateY(calc(400/1080 * ${props.bheight}))`
                        }} alt="" />
                    </div>
                    <div className="position-absolute" style={{
                        width: `calc(876/1920 * ${props.bheight})`,
                        height: `calc(662.85/1080 * ${props.bheight})`,
                        right: '0px',
                        overflow: 'hidden'
                    }}>
                        <img src={img01} alt="" style={{
                            transform: `translate(0, calc(-375/1080 * ${props.bheight}))`,
                            height: `calc(934/1080 * ${props.bheight})`,
                            width: `calc(1036/1920 * ${props.bheight})`,


                        }} />
                    </div>
                </>
            );
        }

        return (
            <>
                <div className="d-block w-100" style={{ height: props.bheight }}>
                    <div className={`${firstblock} position-absolute w-100`}>
                        <Block0 />
                        <Block1 />
                        <BackgroundImg00 />

                    </div>
                    <Block2 />
                </div>
            </>
        );
    }

    function Mobile() {
        function ImageBlock(props) {
            const [imgbstate, setImgBState] = useState(false);

            function imgBlockClicked() {
                setImgBState(!imgbstate);
            }

            function getValueOfState(key) {
                switch (key) {
                    case 'backgroundColor':
                        if (imgbstate === false) {
                            return 'white';
                        }
                        else if (imgbstate === true) {
                            return '#FBE551';
                        }
                        break;
                    case 'fontSize':
                        if (imgbstate === false) {
                            return 14;
                        }
                        else if (imgbstate === true) {
                            return 12;
                        }
                        break;
                    default:
                        break;
                }
            }
            return (
                <>
                    <div className="d-flex flex-column p-2 m-3" onClick={imgBlockClicked}
                        style={{ width: 'max-content', backgroundColor: getValueOfState('backgroundColor'), boxShadow: '0px 14px 8px #00000029', cursor: 'pointer' }}>
                        <div className='d-flex justify-content-center' style={{
                            width: `calc(75/640 * ${props.bheight} * 1.4)`,
                            backgroundColor: '#FFF5CC'
                        }}>
                            <img src={props.src} style={{ height: `calc(63.5/640 * ${props.bheight})` }} alt="" />
                        </div>
                        <div className="d-flex justify-content-center" style={{ userSelect: 'none', fontSize: `calc(${getValueOfState('fontSize')}/640 * ${props.bheight})` }}>{props.label}</div>
                    </div>
                </>
            );
        }
        function Block0() {
            return (
                <div className={`${firstblock} position-absolute w-100`}>
                    <div className={`position-absolute ${block0} flex-column justify-content-center align-items-center w-100`} style={{ height: props.bheight, zIndex: '1' }}>
                        <div className="mb-4">
                            <div className="mb-2" style={{
                                fontSize: `calc(20/640 * ${props.bheight})`,
                                fontWeight: '500'
                            }}>CHOOSE YOUR FITNESS GOAL</div>
                            <div className='d-flex justify-content-center'>
                                <div style={{
                                    height: '2px',
                                    width: `calc(180/640 * ${props.bheight})`,
                                    backgroundColor: '#FBE551'
                                }}></div>
                            </div>

                        </div>
                        <div className="d-flex flex-column mb-2">
                            <div className='d-flex flex-column align-items-center'>
                                <div className="d-flex flex-row">
                                    <ImageBlock bheight={props.bheight} src={img10} label='Weight Loss' />
                                    <ImageBlock bheight={props.bheight} src={img11} label='Weight Gain' />

                                </div>
                                <div className="d-flex flex-row">
                                    <ImageBlock bheight={props.bheight} src={img12} label='Body Toning' />
                                    <ImageBlock bheight={props.bheight} src={img13} label='General Fitness' />

                                </div>
                                <div className="d-flex justify-content-end px-3" style={{ width: '100%' }}>
                                    <Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} endIcon={<ArrowForward />} onClick={() => { handleClick('block0Next') }} variant="contained">Next</Button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className={`position-absolute ${block1} flex-column align-items-center w-100 pt-5 bg-dar`} style={{ height: props.bheight, overflow: 'scroll', zIndex: '1' }}>
                        <div className="mt-5 mb-4">
                            <div className="mb-3 d-flex flex-column align-items-center" style={{
                                fontSize: `calc(20/640 * ${props.bheight})`,
                                letterSpacing: `calc(0.5/640 * ${props.bheight})`,
                                fontWeight: '500'
                            }}>
                                <div>FOR PERSONALISED EXPERT </div>
                                <div>GUIDANCE SELECT RELEVANT</div>
                                <div>OPTION BELOW</div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div style={{
                                    height: '2px',
                                    width: `calc(250/1920 * ${props.bheight})`,
                                    backgroundColor: '#FBE551'
                                }}></div>
                            </div>

                        </div>
                        <div className="d-flex flex-column mb-2">
                            <div className="d-flex flex-column mb-2">
                                <div className='d-flex flex-column align-items-center'>
                                    <div className="d-flex flex-row">
                                        <ImageBlock bheight={props.bheight} src={img14} label='PCOD' />
                                        <ImageBlock bheight={props.bheight} src={img15} label='Diabetes' />
                                    </div>
                                    <div className="d-flex flex-row">
                                        <ImageBlock bheight={props.bheight} src={img16} label='Thyroid' />
                                        <ImageBlock bheight={props.bheight} src={img17} label='Osteoporosis' />
                                    </div>
                                    <div className="d-flex flex-row">
                                        <ImageBlock bheight={props.bheight} src={img18} label='Pre-Pregnancy' />
                                        <ImageBlock bheight={props.bheight} src={img19} label='Trimester' />
                                    </div>
                                    <div className="d-flex flex-row">
                                        <ImageBlock bheight={props.bheight} src={img110} label='Post-Pregnancy' />
                                        <ImageBlock bheight={props.bheight} src={img111} label='Teen' />
                                    </div>



                                </div>
                            </div>
                            <div className="d-flex justify-content-between mx-3">
                                <Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} size='small' onClick={() => { handleClick('block1Back') }} startIcon={<ArrowBack />} variant="contained">Back</Button>
                                <TextField size='small' InputProps={{ style: { fontSize: `calc(5/360 * ${props.bheight})`, width: '100px' } }} InputLabelProps={{ style: { fontSize: `calc(5/360 * ${props.bheight})` } }} variant='standard' label='other' />
                                <Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} size='small' onClick={() => { handleClick('block1Next') }} endIcon={<ArrowForward />} variant="contained">Next</Button>
                            </div>
                        </div>

                    </div>

                    <div className="position-absolute" style={{
                        left: `calc(-350/1920 * ${props.bheight} * 360/1920 * 1.1)`,
                        height: props.bheight,
                        width: '100vw',
                        overflow: 'hidden'
                    }}>
                        <img src={img00} style={{
                            height: `calc(1156/1080 * ${props.bheight} * 0.5)`,
                            width: `calc(1156/1080 * ${props.bheight} * 0.669 * 0.5)`,
                            transform: `translateY(calc(${props.bheight} - calc(1156/1080 * ${props.bheight} * 0.5 * 0.5)))`
                        }} alt="" />
                    </div>
                    <div className="position-absolute" style={{
                        width: `calc(876/1920 * ${props.bheight})`,
                        height: `calc(662.85/1080 * ${props.bheight})`,
                        right: '0px',
                        overflow: 'hidden'
                    }}>
                        <img src={img01} alt="" style={{
                            transform: `translate(0, calc(-375/1080 * ${props.bheight}))`,
                            height: `calc(934/1080 * ${props.bheight})`,
                            width: `calc(1036/1920 * ${props.bheight})`,


                        }} />

                    </div>
                    <div className="position-absolute" style={{ height: props.bheight, width: '100vw', overflow: 'hidden', zIndex: '0' }}>
                        <img src={img02} style={{
                            transform: `translate(calc(calc(0.5 * 100vw) - 50%), calc(calc(0.5 * ${props.bheight}) - 50%))`,
                            height: `calc(578/1080 * ${props.bheight})`,
                            width: `calc(578/1080 * ${props.bheight} * 953/578)`
                        }} alt="" />
                    </div>
                </div>
            );
        }
        function Block1() {

            function PlanTablet(props) {
                return (
                    <>
                        <div className="my-5 d-flex justify-content-center">
                            <div style={{ height: `calc(477/1080 * ${props.bheight})`, borderRadius: `calc(20/1080 * ${props.bheight})`, width: `calc(477/1080 * ${props.bheight} * 0.79)`, backgroundColor: '#FFF5CC', boxShadow: `0px 0px calc(10/640 * ${props.bheight}) rgba(0, 0, 0, 0.3)` }}>
                                <div className='d-flex flex-column px-3 py-3 justify-content-between' style={{ height: '100%' }}>
                                    <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(1.8/1080 * ${props.bheight})`, fontWeight: '500' }}>{props.name}</div>
                                    <div style={{ fontSize: `calc(24/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img className="me-3 my-3" src={arrowltr} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                            <div>
                                                <div>{props.years}+ Years Experience</div>
                                                <div>Trainers</div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img className="me-3 my-3" src={arrowltr} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                            <div>
                                                <div>Certified Trainers</div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img className="me-3 my-3" src={badge} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                            <div>
                                                <div>Badged Trainers</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='d-flex flex-row justify-content-center w-100' style={{ width: 'max-content' }}>
                                            <Link to='/trainers' style={{ textDecoration: 'none' }}>
                                                <Button className='p-1' variant='contained' size='small' sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)', fontSize: `calc(18/1080 * ${props.bheight})` }}>
                                                    Select Trainers
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                );
            }

            return (
                <>
                    <div className={`${block2} position-absolute w-100`}>
                        <div className="position-absolute d-flex justify-content-center align-items-center" style={{ height: `calc(536/640 * ${props.bheight})`, overflow: 'hidden', width: '100%', zIndex: '-1' }}>
                            <img src={imgtrans00} style={{ height: `calc(350/640 * ${props.bheight} * 1.2)` }} alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-around align-items-center pt-5" style={{ height: props.bheight }}>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="mb-2" style={{
                                    fontSize: `calc(15/640 * ${props.bheight})`,
                                    letterSpacing: `calc(1.5/640 * ${props.bheight})`,
                                    fontWeight: '500'

                                }}>
                                    Select Your Transformation Level
                                </div>
                                <div className="d-flex justify-content-center">

                                    <div style={{ width: `calc(180/640 * 100vw)`, height: '2px', backgroundColor: '#04C7F4' }}></div>
                                </div>
                            </div>
                            <img src={oldlady} style={{ width: `calc(200/640 * ${props.bheight} * 1.102)`, height: `calc(214/640 * ${props.bheight})` }} alt="" />
                            <div className="d-flex flex-column" style={{ fontSize: `calc(14/640 * ${props.bheight})` }}>
                                <div className="mb-3 d-flex flex-column align-items-center">
                                    <div>It's quick, simple, and will help you drastically</div>
                                    <div>improve your fitness levels and physique</div>
                                    <div>whether you have never worked out</div>
                                    <div>before or just starting out.</div>
                                    <div>Depending on the level you select, you will have</div>
                                    <div>access to more experienced trainers.</div>

                                </div>
                                <div className="d-flex flex-column align-items-center" style={{ fontWeight: '500' }}>
                                    <div>Level up or down? Choose your transformation</div>
                                    <div>level</div>
                                </div>
                            </div>
                        </div>
                        <div className='' style={{ backgroundColor: 'none' }}>
                            <PlanTablet years='2' badgeColor='bronze' name='Basic' bheight={props.bheight} />
                            <PlanTablet years='5' badgeColor='silver' name='Intermediate' bheight={props.bheight} />
                            <PlanTablet years='8' badgeColor='gold' name='Advanced' bheight={props.bheight} />
                        </div>
                    </div>
                </>
            );

        }
        return (
            <>
                <div className="d-block w-100" style={{ height: props.bheight }}>
                    <Block0 />
                    <Block1 />

                </div>
            </>
        );
    }

    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />
                <div style={{ backgroundColor: 'none', height: `${props.bheight}` }}>
                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                        <Desktop />
                    </Box>
                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}>
                        <Mobile />
                    </Box>

                </div>
            </div>
        </>
    );
}

export default GetACoach;