import { Box } from '@mui/material'
import { useEffect } from 'react';
import img10 from '../../assets/home/10.svg'
function Block1(props) {

    useEffect(() => {
        console.log('here: ', props);


    }, [])

    return (
        <>
            <div style={{ height: '100%', backgroundColor: 'white' }}>
                {/* Desktop Screen */}
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, height: '100%' }}>
                    <div className="d-flex flex-column justify-content-end align-items-center w-100" style={{overflow: 'hidden'}}>
                        <div className="mb-4" style={{ fontSize: `calc(0.045 * ${props.bheight})`, letterSpacing: '0.75vw' }}>LIVE RESULTS NOT PROMISES</div>
                        <div className="mb-4" style={{ backgroundColor: '#04C7F4', width: '30vw', height: '2px' }}></div>
                        <div className="mb-4 d-flex flex-column align-items-center" style={{ fontSize: `calc(0.0225 * ${props.bheight})` }}>
                            <div className='' style={{width: 'max-content'}}>Go Girl brings a quality lifestyle that makes fitness and nutrition</div>
                            <div className='' style={{width: 'max-content'}}>accessible and affordable to every woman by focusing on health and power.</div>
                            <div className='' style={{width: 'max-content'}}>You can meet your fitness goals and have fun to achieve mental wellness</div>
                        </div>
                        <div className="mb-4" style={{ fontSize: `calc(0.03 * ${props.bheight})`, letterSpacing: '0.16vw' }}>Go Girl offers it all!</div>
                        <div className="d-block" style={{ height: '45%', width: '100vw', backgroundColor: 'none' }}>
                            <div className="d-flex justify-content-center">
                                <img style={{ height: `calc(45/100 * ${props.bheight})` }} src={img10} />
                            </div>
                        </div>
                    </div>
                </Box>


                {/* Mobile Screen */}
                <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, fontSize: '100px' }}>Mobile screen</Box>

            </div>
        </>
    );
}

export default Block1;