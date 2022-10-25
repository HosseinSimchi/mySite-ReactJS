import {AppBar,Box,Toolbar,Typography,Button, Avatar} from '@mui/material';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar sx = {{width: 45, height: 45}} alt = "Hossein Simchi" src="/img/Logo.png" />
                        <Typography variant="h6" component="div" sx={{ marginLeft : 3}}>
                            Hossein Simchi
                        </Typography>

                        <Link to="/" style= {{textDecoration: 'none'}}>
                            <Button sx = {{marginLeft:50}} color="secondary">
                                    Home
                            </Button>
                        </Link>

                        <Link to="/skills" style= {{textDecoration: 'none'}}> 
                            <Button sx = {{marginLeft:5}} color="secondary">
                                    Skills
                            </Button>
                        </Link>

                        <Link to="/articles" style= {{textDecoration: 'none'}}>
                            <Button sx = {{marginLeft:5}} color="secondary">
                                    Articles
                            </Button>
                        </Link>

                        <Link to="/education" style= {{textDecoration: 'none'}}>
                            <Button sx = {{marginLeft:5}} color="secondary">
                                    Education
                            </Button>
                        </Link>

                        <Link to="/contact" style= {{textDecoration: 'none'}}>
                            <Button sx = {{marginLeft:5}} color="secondary">
                                    Contact
                            </Button>
                        </Link>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;