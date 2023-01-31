import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <Link to={'/channel'}>
        <Button>Channel Section</Button>
    </Link>
  )
}

export default Main