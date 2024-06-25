"use client";

import React from "react";
import {CardFooter, Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";

export const Cards = ({ source, name }: any) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-full"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={source}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80" style={{color: " "}}>{name}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          立即开吃
        </Button>
      </CardFooter>
    </Card>
  );
};
