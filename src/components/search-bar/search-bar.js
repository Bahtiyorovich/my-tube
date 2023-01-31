import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { colors } from '../../constants/colors'


const SearchBar = () => {
  return(
    <Paper 
        component={'form'}
        sx={{border: `0.5px solid ${colors.lightgrey}`,borderRadius: '25px', pl: 3, boxShadow: 'none'}}
    >
        <input
            type="text"
            placeholder="Search..."
            className="search-input"
        />
    <IconButton>
        <Search/>
    </IconButton>
    </Paper>
  )
}

export default SearchBar