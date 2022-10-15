import {AppBar,Container,Toolbar,Typography, Box} from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';


const Header = () => {
    const pages = ['Home', 'Skills', 'Articles','Education','Contacts']
    const MenuBar = (value) => {
        const BoxNamePart = 
                <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'inline' },
                fontFamily: 'Roboto',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
                >
                    {value}
            </Typography>
        
            switch (value) {
                case "Home":
                    return (
                        <>
                            <Box sx={{ marginLeft : 8}}>
                            {BoxNamePart}
                            </Box>
                        </>
                    )
                case "Skills":
                    return (
                        <>
                            <Box sx={{ marginLeft : 8}}>
                                <PsychologyRoundedIcon sx={{ display: { xs: 'none', md: 'inline' }, mr: 0.1 }} />
                                {BoxNamePart}
                            </Box>
                        </>
                    )
                case "Articles":
                    return (
                        <>
                            <Box sx={{ marginLeft : 8}}>
                                <ArticleRoundedIcon sx={{ display: { xs: 'none', md: 'inline' }, mr: 0.1 }} />
                                {BoxNamePart}
                            </Box>
                        </>
                    )
                case "Education":
                    return (
                        <>
                            <Box sx={{ marginLeft : 8}}>
                                <SchoolRoundedIcon sx={{ display: { xs: 'none', md: 'inline' }, mr: 0.1 }} />
                                {BoxNamePart}
                            </Box>
                        </>
                    )
                case "Contacts":
                    return (
                        <>
                            <Box sx={{ marginLeft : 8}}>
                                <PermContactCalendarRoundedIcon sx={{ display: { xs: 'none', md: 'inline' }, mr: 0.1 }} />
                                {BoxNamePart}
                            </Box>
                        </>
                    )
                default :
                        return (
                            <h1>Error!</h1>
                        )    
            }
    }
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl" fixed>
                    <Toolbar disableGutters>
                        <HomeRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.1 }} />
                        <Typography
                            variant="h2"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                            >
                                HS
                         </Typography>
                            {pages.map(page =>{
                                    switch(page){
                                        case "Home":
                                            return MenuBar("Home")
                                        case "Skills":
                                            return MenuBar("Skills")
                                        case "Articles":
                                            return MenuBar("Articles")
                                        case "Education":
                                            return MenuBar("Education")
                                        case "Contacts":
                                            return MenuBar("Contacts")
                                        default:
                                            return <h6>Wrong</h6>
                                    }
                                })}
                            
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header;