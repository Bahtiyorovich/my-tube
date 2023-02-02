import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { colors } from '../../constants/colors'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

  const navigate = useNavigate()

  const [value, setValue] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(value){
      navigate(`search/${value}`)
    }
  }

  return(
    <Paper 
        component={'form'}
        onSubmit={handlerSubmit}
        sx={{
          border: `0.5px solid ${colors.lightgrey}`,
          borderRadius: '25px', 
          pl: 3, 
          boxShadow: 'none'
        }}
    >
        <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    <IconButton type='submit'>
        <Search/>
    </IconButton>
    </Paper>
  )
}

export default SearchBar