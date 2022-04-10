import { useEffect } from "react";
import NavBar from "../components/navbar/NavBar";

import { Box, Button, Checkbox, TextField, InputAdornment } from "@mui/material"
import { AccountCircle, Email, PhoneAndroid, Lock, Facebook, Google } from '@mui/icons-material';

import img00 from '../assets/register/00.png'
import imggetstarted from '../assets/register/getstartedhere0.svg'

import { bgcolor } from "@mui/system";
function Register(props) {
    useEffect(() => {
        window.scroll(0, 0);
        // document.body.style.backgroundColor = '#FBE551';


    }, [])
    function Desktop(props) {
        const inputValuesStyle = {
            fontSize: `calc(20/1080 * ${props.bheight})`
        }
        return (
            <div className={props.className} style={props.style}>
                <div className="position-absolute d-flex" >
                    <div className="position-relative" style={{ fontSize: `calc(196/1920 * 100vw)`, left: `10vw`, fontWeight: '700', color: '#FFF5CC' }}>
                        <div>GET STARTED</div>
                        <div>HERE</div>
                    </div>
                </div>
                <div className="position-absolute d-flex align-items-end" style={{ bottom: '5vh', left: '50vw', width: '50vw' }}>
                    <div className="d-flex flex-column">
                        <div className="mb-3" style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>Register</div>
                        <TextField className="mb-3" label='Username' size="small" placeholder="Enter Username Here"
                            InputProps={{
                                style: inputValuesStyle,
                                startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>
                            }}
                            InputLabelProps={{ style: inputValuesStyle }} />
                        <TextField className="mb-3" label='Email' size="small" placeholder="Enter Email Here"
                            InputProps={{
                                style: inputValuesStyle,
                                startAdornment: <InputAdornment position="start"><Email /></InputAdornment>
                            }}
                            InputLabelProps={{ style: inputValuesStyle }} />
                        <TextField className="mb-3" label='Mobile' size="small" placeholder="Enter Mobile Number Here"
                            InputProps={{
                                style: inputValuesStyle,
                                startAdornment: <InputAdornment position="start"><PhoneAndroid /></InputAdornment>
                            }}
                            InputLabelProps={{ style: inputValuesStyle }} />
                        <TextField className="mb-3" label='Password' size="small" placeholder="Enter Password Here"
                            InputProps={{
                                style: inputValuesStyle,
                                startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>
                            }}
                            InputLabelProps={{ style: inputValuesStyle }} />
                        <div className="d-flex flex-row align-items-center mb-3" style={{ fontSize: `calc(20/1080 * ${props.bheight})` }}>
                            <Checkbox />
                            <div>I accept the&nbsp;</div>
                            <div className="text-primary">terms &amp; condition</div>
                        </div>
                        <Button className="mb-3" variant="contained" size="small" sx={{ fontSize: `calc(20/1080 * ${props.bheight})`, backgroundColor: 'rgb(4, 199, 244)', '&:hover': { backgroundColor: 'rgb(4, 199, 244)' } }}>Register</Button>
                        <div className="mb-1" >Or Sign In Using <Facebook /><Google /></div>
                        <div className="mb-3" style={{ height: '1px', backgroundColor: 'black' }}></div>
                        <div className="mb-4 d-flex justify-content-center" style={{ fontSize: `calc(18/1080 * ${props.bheight})`, letterSpacing: `calc(2.7/1080 * ${props.bheight})` }}><b>Already have an account</b></div>


                    </div>
                </div>
                <div className="position-absolute" style={{ bottom: 0 }}>
                    <img src={img00} style={{ height: `calc(861/1080 * ${props.bheight})`, width: `calc(861/1080 * ${props.bheight} * 536/861)` }} alt="" />
                </div>
            </div>
        );
    }

    function Mobile() {
        function TopBar() {
            return (
                <>
                    <div className="mb-3 d-flex justify-content-center" style={{
                        fontSize: `calc(36/1080 * ${props.bheight})`,
                        letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500'
                    }}>Register</div>
                    <TextField className="mb-3" label='Username' size="small" placeholder="Enter Username Here"
                        InputProps={{
                            style: { fontSize: `calc(15px)` },
                            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>
                        }}
                        InputLabelProps={{ style: { fontSize: `calc(15px)` } }} />
                    <TextField className="mb-3" label='Email' size="small" placeholder="Enter Email Here"
                        InputProps={{
                            style: { fontSize: `calc(15px)` },
                            startAdornment: <InputAdornment position="start"><Email /></InputAdornment>
                        }}
                        InputLabelProps={{ style: { fontSize: `calc(15px)` } }} />
                    <TextField className="mb-3" label='Mobile' size="small" placeholder="Enter Mobile Number Here"
                        InputProps={{
                            style: { fontSize: `calc(15px)` },
                            startAdornment: <InputAdornment position="start"><PhoneAndroid /></InputAdornment>
                        }}
                        InputLabelProps={{ style: { fontSize: `calc(15px)` } }} />
                    <TextField className="mb-3" label='Password' size="small" placeholder="Enter Password Here"
                        InputProps={{
                            style: { fontSize: `calc(15px)` },
                            startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>
                        }}
                        InputLabelProps={{ style: { fontSize: `calc(15px)` } }} />
                    <div className="d-flex flex-row justify-content-between align-items-center mb-3" style={{ fontSize: `calc(13px)` }}>
                        <div className="d-flex flex-row align-items-center">
                            <Checkbox />
                            <div>I accept the&nbsp;</div>
                            <div className="text-primary">terms &amp; condition</div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center mb-3">
                        <Button className="" variant="contained" size="small" sx={{ fontSize: `calc(18/1080 * ${props.bheight})` }}>Register</Button>
                    </div>
                    <div style={{ backgroundColor: '#707070', width: '60%', height: '1px' }}></div>
                    <div className="mb-3" style={{ height: '1px', backgroundColor: 'black' }}></div>
                    <div className="mb-3 d-flex justify-content-center" style={{ fontSize: `calc(60/1920 * 100vw)`, letterSpacing: `calc(6/1920 * 100vw)` }}><b>Already have an account</b></div>
                    <div className="mb-1 d-flex flex-column align-items-center" >
                        <div>Or Sign In Using</div>
                        <div><Facebook /><Google /></div>
                    </div>
                </>
            );
        }
        return (
            <>
                <div className='position-relative' style={{ display: 'block', width: '100%', height: 'max-content', backgroundColor: '#FBE551' }}>
                    <div className="d-flex justify-content-center" style={{ width: '100vw' }}>
                        <div className='position-relative d-flex flex-column align-items-center' style={{ maxWidth: '500px', width: '80vw' }}>
                            <TopBar />
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className='position-absolute d-flex justify-content-center ' style={{ width: '100vw' }}>
                            <img className='' src={imggetstarted} style={{ height: `calc(200/1080 * ${props.bheight})` }} alt="" />
                        </div>
                        <div className='position-relative' style={{ height: `calc(150/640 * ${props.bheight})` }}>
                            <img className='' src={img00} style={{ height: `calc(200/640 * ${props.bheight})`, transform: `translateY(calc(-50/640 * ${props.bheight}))` }} alt="" />
                        </div>

                    </div>
                </div>

            </>);
    }
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />

                <div className="w-100 d-block position-absolute" style={{ width: '100%', height: '100%' }}>

                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: props.bheight }}>
                        <div className="pt-5" style={{ height: '100%', width: '100%', backgroundColor: '#FBE551' }}>
                            <Desktop className='pt-3 w-100 flex-grow-1 d-flex flex-column' style={{ height: '100%', width: '100%' }} bheight={props.bheight} />
                        </div>
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%', backgroundColor: '#FBE551' }}>
                        <div className="mt-5 pt-5" style={{ width: '100%' }}>
                            <Mobile />
                        </div>

                    </Box>
                </div>


            </div>
        </>
    );
}

export default Register;