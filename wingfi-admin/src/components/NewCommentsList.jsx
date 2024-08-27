import React from "react";
import user1 from "../assets/images/user-1.png";
import user2 from "../assets/images/user-2.png";
import user3 from "../assets/images/user-3.png";
import user4 from "../assets/images/user-4.png";
import user5 from "../assets/images/user-5.png";
import { BiStar } from "react-icons/bi";

export default function NewCommentsList() {
  return (
    <div>
      {dataNewComments.map((d) => (
        <div className="flex gap-2 my-3">
          <div className="w-[50px] overflow-hidden rounded-full">
            <img src={d.image} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold"> {d.name} </h1>
            <span className="flex text-yellow-400">
              {d.ratings}
              {d.ratings}
              {d.ratings}
              {d.ratings}
              {d.ratings}
            </span>
            <p> {d.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const dataNewComments = [
  {
    image: user1,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user2,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user3,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user4,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user1,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user5,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user1,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user3,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user2,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },

  {
    image: user5,
    name: "Kathryn Murphy",
    ratings: <BiStar />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla alias harum porro consequuntur, sapiente nostrum sint repellat id quos sunt, laborum voluptate quis provident ex cupiditate explicabo cumque accusantium.",
  },
];
