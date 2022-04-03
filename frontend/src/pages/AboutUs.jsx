import { Box } from '@mui/material'

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import img0 from "../assets/aboutus/0.png"
import img1 from "../assets/aboutus/1.png"


function AboutUs(props) {


    function Desktop() {
        function Block0() {
            const style = {
                height: props.bheight,
                width: '100%',
                backgroundColor: 'red',
                overflow: 'hidden'
            }
            return (
                <>
                    <div className='pt-5 d-flex flex-column justify-content-between' style={{ width: '100%', height: props.bheight }}>
                        <div className='pt-3 pb-1 d-flex justify-content-center' style={{ fontSize: `calc(167/1080 * ${props.bheight})`, letterSpacing: `calc(8.35/1080 * ${props.bheight})`, fontWeight: '500' }}>ABOUT US</div>
                        <div className='d-flex justify-content-center' style={{ maxWidth: '100vw', overflow: 'hidden' }}>
                            <img src={img0} style={{ transform: `translateY(calc(80/1080 * ${props.bheight}))`, minWidth: `100vw`, backgroundColor: 'none', maxHeight: `calc(0.8 * ${props.bheight})`, width: `calc(${props.bheight} * 1920/1080)` }} alt="" />
                        </div>
                    </div>
                </>
            );

        }
        function Block1() {
            const style = {
                height: props.bheight,
                maxWidth: `calc(991/1080 * ${props.bheight} * 1176/991)`,

            }
            return (
                <>
                    <div className='' style={{ width: '100%', height: props.bheight }}>
                        <div className='position-absolute' style={{ width: `100%`, overflow: 'hidden' }}>
                            <img src={img1} style={{ width: '100vw', height: props.bheight }} alt="" />
                        </div>
                        <div className='position-absolute d-flex justify-content-center align-items-center mt-5' style={{ height: props.bheight, width: '100%' }} >
                            <div className='d-flex flex-column justify-content-around flex-grow-1' style={style}>
                                <div style={{ fontSize: `calc(34/1080 * ${props.bheight})`, textAlign: 'center', textAlignLast: 'center', fontWeight: '500' }}>Hi there, here is how SuperGrl was born.</div>
                                <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, textAlign: 'center', textAlignLast: 'center' }}>I am a 27 year old woman who was diagnosed with PCOD due to which I faced insulin resistance in other words diabetes at a very young age. During the pandemic hit, my insulin spiked up because of lack of exercise and I was put under medications. It was at that time I came across many girls and working women facing similar issues. We all have seen mothers usually too busy caring for their family, young women juggling between work-life balance and girls facing hormonal imbalances very early in life, not caring enough for themselves. Apart from this, there are also many myths and misconceptions about women's bodies. I felt a change needs to be made, myths should be busted, therefore, my friend and I built XXX, an online personal training platform exclusively for women.</div>
                                <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, textAlign: 'center', textAlignLast: 'center' }}>We build this on a mission to make a regular fitness regime for all women at very affordable prices. We feel immensely proud to be renowned as India’s first women-only fitness online program training. Additionally, Super Grl provides employment opportunities for unwaged fitness enthusiasts by offering them the career opportunity to become coaches.</div>
                                <div style={{ fontSize: `calc(28/1080 * ${props.bheight})`, textAlign: 'center', textAlignLast: 'center' }}>At Super Grl, we offer fitness coaching that is balanced in nature-for the body, mind, and spirit. No matter what kind of diet and exercise plan you're looking for or what type of mental wellness you're seeking, Super Grl is flexible for you! You can reach your fitness goals faster with our unique methods and customised approach.</div>
                            </div>
                        </div>
                    </div>
                </>
            );

        }
        return (
            <>
                <div className='' style={{ width: '100%' }}>
                    <Block0 />
                    <Block1 />

                </div>
            </>
        );

    }

    function Mobile() {
        return (
            <div style={{ width: '100%' }}>
                <div className='mt-5 pt-5 d-flex justify-content-center' style={{ fontWeight: '500', fontSize: `calc(45/640 * 100vw)`, letterSpacing: `calc(2.25/1080 * ${props.bheight})` }}>
                    ABOUT US
                </div>
                <div className='d-flex justify-content-center' style={{ width: '100%', overflow: 'hidden' }}>
                    <img src={img0} style={{ width: '150%' }} alt="" />
                </div>
                <div className='position-relative' >
                    <div className='position-absolute' style={{ width: '100%', height: `calc(300/640 * 100vw)`, overflow: 'hidden' }}>
                        <img src={img1} style={{ transform: `translateX(-50%)` }} alt="" />
                    </div>
                    <div className='position-absolute' style={{ marginTop: `calc(80/640 * 100vw)`, width: '100vw', backgroundColor: '#FBE551' }}>
                        <div className='d-flex justify-content-center' style={{ width: '100vw' }}>
                            <div className='' style={{ maxWidth: `calc(250/360 * 100vw)` }}>
                                <div className='mb-3' style={{ fontSize: `calc(22/640 * 100vw)`, textAlign: 'center', textAlignLast: 'center', fontWeight: '500' }}>Hi there, here is how SuperGrl was born.</div>
                                <div className='mb-3' style={{ fontSize: `calc(20/640 * 100vw)`, textAlign: 'center', textAlignLast: 'center' }}>I am a 27 year old woman who was diagnosed with PCOD due to which I faced insulin resistance in other words diabetes at a very young age. During the pandemic hit, my insulin spiked up because of lack of exercise and I was put under medications. It was at that time I came across many girls and working women facing similar issues. We all have seen mothers usually too busy caring for their family, young women juggling between work-life balance and girls facing hormonal imbalances very early in life, not caring enough for themselves. Apart from this, there are also many myths and misconceptions about women's bodies. I felt a change needs to be made, myths should be busted, therefore, my friend and I built XXX, an online personal training platform exclusively for women.</div>
                                <div className='mb-3' style={{ fontSize: `calc(20/640 * 100vw)`, textAlign: 'center', textAlignLast: 'center' }}>We build this on a mission to make a regular fitness regime for all women at very affordable prices. We feel immensely proud to be renowned as India’s first women-only fitness online program training. Additionally, Super Grl provides employment opportunities for unwaged fitness enthusiasts by offering them the career opportunity to become coaches.</div>
                                <div className='mb-3' style={{ fontSize: `calc(20/640 * 100vw)`, textAlign: 'center', textAlignLast: 'center' }}>At Super Grl, we offer fitness coaching that is balanced in nature-for the body, mind, and spirit. No matter what kind of diet and exercise plan you're looking for or what type of mental wellness you're seeking, Super Grl is flexible for you! You can reach your fitness goals faster with our unique methods and customised approach.</div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>

                    </div>
                </div>
            </div>);
    }

    return (
        <>
            <div>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />

                <div className="w-100 d-block position-absolute" style={{ backgroundColor: 'none' }}>

                    {/* Desktop Screen */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: '100%', height: '100%' }}>
                        <div className='d-flex flex-column'>
                            <Desktop className='w-100 flex-grow-1 d-flex flex-column' bheight={props.bheight} />
                            <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div>
                        </div>
                    </Box>

                    {/* Mobile Screen */}
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%', height: '100%' }}>
                        <Mobile className='flex-grow-1' bheight={props.bheight} style={{ height: '100%', width: '100vw' }} />
                    </Box>
                    {/* <div style={{ backgroundColor: 'black' }}><Footer bheight={props.bheight} /></div> */}

                </div>
                <div className="w-100 d-block position-absolute" style={{ backgroundColor: 'none' }}>
                </div>

            </div>
        </>
    );
}

export default AboutUs;