import { Stack } from '@mui/material'
import { category } from '../../constants'
import { colors } from '../../constants/colors'
 
const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
      <Stack direction={'row'} overflow={'scroll'}>
        {category.map((item) => (
          <button 
            key={item.name} 
            className="category-btn" 
            onClick={() => selectedCategoryHandler(item.name)}
            style={{ background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && '#fff'
            }}
          >
            <span style={{marginRight: '20px'}}>{item.icon}</span>
            <span style={{opacity: '1'}}>{item.name}</span>
          </button>
        ))}
      </Stack>
  )
}

export default Category