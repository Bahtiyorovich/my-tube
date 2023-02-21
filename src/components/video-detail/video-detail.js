import { Box, Chip, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { ApiService } from '../../service/api.service';
import ReactPlayer from "react-player";
import {Loader, Videos} from '../'
import { Stack, Avatar } from "@mui/material";
import {Visibility, FavoriteOutlined, CheckCircle, MarkChatRead} from '@mui/icons-material'

const VideoDetail = ({ video }) => {

  const [videoDetail, setVideoDetail] = useState(null)
  const [relatedVideo, setRelatedVideo] = useState([])
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
      try{
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
        setVideoDetail(data.items[0])

        const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        setRelatedVideo(relatedData.items)
      }
      catch(err) {
        console.log(err)
      }
    }
    getData();
  }, [id]) //har safar id o'zgarganda useEffect ishga tushadi.

  if(!videoDetail?.snippet) return <Loader/>
  // const {
  //   snippet: { title, channelId, channelTitle, description, tags, thumbnails},
  //   statistics: { viewCount, likeCount, commentCount},
  // } = videoDetail;

  return (
    <Box minHeight={'90vh'} mb={10}>
      <Box 
        display={'flex'} 
        sx={{flexDirection: {xs: 'column', md: 'row'}, justifyContent:'space-around'}}>
        <Box width={{xs: '100%', md: '70%'}}
          maxHeight={'90vh'}
          overflow={'scroll'}
        >
          <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${id}`} 
          className="react-player" 
          controls
          />
        {videoDetail.snippet.tags.map((item, idx) => (
          <Chip
            label={item}
            key={idx}
            sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
            deleteIcon={'<Tag/>'}
            onDelete={() => {}}
            variant={'outlined'}
          />
        ))}

        <Typography variant="h5" fontWeight={'bold'} p={2}>
          {videoDetail.snippet.title}
        </Typography>
        {/* <Typography variant="subtitle2" p={2} sx={{opacity: '.7'}}>
          {videoDetail.snippet.description}
        </Typography> */}
        <Stack direction={'row'} alignItems={'center'} gap={'20px'} py={1} px={2}>
          <Stack sx={{opacity: '0.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
            <Visibility/>
            {parseInt(videoDetail?.statistics.viewCount).toLocaleString()} views
          </Stack>
          <Stack sx={{opacity: '0.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
            <FavoriteOutlined/>
            {parseInt(videoDetail?.statistics.likeCount).toLocaleString()} likes 
          </Stack>
          <Stack sx={{opacity: '0.7'}} direction={'row'} alignItems={'center'} gap={'3px'} >
            <MarkChatRead/>
            {parseInt(videoDetail?.statistics.commentCount).toLocaleString()} comment
          </Stack>
        </Stack>
        </Box>
        <Box width={{xs: '100%', md:'25%'}} 
          maxHeight='100vh'
          overflow={'scroll'}
          justifyContent='center'
          alignItems={'center'}
          px={4}
        >
          <Videos 
            videos = {relatedVideo}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail