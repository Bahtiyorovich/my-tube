import {Stack, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../../constants/index'
import {colors} from '../../constants/colors'
import SearchBar from '../search-bar/SearchBar'

const Navbar = () => {
  return (
    <Stack 
      direction={'row'} 
      alignItems={'center'} 
      justifyContent={'space-between'} 
      p={2}
      sx={{position: 'sticky', 
        zIndex: 999,
        top: 0, 
        background: colors.primary, 
        height: '10vh',
        boxShadow: `0px 0px 3px rgba(0,0,0)`
      }}
      >
        <Link to={'/'}>
          <img src={logo} alt="logo" width={80}/>
        </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar