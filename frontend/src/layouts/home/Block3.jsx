import { Box } from '@mui/material'
import img30 from '../../assets/home/30.svg'
function Block3(props) {
    return (
        <>
            {/* Desktop Screen */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                <div>

                </div>
            </Box>

            {/* Mobile Screen */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}>
                <div>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='mb-2' style={
                            {
                                fontSize: `calc(18/640 * ${props.bheight})`,
                                letterSpacing: `calc(1.8/640 * ${props.bheight})`,
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
                    <div className='d-flex flex-column align-items-center' style={{fontSize: `calc(14/640 * ${props.bheight})`}}>
                        <div>Whatever life throws at you, whether it's societal</div>
                        <div>barriers, hormonal imbalance like PCOD,</div>
                        <div>pregnancy, postpartum, breastfeeding, or a tight</div>
                        <div>work schedule, we understand! That's why we</div>
                        <div>made India's first women-only fitness online</div>
                        <div>program training only for you</div>
                    </div>
                    <div>
                        <div style={{
                            backgroundColor: 'white',
                            height: `calc(100/640 * ${props.bheight})`,
                            width: `calc(100/640 * ${props.bheight})`,
                            boxShadow: '0px 14px 8px #00000029'}}>
                                <div className='d-flex justify-content-center' style={{backgroundColor: '#FFF5CC', width: `calc()`, height: `calc(67/640 * ${props.bheight})`, width: `calc(67/640 * ${props.bheight} * 1.4)`}}>
                                    <img src={img30} style={{width: `calc(70/640 * ${props.bheight})`}} alt="" />
                                </div>
                                <div>India's First Woman Only</div>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Block3;