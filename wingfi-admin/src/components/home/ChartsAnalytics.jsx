import React from 'react';
import { dataCharts, chatData } from '../../service/offline';
const formatNumber = (num) => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

const ChartsAnalytics = () => {
  return (
    <div className="mt-10 flex lg:flex-row flex-col gap-5">
      <div className="rounded-lg border  w-full bg-white p-5">
        <h2 className="mb-6 text-xl font-bold text-black ">Top Channels</h2>

        <div className="relative overflow-x-hidden shadow-md rounded-lg overflow-y-auto h-[80vh]">
          <table className="table-auto w-full text-left">
            <thead className="uppercase bg-[#e4e4e4] text-[#000]">
              <tr>
                <td className="text-sm font-medium uppercase xsm:text-base py-4 text-center">
                  Source
                </td>
                <td className="text-sm font-medium uppercase xsm:text-base py-4 text-center">
                  Visitors
                </td>
                <td className="text-sm font-medium uppercase xsm:text-base py-4 text-center">
                  Revenue
                </td>
                <td className="text-sm font-medium uppercase xsm:text-base py-4 text-center">
                  Sales
                </td>
                <td className="text-sm font-medium uppercase xsm:text-base py-4 text-center">
                  Conversions
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-500">
              {dataCharts.map((item, index) => (
                <tr key={index} className="py-5">
                  <td className="py-5 border text-center p-4 flex justify-start items-center gap-2">
                    <img src={item.source.icon} alt={item.source.name} className="w-6 h-6 mr-2" />
                    <span className="font-medium">{item.source.name}</span>
                  </td>
                  <td className="py-5 border text-center p-4">{formatNumber(item.visitors)}</td>
                  <td className="py-5 border text-center p-4">${item.revenue}</td>
                  <td className="py-5 border text-center p-4">{item.sales}</td>
                  <td className="py-5 border text-center p-4">{item.conversions}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg border lg:w-[50%] w-full bg-white p-5 ">
        <h2 className="mb-6 text-xl font-bold text-black ">Top Channels</h2>

        <div className="overflow-y-auto h-[80vh] ">
          {chatData.map((chat, index) => (
            <div
              key={index}
              className="flex justify-between items-center cursor-pointer hover:bg-green-100 p-3 rounded-lg"
            >
              <div>
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src={chat.profileImage}
                      alt={chat.custumerName}
                      className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl capitalize">{chat.custumerName}</h4>
                    <p className={!chat.read ? 'font-[500] ' : 'font-normal text-gray-500'}>
                      {chat.msg}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500 text-white h-[25px] w-[25px] flex justify-normal items-center rounded-full">
                <p className=" text-center w-full">{chat.unreadMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartsAnalytics;
