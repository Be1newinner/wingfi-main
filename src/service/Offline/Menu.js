import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";

const Menu = [
  {
    path: "/",
    title: "Home",
    id: 0,
    icon: <IoHomeOutline size={20} />,
  },
  {
    path: "/shop",
    title: "Shop",
    id: 1,
    icon: <AiOutlineShop size={20} />,
  },

  {
    path: "/account",
    title: "Account",
    id: 4,
    icon: <MdOutlineAccountCircle size={20} />,
    sub: [
      {
        path: "/account",
        title: "Account Info",
        id: 0,
      },
      {
        path: "/account/orders-info",
        title: "Orders Info",
        id: 1,
      },
      {
        path: "/account/notifications",
        title: "Notifications",
        id: 2,
      },
    ],
  },
  // {
  //   path: "/wishlist",
  //   title: "Wish List",
  //   id: 7,
  //   icon: <LuHeart size={20} />,
  // },
  {
    path: "/contact",
    title: "About Us",
    id: 3,
    icon: <BsInfoCircle size={20} />,
  },
];
export default Menu;
