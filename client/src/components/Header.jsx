import {AppBar,Box,Toolbar,Typography,Button, Avatar} from '@mui/material';
import { Stack } from '@mui/system';
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

                        <Stack direction="row" spacing={5} sx={{marginLeft:50}}>
                            <Link to="/" style= {{textDecoration: 'none'}}>
                                <Button color="secondary">
                                        Home
                                </Button>
                            </Link>

                            <Link to="/skills" style= {{textDecoration: 'none'}}> 
                                <Button color="secondary">
                                        Skills
                                </Button>
                            </Link>

                            <Link to="/articles" style= {{textDecoration: 'none'}}>
                                <Button color="secondary">
                                        Articles
                                </Button>
                            </Link>

                            <Link to="/education" style= {{textDecoration: 'none'}}>
                                <Button color="secondary">
                                        Education
                                </Button>
                            </Link>

                            <Link to="/contact" style= {{textDecoration: 'none'}}>
                                <Button color="secondary">
                                        Contact
                                </Button>
                            </Link>
                        </Stack>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;