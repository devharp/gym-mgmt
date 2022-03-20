import { Box, Button, TextField } from '@mui/material'

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import img0 from "../assets/contactus/0.svg"
import { padding } from '@mui/system';


function ContactUs(props) {


    function Desktop() {
        function Block0() {
            const style = {
                height: props.bheight,
                width: '100%',
                backgroundColor: 'red',
                overflow: 'hidden'
            }
            return (
                <>
                    <div className='pt-5 d-flex flex-column justify-content-between' style={{ width: '100%', height: props.bheight, overflow: 'hidden' }}>
                        <div className='position-absolute' style={{ transform: `translate(calc(335/1920 * 100vw), calc(162/1080 * ${props.bheight}))`, letterSpacing: `calc(8.35/1080 * ${props.bheight})`, fontSize: `calc(167/1080 * ${props.bheight})`, fontWeight: '500', zIndex: '1' }}>
                            <div>CONTACT</div>
                            <div>US</div>
                        </div>
                        <img className='position-absolut' style={{ transform: `translate(calc(100vw - 100%), calc(${props.bheight} - 100%))`, width: `calc(907/1080 * ${props.bheight} * 1131/907)`, height: `calc(907/1080 * ${props.bheight})` }} src={img0} alt="" />
                    </div>
                </>
            );

        }
        function Block1() {
            const formstyle = {
                height: `calc(780/1080 * ${props.bheight})`,
                width: `calc(780/1080 * ${props.bheight} * 1200/780)`,
                backgroundColor: '#FFF5CC',
                padding: `calc(60/1080 * ${props.bheight})`,
                borderRadius: `calc(15/1080 * ${props.bheight})`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-between'

            }
            return (
                <>
                    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: props.bheight }}>
                        <div>
                            <div className='mb-3 d-flex justify-content-center' style={{
                                fontSize: `calc(36/1080 * ${props.bheight})`,
                                letterSpacing: `calc(3.6/1080 * ${props.bheight})`,
                                fontWeight: '500'
                            }}>Send us a Message and get the ring</div>
                            <div style={formstyle}>
                                <div className='d-flex justify-content-between mb-3'>
                                    <TextField size='small' variant='standard' label='Name' />
                                    <TextField size='small' variant='standard' label='Mail' />
                                </div>
                                <div className='d-flex justify-content-between mb-5'>
                                    <TextField size='small' variant='standard' label='Country' />
                                    <TextField size='small' variant='standard' label='Mobile' />
                                </div>
                                <TextField className='flex-grow-1' label='Message' variant='outlined' rows={6} size='small' multiline />
                                <div className='d-flex justify-content-end'>
                                    <Button size='small' variant='contained'>Send</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );

        }
        return (
            <>
                <div className='' style={{ width: '100%' }}>
                    <Block0 />
                    <Block1 />

                </div>
            </>
        );

    }

    function Mobile() {
        const formstyle = {
            height: `calc(250/640 * ${props.bheight})`,
            width: `calc(320/360 * 100vw)`,
            backgroundColor: '#FFF5CC',
            padding: `calc(10/640 * ${props.bheight}) calc(20/640 * ${props.bheight})`,
            borderRadius: `calc(15/640 * ${props.bheight})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-between'

        }
        const textfieldstyle = {
            fontSize: '12px'
        }
        return (
            <div style={{ width: '100%', height: `calc(${props.bheight})` }}>
                <div className='pt-5 mt-3 position-absolute' style={{ width: '100%', height: props.bheight, overflow: 'hidden' }}>
                    <div className='position-absolute ps-3' style={{ zIndex: '1', fontSize: `calc(31/640 * ${props.bheight})`, letterSpacing: `calc(1.55/640 * ${props.bheight})`, fontWeight: '500' }}>
                        <div>CONTACT</div>
                        <div>US</div>
                    </div>
                    <img className='position-absolute' style={{ transform: `translate(calc(100vw - 100%), calc(${props.bheight} * 0))`, width: `calc(229/640 * ${props.bheight} * 286/229)`, height: `calc(229/640 * ${props.bheight})` }} src={img0} alt="" />
                </div>
                <div className='position-relative d-flex flex-column align-items-center justify-content-center' style={{ top: `calc(315/640 * ${props.bheight})`, fontSize: `calc(18px)`, letterSpacing: `calc(1.8px)`, fontWeight: '500' }}>
                    <div className='mb-3'>
                        Send us a Message and get the ring
                    </div>
                    <div style={formstyle}>
                        <div className='d-flex justify-content-between'>
                            <TextField inputProps={{style: textfieldstyle}} InputLabelProps={{style: textfieldstyle}} size='small' variant='standard' label='Name' />
                            <TextField inputProps={{style: textfieldstyle}} InputLabelProps={{style: textfieldstyle}} size='small' variant='standard' label='Mail' />
                        </div>
                        <div className='d-flex justify-content-between mb-3'>
                            <TextField inputProps={{style: textfieldstyle}} InputLabelProps={{style: textfieldstyle}} size='small' variant='standard' label='Country' />
                            <TextField inputProps={{style: textfieldstyle}} InputLabelProps={{style: textfieldstyle}} size='small' variant='standard' label='Mobile' />
                        </div>
                        <TextField inputProps={{style: textfieldstyle}} InputLabelProps={{style: textfieldstyle}} className='flex-grow-1' label='Message' variant='outlined' rows={3} size='small' multiline />
                        <div className='d-flex justify-content-end'>
                            <Button sx={textfieldstyle} size='small' variant='contained'>Send</Button>
                        </div>
                    </div>
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
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: '100%' }}>
                        <Desktop className='w-100 flex-grow-1 d-flex flex-column' bheight={props.bheight} />
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                        <Mobile className='flex-grow-1' bheight={props.bheight} style={{ height: '100%', width: '100vw' }} />
                    </Box>
                    <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>

                </div>
                <div className="w-100 d-block position-absolute" style={{ backgroundColor: 'none' }}>
                </div>

            </div>
        </>
    );
}

export default ContactUs;