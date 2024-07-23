import Earthtime from "../../assets/icons/earthtime.svg";
import * as React from "react";
import { imageP1, imageP2 } from "../../data/imagesData/imagePost";
import { avatar1, avatarN } from "../imagesData/imageAvatar.tsx";

export const CommentData = [
  {
    id:1,
    name:'Kiều Tuyên',
    describe:'Hi',
    icon: <Earthtime/>,
    image : () =>  imageP1(),
    avatarImg : () => avatar1(),
    avatarImgN : () => avatarN(),
    inforS:'Tuyên và 999 người khác...',
    comment:'OH gút chóp',
    like:'10',
    share:'5',
    screen:'',

  },



]

