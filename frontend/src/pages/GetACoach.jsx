import NavBar from "../components/navbar/NavBar";

import { Box, Button } from '@mui/material'
import {ArrowBack, ArrowForward} from '@mui/icons-material/';


import img00 from '../assets/getacoach/00.svg'
import img01 from '../assets/getacoach/01.svg'
import img10 from '../assets/getacoach/10.svg'
import img11 from '../assets/getacoach/11.svg'
import img12 from '../assets/getacoach/12.svg'
import img13 from '../assets/getacoach/13.svg'

function GetACoach(props) {
    return (
        <>
            <div>
                {/* <NavBar position="fixed" brand="GymFit" minHeight='50px' /> */}
                <div style={{ backgroundColor: 'red', height: `${props.bheight}` }}>
                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                        <div className="d-block" style={{ height: props.bheight }}>

                            <div className="position-absolute d-none flex-column justify-content-center align-items-center w-100" style={{ height: props.bheight, zIndex: '1' }}>
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
                                        <Button variant="contained">Next</Button>
                                    </div>
                                </div>

                            </div>
                            <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100" style={{ height: props.bheight, zIndex: '1' }}>
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
                                        <Button startIcon={<ArrowBack/>} variant="contained">Back</Button>
                                        <Button endIcon={<ArrowForward/>} variant="contained">Next</Button>
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
                    </Box>
                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}></Box>


                </div>
            </div>
        </>
    );
}

export default GetACoach;