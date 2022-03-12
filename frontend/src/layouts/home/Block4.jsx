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
    const itemsdesk = [
        [
            { img: img40 },
            { img: img41 },
            { img: img42 },
            { img: img43 },

        ],
        [
            { img: img43 },
            { img: img44 },
            { img: img45 },
            { img: img46 },

        ],
        [
            { img: img46 },
            { img: img47 },
            { img: img48 },
            { img: img48 },
        ],
        [
            { img: img47 },
            { img: img49 },
            { img: img47 },

        ],
    ]
    const itemsmob = [
        [
            { img: img40 },
            { img: img41 },

        ],
        [
            { img: img42 },
            { img: img43 },

        ],
        [
            { img: img44 },
            { img: img45 },
        ],
        [
            { img: img46 },
            { img: img47 },

        ],
        [
            { img: img48 },
            { img: img49 },

        ],
    ]
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
                    <div className='w-100 p-0' style={{ backgroundColor: 'transparent' }}>

                        <ImageCarouselDesk bheight={props.bheight} items={itemsdesk} />

                    </div>
                </div>
            </Box>

            {/* Mobile Screen */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, width: '100%' }}>
                <div className='d-flex flex-column align-items-center justify-content-around w-100' style={{ height: props.bheight }}>
                    <div className='d-flex flex-column align-items-center mt-5'>
                        <div className='my-2' style={
                            {
                                fontSize: `calc(18/640 * ${props.bheight})`,
                                letterSpacing: `calc(1.8/640 * ${props.bheight})`,
                                fontWeight: '500'
                            }
                        }>Testimonials</div>
                        <div className='mb-4' style={
                            {
                                width: `calc(180/640 * ${props.bheight})`,
                                height: '2px',
                                backgroundColor: '#04c7f4'
                            }
                        }>

                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center mt-5' style={{ fontSize: `calc(14/640 * ${props.bheight})` }}>
                        <div>Our Customer Quotes:</div>
                        <div>Over the past months, Go Girl has transformed</div>
                        <div>countless women from all over India. Have a</div>
                        <div>look about their journey and experiences here.</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center w-100 flex-grow-1' style={{ height: props.bheight, backgroundColor: 'white' }}>
                        {/* <ImageCarouselMob bheight={props.bheight} items={itemsmob} /> */}
                        <div className='w-100' style={{backgroundColor: 'white'}}>
                            <ImageCarouselMob bheight={props.bheight} items={itemsmob} />
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
}

function ImageCarouselMob(props) {

    return (

        <Carousel autoPlay={false} animation={'fade'} swipe={true} navButtonsAlwaysVisible={true}
            className='d-flex flex-column'
            sx={{ height: `calc(200/640 * 100vw)`, backgroundColor: 'transparent' }}
            indicatorIconButtonProps={{ style: { display: 'none' } }}
            NavButton={({ onClick, className, style, next, prev }) => {
                const value = '30px';
                return (
                    <div className='px-3 d-flex flex-column justify-content-center' style={{ backgroundColor: 'none', height: `calc(200/640 * 100vw)`}}>
                        <div className='' onClick={onClick} style={{
                            backgroundColor: 'black',
                            width: value,
                            height: value,
                            borderRadius: value,
                            cursor: 'pointer'
                        }}>
                            {next &&

                                <NavigateNextIcon sx={{ width: value, height: value, color: '#E8BC00' }} />

                            }
                            {prev &&

                                <NavigateBeforeIcon sx={{ width: value, height: value, color: '#E8BC00' }} />

                            }
                        </div>
                    </div>);
            }}
        >

            {
                props.items.map((item, i) => <ItemMob key={i} item={item} bheight={props.bheight} />)
            }
        </Carousel>

    )
}

function ItemMob(props) {
    // console.log(props.item)

    return (
        <Paper className='w-100'>
            <div className='d-flex flex-row justify-content-around' style={{ padding: '0px 40px', height: `calc(340/640 * ${props.bheight})` }}>

                {
                    props.item.map((item, i) => {
                        return (
                            <div key={i}
                                style={{
                                    backgroundColor: 'none'
                                }}>
                                <img src={item.img} alt="" style={{
                                    height: `calc(200/640 * 100vw)`,
                                    width: `calc(200/640 * 100vw)`
                                }} />
                            </div>)
                    })
                }
            </div>

        </Paper>
    )
}

function ImageCarouselDesk(props) {

    return (

        <Carousel autoPlay={false} animation={'fade'} swipe={true} navButtonsAlwaysVisible={true}
            className='d-flex flex-column'
            sx={{ height: `calc(388/1920 * 100vw)`, maxHeight: `calc(400/1080 * ${props.bheight})`, backgroundColor: 'white' }}
            indicatorIconButtonProps={{ style: { display: 'none' } }}
            NavButton={({ onClick, className, style, next, prev }) => {
                const value = '40px';
                return (
                    <div className='d-flex flex-column justify-content-center' style={{ backgroundColor: 'none', maxHeight: `calc(400/1080 * ${props.bheight})`, height: `calc(400/1920 * 100vw)`, width: value }}>
                        <div className='' onClick={onClick} style={{
                            backgroundColor: 'black',
                            width: value,
                            height: value,
                            borderRadius: '50px',
                            cursor: 'pointer'
                        }}>
                            {next &&

                                <NavigateNextIcon sx={{ width: value, height: value, color: '#E8BC00' }} />

                            }
                            {prev &&

                                <NavigateBeforeIcon sx={{ width: value, height: value, color: '#E8BC00' }} />

                            }
                        </div>
                    </div>);
            }}
        >

            {
                props.items.map((item, i) => <ItemDesk key={i} item={item} bheight={props.bheight} />)
            }
        </Carousel>

    )
}

function ItemDesk(props) {
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
                                    width: `calc(400/1920 * 100vw)`
                                }} />
                            </div>)
                    })
                }
            </div>

        </Paper>
    )
}

export default Block4;