import { Box, Button } from '@mui/material'
import { useEffect } from 'react';
import img00 from '../../assets/home/00.svg'
import img10 from '../../assets/home/10.svg'
function Block1(props) {

    useEffect(() => {
        // console.log('here: ', props);


    }, [])

    function BackgroundImageDesk() {
        return (
            <>
                <div className='position-absolute' style={{ height: '100%', width: '100%', zIndex: '0', overflow: 'hidden' }}>
                    <img src={img00} style={{ width: `calc(100vw * 1.1)`, transform: `translate(calc(-100/1080 * ${props.bheight}), 0)` }} alt="" />
                </div>

            </>
        );
    }
    function BackgroundImageMob() {
        return (
            <>
                <div className='position-absolute' style={{ height: '100%', width: '100%', zIndex: '0', overflow: 'hidden' }}>
                    <img src={img00} style={{ width: `calc(100vw * 1.5)`, transform: `translate(calc(-100/1080 * ${props.bheight}), 0)` }} alt="" />
                </div>

            </>
        );
    }

    return (
        <>
            <div style={{ height: '100%', backgroundColor: 'none' }}>
                {/* Desktop Screen */}
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, height: '100%' }}>
                    <div className='mt-5 pt-3' style={{ height: '100%', width: '100%', zIndex: '1' }}>
                        <div className="d-flex flex-column justify-content-end align-items-center w-100" style={{ overflow: 'hidden' }}>
                            <div className="mb-4" style={{ fontSize: `calc(0.045 * ${props.bheight})`, letterSpacing: '0.75vw' }}>{props.content.heading}</div>
                            <div className="mb-4" style={{ backgroundColor: '#04C7F4', width: '30vw', height: '2px' }}></div>
                            <div className="mb-4 d-flex flex-column align-items-center" style={{ maxWidth: `calc(1000/1920 * 100vw)`, fontSize: `calc(28/1920 * 100vw)`, textAlign: 'center', textAlignLast: 'center' }}>
                                {props.content.paragraph}
                            </div>
                            <div className="mb-4" style={{ fontSize: `calc(0.03 * ${props.bheight})`, letterSpacing: '0.16vw' }}>{props.content.other}</div>
                            <div className="d-block" style={{ height: '45%', width: '100vw', backgroundColor: 'none' }}>
                                <div className="d-flex justify-content-center">
                                    <img style={{ height: `calc(0.45 * ${props.bheight})` }} src={img10} />
                                </div>
                                <div className='position-absolute d-flex justify-content-center' style={{ transform: `translateY(calc(-110/1080 * ${props.bheight}))`, width: '100%' }}>
                                    <Button className='px-3' size='small' sx={{ '&:hover' : { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)', fontSize: `calc(20/1080 * ${props.bheight})`, borderRadius: `calc(25/1080 * ${props.bheight})` }} variant='contained'>Enroll Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BackgroundImageDesk />
                </Box>


                {/* Mobile Screen */}
                <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, height: '100%' }}>
                    <div className="d-flex flex-column justify-content-around align-items-center w-100 px-3" style={{ overflow: 'hidden', zIndex: '1' }}>
                        <div className="d-flex justify-content-center"
                            style={{ width: '100vw', backgroundColor: 'none', margin: `65px 0 0 0` }}>
                            <img style={{ width: `calc(2.4 * calc(0.25 * ${props.bheight}))` }} src={img10} />
                        </div>
                        <div className="d-flex flex-column align-items-center mt-4 mb-5" style={{ letterSpacing: '5.4px', fontSize: `calc(0.03 * ${props.bheight})`, maxWidth: `calc(220/640 * ${props.bheight})`, textAlign: 'center', textAlignLast: 'center' }}>
                            {props.content.heading}
                            <div className="mt-3 mb-3" style={{ backgroundColor: '#04C7F4', width: '180px', height: '2px' }}></div>
                        </div>
                        <div className="d-flex flex-column align-items-center mb-5" style={{ fontSize: `calc(0.021 * ${props.bheight})`, letterSpacing: '2.1px', maxWidth: '300px', textAlign: 'center', textAlignLast: 'center' }}>
                            {props.content.paragraph}
                        </div>
                        <div className="my-3" style={{ fontSize: `calc(0.025 * ${props.bheight})`, letterSpacing: '2.5px', fontWeight: '500' }}>{props.content.other}</div>
                        <div className="my-3" >
                            <Button className='px-3' size='small' sx={{ '&:hover' : { backgroundColor: 'rgb(4, 199, 244)' }, backgroundColor: 'rgb(4, 199, 244)', fontSize: `calc(10/640 * ${props.bheight})`, borderRadius: `calc(12.5/640 * ${props.bheight})` }} variant='contained'>Enroll Now</Button>

                        </div>
                    </div>
                    <BackgroundImageMob />

                </Box>

            </div>
        </>
    );
}

export default Block1;