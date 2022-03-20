import { useState, useEffect } from 'react'
import NavBar from "../components/navbar/NavBar";
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"

import img00 from '../assets/trainers/00.svg'
import img01 from '../assets/trainers/01.svg'
import img02 from '../assets/trainers/02.svg'

import trainerimg00 from '../assets/trainers/trainer00.png'
import trainerimg01 from '../assets/trainers/trainer01.webp'
import trainerimg02 from '../assets/trainers/trainer02.png'
import trainerimg03 from '../assets/trainers/trainer03.jpg'
import { Link } from 'react-router-dom';

function Trainers(props) {


    useEffect(() => {
        window.scroll(0, 0);


    }, [])



    function Desktop() {
        function BackgroundImages() {
            function Image0() {
                return (
                    <img className="position-absolute" src={img00} style={{
                        transform: `translate(calc(-392/1080 * ${props.bheight}), calc(-264/1080 * ${props.bheight} * 1920/1080))`,
                        width: `calc(1321/1080 * ${props.bheight} * 1906/1321)`,
                        height: `calc(1321/1080 * ${props.bheight})`,
                        zIndex: '-2'
                    }} alt=""
                    />
                );
            }
            function Image1() {
                return (
                    <img className="position-absolute" src={img01} style={{
                        transform: `translate(calc(1136/1920 * 100vw), calc(100/1080 * ${props.bheight}))`,
                        width: `calc(482/1080 * ${props.bheight} * 369/482)`,
                        height: `calc(482/1080 * ${props.bheight})`
                    }} alt=""
                    />
                );
            }
            function Image2() {
                return (

                    <>
                        <div className='position-absolute bg-dar' style={{ overflow: 'hidden', height: `calc(600/1080 * ${props.bheight})`, width: '100%', zIndex: '-1'}}>
                            <img className="" src={img02} style={{
                                transform: `translate(calc(900/1920 * 100vw), calc(-200/1080 * ${props.bheight}))`,
                                // width: `calc(600/1080 * ${props.bheight} * 500/600)`,
                                height: `calc(1000/1080 * ${props.bheight})`
                            }} alt=""
                            />
                        </div>
                    </>
                );
            }
            return (
                <div className="position-absolute" style={{ width: '100%' }}>
                    <Image0 />
                    <Image1 />
                    <Image2 />


                </div>
            );
        }
        function FrontBody() {
            function Heading() {
                return (
                    <div className='d-flex flex-column align-items-center mb-3' style={{ width: '100%' }}>
                        <div style={{
                            fontSize: `calc(36/1080 * ${props.bheight})`,
                            letterSpacing: `calc(3.6/1080 * ${props.bheight})`,
                            fontWeight: '500'
                        }}>

                            Select Your Trainer
                            <div className="d-flex justify-content-center mt-2">
                                <div style={{ height: '2px', width: `calc(180/1920*100vw)`, backgroundColor: '#04C7F4' }}></div>
                            </div>
                        </div>
                    </div>
                );
            }
            function MidContent() {
                function ContentInfo() {
                    return (
                        <>
                            <div className='mb-3' style={{ maxWidth: `calc(337/1080 * ${props.bheight} * 640/337)`, fontSize: `calc(28/1080 * ${props.bheight})` }}>
                                We are proud to have transformed more than 5,000+ lives with our unique fitness approach, customized diet, and exercise plans that fit your lifestyle and work for you! Choose from more than 500 expert coaches. Get started today. And Get better.
                            </div>
                        </>
                    );
                }

                function TrainerFilter() {
                    function HarpSelector(props) {
                        const [gender, setGender] = useState('');

                        const handleChange = (event) => {
                            setGender(event.target.value);
                        };

                        return (
                            <Box className={props.className} sx={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}>
                                <FormControl size='small' fullWidth>
                                    <InputLabel sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>{props.label}</InputLabel>
                                    <Select
                                        value={gender}
                                        label={props.label}
                                        onChange={handleChange}
                                        sx={{ height: `calc(12/640 * ${props.bheight} * 2.8)`, padding: '0', fontSize: `calc(12/640 * ${props.bheight})` }}
                                    >

                                        {props.items.map((e, i) => {
                                            return (
                                                <MenuItem key={i} value={e} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>{e}</MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        );
                    }

                    return (
                        <>
                            <div className='d-flex flex-row justify-content-between mb-3'>
                                <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                    Basic level Trainers
                                </div>
                                <div className='d-flex flex-row'>
                                    <HarpSelector className='mx-2' label='Gender' bheight={props.bheight} items={['All', 'Male', 'Female']} />
                                    <HarpSelector className='mx-2' label='Language' bheight={props.bheight} items={['All', 'Tamil', 'Hindi', 'English']} />
                                    <HarpSelector className='mx-2' label='Ratings' bheight={props.bheight} items={['All', '1-3 Star', '4-5 Star']} />
                                </div>
                            </div>
                        </>);
                }

                function TrainerProfile(props) {

                    return (
                        <>
                            <div className={props.className} style={{ height: `calc(406/1080 * ${props.bheight})`, width: `calc(406/1080 * ${props.bheight} * 236/406)`, borderRadius: `calc(${props.borderRadius}/1080 * ${props.bheight})`, boxShadow: '0px 14px 8px #00000029' }}>
                                <div className='d-flex flex-column justify-content-between align-items-center flex-grow-1 py-2'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div style={{ height: `calc(150/1080 * ${props.bheight}`, overflow: 'hidden' }}>
                                            <img src={props.src} style={{ width: `calc(150/1080 * ${props.bheight} * 175/150)` }} alt="" />
                                        </div>
                                        <div className='d-flex position-relative justify-content-center' style={{ top: `calc(-15/1080 * ${props.bheight})`, fontSize: `calc(21/1080 * ${props.bheight})` }}>
                                            <div className='px-2 p1-2' style={{ borderRadius: `calc(5/1080 * ${props.bheight})`, backgroundColor: '#FBE551', fontWeight: '300' }}>Basic</div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex' style={{ fontSize: `calc(15/1080 * ${props.bheight})`, color: '#04C7F4' }}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div style={{ fontSize: `calc( 24/1080 * ${props.bheight})` }}>{props.name}</div>
                                    <div style={{ fontSize: `calc( 18/1080 * ${props.bheight})` }}>Fitness &amp; Nutrition</div>
                                    <div style={{ fontSize: `calc( 14/1080 * ${props.bheight})` }}>Trained 6 people</div>
                                    <div style={{ fontSize: `calc( 14/1080 * ${props.bheight})` }}>3 slots available</div>
                                    <div>
                                        <Link to='/register'><Button variant='contained' size='small' sx={{ fontSize: `calc( 18/1080 * ${props.bheight})` }}>Enroll</Button></Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }
                return (
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex flex-column'>
                            <ContentInfo />
                            <TrainerFilter />
                            <div className='d-flex justify-content-between' >
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                                <TrainerProfile name='Ramu Bhai' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='ms-3 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex justify-content-between' >
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                                <TrainerProfile name='Ramu Bhai' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='ms-3 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex justify-content-between' >
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                                <TrainerProfile name='Ramu Bhai' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='ms-3 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex justify-content-between' >
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                                <TrainerProfile name='Ramu Bhai' className='mx-2 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='ms-3 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <>
                    <div className="position-absolute" style={{ width: '100%', top: `calc(0.25 * ${props.bheight})` }}>
                        <Heading />
                        <MidContent />
                    </div>
                </>
            );
        }
        return (

            <>
                <BackgroundImages />
                <FrontBody />
            </>
        );
    }

    function Mobile() {
        function BackgroundImages() {
            function Image0() {
                return (
                    <div className='position-absolute' style={{ width: '100vw', overflow: 'hidden' }}>
                        <img className="position-relative" src={img00} style={{
                            transform: `translate(calc(-392/1080 * ${props.bheight}), calc(-264/1080 * ${props.bheight} * 1920/1080))`,
                            width: `calc(1321/1080 * ${props.bheight} * 1906/1321)`,
                            height: `calc(1321/1080 * ${props.bheight})`
                        }} alt=""
                        />
                    </div>
                );
            }

            return (
                <div className="position-absolute">
                    <Image0 />
                </div>
            );
        }

        function FrontBody() {
            function Heading() {
                function Image1() {
                    return (
                        <img className="" src={img01} style={{
                            width: `calc(318/640 * ${props.bheight} * 244/318)`,
                            height: `calc(318/640 * ${props.bheight})`
                        }} alt=""
                        />
                    );
                }
                return (
                    <div className='d-flex flex-column align-items-center' style={{ width: '100%' }}>
                        <div style={{
                            fontSize: `calc(18/640 * ${props.bheight})`,
                            letterSpacing: `calc(1.8/640 * ${props.bheight})`,
                            fontWeight: '500'
                        }}>

                            Select Your Trainer
                            <div className="d-flex justify-content-center mt-2 mb-3">
                                <div style={{ height: '2px', width: `calc(300/1080 * ${props.bheight})`, backgroundColor: '#04C7F4' }}></div>
                            </div>
                        </div>
                        <Image1 />

                    </div>
                );
            }
            function MidContent() {
                function ContentInfo() {
                    return (
                        <div className='d-flex justify-content-center mb-5 mt-4' style={{ width: '100%' }}>
                            <div className='' style={{ textAlign: 'center', textAlignLast: 'center', maxWidth: `calc(320px)`, fontSize: `calc(14/640 * ${props.bheight})` }}>
                                We are proud to have transformed more than 5,000+ lives with our unique fitness approach, customized diet, and exercise plans that fit your lifestyle and work for you! Choose from more than 500 expert coaches. Get started today. And Get better.
                            </div>
                        </div>
                    );
                }
                function TrainerFilter() {
                    const [filterv, setFilterV] = useState(false);
                    const onFilterBClick = () => { setFilterV(!filterv) }

                    function HarpSelector(props) {
                        const [gender, setGender] = useState('');

                        const handleChange = (event) => {

                            setGender(event.target.value);
                        };

                        return (
                            <Box className={props.className} sx={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}>
                                <FormControl size='small' fullWidth>
                                    <InputLabel sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>{props.label}</InputLabel>
                                    <Select
                                        value={gender}
                                        label={props.label}
                                        onChange={handleChange}
                                        sx={{ height: `calc(12/640 * ${props.bheight} * 2.8)`, padding: '0', fontSize: `calc(12/640 * ${props.bheight})` }}
                                    >

                                        {props.items.map((e, i) => {
                                            return (
                                                <MenuItem key={i} value={e} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>{e}</MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        );
                    }

                    return (
                        <>
                            <div className='d-flex flex-column align-items-center mb-3'>
                                <div className='mb-3' style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>
                                    Basic level Trainers
                                </div>
                                <div className='mb-3'><Button variant='contained' onClick={onFilterBClick} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>{filterv ? 'Hide' : 'Show'} Filters</Button></div>
                                <div className='' style={{ height: `calc(${filterv ? '150/640' : '0'} * ${props.bheight})`, overflow: 'hidden' }}>
                                    <HarpSelector className='my-2' label='Gender' bheight={props.bheight} items={['All', 'Male', 'Female']} />
                                    <HarpSelector className='my-2' label='Language' bheight={props.bheight} items={['All', 'Tamil', 'Hindi', 'English']} />
                                    <HarpSelector className='my-2' label='Ratings' bheight={props.bheight} items={['All', '1-3 Star', '4-5 Star']} />
                                </div>
                            </div>
                        </>);
                }
                function TrainerProfile(props) {

                    return (
                        <>
                            <div className={props.className} style={{ height: `calc(406/1080 * ${props.bheight})`, width: `calc(406/1080 * ${props.bheight} * 236/406)`, borderRadius: `calc(${props.borderRadius}/1080 * ${props.bheight})`, boxShadow: '0px 14px 8px #00000029' }}>
                                <div className='d-flex flex-column justify-content-between align-items-center flex-grow-1 py-2'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div style={{ height: `calc(150/1080 * ${props.bheight}`, overflow: 'hidden' }}>
                                            <img src={props.src} style={{ width: `calc(150/1080 * ${props.bheight} * 175/150)` }} alt="" />
                                        </div>
                                        <div className='d-flex position-relative justify-content-center' style={{ top: `calc(-15/1080 * ${props.bheight})`, fontSize: `calc(21/1080 * ${props.bheight})` }}>
                                            <div className='px-2 p1-2' style={{ borderRadius: `calc(5/1080 * ${props.bheight})`, backgroundColor: '#FBE551', fontWeight: '300' }}>Basic</div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex' style={{ fontSize: `calc(15/1080 * ${props.bheight})`, color: '#04C7F4' }}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div style={{ fontSize: `calc( 24/1080 * ${props.bheight})` }}>{props.name}</div>
                                    <div style={{ fontSize: `calc( 18/1080 * ${props.bheight})` }}>Fitness &amp; Nutrition</div>
                                    <div style={{ fontSize: `calc( 14/1080 * ${props.bheight})` }}>Trained 6 people</div>
                                    <div style={{ fontSize: `calc( 14/1080 * ${props.bheight})` }}>3 slots available</div>
                                    <div>
                                        <Link to='/register'><Button variant='contained' size='small' sx={{ fontSize: `calc( 18/1080 * ${props.bheight})` }}>Enroll</Button></Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }
                return (
                    <>
                        <ContentInfo />
                        <TrainerFilter />
                        <div className='d-flex flex-column align-items-center'>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Ramu Bhai' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Ramu Bhai' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Ramu Bhai' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Ramu Bhai' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Ramu Bhai' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Sean Sydall' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg00} borderRadius='20' />
                                <TrainerProfile name='Prathmesh Jaware' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg01} borderRadius='20' />
                            </div>
                            <div className='d-flex flex-row'>
                                <TrainerProfile name='Ramu Bhai' className='me-3 my-3 d-flex' bheight={props.bheight} src={trainerimg02} borderRadius='20' />
                                <TrainerProfile name='Sarika Mishra' className='me-2 my-3 d-flex' bheight={props.bheight} src={trainerimg03} borderRadius='20' />
                            </div>
                        </div>

                    </>
                );
            }
            return (
                <>
                    <div className='d-flex flex-column mt-5 pt-3' style={{ zIndex: '1', width: '100%' }}>
                        <Heading />
                        <MidContent />
                    </div>
                </>
            );
        }
        return (

            <>
                <BackgroundImages />
                <FrontBody />
                {/* <Image1/> */}
            </>
        );
    }
    return (
        <>
            <NavBar position="fixed" brand="GymFit" minHeight='50px' />


            <div className="position-absolute" style={{ width: '100%' }}>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                    <Desktop />
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                    <Mobile />
                </Box>
            </div>
        </>
    );
}

export default Trainers;