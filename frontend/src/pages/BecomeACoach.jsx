import { useState } from "react";

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Button, Typography, Modal } from '@mui/material/';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import InputAdornment from '@mui/material/InputAdornment';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import img00 from '../assets/becomeacoach/00.svg';
import img01 from '../assets/becomeacoach/01.svg';
import img02 from '../assets/becomeacoach/02.svg';
import img03 from '../assets/becomeacoach/03.svg';
import img04 from '../assets/becomeacoach/04.png';
import img05 from '../assets/becomeacoach/05.png';
import img06 from '../assets/becomeacoach/06.png';
import lines from '../assets/becomeacoach/lines.svg';
import girllines from '../assets/becomeacoach/girllines.svg';
import shape0 from '../assets/becomeacoach/shape0.png';
import shape from '../assets/becomeacoach/shape.png';


function BecomeACoach(props) {
    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />

                <div className="w-100 d-block position-relative" style={{ backgroundColor: 'none' }}>

                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: '100%' }}>
                        <Desktop className='w-100 flex-grow-1 d-flex flex-column' bheight={props.bheight} />
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                        <Mobile className='flex-grow-1' bheight={props.bheight} style={{ height: '100%', width: '100vw' }} />
                    </Box>
                    {/* <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div> */}
                </div>
                <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>
                <div className="w-100 d-block position-absolute" style={{ backgroundColor: 'none' }}>
                </div>

            </div>
        </>
    );
}

function Desktop(props) {

    const [blockstate, setBlockState] = useState(0);

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
                <div className="position-absolute" style={{ top: `calc(200/1080 * ${props.bheight})`, left: `calc(324.5/1920 * 100vw)` }}>

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
                <>
                    <div className="position-absolute" style={{ right: '0', zIndex: '1' }}>
                        <img className='position-relative' src={img01} style={{ top: `calc(198/1080 * ${props.bheight})`, height: `calc(760/1080 * ${props.bheight})`, width: `calc(760/1920 * 100vw * 1613/760)` }} alt="" />
                    </div>
                    <div className="position-absolute" style={{}}>
                        <img className='position-relative' src={img04} style={{ width: `calc(450/1080 * ${props.bheight})`, transform: `translateY(calc(-100/1080 * ${props.bheight}))` }} alt="" />
                    </div>
                    <div className="position-absolute" style={{ right: '0', transform: `translate(0px, calc(500/1080 * ${props.bheight}))`, overflow: 'hidden' }}>
                        <img className='position-relative' src={img05} style={{ width: `calc(1200/1080 * ${props.bheight})`, height: `calc(500/1080 * ${props.bheight})`, transform: `translate(calc(300/1080 * ${props.bheight}), 0px)` }} alt="" />
                    </div>
                </>
            );
        }
        function FrontContent() {
            return (
                <div className="pt-5 position-absolute d-flex flex-column align-items-center" style={{ left: `calc(763/1920 * 100vw)` }}>
                    <div className='my-5' style={{ fontWeight: '500', fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})` }}>We Achieve this by Offering:</div>
                    <div className='d-flex flex-column align-items-center' style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>
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
                <>
                    <div className="position-absolute" style={{ zIndex: '1' }}>
                        <img src={girllines} style={{ transform: `translateY(calc(250/1080 * ${props.bheight}))`, width: `calc(1000/1080 * ${props.bheight})` }} alt="" />
                    </div>
                    <div className="position-absolute bg-dar" style={{ right: '0', width: `calc(600/1080 * ${props.bheight})`, overflow: 'hidden' }}>
                        <img src={lines} style={{ width: `calc(1200/1080 * ${props.bheight})` }} alt="" />
                    </div>
                </>
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
                <>
                    <div className="position-absolute" style={{ transform: `translateY(calc(${props.bheight} - calc(600/1080 * ${props.bheight})))`, height: 'max-content', width: 'max-content', overflow: 'hidden' }}>
                        <img src={shape} style={{ transform: `translate(-30%, 0%)`, height: `calc(600/1080 * ${props.bheight})`, width: `calc(500/1080 * ${props.bheight})` }} alt="" />
                    </div>
                    <div className="position-absolute bg-dar" style={{ right: '0', height: `calc(${props.bheight})`, overflow: 'hidden'}}>
                        <img src={shape0} style={{ transform: `translate(60%, -0%)`, height: `calc(${props.bheight} * 1.4)`, width: `calc(800/1080 * ${props.bheight})` }} alt="" />
                    </div>
                </>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute d-flex flex-column align-items-center justify-content-evenly w-100" style={{ height: props.bheight }}>
                    <img className='' style={{ height: `calc(449/1080 * ${props.bheight})`, width: `calc(449/1080 * ${props.bheight} * 553/449)` }} src={img03} alt="" />
                    <div className='' style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>Attractive Packages</div>
                    <div className='d-flex flex-column align-items-center' style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>
                        <div>You will earn the highest salary in the industry with Go Girl. We also offer professional</div>
                        <div>development opportunities. And we'll make sure you have tremendous support both</div>
                        <div>personally and financially. We do our best not only to enhance your skills but also to enhance</div>
                        <div>your career goals.</div>
                    </div>
                    <div className=''><Button onClick={() => { setBlockState(1) }} variant='contained' size='small' sx={{ fontSize: `calc(18/1080 * ${props.bheight})` }}>Fill the form</Button></div>
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
    function FillFormAddressBlock(props) {

        const smfontsize = `calc(20/1080)`;

        function BasicInformationSubBlock(props) {
            function Heading() {
                return (
                    <div className="d-flex flex-column mb-3">
                        <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Basic Information</div>
                        <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need some details about your identity</div>
                    </div>
                );
            }

            function HarpDatePicker(props) {
                const [value, setValue] = useState(new Date('2022-03-15T21:11:54'));
                const handleChange = (newValue) => {
                    setValue(newValue);
                };
                return (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                            label="Date of Birth"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            InputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }}
                            InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }}
                            size='small'
                            className={props.className}
                            renderInput={(params) => <TextField {...params} size='small' />}
                        />
                    </LocalizationProvider>
                );
            }
            function GenderSelector() {
                const [gender, setGender] = useState('');

                const handleChange = (event) => {
                    setGender(event.target.value);
                };

                return (
                    <Box sx={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}>
                        <FormControl size='small' fullWidth>
                            <InputLabel sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Gender</InputLabel>
                            <Select
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                                sx={{ height: `calc(12/640 * ${props.bheight} * 2.8)`, padding: '0', fontSize: `calc(12/640 * ${props.bheight})` }}
                            >
                                <MenuItem value={'Male'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Male</MenuItem>
                                <MenuItem value={'Female'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Female</MenuItem>
                                <MenuItem value={'Other'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                );
            }
            return (
                <div className={props.className} style={props.style}>
                    <Heading />
                    <div className="d-flex flex-column justify-content-around flex-grow-1">
                        <div className="d-flex flex-row flex-grow-1">
                            <div className="d-flex flex-column justify-content-around flex-grow-1">
                                <TextField className='flex-grow-1' type='text' label="First Name" placeholder="Enter Your First Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                                <div className="d-flex flex-row flex-grow-1">
                                    <div className='flex-grow-1'><HarpDatePicker bheight={props.bheight} /></div>
                                    <div className='flex-grow-1'><GenderSelector bheight={props.bheight} /></div>
                                    <TextField className="flex-grow-1" type='number' label="Age" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})`, width: '3ch' } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3) }} />
                                </div>
                                <TextField className="" type='text' label="Email" placeholder="Enter Your Email Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                            </div>
                            <div className="d-flex flex-column ms-2 flex-grow-1">
                                <TextField className="flex-grow-1" type='text' label="Last Name" placeholder="Enter Your Last Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                                <div className="d-flex flex-row">
                                    <TextField className="flex-grow-1 me-3" label="Mobile Number" type='number' InputProps={{ startAdornment: (<InputAdornment position="start"><PhoneAndroidIcon /></InputAdornment>) }} variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                                    <div>

                                        <Button variant='contained' size='small' sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Verify</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
        function AddressInformationSubBlock(props) {
            function Heading() {
                return (
                    <div className="d-flex flex-column mb-3">
                        <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Address Information</div>
                        <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need some details regarding you</div>
                    </div>
                );
            }

            function MidSection(props) {

                return (
                    <div className={props.className}>
                        <div className="d-flex flex-row flex-grow-1">
                            <div className="d-flex flex-column justify-content-between" style={{ width: `calc(50vw)` }}>
                                <TextField type='text' label="First Name" placeholder="Enter Your First Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                                <TextField type='text' label="First Name" placeholder="Enter Your First Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                                <TextField type='text' label="First Name" placeholder="Enter Your First Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                            </div>
                            <div className="d-flex flex-column ms-2 justify-content-between" style={{ width: `calc(50vw)` }}>
                                <TextField className="" type='text' label="Last Name" placeholder="Enter Your Last Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                                <div className="d-flex flex-row">
                                    <TextField className='flex-grow-1' type='text' label="First Name" placeholder="Enter Your First Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                                    <TextField className='ms-2 flex-grow-1' type='text' label="First Name" placeholder="Enter Your First Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />

                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

            return (
                <div className={props.className} style={props.style}>
                    <Heading bheight={props.bheight} />
                    <MidSection bheight={props.bheight} className="d-flex flex-column justify-content-aroun flex-grow-1" />
                    <div className='d-flex justify-content-center mt-3'><Button onClick={() => { setBlockState(2) }} sx={{ width: `calc(35vw)` }} variant="contained">Next</Button></div>
                </div>
            );

        }



        return (
            <>
                <BasicInformationSubBlock bheight={props.bheight} className="d-flex flex-column pb-3" style={{ height: `calc(${props.bheight} / 2)` }} />
                <AddressInformationSubBlock bheight={props.bheight} className="d-flex flex-column pb-3" style={{ height: `calc(${props.bheight} / 2)` }} />
            </>

        );
    }
    function JobInformationSkillsTrainingBlock(props) {
        function InformationSection() {
            return (
                <div className="d-flex flex-column px-3" style={{ height: props.bheight, width: '50vw' }}>
                    <div className="d-flex flex-column">
                        <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Job Information</div>
                        <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need some details about you</div>
                    </div>
                    <div className="d-flex flex-column justify-content-around flex-grow-1">

                        <div className="d-flex flex-column flex-grow-1 justify-content-start" >
                            <div className="mt-5 mb-3" style={{ fontSize: `calc(14/640 * ${props.bheight})` }}>How were you referred to us?</div>
                            <div className="mb-3 d-flex flex-row">
                                <div className="d-flex flex-column">
                                    <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Walk-In</Typography>} />
                                    <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Newspaper Ad</Typography>} />
                                    <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Twitter</Typography>} />
                                    <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Other (please specify)</Typography>} />

                                </div>
                                <div className="d-flex flex-column">
                                    <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Employee</Typography>} />
                                    <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Facebook</Typography>} />
                                    <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Craigslist</Typography>} />
                                </div>

                            </div>
                            <TextField className="mt-3 mb-3" type='text' label="Other" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                            <div className="mt-4 d-flex flex-column"><TextField InputProps={{ endAdornment: (<InputAdornment position="start"><AttachFileIcon /></InputAdornment>) }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})`, width: '100%' } }} id="standard-basic" label="Upload Your Resume" size='small' variant="outlined" disabled={true} /></div>
                        </div>
                    </div>
                </div>
            );
        }
        function SkillsTrainingSection() {

            function Heading() {
                return (
                    <div className="d-flex flex-column">
                        <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Job Skills &amp; Training</div>
                        <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need details regarding your skills and experience</div>
                    </div>
                );
            }

            function UploadBox() {
                function UploadPhoto() {
                    return (
                        <Box className="d-flex justify-content-center align-items-center" sx={{ border: 1, borderColor: 'text.primary', width: `calc(90/640 * ${props.bheight})`, height: `calc(90/640 * ${props.bheight})` }}>
                            <FileUploadIcon />
                        </Box>

                    );
                }
                return (
                    <>
                        <div className="d-flex flex-column">
                            <div className="mb-3" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})` }}>Upload Your Photos</div>
                            <div className="d-flex flex-row justify-content-between">
                                <UploadPhoto />
                                <UploadPhoto />
                                <UploadPhoto />
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <Checkbox />
                            <div style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>
                                I accept the
                            </div>
                            <Typography sx={{ color: 'primary.main' }}>&nbsp;terms &amp; conditions</Typography>
                        </div>
                    </>
                );
            }
            return (
                <div className="d-flex flex-column px-3" style={{ height: props.bheight, width: `50vw` }}>
                    <Heading />
                    <div className="d-flex flex-column justify-content-around flex-grow-1">

                        <TextField className="" size="small" label="Describe Your Skills" variant="outlined" type='text' multiline rows={5} inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                        <div className="mt-4 d-flex flex-column"><TextField InputProps={{ endAdornment: (<InputAdornment position="start"><AttachFileIcon /></InputAdornment>) }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})`, width: '100%' } }} id="standard-basic" label="Upload Your Resume" size='small' variant="outlined" disabled={true} /></div>
                        <UploadBox />
                    </div>
                </div>
            );
        }
        return (
            <div className='d-flex flex-row px-3'>
                <InformationSection />
                <SkillsTrainingSection />
            </div>

        );
    }

    return (
        <div className={props.className} style={props.style}>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight }}>
                <Block1 />
            </div>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight, backgroundColor: '#FBE551' }}>
                <Block2 />
            </div>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight }}>
                <Block3 />
            </div>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight }}>
                <Block4 />
            </div>
            <div className={`${(blockstate == 1) ? 'd-flex' : 'd-none'} flex-column align-items-center pt-5 mt-3`} style={{ height: props.bheight }}>
                <div className='d-flex flex-column' style={{ minWidth: '600px', width: '50vw' }}>
                    <FillFormAddressBlock bheight={props.bheight} />
                </div>
            </div>
            <div className={`${(blockstate == 2) ? 'd-flex' : 'd-none'} flex-column pt-5 mt-3`}>
                <JobInformationSkillsTrainingBlock bheight={props.bheight} />
                <div className="my-5 d-flex justify-content-center">
                    <ButtonModal variant='contained' size='small' sx={{ fontSize: `calc(20/1080 * ${props.bheight})`, width: '35vw' }}>Submit</ButtonModal>
                </div>
            </div>
        </div>
    );

}

function Mobile(props) {
    const [blockstate, setBlockState] = useState(0);

    const switchBlockState = (i) => {
        setBlockState(i);
        window.scrollTo(0, 0);
    }
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
                <>
                    <div className="position-absolute" style={{ zIndex: '1' }}>
                        <img className='mt-3' src={img01} style={{ height: `calc(160/640 * ${props.bheight})`, width: `calc(340/360 * 100vw)` }} alt="" />
                    </div>
                    <div className="position-absolute bg-" style={{ height: 'max-content', width: 'max-content' }}>
                        <img src={img06} style={{ width: `calc(80/1080 * ${props.bheight})`, height: `calc(200/1080 * ${props.bheight})` }} alt="" />
                    </div>
                    <div className="position-absolute" style={{
                        transform: `translate(calc(100vw - calc(300/1080 * ${props.bheight})), calc(${props.bheight} - calc(300/1080 * ${props.bheight})))`,
                        height: 'max-content',
                        width: `calc(300/1080 * ${props.bheight})`,
                        overflow: 'hidden'
                    }}>
                        <img src={img05} style={{
                            width: `calc(400/1080 * ${props.bheight})`,
                            height: `calc(300/1080 * ${props.bheight})`,
                            transform: `translate(0, calc(120/1080 * ${props.bheight}))`
                        }} alt="" />
                    </div>
                </>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute d-flex flex-column justify-content-center" style={{ width: '100vw', height: props.bheight }}>
                    <div className='d-flex justify-content-center my-5' style={{ fontWeight: '500', fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})` }}>We Achieve this by Offering:</div>
                    <div className='d-flex justify-content-center' style={{ fontSize: `calc(14/640 * ${props.bheight})` }}>
                        <div className='' style={{ textAlign: 'center', maxWidth: 'calc(320px)' }}>With Go Girl, You have a lot of flexibility in terms of your work schedule and timing. We let you communicate directly with your clients and fix the timings that work for you both. In addition, you won't face any peer pressure at Go Girl so that you will have a fun and self-motivated work environment.</div>
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
                <div className="position-absolute d-flex justify-content-center bg-dar" style={{ transform: `translateY(calc(50/640 * ${props.bheight}))`, zIndex: '1', width: '100vw', maxWidth: '100vw', overflow: 'hidden' }}>
                    <img src={girllines} style={{ width: `calc(200/360 * ${props.bheight})` }} alt="" />
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute d-flex flex-column justify-content-around" style={{ width: '100%', height: props.bheight }}>
                    <div className="d-flex justify-content-center"><img style={{ width: `calc(287/360 * 100vw)`, height: `calc(264/640 * ${props.bheight})` }} src={img02} alt="" /></div>
                    <div className="d-flex flex-column align-items-center bg-">
                        <div className='my-4' style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>Exposure to a Range of People</div>
                        <div className="" style={{ fontSize: `calc(14/640 * ${props.bheight})`, maxWidth: '320px', textAlignLast: 'center', textAlign: 'center' }}>
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
                <div className="position-absolute" style={{ right: '0', width: `calc(300/640 * ${props.bheight})`, overflow: 'hidden' }}>
                    <img src={lines} style={{ transform: `translate(0, calc(-70/640 * ${props.bheight}))`, width: `calc(500/640 * ${props.bheight})` }} alt="" />
                </div>
            );
        }
        function FrontContent() {
            return (
                <div className="position-absolute d-flex flex-column align-items-center justify-content-evenly w-100" style={{ height: props.bheight }}>
                    <img className='' style={{ height: `calc(187/640 * ${props.bheight})`, width: `calc(230/360 * 100vw)` }} src={img03} alt="" />
                    <div className='' style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>Attractive Packages</div>
                    <div className='d-flex flex-column align-items-center' style={{ fontSize: `calc(14/640 * ${props.bheight})`, maxWidth: '320px', textAlign: 'center', textAlignLast: 'center' }}>You will earn the highest salary in the industry with Go Girl. We also offer professional development opportunities. And we'll make sure you have tremendous support both personally and financially. We do our best not only to enhance your skills but also to enhance your career goals.</div>
                    <div className=''><Button onClick={() => { switchBlockState(1) }} variant='contained' size='small' sx={{ fontSize: `calc(18/640 * ${props.bheight})` }}>Fill the form</Button></div>
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
    function FillFormBlock() {

        function HarpDatePicker() {
            const [value, setValue] = useState(new Date('2022-03-15T21:11:54'));
            const handleChange = (newValue) => {
                setValue(newValue);
            };
            return (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Date of Birth"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        InputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }}
                        InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }}
                        size='small'
                        renderInput={(params) => <TextField {...params} size='small' />}
                    />
                </LocalizationProvider>
            );
        }
        function GenderSelector() {
            const [gender, setGender] = useState('');

            const handleChange = (event) => {
                setGender(event.target.value);
            };

            return (
                <Box sx={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}>
                    <FormControl size='small' fullWidth>
                        <InputLabel sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Gender</InputLabel>
                        <Select
                            value={gender}
                            label="Gender"
                            onChange={handleChange}
                            sx={{ height: `calc(12/640 * ${props.bheight} * 2.8)`, padding: '0', fontSize: `calc(12/640 * ${props.bheight})` }}
                        >
                            <MenuItem value={'Male'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Male</MenuItem>
                            <MenuItem value={'Female'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Female</MenuItem>
                            <MenuItem value={'Other'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            );
        }

        return (
            <>
                <div className="d-flex flex-column">
                    <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Basic Information</div>
                    <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need some details about your identity</div>
                </div>
                <div className="d-flex flex-column justify-content-around flex-grow-1">
                    <TextField className="" type='text' label="First Name" placeholder="Enter Your First Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    <TextField className="" type='text' label="Last Name" placeholder="Enter Your Last Name Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    <div className='d-flex flex-row'>
                        <div className='me-3'><HarpDatePicker /></div>
                        <div className=''><GenderSelector /></div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        <TextField className="" type='number' label="Age" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})`, width: '3ch' } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3) }} />
                        <TextField label="Mobile Number" type='number' InputProps={{ startAdornment: (<InputAdornment position="start"><PhoneAndroidIcon /></InputAdornment>) }} variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    </div>
                    <TextField className="" type='text' label="Email" placeholder="Enter Your Email Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                </div>

                <div className="mb-3 d-flex justify-content-center">
                    <Button variant='contained' size='small' sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Verify</Button>
                </div>
            </>
        );
    }
    function AddressFormBlock() {

        return (
            <>
                <div className="d-flex flex-column">
                    <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Address Information</div>
                    <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need details regarding your Address</div>
                </div>
                <div className="d-flex flex-column justify-content-around flex-grow-1">
                    <TextField className="" type='text' label="Country" placeholder="Enter Your Country Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    <TextField className="" type='text' label="Address 1" placeholder="Enter Your Address 1 Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    <TextField className="" type='text' label="Address 2" placeholder="Enter Your Address 2 Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    <TextField className="" type='text' label="Postal Code" placeholder="Enter Your Postal Code Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    <div className='d-flex flex-row'>
                        <TextField className="me-2" type='text' label="City" placeholder="City Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                        <TextField className="ms-4" type='text' label="State" placeholder="State Here" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    </div>
                </div>

                <div className="mb-3 d-flex justify-content-center">
                    <Button onClick={() => { switchBlockState(2) }} variant='contained' size='small' sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Next</Button>
                </div>
            </>
        );
    }
    function JobInformationBlock() {

        return (
            <>
                <div className="d-flex flex-column">
                    <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Job Information</div>
                    <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need some details about you</div>
                </div>
                <div className="d-flex flex-column justify-content-around flex-grow-1">

                    <div className="d-flex flex-column flex-grow-1 justify-content-start" >
                        <div className="mt-5 mb-3">How were you referred to us?</div>
                        <div className="mb-3 d-flex flex-row">
                            <div className="d-flex flex-column">
                                <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Walk-In</Typography>} />
                                <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Newspaper Ad</Typography>} />
                                <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Twitter</Typography>} />
                                <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Other (please specify)</Typography>} />

                            </div>
                            <div className="d-flex flex-column">
                                <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Employee</Typography>} />
                                <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Facebook</Typography>} />
                                <FormControlLabel className="mb-3" control={<Checkbox />} label={<Typography style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>Craigslist</Typography>} />
                            </div>

                        </div>
                        <TextField className="mt-3 mb-3" type='text' label="Other" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                        <div className="mt-4 d-flex flex-column"><TextField InputProps={{ endAdornment: (<InputAdornment position="start"><AttachFileIcon /></InputAdornment>) }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})`, width: '100%' } }} id="standard-basic" label="Upload Your Resume" size='small' variant="outlined" disabled={true} /></div>
                    </div>
                </div>
            </>
        );
    }

    function JobSkillsTrainingBlock() {

        function Heading() {
            return (
                <div className="d-flex flex-column">
                    <div className="" style={{ fontFamily: 'Helvetica Neue', fontSize: `calc(18/640 * ${props.bheight})` }}>Job Skills &amp; Training</div>
                    <div className="" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>We need details regarding your skills and experience</div>
                </div>
            );
        }

        function UploadBox() {
            function UploadPhoto() {
                return (
                    <Box className="d-flex justify-content-center align-items-center" sx={{ border: 1, borderColor: 'text.primary', width: `calc(90/640 * ${props.bheight})`, height: `calc(90/640 * ${props.bheight})` }}>
                        <FileUploadIcon />
                    </Box>

                );
            }
            return (
                <>
                    <div className="d-flex flex-column">
                        <div className="mb-3" style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})` }}>Upload Your Photos</div>
                        <div className="d-flex flex-row justify-content-between">
                            <UploadPhoto />
                            <UploadPhoto />
                            <UploadPhoto />
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <Checkbox />
                        <div style={{ fontFamily: 'Helvetica Neue 45 Light', fontSize: `calc(14/640 * ${props.bheight})`, }}>
                            I accept the
                        </div>
                        <Typography sx={{ color: 'primary.main' }}>&nbsp;terms &amp; conditions</Typography>
                    </div>
                </>
            );
        }
        return (
            <>
                <Heading />
                <div className="d-flex flex-column justify-content-around flex-grow-1">

                    <TextField className="" size="small" label="Describe Your Skills" variant="outlined" type='text' multiline rows={5} inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} />
                    <div className="mt-4 d-flex flex-column"><TextField InputProps={{ endAdornment: (<InputAdornment position="start"><AttachFileIcon /></InputAdornment>) }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})`, width: '100%' } }} id="standard-basic" label="Upload Your Resume" size='small' variant="outlined" disabled={true} /></div>
                    <UploadBox />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    {/* <Button variant='contained' size='small' sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Submit</Button> */}
                    <ButtonModal variant='contained' size='small' sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Submit</ButtonModal>

                </div>
            </>
        );
    }
    return (
        <div className={props.className} style={props.style}>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight }}>
                <Block1 />
            </div>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight, backgroundColor: '#FBE551' }}>
                <Block2 />
            </div>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight }}>
                <Block3 />

            </div>
            <div className={(blockstate == 0) ? 'd-flex' : 'd-none'} style={{ height: props.bheight }}>
                <Block4 />
            </div>
            <div className={`${(blockstate == 1) ? 'd-flex' : 'd-none'} flex-column`}>
                <div className="container d-flex justify-content-center" style={{ height: props.bheight }}>
                    <div className='mt-3 pt-5 d-flex flex-column justify-content-between'><FillFormBlock /> </div>
                </div>
                <div className="container d-flex justify-content-center w-100" style={{ height: props.bheight }}>
                    <div className='d-flex flex-column justify-content-between pt-3'><AddressFormBlock /> </div>

                </div>
            </div>
            <div className={`${(blockstate == 2) ? 'd-flex' : 'd-none'} flex-column`}>
                <div className="container d-flex justify-content-center" style={{ height: props.bheight }}>
                    <div className='mt-3 pt-5 d-flex flex-column justify-content-between'><JobInformationBlock /> </div>
                </div>
                <div className="container d-flex justify-content-center w-100" style={{ height: props.bheight }}>
                    <div className='d-flex flex-column justify-content-between pt-3 flex-grow-1'><JobSkillsTrainingBlock /> </div>

                </div>
            </div>
        </div>
    );
}

function ButtonModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Button sx={props.sx} size={props.size} variant={props.variant} onClick={handleOpen}>{props.children}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Registration Successful
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your Form has been registered successfully
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}


export default BecomeACoach