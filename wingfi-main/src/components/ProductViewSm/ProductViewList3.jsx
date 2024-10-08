import Image from 'next/image';
import Link from 'next/link';
// import { Theme_text_colors_class } from '@/infrastructure/theme';
import { FaStar } from 'react-icons/fa';

export function ProductViewList3({ item, rating }) {
  return (
    <Link className="shadow-md border p-5 w-full" href={'/shop/' + item?.slug}>
      <div>
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${item.sku}%2F0.webp?alt=media`}
          width={759}
          height={1500}
          alt=""
          className="h-[150px] w-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="leading-6 font-bold text-lg">{item?.title}</p>

        {/* Render stars based on the rating value */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>

            <div className="flex flex-col-reverse">
              <span className="text-error font-[700]">₹{item?.price}/-</span>
              <span className="text-gray-400 line-through">₹{item?.mrp}/-</span>
            </div>
          </div>

          <div>
            <button className="bg-">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
