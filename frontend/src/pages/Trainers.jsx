import NavBar from "../components/navbar/NavBar";
import { Box } from "@mui/material"

import img00 from '../assets/trainers/00.svg'
import img01 from '../assets/trainers/01.svg'

function Trainers(props) {

    function Desktop() {
        function BackgroundImages() {
            return (
                <div className="position-absolute">
                    <img className="position-absolute" src={img00} style={{
                        transform: `translate(calc(-392/1080 * ${props.bheight}), calc(-264/1080 * ${props.bheight} * 1920/1080))`,
                        width: `calc(1321/1080 * ${props.bheight} * 1906/1321)`,
                        height: `calc(1321/1080 * ${props.bheight})`
                    }} alt=""
                    />
                    <img className="position-absolute" src={img01} style={{
                        transform: `translate(calc(1136/1920 * 100vw), calc(100/1080 * ${props.bheight}))`,
                        width: `calc(482/1080 * ${props.bheight} * 369/482)`,
                        height: `calc(482/1080 * ${props.bheight})`
                    }} alt=""
                    />
                </div>
            );
        }
        return (

            <>
                <BackgroundImages />
                <div className="position-absolute" style={{ width: '100%', top: `calc(0.25 * ${props.bheight})` }}>
                    <div className='' style={{ width: '100%' }}>
                        Trainers Pagegh
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            {/* <NavBar position="fixed" brand="GymFit" minHeight='50px' /> */}


            <div className="position-absolute" style={{ width: '100%' }}>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%' }}>
                    <Desktop />
                </Box>
            </div>
        </>
    );
}

export default Trainers;