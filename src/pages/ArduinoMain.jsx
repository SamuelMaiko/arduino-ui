import React, { useEffect, useState } from "react";
import { FaThermometerHalf } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import seaBg from "../assets/sea.jpg";
import axios from "axios";

const ArduinoMain = () => {
  // state to store data received from API
  const [sensorValue, setSensorValue] = useState(null);

  useEffect(() => {
    // getting API data
    const getSensorValues = async () => {
      // _____ UNCOMMENT and REPLACE api url
      // const response= await axios.get("API url goes here")
      // setSensorValue(response.data)
    };

    getSensorValues();
  }, []);

  const styles = {
    background: {
      //   backgroundImage: `url(${seaBg})`, // Using template literals to inject the imported image
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${seaBg})`, // Using template literals to inject the imported image
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden",
    },
  };
  return (
    <div style={styles.background} className="w-full h-full">
      <div className="w-[95%] md:w-[80%] h-screen mx-auto grid place-items-center">
        <div className="bg-[rgba(0,0,0,0.4)] text-white px-5 md:px-12 py-8 md:py-16 rounded-lg">
          <h1 className="text-3xl font-semibold">Arduino Waziup Application</h1>
          <h1 className="uppercase font-semibold">Sensor 1</h1>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <p className="text-[3rem] ">
                <FaThermometerHalf />
              </p>
              <p className="text-[4.4rem] font-bold">23.5°C</p>
            </div>
            <div className="flex flex-col pt-[1.5rem] items-center">
              <p className="text-[2rem]">
                <MdOutlineWaterDrop />
              </p>
              <p>60%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArduinoMain;
