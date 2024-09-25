import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
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
        title: "Accounts Info",
        id: 0,
      },
      {
        path: "/orders-info",
        title: "Orders Info",
        id: 1,
      },
      {
        path: "/wishlist",
        title: "Wishlist",
        id: 2,
      },
      {
        path: "/saved-addresses",
        title: "Saved Addresses",
        id: 3,
      },
    ],
  },
  {
    path: "/contact",
    title: "About Us",
    id: 3,
    icon: <BsInfoCircle size={20} />,
  },
  {
    title: "Sign Out",
    id: 8,
    icon: <BsInfoCircle size={20} />,
    phoneOnly: 1,
  },
];
export default Menu;
