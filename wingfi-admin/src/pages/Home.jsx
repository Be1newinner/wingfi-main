import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  Building2,
  Store,
  Truck,
  Hotel,
  Train,
  Car,
  Bus,
  Plane,
} from "lucide-react";
import { getDashboardOverviewSelector } from "../redux/selectors/getDashboardOverviewSelector";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardOverviewRequest } from "../redux/reducers/getDashboardOverviewReducer";

const Home = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(getDashboardOverviewSelector);
  
  useEffect(() => {
    dispatch(getDashboardOverviewRequest());
  }, []);

  const serviceItems = [
    {
      type: "hotelDetails",
      icon: Hotel,
      color: "text-blue-500",
      count: data?.services?.hotelDetails,
      label: "Hotel",
    },
    {
      type: "trainDetails",
      icon: Train,
      color: "text-green-500",
      count: data?.services?.trainDetails,
      label: "Train",
    },
    {
      type: "cabDetails",
      icon: Car,
      color: "text-yellow-500",
      count: data?.services?.cabDetails,
      label: "Cab",
    },
    {
      type: "busDetails",
      icon: Bus,
      color: "text-orange-500",
      count: data?.services?.busDetails,
      label: "Bus",
    },
    {
      type: "airDetails",
      icon: Plane,
      color: "text-purple-500",
      count: data?.services?.airDetails,
      label: "Air",
    },
  ];

  const monthlyBookings = [
    { month: "Jan", hotel: 180, train: 250, cab: 420, bus: 380, air: 150 },
    { month: "Feb", hotel: 200, train: 280, cab: 380, bus: 350, air: 160 },
    { month: "Mar", hotel: 250, train: 300, cab: 450, bus: 400, air: 180 },
    { month: "Apr", hotel: 280, train: 320, cab: 520, bus: 420, air: 200 },
  ];

  const revenueDistribution = [
    { name: "Hotel", value: data?.services?.hotelDetails },
    { name: "Train", value: data?.services?.trainDetails },
    { name: "Cab", value: data?.services?.cabDetails },
    { name: "Bus", value: data?.services?.busDetails },
    { name: "Air", value: data?.services?.airDetails },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <div className="h-full overflow-y-scroll p-6 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Travel Dashboard</h1>
        <p className="text-gray-500">Overview of users and services</p>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">{data?.users?.totalUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Store className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Retail Users</p>
              <p className="text-2xl font-bold">{data?.users?.retailUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Building2 className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">
                Corporate Users
              </p>
              <p className="text-2xl font-bold">
                {data?.users?.corporateUsers}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Truck className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Vendors</p>
              <p className="text-2xl font-bold">{data?.users?.vendors}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {serviceItems.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon className={`h-5 w-5 ${service.color}`} />
                  <p className="text-sm font-medium capitalize">
                    {service.label}
                  </p>
                </div>
                <p className="text-2xl font-bold">{service.count}</p>
                <p className="text-sm text-gray-500">Bookings</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Monthly Bookings
            </h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyBookings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  scale="auto"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis
                  scale="auto"
                  domain={["auto", "auto"]}
                  padding={{ top: 20, bottom: 20 }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="hotel"
                  stroke="#0088FE"
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="train"
                  stroke="#00C49F"
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="cab"
                  stroke="#FFBB28"
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="bus"
                  stroke="#FF8042"
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="air"
                  stroke="#8884D8"
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Order Distribution
            </h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
