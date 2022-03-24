import { Box } from '@mui/material'
import img25 from '../../assets/home/25.svg'
import img20 from '../../assets/home/20.svg'
import img21 from '../../assets/home/21.svg'
import img22 from '../../assets/home/22.svg'
import img23 from '../../assets/home/23.svg'
import img24 from '../../assets/home/24.svg'
import { useEffect } from 'react'

function Block2(props) {

    useEffect(() => {
        console.log('props of Block2 Home', props);


    }, []);


    return (
        <>
            {/* Desktop Screen */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                <div className="d-block position-absolute p-0 w-100" style={{ height: `${props.bheight}` }}>
                    <div className="position-absolute" style={
                        { bottom: '0px' }
                    }>
                        <img src={img25} style={
                            {
                                width: `calc(0.65 * ${props.bheight})`,
                                transform: 'translate(-50%, 50%)'
                            }
                        } alt="" />
                    </div>
                    <div className="bg-dark1 d-flex flex-column justify-content-around" style={{ height: '100%' }}>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='mb-3' style={{ fontSize: `calc(36/1080 * ${props.bheight})`, letterSpacing: `calc(3.6/1080 * ${props.bheight})`, fontWeight: '500' }}>{props.content.heading}</div>
                            <div style={{ height: '2px', width: `calc(0.16 * ${props.bheight})`, backgroundColor: '#04C7F4' }}></div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: props.content.paragraph }} className='d-flex flex-column align-items-center' style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}></div>
                        <div className='d-flex flex-row justify-content-around'>
                            <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', letterSpacing: `calc(1.4/1920 * 100vw)` }}>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <img src={img20} style={{ width: `calc(0.08 * ${props.bheight})` }} />
                                    <div className='ms-3'>Identifying your goals &amp; expectation</div></div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <img src={img21} style={{ width: `calc(0.08 * ${props.bheight})` }} />
                                    <div className='ms-3'>Flexible plans to fit your lifestyle</div></div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <img src={img22} style={{ width: `calc(0.08 * ${props.bheight})` }} />
                                    <div className='ms-3'>Following a customised schedule</div></div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <img src={img23} style={{ width: `calc(0.08 * ${props.bheight})` }} />
                                    <div className='ms-3'>Providing extensive support</div></div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <img src={img24} style={{ width: `calc(0.08 * ${props.bheight})` }} />
                                    <div className='ms-3'>Monitoring on a weekly basis</div></div>
                            </div>
                            <div className='d-flex flex-row align-items-center'>
                                <div style={
                                    {
                                        height: `calc(0.33 * ${props.bheight})`,
                                        width: `calc(0.33 * ${props.bheight} * 1.5)`,
                                        border: '1px solid rgba(0, 0, 0, 0.2)'
                                    }
                                }></div>
                            </div>
                        </div>

                    </div>
                </div>
            </Box>
            {/* Mobile Screen */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}>
                <div className="d-block position-absolute w-100 p-0" style={{ height: `${props.bheight}` }}>
                    <div className="position-absolute" style={
                        { bottom: '0px' }
                    }>
                        <img src={img25} style={
                            {
                                width: `calc(0.25 * ${props.bheight})`,
                                transform: 'translate(-50%, 50%)'
                            }
                        } alt="" />
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-around' style={{ height: '100%' }}>
                        <div style={
                            {
                                width: `calc(150/640 * ${props.bheight} * 1.6)`,
                                height: `calc(150/640 * ${props.bheight})`,
                                border: '1px solid rgba(0, 0, 0, 0.2)'
                            }
                        }>

                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='mb-2' style={
                                {
                                    fontSize: `calc(18/640 * ${props.bheight})`,
                                    letterSpacing: `calc(1.8/640 * ${props.bheight})`,
                                    fontWeight: '500'
                                }
                            }>{props.content.heading}</div>
                            <div style={
                                {
                                    width: `calc(180/640 * ${props.bheight})`,
                                    height: '2px',
                                    backgroundColor: '#04c7f4'
                                }
                            }>

                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: props.content.paragraph }} className='d-flex flex-column align-items-center' style={{
                            fontSize: `calc(14/640 * ${props.bheight})`
                        }}>
                            {/* We believe in the mantra, <b>"Being fit is not a destination; It is the way of life."</b> We shape women in their health and fitness regime, though */}
                        </div>
                        <div>
                            <div className='d-flex align-items-center mb-4'>
                                <img style={{ width: `calc(40/640 * ${props.bheight})` }} src={img20} alt="" />
                                <div className='ms-2' style={{ fontSize: `calc(12/640 * ${props.bheight})` }}><b>Identifying your goals &amp; expectation</b></div>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <img style={{ width: `calc(40/640 * ${props.bheight})` }} src={img21} alt="" />
                                <div className='ms-2' style={{ fontSize: `calc(12/640 * ${props.bheight})` }}><b>Flexible plans to fit your lifestyle</b></div>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <img style={{ width: `calc(40/640 * ${props.bheight})` }} src={img22} alt="" />
                                <div className='ms-2' style={{ fontSize: `calc(12/640 * ${props.bheight})` }}><b>Following a customised schedule</b></div>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <img style={{ width: `calc(40/640 * ${props.bheight})` }} src={img23} alt="" />
                                <div className='ms-2' style={{ fontSize: `calc(12/640 * ${props.bheight})` }}><b>Providing extensive support</b></div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img style={{ width: `calc(40/640 * ${props.bheight})` }} src={img24} alt="" />
                                <div className='ms-2' style={{ fontSize: `calc(12/640 * ${props.bheight})` }}><b>Monitoring on a weekly basis</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>

        </>
    );
}

export default Block2