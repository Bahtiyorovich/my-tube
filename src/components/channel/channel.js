import { Link, useParams } from 'react-router-dom'
import {Button} from '@mui/material'

const Chanel = () => {

  const params = useParams()
  console.log(params);
  
  return (
    <Link to={'/'}>
      <Button>Main Section</Button>
    </Link>
  )
}

export default Chanel