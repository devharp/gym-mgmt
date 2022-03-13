import NavBar from "../components/navbar/NavBar";

import { Box, Button } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material/';


import img00 from '../assets/getacoach/00.svg'
import img01 from '../assets/getacoach/01.svg'
import img10 from '../assets/getacoach/10.svg'
import img11 from '../assets/getacoach/11.svg'
import img12 from '../assets/getacoach/12.svg'
import img13 from '../assets/getacoach/13.svg'
import arrowltr from '../assets/getacoach/arrow.png'
import badge from '../assets/getacoach/badge.svg'
import oldlady from '../assets/getacoach/oldlady.svg'

import { useState } from 'react'

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
    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />
                <div style={{ backgroundColor: 'none', height: `${props.bheight}` }}>
                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                        <div className="d-block w-100" style={{ height: props.bheight }}>
                            <div className={`${firstblock} position-absolute w-100`}>
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
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img10} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Weight Loss</div>
                                            </div>
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img11} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Weight Gain</div>
                                            </div>
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img12} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Body Toning</div>
                                            </div>
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img13} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>General Fitness</div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end mx-3">
                                            <Button endIcon={<ArrowForward />} onClick={() => { handleClick('block0Next') }} variant="contained">Next</Button>
                                        </div>
                                    </div>

                                </div>
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
                                        <div className="d-flex mb-3">
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img10} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Weight Loss</div>
                                            </div>
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img11} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Weight Gain</div>
                                            </div>
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img12} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Body Toning</div>
                                            </div>
                                            <div className='d-flex flex-column align-items-center mx-3' style={{
                                                backgroundColor: 'white',
                                                width: 'max-content',
                                                padding: `calc(0.8/100 * ${props.bheight})`,
                                                boxShadow: '0px 14px 8px #00000029'
                                            }}>
                                                <div className='d-flex justify-content-center w-100' style={{
                                                    backgroundColor: '#FFF5CC',
                                                    maxHeight: `calc(10vw)`,
                                                    maxWidth: `calc(10vw)`,
                                                    height: `calc(150/1080 * ${props.bheight})`, flexShrink: '0'
                                                }}>
                                                    <img src={img13} style={{ width: `calc(150/1080 * ${props.bheight})` }} alt="" />
                                                </div>
                                                {/* <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(22/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div> */}
                                                <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(20/1920 * 100vw)`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>General Fitness</div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mx-3">
                                            <Button onClick={() => { handleClick('block1Back') }} startIcon={<ArrowBack />} variant="contained">Back</Button>
                                            <Button onClick={() => { handleClick('block1Next') }} endIcon={<ArrowForward />} variant="contained">Next</Button>
                                        </div>
                                    </div>

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
                            </div>
                            <div className={`${block2} position-absolute w-100`}>
                                <div className="mt-5 d-flex flex-column justify-content-around" style={{ height: props.bheight }}>
                                    <div className="d-flex flex-row justify-content-center mt-3">
                                        <div className="d-flex flex-column justify-content-between">
                                            <div>
                                                <div className='mb-2' style={{
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
                                        <img src={oldlady} style={{ height: `calc(400/1080 * ${props.bheight})`, width: `calc(400/1080 * ${props.bheight}) * 1.102` }} alt="" />
                                    </div>
                                    <div className="d-flex flex-row w-100 justify-content-around mt-4">
                                        <div style={{ height: `calc(477/1080 * ${props.bheight})`, borderRadius: `calc(20/1080 * ${props.bheight})`, width: `calc(477/1080 * ${props.bheight} * 0.79)`, backgroundColor: '#FFF5CC' }}>
                                            <div className='d-flex flex-column px-3 py-3 justify-content-between' style={{ height: '100%' }}>
                                                <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(1.8/1080 * ${props.bheight})`, fontWeight: '500' }}>Basic</div>
                                                <div style={{ fontSize: `calc(24/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                                    <div className='d-flex flex-row align-items-center'>
                                                        <img className="me-3 my-3" src={arrowltr} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                                        <div>
                                                            <div>2+ Years Experience</div>
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
                                                        <div className='p-1' style={{ borderRadius: `calc(5/1080 * ${props.bheight})`, fontWeight: '500', backgroundColor: '#04C7F4', fontSize: `calc(18/1080 * ${props.bheight})`, letterSpacing: `calc(2.7/1080 * ${props.bheight})` }}>
                                                            Select Trainers
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div style={{ height: `calc(477/1080 * ${props.bheight})`, borderRadius: `calc(20/1080 * ${props.bheight})`, width: `calc(477/1080 * ${props.bheight} * 0.79)`, backgroundColor: '#FFF5CC' }}>
                                            <div className='d-flex flex-column px-3 py-3 justify-content-between' style={{ height: '100%' }}>
                                                <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(1.8/1080 * ${props.bheight})`, fontWeight: '500' }}>Intermediate</div>
                                                <div style={{ fontSize: `calc(24/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                                    <div className='d-flex flex-row align-items-center'>
                                                        <img className="me-3 my-3" src={arrowltr} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                                        <div>
                                                            <div>2+ Years Experience</div>
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
                                                        <div className='p-1' style={{ borderRadius: `calc(5/1080 * ${props.bheight})`, fontWeight: '500', backgroundColor: '#04C7F4', fontSize: `calc(18/1080 * ${props.bheight})`, letterSpacing: `calc(2.7/1080 * ${props.bheight})` }}>
                                                            Select Trainers
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div style={{ height: `calc(477/1080 * ${props.bheight})`, borderRadius: `calc(20/1080 * ${props.bheight})`, width: `calc(477/1080 * ${props.bheight} * 0.79)`, backgroundColor: '#FFF5CC' }}>
                                            <div className='d-flex flex-column px-3 py-3 justify-content-between' style={{ height: '100%' }}>
                                                <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(1.8/1080 * ${props.bheight})`, fontWeight: '500' }}>Advanced</div>
                                                <div style={{ fontSize: `calc(24/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                                    <div className='d-flex flex-row align-items-center'>
                                                        <img className="me-3 my-3" src={arrowltr} style={{ height: `calc(32/1080 * ${props.bheight})`, width: `calc(32/1080 * ${props.bheight})` }} alt="" />
                                                        <div>
                                                            <div>2+ Years Experience</div>
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
                                                        <div className='p-1' style={{ borderRadius: `calc(5/1080 * ${props.bheight})`, fontWeight: '500', backgroundColor: '#04C7F4', fontSize: `calc(18/1080 * ${props.bheight})`, letterSpacing: `calc(2.7/1080 * ${props.bheight})` }}>
                                                            Select Trainers
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}></Box>


                </div>
            </div>
        </>
    );
}

export default GetACoach;