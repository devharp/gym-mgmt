import { Box } from '@mui/material'
import { useEffect } from 'react'
import img30 from '../../assets/home/30.svg'
import img31 from '../../assets/home/31.svg'
import img32 from '../../assets/home/32.svg'
function Block3(props) {

    useEffect(() => {
        // console.log('props of Block2 Home', props);


    }, []);

    function MobileImageBlock(props) {
        return (
            <>
                <div className='d-flex flex-column align-items-center mb-5' style={{
                    backgroundColor: 'white',
                    width: 'max-content',
                    padding: `calc(0.8/100 * ${props.bheight})`,
                    boxShadow: '0px 14px 8px #00000029'
                }}>
                    <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(67/640 * ${props.bheight})`, width: `calc(67/640 * ${props.bheight} * 1.4)` }}>
                        <img src={props.img} style={{ width: `calc(70/640 * ${props.bheight})` }} alt="" />
                    </div>
                    <div style={{ maxWidth: `calc(60/320 * 100vw)`, textAlign: 'center', textAlignLast: 'center', fontSize: `calc(7/640 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>{props.text}</div>

                </div>
            </>
        );
    }

    return (
        <>
            {/* Desktop Screen */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                <div className='d-flex flex-column align-items-center justify-content-around w-100' style={{ height: props.bheight }}>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='mb-2' style={
                            {
                                fontSize: `calc(36/1080 * ${props.bheight})`,
                                letterSpacing: `calc(3.6/1080 * ${props.bheight})`,
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
                    <div className='d-flex flex-column align-items-center' style={{ textAlign: 'center', textAlignLast: 'center', maxWidth: `calc(1000/1920 * 100vw)`, fontSize: `calc(28/1080 * ${props.bheight})` }}>
                        {props.content.paragraph}
                    </div>
                    <div className='d-flex flex-row justify-content-around w-100 px-5'>
                        <div className='d-flex flex-column align-items-center mx-3' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(240/1080 * ${props.bheight})`, width: `calc(240/1080 * ${props.bheight}) * 1.4`, flexShrink: '0' }}>
                                <img src={`${props.content.other[0].img}`} style={{ width: `calc(572/1920 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ textAlign: 'center', textAlignLast: 'center', maxWidth: `calc(260/1080 * ${props.bheight})`, fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>{props.content.other[0].text}</div>

                        </div>
                        <div className='d-flex flex-column align-items-center mx-3' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(240/1080 * ${props.bheight})`, width: `calc(240/1080 * ${props.bheight}) * 1.4`, flexShrink: '0' }}>
                                <img src={`${props.content.other[1].img}`} style={{ width: `calc(572/1920 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ textAlign: 'center', textAlignLast: 'center', maxWidth: `calc(260/1080 * ${props.bheight})`, fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>{props.content.other[1].text}</div>
                        </div>
                        <div className='d-flex flex-column align-items-center mx-3' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(240/1080 * ${props.bheight})`, width: `calc(240/1080 * ${props.bheight}) * 1.4`, flexShrink: '0' }}>
                                <img src={`${props.content.other[2].img}`} style={{ width: `calc(572/1920 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ textAlign: 'center', textAlignLast: 'center', maxWidth: `calc(260/1080 * ${props.bheight})`, fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>{props.content.other[2].text}</div>
                        </div>

                    </div>
                </div>
            </Box>

            {/* Mobile Screen */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}>
                <div className='d-flex flex-column align-items-center justify-content-around w-100' >
                    <div className='d-flex flex-column align-items-center'>
                        <div className='my-3' style={
                            {
                                fontSize: `calc(18/640 * ${props.bheight})`,
                                letterSpacing: `calc(1.8/640 * ${props.bheight})`,
                                fontWeight: '500'
                            }
                        }>{props.content.heading}</div>
                        <div className='mb-5' style={
                            {
                                width: `calc(180/640 * ${props.bheight})`,
                                height: '2px',
                                backgroundColor: '#04c7f4'
                            }
                        }>

                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center mb-4' style={{ fontSize: `calc(14/640 * ${props.bheight})`, maxWidth: `calc(250/640 * ${props.bheight})`, textAlign: 'center', textAlignLast: 'center' }}>
                        {props.content.paragraph}
                    </div>
                    <div className='flex-grow-1 d-flex flex-column justify-content-around'>
                        <MobileImageBlock bheight={props.bheight} img={props.content.other[0].img} text={props.content.other[0].text} />
                        <MobileImageBlock bheight={props.bheight} img={props.content.other[1].img} text={props.content.other[1].text} />
                        <MobileImageBlock bheight={props.bheight} img={props.content.other[2].img} text={props.content.other[2].text} />
                    </div>
                    <div className='d-flex flex-column'>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Block3;