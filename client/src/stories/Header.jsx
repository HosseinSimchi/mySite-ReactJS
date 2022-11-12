import {Container, Typography,} from '@mui/material';
import './header.css'

export const Header = ({name}) => {
    return (
      <>
          <img src="/img/bgImageHome.jpg" alt="Home Description" className='imgHomePage' />
          <Container sx={{ width: '100%', maxWidth: 500, marginTop:5, textAlign:'center' }}>
              <Typography className="centered" color='#f8f8f2' variant="h3">
                  {name}
              </Typography>
          </Container>
          <Container  sx={{textAlign:'center'}} ></Container>
      </>
    )
}

