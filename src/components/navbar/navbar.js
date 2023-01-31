import { Stack, Box } from '@mui/material'
import { logo } from '../../constants/index'
import './navbar.css'

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems={'center'} 
      justifyContent={'space-between'} p={2}
      sx={{position: 'sticky', top:0, zIndex: 1000}}
    >
        <img src={logo} alt="logo" className='logo'/>
        search
        <Box search/>
    </Stack>
  )
}

export default Navbar