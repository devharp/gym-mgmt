import { Button, TextField } from '@mui/material'

import './Login.css'

function Login() {
    return (
        <>
            <div className='full-hw d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column holder'>
                    <div className=' mb-5'>
                        <div className='heading'>Sign in</div>
                        <div className='subtitle'>Sign in here to accesss the admin panel</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <TextField className='mb-3' variant='outlined' size='small' type='text' label='Username' />
                        <TextField className='my-3' variant='outlined' size='small' type='password' label='Password' />
                        <Button className=' my-3' variant='contained'>Sign In</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;