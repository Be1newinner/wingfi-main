import Image from "next/image";
import { TbMicrophone2 } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

export default function UserFeedBack2({ rating, reviewsCount }) {
  const feedbackList = [
    {
      id: 0,
      name: "Vijay Kumar",
      profession: "Entrepreneur",
      desc: "The WingFi Powerbank is fantastic! It charges my phone multiple times, is lightweight, and looks great. The fast-charging feature is a game-changer. Highly recommended!",
    },
    {
      id: 1,
      name: "Ajay Kumar",
      profession: "Founded of Wingfi",
      desc: "I love the WingFi Powerbank! It’s lightweight, charges my phone multiple times, and has a sleek design. Fast-charging is a huge plus. Highly recommend it!",
    },
    {
      id: 2,
      name: "Suraj Kumar",
      profession: "Enthusiast",
      desc: "With a 20,000mAh capacity and fast-charging capability, the WingFi Powerbank is impressive. It’s compact, safe, and perfect for on-the-go charging.",
    },
    {
      id: 3,
      name: "Sanjay Singh",
      profession: "enthusiast",
      desc: "super handy. Small, fast, and easy to use, it’s perfect for everyday charging needs. Definitely a winner!",
    },
  ];

  return (
    <div>
      <div
        className="mx-auto pb-16 pt-8 px-3 sm:px-0"
        style={{
          maxWidth: 1200,
        }}
      >
        <div className="flex gap-2 text-error items-center">
          <TbMicrophone2 />
          <h1 className="font-semibold">Testimonials</h1>
        </div>
        <h1 className="text-2xl font-bold flex gap-2 mt-1 items-center">
          <FaStar /> {rating} {rating && "&"} {reviewsCount} Users&apos; Reviews
        </h1>
        <div className="flex gap-12 flex-wrap pt-4 flex-col sm:flex-row">
          {feedbackList?.slice(0, 3)?.map((item, index) => (
            <div
              key={item.id}
              style={{
                flex: "1 0 24%",
                marginTop: index % 2 === 1 ? 60 : 0,
              }}
            >
              <div className="mb-4 flex gap-1 ml-1">
                <Image
                  src={`/images/feedback/${item.id}.png`}
                  width={40}
                  height={40}
                  alt=""
                  className="rounded rounded-lg shadow"
                />
                <div className="flex flex-col">
                  <h2 className="text-sm">{item?.name}</h2>
                  <h3 className="text-xs text-gray-500">{item?.profession}</h3>
                </div>
              </div>
              <div className="bg-white p-4 border shadow shadow-lg rounded rounded-xl">
                <p>{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
