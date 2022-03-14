import { useState } from "react";

import NavBar from "../components/navbar/NavBar";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Button } from '@mui/material/';

function Tools(props) {
    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />

                <div className="pt-5 w-100 d-block position-absolute" style={{ backgroundColor: 'none', height: `${props.bheight}` }}>

                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: '100%' }}>
                        <Desktop className='pt-3 w-100 flex-grow-1 d-flex flex-column' bheight={props.bheight} />
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                        <Mobile className='pt-3 flex-grow-1' bheight={props.bheight} style={{ height: '100%', width: '100vw' }} />
                    </Box>
                </div>

            </div>
        </>
    );
}

function Desktop(props) {
    const[calc, setCalc] = useState(0);
    function CalculatorsButtons(props) {
        return (
            <div className={props.className}>
                <div className={props.eClassName} style={props.eStyle}>BMR Calculator</div>
                <div className={props.eClassName} style={props.eStyle}>Body Fat Calculator</div>
                <div className={props.eClassName} style={props.eStyle}>Ideal Weight Calculator</div>
            </div>
        );
    }
    function BMRCalculator() {
        function CalculatorTitle() {
            return (
                <>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>BMR Calculator</div>
                        <div className="ms-2">i</div>
                    </div>
                </>
            );
        }
        function InputValues() {
            function GenderSelector() {
                const [age, setAge] = useState('');

                const handleChange = (event) => {
                    setAge(event.target.value);
                };

                return (
                    <Box sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }}>
                        <FormControl size='small' fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Male'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Male</MenuItem>
                                <MenuItem value={'Female'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Female</MenuItem>
                                <MenuItem value={'Other'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                );
            }
            return (
                <>
                    <div className="d-flex flex-column justify-content-between">
                        <TextField className="me-5" type='number' label="Age" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        <TextField className="me-5" type='number' label="Height (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <GenderSelector />
                        <TextField type='number' label="Weight (kg)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                    </div>
                </>
            );
        }
        function OutputResult() {
            return (
                <div className="d-flex flex-column ms-5">
                    <div className="mb-3" style={{ fontSize: `calc(31/1080 * ${props.bheight})` }}>Your BMR is</div>
                    <div className="" style={{ fontSize: `calc(60/1080 * ${props.bheight})`, fontWeight: `500` }}>1,540</div>
                    <div className="" style={{ fontSize: `calc(20/1080 * ${props.bheight})`, fontWeight: `300` }}>Calories/day</div>
                </div>
            );
        }
        return (
            <div className={`flex-column ${(calc == 0) ? 'd-flex' : 'd-none' }`} style={{width: 'max-content'}}>
                <CalculatorTitle />
                <div className="d-flex my-5">
                    <InputValues />
                    <OutputResult />
                </div>
                <div className="d-flex justify-content-center"><Button variant="contained"  size="small">Calculate BMR</Button></div>
            </div>
        );
    }
    function BodyFatCalculator() {
        function CalculatorTitle() {
            return (
                <>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>Body Fat Calculator</div>
                        <div className="ms-2">i</div>
                    </div>
                </>
            );
        }
        function InputValues() {
            function GenderSelector() {
                const [gender, setGender] = useState('');

                const handleChange = (event) => {
                    setGender(event.target.value);
                };

                return (
                    <Box sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }}>
                        <FormControl size='small' fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Male'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Male</MenuItem>
                                <MenuItem value={'Female'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Female</MenuItem>
                                <MenuItem value={'Other'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                );
            }
            return (
                <>
                    <div className="d-flex flex-column justify-content-between">
                        <TextField className="me-5" type='number' label="Age" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        <TextField className="me-5 my-3" type='number' label="Height (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        <TextField className="me-5" type='number' label="Neck (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <GenderSelector />
                        <TextField className=" my-3" type='number' label="Weight (kg)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        <TextField type='number' label="Waist (m)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                    </div>
                </>
            );
        }
        function OutputResult() {
            return (
                <div className="d-flex flex-column align-items-center ms-5">
                    <div className="mb-3" style={{ fontSize: `calc(31/1080 * ${props.bheight})` }}>Your Body Fat is</div>
                    <div className="" style={{ fontSize: `calc(60/1080 * ${props.bheight})`, fontWeight: `500` }}>15%</div>
                </div>
            );
        }
        return (
            <div className={`flex-column ${(calc == 1) ? 'd-flex' : 'd-none' }`} style={{width: 'max-content'}}>
                <CalculatorTitle />
                <div className="d-flex my-5">
                    <InputValues />
                    <OutputResult />
                </div>
                <div className="d-flex justify-content-center"><Button variant="contained"  size="small">Calculate Body Fat</Button></div>
            </div>
        );
    }
    function IWCalculator() {
        function CalculatorTitle() {
            return (
                <>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>Ideal Weight Calculator</div>
                        <div className="ms-2">i</div>
                    </div>
                </>
            );
        }
        function InputValues() {
            function GenderSelector() {
                const [gender, setGender] = useState('');

                const handleChange = (event) => {
                    setGender(event.target.value);
                };

                return (
                    <Box sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }}>
                        <FormControl size='small' fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Male'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Male</MenuItem>
                                <MenuItem value={'Female'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Female</MenuItem>
                                <MenuItem value={'Other'} sx={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                );
            }
            return (
                <>
                    <div className="d-flex flex-column justify-content-between">
                        <TextField className="me-5" type='number' label="Age" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        <TextField className="me-5 my-3" type='number' label="Height (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <GenderSelector />
                    </div>
                </>
            );
        }
        function OutputResult() {
            return (
                <div className="d-flex flex-column align-items-center ms-5">
                    <div className="mb-3" style={{ fontSize: `calc(31/1080 * ${props.bheight})` }}>Your Ideal Weight is</div>
                    <div className="" style={{ fontSize: `calc(60/1080 * ${props.bheight})`, fontWeight: `500` }}>75.5kg</div>
                </div>
            );
        }
        return (
            <div className={`flex-column ${(calc == 2) ? 'd-flex' : 'd-none' }`} style={{width: 'max-content'}}>
                <CalculatorTitle />
                <div className="d-flex my-5">
                    <InputValues />
                    <OutputResult />
                </div>
                <div className="d-flex justify-content-center"><Button variant="contained"  size="small">Calculate Ideal Weight</Button></div>
            </div>
        );
    }

    return (
        <div className={props.className} style={props.style}>
            <CalculatorsButtons bheight={props.bheight} className='d-flex flex-row justify-content-center py-2' eClassName='mx-3 mt-4 p-2' eStyle={{ fontSize: `calc(20/1080 * ${props.bheight})`, backgroundColor: '#FBE551', borderRadius: `calc(5/1080 * ${props.bheight})` }} />
            <div className="d-flex flex-row flex-grow-1 bg-dar">
                <BMRCalculator />
                <BodyFatCalculator />
                <IWCalculator />
            </div>
        </div>
    );
}

function Mobile(props) {
    function CalculatorsButtons(props) {
        return (
            <div className={props.className} style={props.style}>
                <div className={props.eClassName} style={props.eStyle}>BMR Calculator</div>
                <div className={props.eClassName} style={props.eStyle}>Body Fat Calculator</div>
                <div className={props.eClassName} style={props.eStyle}>Ideal Weight Calculator</div>
            </div>
        );
    }
    return (
        <div>
            <div className={props.className} style={props.style}>
                <CalculatorsButtons bheight={props.bheight} style={{ height: '100%' }}
                    className='d-flex flex-column justify-content-around align-items-center py-2'
                    eClassName='mx-3 mt-4 p-2 d-flex justify-content-center align-items-center'
                    eStyle={{
                        fontSize: `calc(20/640 * 100vw)`,
                        backgroundColor: '#FBE551',
                        borderRadius: `calc(5/640 * ${props.bheight})`,
                        height: `calc(50/640 * 100vw)`,
                        width: `calc(265/640 * 100vw)`
                    }} />
            </div>
        </div>
    );
}



export default Tools