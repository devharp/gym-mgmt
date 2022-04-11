import { Box } from "@mui/material";
import { letterSpacing } from "@mui/system";
import NavBar from "../components/navbar/NavBar";
import img00 from '../assets/plans/00.svg'
import img01 from '../assets/plans/01.svg'
import { useState } from "react";

function Plans(props) {

    function Desktop() {
        function BackgroundImages() {
            return (
                <>
                    <div className="position-absolute" style={{ backgroundColor: 'none', width: `calc(1142/1080 * ${props.bheight} * 995/1142)`, height: '100%', overflow: 'hidden' }}>
                        <div className="" style={{ backgroundColor: 'none', width: `calc(1142/1080 * ${props.bheight} * 1192/1142)` }}>
                            <img src={img00} style={{ height: `calc(1300/1080 * ${props.bheight})`, transform: `translateX(calc(-600/1080 * ${props.bheight}))` }} />
                        </div>
                    </div>
                    <div className='position-absolute d-flex justify-content-end' style={{ width: '100%', height: '100%', backgroundColor: 'none', overflow: 'hidden' }}>
                        <div className="" style={{ backgroundColor: 'none', width: `calc(1142/1080 * ${props.bheight} * 1192/1142)` }}>
                            <img src={img01} style={{ height: `calc(2320/1080 * ${props.bheight} * 2233/2320)`, transform: `translateX(calc(400/1080 * ${props.bheight}))` }} />
                        </div>
                    </div>
                </>);
        }
        function FrontBody() {
            function PlanTablet(props) {
                const [value, setValue] = useState({ rupee: 24, price: 54, height: 204 });

                function onTab() {
                    setValue({ rupee: 44, price: 84, height: 254 });
                }

                function leaveTab() {
                    setValue({ rupee: 24, price: 54, height: 204 });
                }
                return (
                    <>
                        <div className={props.className} onMouseEnter={onTab} onMouseLeave={leaveTab} style={{ userSelect: 'none', boxShadow: '0px 3px 6px #00000029', height: `calc(477/1080 * ${props.bheight})`, width: `calc(477/1080 * ${props.bheight} * 380/477)`, backgroundColor: '#FFF5CC', borderRadius: '20px', overflow: 'hidden' }}>
                            <div className="d-flex justify-content-center pt-3 pb-2" style={{ fontWeight: 'bold', fontSize: `calc(36/1080 * ${props.bheight})` }}>{props.label}</div>
                            <div className="d-flex justify-content-center py-2" style={{ fontWeight: '500', fontSize: `calc(24/1080 * ${props.bheight})`, backgroundColor: '#FBE551' }}>{props.duration}</div>
                            <div className="flex-grow-1 position-relative" style={{ backgroundColor: 'none', overflow: 'hidden' }}>
                                <div className="position-absolute" style={{ height: `calc(220/1080 * ${props.bheight})`, width: `calc(220/1080 * ${props.bheight})`, backgroundColor: '#FBE551', borderRadius: '50%', top: '100%', transform: 'translate(-50%, -50%)' }}></div>
                                <div className="position-absolute d-flex justify-content-center align-items-center" style={{ width: '100%', height: `calc(254/1080 * ${props.bheight})` }}>
                                    <div className="d-flex flex-row align-items-center justify-content-center" style={{ left: '50%', backgroundColor: '#FBE551', height: `calc(${value.height}/1080 * ${props.bheight})`, width: `calc(${value.height}/1080 * ${props.bheight})`, borderRadius: '50%', boxShadow: '0px 6px 6px #00000029', transition: '0.5s' }}>
                                        <span className="" style={{ height: `calc(${value.price}/1080 * ${props.bheight})`, transition: '0.5s', transform: `translateY(calc(-1 * ${value.rupee}px/4))` }}>
                                            <span style={{ fontSize: `calc(${value.rupee}/1080 * ${props.bheight})`, transition: '0.5s' }}>₹</span>
                                        </span>
                                        <span style={{ fontSize: `calc(${value.price}/1080 * ${props.bheight})`, fontWeight: 'bold', transition: '0.5s' }}>{props.price}</span>
                                    </div>
                                </div>
                                <div className="position-absolute pb-3 pe-3" style={{ top: '100%', left: '100%', transform: 'translate(-100%, -100%)', width: 'max-content' }}>
                                    <div className='px-2 py-1' style={{ borderRadius: '5px', fontSize: `calc(18/1080 * ${props.bheight})`, fontWeight: '500', letterSpacing: `calc(2.7/1080 * ${props.bheight})`, backgroundColor: '#FBE551' }}>Buy Now</div>
                                </div>
                            </div>
                        </div>
                    </>);
            }
            return (
                <>
                    <div className="position-relative d-flex flex-column align-items-center" style={{ width: '100%', paddingTop: `calc(200/1080 * ${props.bheight})` }}>
                        <div className='position-relative' style={{ letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontSize: `calc(36/1080 * ${props.bheight})`, fontWeight: '500' }}>Intermediate Level</div>
                        <div className="position-relative" style={{ width: '100%', width: `calc(180/1080 * ${props.bheight})`, height: '2px', backgroundColor: '#04C7F4' }}></div>
                        <div className="flex-grow-1 d-flex flex-row align-items-center justify-content-center" style={{ width: '100%', zIndex: '1' }}>
                            <PlanTablet className='d-flex flex-column' label='Basic' duration='3 Months' price='1000' bheight={props.bheight} />
                            <PlanTablet className='d-flex flex-column mx-4' label='Advanced' duration='6 Months' price='2500' bheight={props.bheight} />
                            <PlanTablet className='d-flex flex-column' label='Intermediate' duration='1 Year' price='5000' bheight={props.bheight} />
                        </div>
                    </div>
                </>);
        }
        return (
            <>
                <FrontBody />
                <BackgroundImages />

            </>);
    }

    function Mobile() {
        function PlanTablet(props) {
            const [value, setValue] = useState({ rupee: 12, price: 26, height: 100 });

            function onTab() {
                // setValue({ rupee: 44, price: 84, height: 254 });
            }

            function leaveTab() {
                // setValue({ rupee: 24, price: 54, height: 204 });
            }
            return (
                <>
                    <div className={props.className} onMouseEnter={onTab} onMouseLeave={leaveTab} style={{ userSelect: 'none', boxShadow: '0px 3px 6px #00000029', height: `calc(235/640 * ${props.bheight})`, width: `calc(235/640 * ${props.bheight} * 187/235)`, backgroundColor: '#FFF5CC', borderRadius: '20px', overflow: 'hidden' }}>
                        <div className="d-flex justify-content-center pt-3 pb-2" style={{ fontWeight: 'bold', fontSize: `calc(17/640 * ${props.bheight})` }}>{props.label}</div>
                        <div className="d-flex justify-content-center py-2" style={{ fontWeight: '500', fontSize: `calc(11/640 * ${props.bheight})`, backgroundColor: '#FBE551' }}>{props.duration}</div>
                        <div className="flex-grow-1 position-relative" style={{ backgroundColor: 'none', overflow: 'hidden' }}>
                            <div className="position-absolute" style={{ height: `calc(150/640 * ${props.bheight})`, width: `calc(150/640 * ${props.bheight})`, backgroundColor: '#FBE551', borderRadius: '50%', top: '100%', transform: 'translate(-50%, -50%)' }}></div>
                            <div className="position-absolute d-flex justify-content-center align-items-center" style={{ width: '100%', height: `calc(120/640 * ${props.bheight})` }}>
                                <div className="d-flex flex-row align-items-center justify-content-center" style={{ left: '50%', backgroundColor: '#FBE551', height: `calc(${value.height}/640 * ${props.bheight})`, width: `calc(${value.height}/640 * ${props.bheight})`, borderRadius: '50%', boxShadow: '0px 6px 6px #00000029', transition: '0.5s' }}>
                                    <span className="" style={{ height: `calc(${value.price}/640 * ${props.bheight})`, transition: '0.5s', transform: `translateY(calc(-1 * ${value.rupee}px/4))` }}>
                                        <span style={{ fontSize: `calc(${value.rupee}/640 * ${props.bheight})`, transition: '0.5s' }}>₹</span>
                                    </span>
                                    <span style={{ fontSize: `calc(${value.price}/640 * ${props.bheight})`, fontWeight: 'bold', transition: '0.5s' }}>{props.price}</span>
                                </div>
                            </div>
                            <div className="position-absolute pb-3 pe-3" style={{ top: '100%', left: '100%', transform: 'translate(-100%, -100%)', width: 'max-content' }}>
                                <div className='px-2 py-1' style={{ borderRadius: '5px', fontSize: `calc(8/640 * ${props.bheight})`, fontWeight: '500', letterSpacing: `calc(1.2/640 * ${props.bheight})`, backgroundColor: '#FBE551' }}>Buy Now</div>
                            </div>
                        </div>
                    </div>
                </>);
        }
        return (
            <>
                <div className="mt-5 pt-5 d-flex flex-column align-items-center">
                    <div className='mb-2' style={{ fontSize: `calc(18/640 * ${props.bheight})`, letterSpacing: `calc(1.8/640 * ${props.bheight})`, fontWeight: '500' }}>Intermediate Level</div>
                    <div className='mb-5' style={{ backgroundColor: '#04C7F4', width: `calc(180/1080 * ${props.bheight})`, height: '3px' }}></div>
                    <div className='' style={{ maxWidth: `calc(320px)`, textAlign: 'center', textAlignLast: 'center', fontSize: `cacl(14/640 * ${props.bheight})` }}>
                        Basic level fitness plans are specially crafted for women who have always dreamt of being fit. This plan is for those who do not want to compromise on their fitness goals. By working on your fitness, strength, and ability, we will provide you with a balanced and sustainable diet &amp; workout plan. An certified personal trainer with a wealth of fitness knowledge can assist you in that endeavor.
                    </div>
                    <div className="mt-5 position-relative" style={{ width: '100%', height: 'max-content' }}>
                        <div className='' style={{ position: 'absolute', height: '100%', width: `calc(195/360 * 100vw)`, zIndex: '-1', overflow: 'hidden' }}>
                            <img src={img00} style={{ width: '600px', transform: `rotate(30deg) translateX(-350px) translateY(200px)` }} />
                        </div>
                        <div className='d-flex justify-content-end align-items-end' style={{ position: 'absolute', height: '100%', width: '100%', zIndex: '-1' }}>
                            <div className="d-flex" style={{ right: '0', width: '400px', overflow: 'hidden' }}>
                                <img src={img01} style={{ width: '600px', transform: 'translate(100px, 100px) rotate(-30deg)' }} />
                            </div>
                        </div>
                        <div className="py-5 d-flex flex-column align-items-center" style={{ width: '100%', zIndex: '2' }}>
                            <PlanTablet className='d-flex flex-column' label='Basic' duration='3 Months' price='1000' bheight={props.bheight} />
                            <PlanTablet className='d-flex flex-column my-5' label='Intermediate' duration='6 Months' price='5000' bheight={props.bheight} />
                            <PlanTablet className='d-flex flex-column' label='Advanced' duration='12 Months' price='10000' bheight={props.bheight} />
                        </div>
                    </div>
                </div>
            </>);
    }

    return (
        <>
            <NavBar position="fixed" brand="GymFit" minHeight='50px' />

            {/* Desktop Screen */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, height: '100%' }}>
                <Desktop />
            </Box>

            {/* Mobile Screen */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, height: '100%', flexDirection: 'column' }}>
                <Mobile />
            </Box>
        </>
    );
}

export default Plans;