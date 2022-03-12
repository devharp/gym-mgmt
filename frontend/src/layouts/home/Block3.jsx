import { Box } from '@mui/material'
import img30 from '../../assets/home/30.svg'
import img31 from '../../assets/home/31.svg'
import img32 from '../../assets/home/32.svg'
function Block3(props) {
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
                        }>How do we differ ?</div>
                        <div style={
                            {
                                width: `calc(180/640 * ${props.bheight})`,
                                height: '2px',
                                backgroundColor: '#04c7f4'
                            }
                        }>

                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center' style={{ fontSize: `calc(28/1080 * ${props.bheight})` }}>
                        <div>Whatever life throws at you, whether it's societal barriers, hormonal</div>
                        <div>imbalance like PCOD, pregnancy, postpartum, breastfeeding, or a tight work</div>
                        <div>schedule, we understand! That's why we made <b>India's first women-only</b></div>
                        <div><b>fitness online program training</b> only for you</div>
                    </div>
                    <div className='d-flex flex-row justify-content-around w-100 px-5'>
                        <div className='d-flex flex-column align-items-center mx-3' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(240/1080 * ${props.bheight})`, width: `calc(240/1080 * ${props.bheight}) * 1.4`, flexShrink: '0' }}>
                                <img src={img30} style={{ width: `calc(572/1920 * ${props.bheight})` }} alt="" />
                            </div>
                            <div className="d-flex align-items-center flex-grow-1" style={{ fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div>
                        </div>
                        <div className='d-flex flex-column align-items-center mx-3' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(240/1080 * ${props.bheight})`, width: `calc(240/1080 * ${props.bheight}) * 1.4`, flexShrink: '0' }}>
                                <img src={img31} style={{ width: `calc(572/1920 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>We Understand Your</div>
                            <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Emotions</div>
                        </div>
                        <div className='d-flex flex-column align-items-center mx-3' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(240/1080 * ${props.bheight})`, width: `calc(240/1080 * ${props.bheight}) * 1.4`, flexShrink: '0' }}>
                                <img src={img32} style={{ width: `calc(572/1920 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Qualified &amp; Motivative</div>
                            <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Trainers</div>
                        </div>

                    </div>
                </div>
            </Box>

            {/* Mobile Screen */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}>
                <div className='d-flex flex-column align-items-center justify-content-around w-100' style={{ height: props.bheight }}>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='my-2' style={
                            {
                                fontSize: `calc(18/640 * ${props.bheight})`,
                                letterSpacing: `calc(1.8/640 * ${props.bheight})`,
                                fontWeight: '500'
                            }
                        }>How do we differ ?</div>
                        <div className='mb-4' style={
                            {
                                width: `calc(180/640 * ${props.bheight})`,
                                height: '2px',
                                backgroundColor: '#04c7f4'
                            }
                        }>

                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center' style={{ fontSize: `calc(14/640 * ${props.bheight})` }}>
                        <div>Whatever life throws at you, whether it's societal</div>
                        <div>barriers, hormonal imbalance like PCOD,</div>
                        <div>pregnancy, postpartum, breastfeeding, or a tight</div>
                        <div>work schedule, we understand! That's why we</div>
                        <div>made India's first women-only fitness online</div>
                        <div>program training only for you</div>
                    </div>
                    <div className='flex-grow-1 d-flex flex-column justify-content-around'>
                        <div className='d-flex flex-column align-items-center' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(67/640 * ${props.bheight})`, width: `calc(67/640 * ${props.bheight} * 1.4)` }}>
                                <img src={img30} style={{ width: `calc(70/640 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ fontSize: `calc(7/640 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>India's First Woman Only</div>
                        </div>
                        <div className='d-flex flex-column align-items-center' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(67/640 * ${props.bheight})`, width: `calc(67/640 * ${props.bheight} * 1.4)` }}>
                                <img src={img31} style={{ width: `calc(70/640 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ fontSize: `calc(7/640 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>We Understand Your</div>
                            <div style={{ fontSize: `calc(7/640 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Emotions</div>
                        </div>
                        <div className='d-flex flex-column align-items-center' style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            padding: `calc(0.8/100 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'
                        }}>
                            <div className='d-flex justify-content-center' style={{ backgroundColor: '#FFF5CC', height: `calc(67/640 * ${props.bheight})`, width: `calc(67/640 * ${props.bheight} * 1.4)` }}>
                                <img src={img32} style={{ width: `calc(70/640 * ${props.bheight})` }} alt="" />
                            </div>
                            <div style={{ fontSize: `calc(7/640 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Qualified &amp; Motivative</div>
                            <div style={{ fontSize: `calc(7/640 * ${props.bheight})`, fontWeight: '500', marginTop: `calc(0.5/100 * ${props.bheight})` }}>Trainers</div>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Block3;