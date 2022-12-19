import { Search } from '@mui/icons-material'
import {Paper, IconButton} from '@mui/material'
import {colors} from '../../constants/colors'


const SearchBar = () => {
  return (
    <Paper component={'form'} sx={{border: `1px solid ${colors.borderColor}`,borderRadius: '25px', pl: 2, boxShadow: 'none'}}>
        <input type='text' placeholder='search... ' className='search-bar'/>
        <IconButton>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar