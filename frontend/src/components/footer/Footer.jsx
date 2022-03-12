import { Box } from '@mui/material'
import { fontWeight } from '@mui/system';

function Footer(props) {
    return (
        <>

            {/* Desktop Screen */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                <div className='d-flex flex-row justify-content-around my-5 w-100' style={{ color: 'white' }}>
                    <div>
                        <div className='d-flex flex-row mb-3' style={{ fontFamily: "'Felona st'", fontSize: `calc(70/1080 * ${props.bheight})` }}>
                            <div>Gym</div>
                            <div style={{ color: '#E8BC00' }}>Fit</div>
                        </div>
                        <div className='mb-5' style={{ fontSize: `calc(20/1080 * ${props.bheight})` }}>
                            <div>D-415, Kamla Nagar,</div>
                            <div>Nanganallur,</div>
                            <div>Chennai 61.</div>
                        </div>
                        <div style={{ fontSize: `calc(24/1080 * ${props.bheight})` }}>All rights reserved 2021</div>
                    </div>
                    <div>
                        <div className='my-3' style={{ color: '#E8BC00', fontWeight: '300' }}>FOLLOW US</div>
                        <div className='d-flex flex-row align-items-center mb-2'>
                            <div style={{fontSize: `calc(33/1080 * ${props.bheight})`}}><i className="fab fa-instagram-square" /></div>
                            <div className='ms-2' style={{fontSize: `calc(20/1080 * ${props.bheight})`}}>Instagram</div>
                        </div>
                        <div className='d-flex flex-row align-items-center mb-2'>
                            <div style={{fontSize: `calc(33/1080 * ${props.bheight})`}}><i className="fab fa-youtube-square" /></div>
                            <div className='ms-2' style={{fontSize: `calc(20/1080 * ${props.bheight})`}}>YouTube</div>
                        </div>
                        <div className='d-flex flex-row align-items-center mb-2'>
                            <div style={{fontSize: `calc(33/1080 * ${props.bheight})`}}><i className="fab fa-facebook-square" /></div>
                            <div className='ms-2' style={{fontSize: `calc(20/1080 * ${props.bheight})`}}>Facebook</div>
                        </div>

                    </div>
                    <div className='d-flex flex-column justify-content-center' style={{color: '#E8BC00', fontSize: `calc(26/1080 * ${props.bheight})`}}>
                        <div className='my-1'>Follow us</div>
                        <div className='my-1'>Contact us</div>
                    </div>

                </div>

            </Box>

            {/* Mobile Screen */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}>
                <div className='d-flex flex-column align-items-center my-4 w-100' style={{ color: 'white' }}>
                    <div className='d-flex flex-row' style={{ fontSize: `calc(10/640 * ${props.bheight})`, fontWeight: '300', color: '#E8BC00' }}>
                        <div className='mx-3 mb-3'>FOLLOW US</div>
                        <div className='mx-3 mb-3'>CONTACT US</div>
                    </div>
                    <div className='d-flex flex-row' style={{ fontSize: `calc(12/640 * ${props.bheight})` }}>
                        <div className='mx-2 mb-2'><i className="fab fa-youtube-square" /></div>
                        <div className='mx-2 mb-2'><i className="fab fa-facebook-square" /></div>
                        <div className='mx-2 mb-2'><i className="fab fa-instagram-square" /></div>
                    </div>
                    <div className='d-flex flex-row mb-2' style={{ fontFamily: "'Felona st'", fontSize: `calc(22/640 * ${props.bheight})` }}>
                        <div>Gym</div>
                        <div style={{ color: '#E8BC00' }}>Fit</div>
                    </div>
                    <div className='mb-2' style={{ fontSize: `calc(10/640 * ${props.bheight})` }}>D-415, Kamla Nagar, Nanganallur, Chennai 61.</div>
                    <div style={{ fontSize: `calc(8/640 * ${props.bheight})` }}>All rights reserved 2021</div>
                </div>
            </Box>
        </>
    );
}

export default Footer