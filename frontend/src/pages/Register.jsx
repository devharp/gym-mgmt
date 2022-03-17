import { useEffect } from "react";
import NavBar from "../components/navbar/NavBar";

import { Box, Button, Checkbox, TextField, InputAdornment } from "@mui/material"
import { AccountCircle, Email, PhoneAndroid, Lock, Facebook, Google } from '@mui/icons-material';
function Register(props) {
    useEffect(() => {
        window.scroll(0, 0);
    
      
    }, [])
    function Desktop(props) {
        return (
            <div className={props.className} style={props.style}>
                <div className="position-absolute d-flex" >
                    <div className="position-relative" style={{ fontSize: `calc(196/1920 * 100vw)`, left: `10vw`, fontWeight: '700', color: '#FFF5CC' }}>
                        <div>GET STARTED</div>
                        <div>HERE</div>
                    </div>
                </div>
                <div className="position-absolute d-flex align-items-end" style={{ bottom: '0', left: '50vw', width: '50vw' }}>
                    <div className="d-flex flex-column">
                        <div className="mb-3" style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>Register</div>
                        <TextField className="mb-3" label='Username' size="small" placeholder="Enter Username Here"
                            InputProps={{
                                style: { fontSize: `calc(28/1080 * ${props.bheight})` },
                                startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>
                            }}
                            InputLabelProps={{ style: { fontSize: `calc(28/1080 * ${props.bheight})` } }} />
                        <TextField className="mb-3" label='Email' size="small" placeholder="Enter Email Here"
                            InputProps={{
                                style: { fontSize: `calc(28/1080 * ${props.bheight})` },
                                startAdornment: <InputAdornment position="start"><Email /></InputAdornment>
                            }}
                            InputLabelProps={{ style: { fontSize: `calc(28/1080 * ${props.bheight})` } }} />
                        <TextField className="mb-3" label='Mobile' size="small" placeholder="Enter Mobile Number Here"
                            InputProps={{
                                style: { fontSize: `calc(28/1080 * ${props.bheight})` },
                                startAdornment: <InputAdornment position="start"><PhoneAndroid /></InputAdornment>
                            }}
                            InputLabelProps={{ style: { fontSize: `calc(28/1080 * ${props.bheight})` } }} />
                        <TextField className="mb-3" label='Password' size="small" placeholder="Enter Password Here"
                            InputProps={{
                                style: { fontSize: `calc(28/1080 * ${props.bheight})` },
                                startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>
                            }}
                            InputLabelProps={{ style: { fontSize: `calc(28/1080 * ${props.bheight})` } }} />
                        <div className="d-flex flex-row align-items-center mb-3" style={{ fontSize: `calc(20/1080 * ${props.bheight})` }}>
                            <Checkbox />
                            <div>I accept the&nbsp;</div>
                            <div className="text-primary">terms &amp; condition</div>
                        </div>
                        <Button className="mb-3" variant="contained" size="small" sx={{ fontSize: `calc(20/1080 * ${props.bheight})` }}>Register</Button>
                        <div className="mb-1" >Or Sign In Using <Facebook /><Google /></div>
                        <div className="mb-3" style={{ height: '1px', backgroundColor: 'black' }}></div>
                        <div className="mb-4 d-flex justify-content-center" style={{ fontSize: `calc(18/1080 * ${props.bheight})`, letterSpacing: `calc(2.7/1080 * ${props.bheight})` }}><b>Already have an account</b></div>


                    </div>
                </div>
                <div className="position-absolute" style={{ bottom: 0 }}>Image Here</div>
            </div>
        );
    }

    function Mobile(props) {
        return (
            <div className={props.className} style={props.style}>
                <div className="d-flex flex-column" style={{ width: '60vw' }}>
                    <div className="mb-3 d-flex justify-content-center" style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>Register</div>
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
                        <Button className="" variant="contained" size="small" sx={{ fontSize: `calc(50/1920 * 100vw)` }}>Register</Button>
                    </div>
                    <div className="mb-3" style={{ height: '1px', backgroundColor: 'black' }}></div>
                    <div className="mb-3 d-flex justify-content-center" style={{ fontSize: `calc(60/1920 * 100vw)`, letterSpacing: `calc(6/1920 * 100vw)` }}><b>Already have an account</b></div>
                    <div className="mb-1 d-flex flex-column align-items-center" >
                        <div>Or Sign In Using</div>
                        <div><Facebook /><Google /></div>
                    </div>
                </div>
                <div className="" style={{ height: `calc(300/640 * 100vw)`, overflow: 'hidden' }} >
                    <div className="position-relative" style={{ fontSize: `calc(196/1920 * 100vw)`, fontWeight: '700', color: '#FFF5CC' }}>GET STARTED</div>
                    <div className="position-relative" style={{ top: `calc(-40/640 * ${props.bheight})`, fontSize: `calc(500/1920 * 100vw)`, fontWeight: '700', color: '#FFF5CC' }}>HERE</div>
                </div>
            </div>
        );
    }
    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />

                <div className="w-100 d-block position-absolute" style={{ backgroundColor: 'none' }}>

                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: props.bheight }}>
                        <div className="pt-5" style={{ height: '100%', width: '100%', backgroundColor: '#FBE551' }}>
                            <Desktop className='pt-3 w-100 flex-grow-1 d-flex flex-column' style={{ height: '100%', width: '100%' }} bheight={props.bheight} />
                        </div>
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', minHeight: props.bheight, backgroundColor: '#FBE551' }}>
                        <div className="pt-5">
                            <Mobile className='flex-grow-1 pt-3 d-flex flex-column align-items-center justify-content-center' bheight={props.bheight} style={{ height: '100%', width: '100vw' }} />
                        </div>
                    </Box>
                </div>


            </div>
        </>
    );
}

export default Register;