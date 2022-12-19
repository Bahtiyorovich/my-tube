import { Card, CardContent, CardMedia } from '@mui/material'
import {colors} from '../../constants/colors'


const VideoCard = ({video}) => {
  
  //console.log(video)
  
  return (
    <Card sx={{width: '380px', boxShadow: 'none', borderRadius:0}}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url}/>
        <CardContent sx={{background: colors.primary, height: '300px', position: 'relative'}}/>
    </Card>
  )
}

export default VideoCard