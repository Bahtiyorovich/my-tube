import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ApiService } from './../../service/api.service';


const VideoDetail = () => {
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)

      console.log(data);
    }

    getData();
  }, [id]) //har safar id o'zgarganda useEffect ishga tushadi.

  return (
    <div>videoDetails: {id}</div>
  )
}

export default VideoDetail