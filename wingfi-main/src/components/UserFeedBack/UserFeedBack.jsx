import Image from "next/image";
import { TbMicrophone2 } from "react-icons/tb";

export default function UserFeedBack() {
  const feedbackList = [
    {
      id: 0,
      name: "Vijay Kumar",
      profession: "Entrepreneur",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 1,
      name: "Ajay Kumar",
      profession: "Founded of Wingfi",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: "Suraj Kumar",
      profession: "Enthusiast",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: "Sanjay Singh",
      profession: "enthusiast",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="bg-red-100">
      <div
        className="mx-auto py-16"
        style={{
          maxWidth: 1200,
        }}
      >
        <div className="flex gap-2 text-error items-center">
          <TbMicrophone2 />
          <h1 className="font-semibold">Testimonials</h1>
        </div>
        <h1 className="text-3xl font-bold">Users&apos; Feedback</h1>
        <div className="flex gap-12 flex-wrap pt-4">
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
