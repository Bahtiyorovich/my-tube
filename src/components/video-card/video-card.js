import { Stack, Card, CardContent, CardMedia, Typography, Avatar } from '@mui/material'
import { colors } from '../../constants/colors'
import moment from 'moment'
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Card sx={{width:{xs:'100%', sm:'360px', md:'320px'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={`/video/${video.id.videoId}`}/>
        <CardMedia 
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title} 
          sx={{width:{xs: '100%', sm: '360px', md: '320px'}, height:180}}
        />
        <CardContent sx={{background: colors.primary, height: '200px', position: 'relative'}}>
          <>
            <Typography my={'5px'} sx={{opacity: '.4'}}>
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Typography variant='subtitle1' fontWeight='bold'>
              {video?.snippet?.title.slice(0, 50)}
            </Typography>
            <Typography variant='subtitle2' sx={{opacity: '0.7'}}>
              {video?.snippet?.description.slice(0, 50)}
            </Typography>
          </>
          <>
            <Stack 
              direction={'row'} 
              alignItems={'center'} 
              position={'absolute'} 
              gap={'5px'}
              bottom={'10px'}
            >
             <Avatar  src={video?.snippet?.thumbnails?.high?.url}/>
             <Typography variant='subtitle2' color={'gray'}>
                {video?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize: '12px', ml: '5px', color: 'gray'}}/>
             </Typography>
            </Stack>
          </>
        </CardContent>
    </Card>
  )
}

export default VideoCard