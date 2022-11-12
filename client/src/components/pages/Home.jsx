import {Container, Typography,} from '@mui/material';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const Home = () => {

    return (
        <> 
            <img src="/img/bgImageHome.jpg" alt="Home Description" className='imgHomePage' />
            <Container sx={{ width: '100%', maxWidth: 500, marginTop:5, textAlign:'center' }}>
                <Typography className="centered" color='#f8f8f2' variant="h3">
                    HOSSEIN SIMCHI PERSONAL WEBSITE
                </Typography>
            </Container>
            <Container  sx={{textAlign:'center'}} >
                {/* <Card sx={{ maxWidth:230, backgroundColor:'#6272a4', marginTop:3, textAlign:'center' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            Hossein
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{marginLeft:7}}>
                        <Button variant='contained' size="small" sx={{backgroundColor:'#44475a', color:'#ff79c6'}}>Learn More</Button>
                    </CardActions>

                </Card> */}
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </Box>
            </Container>
        </>
    )
}

export default Home;