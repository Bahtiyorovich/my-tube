import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service';
import { Box } from '@mui/material';
import { ChannelCard } from '../'
import { Container } from '@mui/material';
import Videos from './../videos/videos';


const Channel = () => {

  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    const getData = async () => {
      try{
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(dataChannelDetail.items[0])

        const dataVideos = await ApiService.fetching(`search?channelId=${id}&part=snippet`)
        setVideos(dataVideos?.items)

      }catch(err){
        console.log(err)
      }
    }
    getData()
  }, [id])

  return (
   <Box>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            background: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <ChannelCard video={channelDetail} marginTop={'-100px'}/>
      </Box>
      <Container maxWidth={'90%'}>
          <Videos videos={videos}/>
      </Container>
   </Box>
  )
}

export default Channel