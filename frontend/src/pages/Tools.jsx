import { useState } from "react";

import NavBar from "../components/navbar/NavBar";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Button, Modal, Typography } from '@mui/material/';

import img00 from '../assets/getacoach/00.svg'
import img01 from '../assets/getacoach/01.svg'
import img02 from '../assets/getacoach/02.svg'

function Tools(props) {
    const [result, setResult] = useState('');
    const [calc, setCalc] = useState(0);

    const [openmodal, setOpenModal] = useState(false);

    const handleBMRModalOpen = () => {
        setModalValues({ title: 'BMR Calculator', desc: 'If you do nothing all day, the BMR is the number of calories your body uses to sustain life.' })
        setOpenModal(true);
        setCalc(0);
    };
    const handleBFModalOpen = () => {
        setModalValues({ title: 'Body Fat Calculator', desc: 'Description for the Body Fat Calculator goes here, something like this here in this modal' })
        setOpenModal(true);
        setCalc(1);
    };
    const handleIWModalOpen = () => {
        setModalValues({ title: 'Ideal Weight Calculator', desc: 'Description for the Ideal Weight Calculator goes here, something like this here in this modal like BodyFat Calc' })
        setOpenModal(true);
        setCalc(2);
    };

    const handleModalClose = () => setOpenModal(false);
    const [modalvalues, setModalValues] = useState({ title: 'Title Here', desc: 'Description will be here' });

    function Desktop(props) {
        function CalculatorsButtons(props) {
            return (
                <div className={props.className}>
                    <button style={{ ...props.eStyle, backgroundColor: `${(calc != 0) ? '#FBE551' : 'rgba(180, 180, 180, 0.2)'}`, color: `${(calc != 0) ? 'black' : 'rgba(0, 0, 0, 0.5)'}` }} variant='contained' className={props.eClassName} disabled={(calc != 0) ? false : true} onClick={() => { setCalc(0) }}>BMR Calculator</button>
                    <button style={{ ...props.eStyle, backgroundColor: `${(calc != 1) ? '#FBE551' : 'rgba(180, 180, 180, 0.2)'}`, color: `${(calc != 1) ? 'black' : 'rgba(0, 0, 0, 0.5)'}` }} variant='contained' className={props.eClassName} disabled={(calc != 1) ? false : true} onClick={() => { setCalc(1) }}>Body Fat Calculator</button>
                    <button style={{ ...props.eStyle, backgroundColor: `${(calc != 2) ? '#FBE551' : 'rgba(180, 180, 180, 0.2)'}`, color: `${(calc != 2) ? 'black' : 'rgba(0, 0, 0, 0.5)'}` }} variant='contained' className={props.eClassName} disabled={(calc != 2) ? false : true} onClick={() => { setCalc(2) }}>Ideal Weight Calculator</button>
                </div>
            );
        }
        function BMRCalculator() {
            const [gender, setGender] = useState('');

            const defaultcalcvalues = {
                age: '',
                height: '',
                weight: '',
                result: '---'
            }
            const [bmrcalcvalues, setBMRCalcValues] = useState(defaultcalcvalues);

            function showBMRResult() {

                switch (gender) {
                    case 'Male':
                        setBMRCalcValues({ ...bmrcalcvalues, result: parseInt(88.362 + (13.397 * bmrcalcvalues.weight) + (4.799 * bmrcalcvalues.height) - (5.677 * bmrcalcvalues.age)) })
                        break;
                    case 'Female':
                        setBMRCalcValues({ ...bmrcalcvalues, result: parseInt(447.593 + (9.247 * bmrcalcvalues.weight) + (3.098 * bmrcalcvalues.height) - (4.330 * bmrcalcvalues.age)) })
                        break;
                    case 'Other':
                        setBMRCalcValues({ ...bmrcalcvalues, result: parseInt(447.593 + (9.247 * bmrcalcvalues.weight) + (3.098 * bmrcalcvalues.height) - (4.330 * bmrcalcvalues.age)) })
                        break;
                    default:

                        break;
                }

            }
            async function inputValueChange(e, comp) {
                switch (comp) {
                    case 'age':
                        await setBMRCalcValues({ ...bmrcalcvalues, age: e.target.value });
                        document.querySelector('#calc-bmr-age').focus();
                        break;
                    case 'height':
                        await setBMRCalcValues({ ...bmrcalcvalues, height: e.target.value });
                        document.querySelector('#calc-bmr-height').focus();
                        break;
                    case 'weight':
                        await setBMRCalcValues({ ...bmrcalcvalues, weight: e.target.value });
                        document.querySelector('#calc-bmr-weight').focus();
                        break;
                    default:
                        break;
                }
            }
            function CalculatorTitle() {
                return (
                    <>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex" style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                BMR Calculator
                                <div onClick={handleBMRModalOpen} className="ms-2 d-flex justify-content-center align-items-center" style={{ userSelect: 'none', cursor: 'pointer', color: 'rgb(4, 199, 244)', fontSize: '1em', border: 'rgb(4, 199, 244) solid 3px', borderRadius: '0.75em', height: '1.5em', width: '1.5em' }}>i</div>
                            </div>
                        </div>
                    </>
                );
            }
            function InputValues() {
                function GenderSelector() {

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
                            <TextField id='calc-bmr-age' value={bmrcalcvalues.age} onChange={(event) => { inputValueChange(event, 'age') }} className="me-5" type='number' label="Age" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                            <TextField id='calc-bmr-height' value={bmrcalcvalues.height} onChange={(event) => { inputValueChange(event, 'height') }} className="me-5" type='number' label="Height (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        </div>
                        <div className="d-flex flex-column justify-content-between">
                            <GenderSelector />
                            <TextField id='calc-bmr-weight' value={bmrcalcvalues.weight} onChange={(event) => { inputValueChange(event, 'weight') }} type='number' label="Weight (kg)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        </div>
                    </>
                );
            }
            function OutputResult() {
                return (
                    <div className="d-flex flex-column ms-5">
                        <div className="mb-3" style={{ fontSize: `calc(31/1080 * ${props.bheight})` }}>Your BMR is</div>
                        <div className="d-flex justify-content-center" style={{ fontSize: `calc(60/1080 * ${props.bheight})`, fontWeight: `500` }}>{bmrcalcvalues.result}</div>
                        <div className="d-flex justify-content-center" style={{ fontSize: `calc(20/1080 * ${props.bheight})`, fontWeight: `300` }}>Calories/day</div>
                    </div>
                );
            }
            return (
                <div className={`flex-column ${(calc == 0) ? 'd-flex' : 'd-none'}`} style={{ width: 'max-content' }}>
                    <CalculatorTitle />
                    <div className="d-flex my-5">
                        <InputValues />
                        <OutputResult />
                    </div>
                    <div className="d-flex justify-content-center"><Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} onClick={showBMRResult} variant="contained" size="small">Calculate BMR</Button></div>
                </div>
            );
        }
        function BodyFatCalculator() {

            const [gender, setGender] = useState('');

            const defaultcalcvalues = {
                age: '',
                height: '',
                weight: '',
                neck: '',
                waist: '',
                result: '---'
            }
            const [bfcalcvalues, setBFCalcValues] = useState(defaultcalcvalues);

            function showBFResult() {
                const bmivalue = (bfcalcvalues.weight / ((bfcalcvalues.height / 100) * (bfcalcvalues.height / 100)));
                const totalbfvalue = (1.2 * bmivalue) + (0.23 * bfcalcvalues.age) - 16.2;
                switch (gender) {
                    case 'Male':
                        setBFCalcValues({ ...bfcalcvalues, result: parseInt(totalbfvalue) })
                        break;
                    case 'Female':
                        setBFCalcValues({ ...bfcalcvalues, result: parseInt(totalbfvalue) })
                        break;
                    case 'Other':
                        setBFCalcValues({ ...bfcalcvalues, result: parseInt(totalbfvalue) })
                        break;
                    default:

                        break;
                }

            }

            async function inputValueChange(e, comp) {
                switch (comp) {
                    case 'age':
                        await setBFCalcValues({ ...bfcalcvalues, age: e.target.value });
                        document.querySelector('#calc-bf-age').focus();
                        break;
                    case 'height':
                        await setBFCalcValues({ ...bfcalcvalues, height: e.target.value });
                        document.querySelector('#calc-bf-height').focus();
                        break;
                    case 'neck':
                        await setBFCalcValues({ ...bfcalcvalues, neck: e.target.value });
                        document.querySelector('#calc-bf-neck').focus();
                        break;
                    case 'weight':
                        await setBFCalcValues({ ...bfcalcvalues, weight: e.target.value });
                        document.querySelector('#calc-bf-weight').focus();
                        break;
                    case 'waist':
                        await setBFCalcValues({ ...bfcalcvalues, waist: e.target.value });
                        document.querySelector('#calc-bf-waist').focus();
                        break;
                    default:
                        break;
                }
            }


            function CalculatorTitle() {
                return (
                    <>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex" style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                Body Fat Calculator
                                <div onClick={handleBFModalOpen} className="ms-2 d-flex justify-content-center align-items-center" style={{ userSelect: 'none', cursor: 'pointer', color: 'rgb(4, 199, 244)', fontSize: '1em', border: 'rgb(4, 199, 244) solid 3px', borderRadius: '0.75em', height: '1.5em', width: '1.5em' }}>i</div>
                            </div>
                        </div>
                    </>
                );
            }
            function InputValues() {
                function GenderSelector() {

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
                            <TextField id='calc-bf-age' value={bfcalcvalues.age} onChange={(event) => { inputValueChange(event, 'age') }} className="me-5" type='number' label="Age" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                            <TextField id='calc-bf-height' value={bfcalcvalues.height} onChange={(event) => { inputValueChange(event, 'height') }} className="me-5 my-3" type='number' label="Height (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                            <TextField id='calc-bf-neck' value={bfcalcvalues.neck} onChange={(event) => { inputValueChange(event, 'neck') }} className="me-5" type='number' label="Neck (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        </div>
                        <div className="d-flex flex-column justify-content-between">
                            <GenderSelector />
                            <TextField id='calc-bf-weight' value={bfcalcvalues.weight} onChange={(event) => { inputValueChange(event, 'weight') }} className=" my-3" type='number' label="Weight (kg)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                            <TextField id='calc-bf-waist' value={bfcalcvalues.waist} onChange={(event) => { inputValueChange(event, 'waist') }} type='number' label="Waist (m)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                        </div>
                    </>
                );
            }
            function OutputResult() {
                return (
                    <div className="d-flex flex-column align-items-center ms-5">
                        <div className="mb-3" style={{ fontSize: `calc(31/1080 * ${props.bheight})` }}>Your Body Fat is</div>
                        <div className="" style={{ fontSize: `calc(60/1080 * ${props.bheight})`, fontWeight: `500` }}>{bfcalcvalues.result}</div>
                    </div>
                );
            }
            return (
                <div className={`flex-column ${(calc == 1) ? 'd-flex' : 'd-none'}`} style={{ width: 'max-content' }}>
                    <CalculatorTitle />
                    <div className="d-flex my-5">
                        <InputValues />
                        <OutputResult />
                    </div>
                    <div className="d-flex justify-content-center"><Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} onClick={() => { showBFResult() }} variant="contained" size="small">Calculate Body Fat</Button></div>
                </div>
            );
        }
        function IWCalculator() {
            const [gender, setGender] = useState('');
            const defaultiwcalcvalues = {
                age: '',
                height: '',
                result: '---'
            };



            function showResult() {
                switch (gender) {
                    case "Male":
                        setIWCalcValues({ ...iwcalcvalues, result: `${parseInt(50 + (0.91 * (iwcalcvalues.height - 152.4)))} kg` })
                        break;
                    case "Female":
                        setIWCalcValues({ ...iwcalcvalues, result: `${parseInt(45.5 + (0.91 * (iwcalcvalues.height - 152.4)))} kg` })
                        break;
                    case "Other":
                        setIWCalcValues({ ...iwcalcvalues, result: `${parseInt(45.5 + (0.91 * (iwcalcvalues.height - 152.4)))} kg` })
                        break;
                    default:
                        break;
                }
            }
            const [iwcalcvalues, setIWCalcValues] = useState(defaultiwcalcvalues);

            async function inputValueChange(e, comp) {
                switch (comp) {
                    case 'age':
                        await setIWCalcValues({ ...iwcalcvalues, age: e.target.value });
                        document.querySelector('#calc-iw-age').focus();
                        break;
                    case 'height':
                        await setIWCalcValues({ ...iwcalcvalues, height: e.target.value });
                        document.querySelector('#calc-iw-height').focus();
                        break;
                    default:
                        break;
                }
            }

            function CalculatorTitle() {
                return (
                    <>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex" style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>
                                Ideal Weight Calculator
                                <div onClick={handleIWModalOpen} className="ms-2 d-flex justify-content-center align-items-center" style={{ userSelect: 'none', cursor: 'pointer', color: 'rgb(4, 199, 244)', fontSize: '1em', border: 'rgb(4, 199, 244) solid 3px', borderRadius: '0.75em', height: '1.5em', width: '1.5em' }}>i</div>
                            </div>
                        </div>
                    </>
                );
            }
            function InputValues() {
                function GenderSelector() {

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
                            <TextField id='calc-iw-age' defaultValue={iwcalcvalues.age} onChange={(e) => { inputValueChange(e, 'age') }} className="me-5" type='number' label="Age" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
                            <TextField id='calc-iw-height' defaultValue={iwcalcvalues.height} onChange={(e) => { inputValueChange(e, 'height') }} className="me-5 my-3" type='number' label="Height (cm)" variant="outlined" size="small" sx={{ width: `calc(32/1080 * ${props.bheight} * 187/32)` }} />
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
                        <div className="" style={{ fontSize: `calc(60/1080 * ${props.bheight})`, fontWeight: `500` }}>{iwcalcvalues.result}</div>
                    </div>
                );
            }
            return (
                <div className={`flex-column ${(calc == 2) ? 'd-flex' : 'd-none'}`} style={{ width: 'max-content' }}>
                    <CalculatorTitle />
                    <div className="d-flex my-5">
                        <InputValues />
                        <OutputResult />
                    </div>
                    <div className="d-flex justify-content-center"><Button sx={{ '&:hover': { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)' }} onClick={showResult} variant="contained" size="small">Calculate Ideal Weight</Button></div>
                </div>
            );
        }

        return (
            <div className={props.className} style={props.style}>
                <CalculatorsButtons bheight={props.bheight} className='d-flex flex-row justify-content-center py-2'
                    eClassName='mx-3 mt-4 p-2'
                    eStyle={{
                        fontSize: `calc(20/1080 * ${props.bheight})`, fontWeight: '500',
                        cursor: 'pointer', userSelect: 'none', boxShadow: '0px 1px 5px 1px rgba(0,0,0,0.2)',
                        color: 'black', borderRadius: `calc(5/1080 * ${props.bheight})`,
                        border: 'none'
                    }} />
                <div className="d-flex flex-row justify-content-center align-items-center flex-grow-1 bg-dar">
                    <BMRCalculator />
                    <BodyFatCalculator />
                    <IWCalculator />
                </div>
            </div>
        );
    }

    function Mobile(props) {
        const [calc, setCalc] = useState(-1);

        function CalculatorsButtons(props) {
            return (
                <div className={props.className} style={props.style}>
                    <div className={props.eClassName} style={props.eStyle} onClick={() => { setCalc(0) }}>BMR Calculator</div>
                    <div className={props.eClassName} style={props.eStyle} onClick={() => { setCalc(1) }}>Body Fat Calculator</div>
                    <div className={props.eClassName} style={props.eStyle} onClick={() => { setCalc(2) }}>Ideal Weight Calculator</div>
                </div>
            );
        }
        function BMRCalculator(props) {

            const defaultbmrcalcvalues = {
                age: '',
                height: '',
                weight: '',
                result: '---'
            }
            const [bmrcalcvalues, setBMRCalcValues] = useState(defaultbmrcalcvalues);
            const [gender, setGender] = useState('');


            function showBMRResult() {

                switch (gender) {
                    case 'Male':
                        setBMRCalcValues({ ...bmrcalcvalues, result: parseInt(88.362 + (13.397 * bmrcalcvalues.weight) + (4.799 * bmrcalcvalues.height) - (5.677 * bmrcalcvalues.age)) })
                        break;
                    case 'Female':
                        setBMRCalcValues({ ...bmrcalcvalues, result: parseInt(447.593 + (9.247 * bmrcalcvalues.weight) + (3.098 * bmrcalcvalues.height) - (4.330 * bmrcalcvalues.age)) })
                        break;
                    case 'Other':
                        setBMRCalcValues({ ...bmrcalcvalues, result: parseInt(447.593 + (9.247 * bmrcalcvalues.weight) + (3.098 * bmrcalcvalues.height) - (4.330 * bmrcalcvalues.age)) })
                        break;
                    default:

                        break;
                }

            }

            function CalculatorTitle() {
                return (
                    <>
                        <div className="d-flex flex-row align-items-center">
                            <div style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>BMR Calculator</div>
                        </div>
                    </>
                );
            }
            function GenderSelector() {

                const handleChange = (event) => {
                    setGender(event.target.value);
                };

                return (
                    <Box sx={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}>
                        <FormControl size='small' fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Male'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Male</MenuItem>
                                <MenuItem value={'Female'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Female</MenuItem>
                                <MenuItem value={'Other'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                );
            }
            function OutputResult() {
                return (
                    <div className="w-100 d-flex flex-column align-items-center">
                        <div className='mb-3' style={{ fontSize: `calc(18/640 * ${props.bheight})` }}>Your BMR is</div>
                        <div style={{ fontSize: `calc(28/640 * ${props.bheight})`, fontWeight: '500' }}>{bmrcalcvalues.result}</div>
                        <div style={{ fontSize: `calc(11/640 * ${props.bheight})`, fontWeight: '300' }}>Calories/day</div>
                    </div>
                );
            }
            return (
                <div className={props.className} style={props.style}>
                    <CalculatorTitle />
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><GenderSelector /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField onChange={(e) => { setBMRCalcValues({ ...bmrcalcvalues, age: e.target.value }) }} defaultValue={bmrcalcvalues.age} className="me-5" type='number' label="Age" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField onChange={(e) => { setBMRCalcValues({ ...bmrcalcvalues, height: e.target.value }) }} defaultValue={bmrcalcvalues.height} className="me-5" type='number' label="Height" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField onChange={(e) => { setBMRCalcValues({ ...bmrcalcvalues, weight: e.target.value }) }} defaultValue={bmrcalcvalues.weight} className="me-5" type='number' label="Weight" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div className="d-flex justify-content-center"><Button onClick={showBMRResult} variant="contained" size="small">Calculate BMR</Button></div>
                    <OutputResult />
                    <div className="d-flex justify-content-center"><Button variant="contained" size="small" onClick={() => { setCalc(-1) }}>More Tools</Button></div>
                </div>
            );
        }
        function BodyFatCalculator(props) {

            const defaultcalcvalues = {
                age: '',
                height: '',
                weight: '',
                neck: '',
                waist: '',
                result: '---'
            }
            const [bfcalcvalues, setBFCalcValues] = useState(defaultcalcvalues);
            const [gender, setGender] = useState('');


            function showBFResultMob() {
                const bmivalue = (bfcalcvalues.weight / ((bfcalcvalues.height / 100) * (bfcalcvalues.height / 100)));
                const totalbfvalue = (1.2 * bmivalue) + (0.23 * bfcalcvalues.age) - 16.2;
                switch (gender) {
                    case 'Male':
                        setBFCalcValues({ ...bfcalcvalues, result: parseInt(totalbfvalue) })
                        break;
                    case 'Female':
                        setBFCalcValues({ ...bfcalcvalues, result: parseInt(totalbfvalue) })
                        break;
                    case 'Other':
                        setBFCalcValues({ ...bfcalcvalues, result: parseInt(totalbfvalue) })
                        break;
                    default:
                        break;
                }

            }

            function inputValueChange(e, comp) {
                switch (comp) {
                    case 'age':
                        setBFCalcValues({ ...bfcalcvalues, age: e.target.value });
                        document.querySelector('#calc-bf-age-mob').focus();
                        break;
                    case 'height':
                        setBFCalcValues({ ...bfcalcvalues, height: e.target.value });
                        document.querySelector('#calc-bf-height-mob').focus();
                        break;
                    case 'neck':
                        setBFCalcValues({ ...bfcalcvalues, neck: e.target.value });
                        document.querySelector('#calc-bf-neck-mob').focus();
                        break;
                    case 'weight':
                        setBFCalcValues({ ...bfcalcvalues, weight: e.target.value });
                        document.querySelector('#calc-bf-weight-mob').focus();
                        break;
                    case 'waist':
                        setBFCalcValues({ ...bfcalcvalues, waist: e.target.value });
                        document.querySelector('#calc-bf-waist-mob').focus();
                        break;
                    default:
                        break;
                }
            }

            function CalculatorTitle() {
                return (
                    <>
                        <div className="d-flex flex-row align-items-center">
                            <div style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>Body Fat Calculator</div>
                        </div>
                    </>
                );
            }
            function GenderSelector() {

                const handleChange = (event) => {
                    setGender(event.target.value);
                };

                return (
                    <Box sx={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}>
                        <FormControl size='small' fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Male'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Male</MenuItem>
                                <MenuItem value={'Female'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Female</MenuItem>
                                <MenuItem value={'Other'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                );
            }
            function OutputResult() {
                return (
                    <div className="w-100 d-flex flex-column align-items-center">
                        <div className='mb-3' style={{ fontSize: `calc(18/640 * ${props.bheight})` }}>Your Body Fat is</div>
                        <div style={{ fontSize: `calc(28/640 * ${props.bheight})`, fontWeight: '500' }}>{bfcalcvalues.result}</div>
                    </div>
                );
            }
            return (
                <div className={props.className} style={props.style}>
                    <CalculatorTitle />
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><GenderSelector /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField id="calc-bf-age-mob" defaultValue={bfcalcvalues.age} onChange={(e) => { inputValueChange(e, 'age') }} className="me-5" type='number' label="Age" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField id="calc-bf-height-mob" defaultValue={bfcalcvalues.height} onChange={(e) => { inputValueChange(e, 'height') }} className="me-5" type='number' label="Height" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField id="calc-bf-weight-mob" defaultValue={bfcalcvalues.weight} onChange={(e) => { inputValueChange(e, 'weight') }} className="me-5" type='number' label="Weight" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField id="calc-bf-neck-mob" defaultValue={bfcalcvalues.neck} onChange={(e) => { inputValueChange(e, 'neck') }} className="me-5" type='number' label="Neck" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField id="calc-bf-waist-mob" defaultValue={bfcalcvalues.waist} onChange={(e) => { inputValueChange(e, 'waist') }} className="me-5" type='number' label="Waist" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div className="d-flex justify-content-center"><Button onClick={showBFResultMob} variant="contained" size="small">Calculate Body Fat</Button></div>
                    <OutputResult />
                    <div className="d-flex justify-content-center"><Button variant="contained" size="small" onClick={() => { setCalc(-1) }}>More Tools</Button></div>
                </div>
            );
        }
        function IWCalculator(props) {
            const [gender, setGender] = useState('');

            const defaultiwcalcvalues = {
                age: '',
                height: '',
                result: '---'
            };

            function showResult() {
                switch (gender) {
                    case "Male":
                        setIWCalcValues({ ...iwcalcvalues, result: `${parseInt(50 + (0.91 * (iwcalcvalues.height - 152.4)))} kg` })
                        break;
                    case "Female":
                        setIWCalcValues({ ...iwcalcvalues, result: `${parseInt(45.5 + (0.91 * (iwcalcvalues.height - 152.4)))} kg` })
                        break;
                    case "Other":
                        setIWCalcValues({ ...iwcalcvalues, result: `${parseInt(45.5 + (0.91 * (iwcalcvalues.height - 152.4)))} kg` })
                        break;
                    default:
                        break;
                }
            }
            const [iwcalcvalues, setIWCalcValues] = useState(defaultiwcalcvalues);
            function CalculatorTitle() {
                return (
                    <>
                        <div className="d-flex flex-row align-items-center">
                            <div style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>Ideal Weight Calculator</div>
                        </div>
                    </>
                );
            }
            function GenderSelector() {

                const handleChange = (event) => {
                    setGender(event.target.value);
                };

                return (
                    <Box sx={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}>
                        <FormControl size='small' fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Male'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Male</MenuItem>
                                <MenuItem value={'Female'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Female</MenuItem>
                                <MenuItem value={'Other'} sx={{ fontSize: `calc(12/640 * ${props.bheight})` }}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                );
            }
            function OutputResult() {
                return (
                    <div className="w-100 d-flex flex-column align-items-center">
                        <div className='mb-3' style={{ fontSize: `calc(18/640 * ${props.bheight})` }}>Your Ideal Weight is</div>
                        <div style={{ fontSize: `calc(28/640 * ${props.bheight})`, fontWeight: '500' }}>{iwcalcvalues.result}</div>
                    </div>
                );
            }
            return (
                <div className={props.className} style={props.style}>
                    <CalculatorTitle />
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><GenderSelector /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField defaultValue={iwcalcvalues.age} onChange={(e) => { setIWCalcValues({ ...iwcalcvalues, age: e.target.value }) }} className="me-5" type='number' label="Age" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div style={{ width: `calc(27/640 * ${props.bheight} * 129/27)` }}><TextField defaultValue={iwcalcvalues.height} onChange={(e) => { setIWCalcValues({ ...iwcalcvalues, height: e.target.value }) }} className="me-5" type='number' label="Height" variant="outlined" size="small" inputProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} InputLabelProps={{ style: { fontSize: `calc(12/640 * ${props.bheight})` } }} sx={{ width: `calc(27/640 * ${props.bheight} * 128/27)` }} /></div>
                    <div className="d-flex justify-content-center"><Button onClick={showResult} variant="contained" size="small">Calculate Ideal Weight</Button></div>
                    <OutputResult />
                    <div className="d-flex justify-content-center"><Button variant="contained" size="small" onClick={() => { setCalc(-1) }}>More Tools</Button></div>
                </div>
            );
        }

        return (
            <div className={props.className} style={props.style}>
                <CalculatorsButtons bheight={props.bheight} style={{ height: '100%' }} className={`${(calc == -1) ? 'd-flex' : 'd-none'} flex-column justify-content-around align-items-center`} eClassName='mx-3 mt-4 p-2 d-flex justify-content-center align-items-center' eStyle={{ fontSize: `calc(20/640 * 100vw)`, fontWeight: '500', backgroundColor: '#FBE551', boxShadow: '0px 1px 5px 1px rgba(0,0,0,0.2)', borderRadius: `calc(5/640 * ${props.bheight})`, height: `calc(50/640 * 100vw)`, width: `calc(265/640 * 100vw)` }} />
                <BMRCalculator bheight={props.bheight} className={`${(calc == 0) ? 'd-flex' : 'd-none'} flex-column justify-content-around align-items-center`} style={{ height: '100%' }} />
                <BodyFatCalculator bheight={props.bheight} className={`${(calc == 1) ? 'd-flex' : 'd-none'} flex-column justify-content-around align-items-center`} style={{ height: '100%' }} />
                <IWCalculator bheight={props.bheight} className={`${(calc == 2) ? 'd-flex' : 'd-none'} flex-column justify-content-around align-items-center`} style={{ height: '100%' }} />
            </div>
        );
    }

    function BackgroundImagesDesktop() {

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
                        width: `calc(1036/1920 * ${props.bheight})`
                    }} />
                </div>
            </>
        );
    }
    return (
        <>
            <div>
                {/* <NavBar position="fixed" brand="GymFit" minHeight='50px' /> */}
                <div className="position-absolute" style={{ width: '100vw' }} >

                    {/* Desktop Screen Images */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'block', xl: 'block' }, width: '100%', height: '100%' }}>
                        <BackgroundImagesDesktop />
                    </Box>

                    {/* Mobile Screen Images */}
                    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                        Mobile
                    </Box>
                </div>
                <div className="pt-5 w-100 d-block position-absolute" style={{ backgroundColor: 'none', height: `${props.bheight}` }}>

                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: '100%' }}>
                        <Desktop className='pt-3 w-100 flex-grow-1 d-flex flex-column' bheight={props.bheight} />
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                        <Mobile className='py-3 flex-grow-1' bheight={props.bheight} style={{ height: '100%', width: '100vw' }} />
                    </Box>
                </div>
                <div className={`position-absolute ${openmodal ? 'd-block' : 'd-none'}`} onClick={handleModalClose} style={{ cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100vh', width: '100vw', overflow: 'hidden', zIndex: '1' }}>
                    <div style={{ transform: 'translate(50vw, 50vh)' }}>
                        <Box sx={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4
                        }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ userSelect: 'none' }}>
                                {modalvalues.title}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2, userSelect: 'none' }}>
                                {modalvalues.desc}
                            </Typography>
                        </Box>
                    </div>
                </div>

            </div>
        </>
    );
}




export default Tools