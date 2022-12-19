import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import {colors} from '../../constants/colors'
import moment from 'moment'

const VideoCard = ({video}) => {
  
  console.log(video)
  
  return (
    <Card sx={{width: '350px', boxShadow: 'none', borderRadius:0}}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} sx={{width: '280px', height: '170px'}}/>
        <CardContent sx={{background: colors.cardColor, height: '150px', position: 'relative'}}>
          <Typography variant='subtitle1' fontWeight={'bold'}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant='subtitle2' sx={{opacity: '0.6'}} fontWeight={'bold'}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
          <Typography variant='subtitle2' my={'5px'} sx={{opacity: '0.4'}}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default VideoCard