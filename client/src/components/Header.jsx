import {AppBar,Container,Toolbar,Button, Box, Avatar,Stack  } from '@mui/material'



const Header = () => {
    const pages = ['Home', 'Skills', 'Articles','Education','Contacts']
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl" fixed>
                    <Toolbar disableGutters>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Hossein Simchi" sx={{ width: 56, height: 56 }} source="../../public/Img/PersonalImg.jpg" />
                        </Stack>
                        {pages.map(page => {

                            return (
                            <>
                                <Box sx={{marginLeft:13}}>
                                <Button color="inherit">{page}</Button>
                                </Box>
                            </>
                            )
                        })}
                            
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header;