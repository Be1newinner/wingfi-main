import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

interface props {
  title: string;
  price: number;
  mrp: number;
  slug: string;
  key: string;
  image: string;
  rating: number;
  sku: number;
  isWishlisted?: boolean;
}

export function ProductViewList({
  title,
  price,
  mrp,
  slug,
  rating,
  sku,
  isWishlisted = false,
}: props) {

  return (
    <Link href={`/shop/${slug}`} className="py-2 sm:p-2 w-full block">
      <div className="flex flex-col bg-white w-full rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        <div className="relative w-full aspect-square mb-2 overflow-hidden">
          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${sku}%2F1.webp?alt=media`}
            alt={title}
            width={400}
            height={400}
            className="object-contain w-full"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            New
          </div>
          <button 
            className="absolute top-2 right-2 h-10 w-10 border border-gray-300 px-2 py-1 rounded-full bg-white text-xs font-semibold transition-all duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add to Wishlist"
          >
            <FaRegHeart size={20} className={`${isWishlisted ? "fill-red-500 text-red-500" : "m-auto"}`}/>
          </button>
        </div>

        <div className="flex flex-col gap-3 p-4 ">
          <p className="line-clamp-1 text-md font-semibold">{title}</p>

          <div className="flex gap-1">
            {[...Array(Math.floor(rating))].map((_, index) => (
              <FaStar
                key={index}
                size={16}
                className="fill-red-500 text-red-500"
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-red-500">₹{price}/-</span>
            <span className="text-gray-500 line-through">₹{mrp}/-</span>
          </div>

          {/* <button className="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600 transition-colors duration-200">
            View Product
          </button> */}
        </div>
      </div>
    </Link>
  );
}
