import {Container, Typography, TextField, Button, Box} from '@mui/material';
import {useForm} from 'react-hook-form'

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const OnSubmit = (data) => {
        console.log(data);
    }
    return (
        <> 
            <img src="/img/bgImageHome.jpg" alt="Home Description" className='imgHomePage' />
            <Container sx={{ width: '100%', maxWidth: 500, marginTop:5, textAlign:'center' }}>
                <Typography className="centered" color='#f8f8f2' variant="h3">
                    HOSSEIN SIMCHI PERSONAL WEBSITE
                </Typography>
            </Container>

            {/**
                * ? REACT HOOK FORM
            */}
            <Box component="form" onSubmit={handleSubmit(OnSubmit)}>
                <TextField label="outlined" sx={{ mb:2}} {...register('firstname', { required: true })} />
                {errors.firstname && <p>Last name is required.</p>}
                <TextField sx={{display:'block', mb:2}} {...register('email', { required: true })} />
                {errors.email && <p>email is required.</p>}
                <TextField sx={{display:'block', mb:2}} {...register('password', { required: true })} />
                {errors.password && <p>password is required.</p>}
                <Button type="submit" variant="contained">Submit</Button>
            </Box>
        </>
    )
}

export default Home;