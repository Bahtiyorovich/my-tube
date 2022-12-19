import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  console.log(video);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "480px", md: "350px" },
        boxShadow: "none",
        borderRadius: 0,
        marginLeft: '48px'
      }}
    >
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{
          width: {xs: '100%', sm: '350px', md: '300px'},
          height: "178px",
          borderRadius: "15px",
          marginLeft: "10px",
        }}
      />
      <CardContent
        sx={{
          background: colors.cardColor,
          height: "130px",
          position: "relative",
        }}
      >
        <Stack direction={"row"}>
          <Avatar
            src={video?.snippet?.thumbnails?.high?.url}
            sx={{ marginRight: "20px", marginBottom: "10px" }}
          />
          <Typography variant="subtitle2" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
        </Stack>
        <Typography variant={"subtitle2"} sx={{ color: "grey", marginLeft: 7 }}>
          {video?.snippet?.channelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "grey", ml: "10px" }} />
        </Typography>
        {/* <Typography variant='subtitle2' sx={{opacity: '0.6'}} fontWeight={'bold'}>
              {video?.snippet?.description.slice(0, 70)}
            </Typography> */}
        <Typography
          variant="subtitle2"
          my={"5px"}
          sx={{ opacity: "0.7", marginLeft: 7, fontWeight: 400 }}
        >
          {moment(video?.snippet?.publishedAt).fromNow()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
