import { CardContent, CardMedia, Typography,Box } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

const Channelcard = ({ video }) => {
  return (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width:{xs:'360px', md: '320px'},
            height: '326px',
            margin: 'auto',
        }}
    >
        <CardContent sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <CardMedia 
                image={video?.snippet?.thumbnails?.default?.url} 
                alt={video?.snippet?.title}
                sx={{
                    borderRadius: '50%',
                    height: '180px',
                    width: '180px',
                    mb: 2,
                    border: '1px solid #e3e3e3'
                }}
            />
            <Typography variant='h6'>{video?.snippet?.title}<CheckCircle
                sx={{fontSize: '14px', color: 'gray', ml:'5px'}}
            /></Typography>
            {video?.statistics?.subscriberCount && (
                <Typography sx={{fontSize: '15px', color: 'gray', fontWeight: 500}}>
                    {parseInt(video?.subscriberCount).toLocaleString('en-US')}{' '}Subscribers
                </Typography>
            )}
        </CardContent>
    </Box>
  )
}

export default Channelcard