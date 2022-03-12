import { Box } from '@mui/material'
import img30 from '../../assets/home/30.svg'
import img31 from '../../assets/home/31.svg'
import img32 from '../../assets/home/32.svg'

import img40 from '../../assets/home/40/1.png'
import img41 from '../../assets/home/41/1.png'
import img42 from '../../assets/home/42/1.png'
import img43 from '../../assets/home/43/1.png'
import img44 from '../../assets/home/44/1.png'
import img45 from '../../assets/home/45/1.png'
import img46 from '../../assets/home/46/1.png'
import img47 from '../../assets/home/47/1.png'
import img48 from '../../assets/home/48/1.png'
import img49 from '../../assets/home/49/1.png'


import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function Block4(props) {
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
                        }>Testimonials</div>
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
                        <div>Our Customer Quotes:</div>
                        <div>Over the past months, Go Girl has transformed countless women from all</div>
                        <div>over India. Have a look about their journey and experiences here.</div>
                    </div>
                    <div className='w-100 bg-dark p-0'>
                        <ImageCarousel bheight={props.bheight} />

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

function ImageCarousel(props) {
    var items = [
        [
            { img: img40 },
            { img: img41 },
            { img: img42 }
        ],
        [
            { img: img43 },
            { img: img44 },
            { img: img45 }
        ],
        [
            { img: img46 },
            { img: img47 },
            { img: img48 }
        ],
        [
            { img: img49 }
        ],
    ]

    return (

        <Carousel autoPlay={true} animation={'slide'} swipe={true} navButtonsAlwaysVisible={true}
            className='bg-secondary d-flex flex-column' sx={{ height: `calc(388/1920 * 100vw)`, maxHeight: `calc(400/1080 * ${props.bheight})` }}
            indicatorIconButtonProps={{ style: { display: 'none' } }}
            NavButton={({ onClick, className, style, next, prev }) => {
                const value = '40px';
                return (
                    <div className='d-flex flex-column justify-content-center' style={{ backgroundColor: 'none', maxHeight: `calc(400/1080 * ${props.bheight})`, height: `calc(400/1920 * 100vw)`, width: value }}>
                        <div className='' onClick={onClick} style={{
                            backgroundColor: 'black',
                            width: value,
                            height: value,
                            borderRadius: '50px'
                        }}>
                            {next &&

                                <NavigateNextIcon sx={{ width: value, height: value, color: 'white' }} />

                            }
                            {prev &&

                                <NavigateBeforeIcon sx={{ width: value, height: value, color: 'white' }} />

                            }
                        </div>
                    </div>);
            }}
        >

            {
                items.map((item, i) => <Item key={i} item={item} bheight={props.bheight} />)
            }
        </Carousel>

    )
}

function Item(props) {
    // console.log(props.item)

    return (
        <Paper className='w-100'>
            <div className='d-flex flex-row justify-content-around' style={{ padding: '0px 40px' }}>
                
                {
                    props.item.map((item, i) => {
                        return (
                            <div key={i}
                                style={{
                                    maxWidth: `calc(400/1080 * ${props.bheight})`,
                                    maxHeight: `calc(400/1080 * ${props.bheight})`,
                                    height: `calc(400/1920 * 100vw)`,
                                    width: `calc(400/1920 * 100vw)`, 
                                    backgroundColor: 'none'
                                }}>
                                    <img src={item.img} alt="" style={{
                                    maxWidth: `calc(400/1080 * ${props.bheight})`,
                                    maxHeight: `calc(400/1080 * ${props.bheight})`,
                                    height: `calc(400/1920 * 100vw)`,
                                    width: `calc(400/1920 * 100vw)`}} />
                            </div>)
                    })
                }
            </div>

        </Paper>
    )
}

export default Block4;