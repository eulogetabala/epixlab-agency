/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Separator } from "@/components/ui/separator"

interface IProps {
  imgUrl: string;
  name: string;
  profession: string;
}

function TeamCard({ imgUrl, name, profession }: IProps) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center pt-10 border-[4px] border-[#EBEAED] rounded-t-[10px]">
        <div>
          <img
            src={imgUrl}
            alt=""
            className="w-[120px] h-[120px] rounded-full"
          />
        </div>
        <p className="text-lightBlue font-bold text-[22px] my-6">{name}</p>
        <p className="text-darkBlue opacity-[0.3]">{profession}</p>
      </div>

      <div className="flex justify-around items-center h-[3.754rem] border-[4px] border-[#EBEAED] border-t-0 rounded-b-[10px]">
      <div>
          <img
            src="/images/x_icon.png"
            alt=""
            
          />
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]"/>
        <div>
          <img
            src="/images/facebook_icon.png"
            alt=""
            
          />
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]"/>
        <div>
          <img
            src="/images/dribble_icon.png"
            alt=""
            
          />
        </div>
       
      </div>
    </div>
  );
}

export default TeamCard;
