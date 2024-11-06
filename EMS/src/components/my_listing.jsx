import React, { useEffect, useState } from "react";
import food1 from "../assets/food1.png";

const My_listing = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const url = "./listings.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const processData = async () => {
      const fetched_data = await getData();
      setData(fetched_data);
    };
    processData();
  }, []);

  const handle_delete = (object) => {
    const newdata = data.filter((d) => d._id !== object._id);
    setData(newdata);
  };

  return (
    <>
      {data.map((object) => {
        return (
          <React.Fragment key={object._id}>
            <div className="flex font-sans border-[1px] border-[#c2c9d666] rounded-2xl justify-evenly m-2">
              <div className="rounded-2xl m-2  border-black">
                <img
                  src={object.imageUrl}
                  alt=""
                  className="object-fill rounded-xl  w-[200px] h-[130px]"
                />
              </div>
              <div className="flex flex-grow flex-col justify-around">
                <h1 className="text-lg font-bold">{object.title}</h1>
                <p>
                  <b>Description: </b>
                  {object.description}
                </p>
                <span>
                  <b>Price: $</b>
                  {object.price}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <button className=" transition-all rounded-full p-2 bg-purple-950 text-white m-1">
                  Update
                </button>
                <button
                  className=" transition-all rounded-full p-2 bg-red-700 text-white m-1"
                  onClick={() => {
                    handle_delete(object);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default My_listing;
