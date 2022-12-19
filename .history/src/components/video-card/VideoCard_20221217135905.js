import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import {colors} from '../../constants/colors'
import moment from 'moment'

const VideoCard = ({video}) => {
  
  //console.log(video)
  
  return (
    <Card sx={{width: '350px', boxShadow: 'none', borderRadius:0}}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} sx={{width: '350px', height: '195px'}}/>
        <CardContent sx={{background: colors.cardColor, height: '150px', position: 'relative'}}>
          <Typography my={5} sx={{opacity: '0.4'}}>
            {moment.defineLocale(video?.snippet?.title)}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default VideoCard