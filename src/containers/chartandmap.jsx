import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import loctionIcon from "../components/loct.png";
import "../containers/map.css";
import "leaflet/dist/leaflet.css";

const Chartandmaps = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const getChartData = async () => {
      try {
        const res = await axios.get("https://disease.sh/v3/covid-19/countries");
        setChartData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getChartData();
  }, []);

  const customIcon = new Icon({
    iconUrl: [loctionIcon],
    IconSize: [32, 32],
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto w-screen bg-green-500 h-20 ">
        <div className="w-full h-40 text-white font-bold text-center text-2xl mx-auto ">
          <h6 className="flex w-52  mx-auto my-auto py-5 justify-center align-middle hover:text-gray-500 cursor-pointer">
            Chart And Maps
          </h6>
        </div>
        <div className="text-black flex m-5 justify-center">
          <div className="w-2/3">
            <LineChart width={900} height={400} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={chartData.cases} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="green"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="deaths" stroke="pink" />
              <Line type="monotone" dataKey="recovered" stroke="red" />
            </LineChart>
          </div>
        </div>
        <div className="flex m-5 justify-center ">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {chartData.map((pin) => {
              return (
                <Marker
                  position={[pin.countryInfo.lat, pin.countryInfo.long]}
                  key={pin.country}
                  icon={customIcon}
                >
                  <Popup position={[pin.countryInfo.lat, pin.countryInfo.long]}>
                    <p>Country Name:{pin.country}</p>
                    <p>No of Active:{pin.active}</p>
                    <p>No of Recovered:{pin.recovered}</p>
                    <p>No of deaths:{pin.deaths}</p>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
          ,
        </div>
      </div>
    </div>
  );
};

export default Chartandmaps;
