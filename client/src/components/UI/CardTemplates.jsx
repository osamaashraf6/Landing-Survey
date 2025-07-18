import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/UI/card";
import { Button } from "@/components/UI/button";

const CardTemplates = ({ img, name, title, button }) => {
  return (
    <Card className="bg-white rounded-md shadow-[0_4px_24px_#00000014] border-0 flex flex-col items-center p-4 md:p-5 lg:p-6 transition-all h-full">
      <CardHeader className="w-full flex flex-col items-center p-0">
        <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-t-md">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center  px-0 flex-1 w-full">
        <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold text-[#13C3CE] mb-2 text-center leading-tight">
          {name}
        </CardTitle>
        <div className="text-sm md:text-base text-black font-medium  text-center leading-snug">
          {title}
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-center pb-4 px-0">
        <Button
          className="bg-[#13C3CE] text-white text-base md:text-lg font-bold rounded-xl w-full py-2 md:py-3 shadow-none hover:bg-[#0ea7b5] transition-all"
          size="lg">
          {button}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardTemplates;
