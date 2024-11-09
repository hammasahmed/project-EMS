import React, { useEffect, useState } from "react";
import food1 from "../assets/food1.png";

const My_listing = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const url = "http://localhost:5000/listings";
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
      console.log(data);
      setData(fetched_data);
    };
    processData();
  }, []);

  const handle_delete = (object) => {
    const newdata = data.filter((d) => d._id !== object._id);
    setData(newdata);
  };

  return (
    <div className="flex flex-col md:flex-row sm:flex-row bg-gray-50">
      {data.map((object,index) => {
        return (
          <React.Fragment key={object._id} >
            <div className=" flex flex-col font-sans border-[1px] bg-white rounded-2xl text-center mx-4  shadow-md">
            <h1 className="text-lg font-bold my-3">{object.title}</h1>

              <div className="h-fit w-fit rounded-t-xl m-4">
                <img
                  src={object.imageUrl[0]}
                  alt="picture is coming"
                  className="object-fill h-[200px] w-[310px]"
                />
              </div>
              <div className="w-[300px] flex flex-col justify-center   text-justify overflow-hidden m-auto">
                <div className=" break-words ">
                <p>
                  <strong><b>Description:</b></strong>
                  {object.description.length > 100
        ? object.description.substring(0, 150) + "..."
        : object.description}
                </p>
                </div>
               
                <p className="text-lg font-bold my-2">
                  <b>Price: $</b>
                  {object.Price_Per_Person}
                </p>
              </div>

              {/* // Buttons */}
              <div className="flex flex-col justify-center m-auto mb-4 w-[300px]">
                <button className=" transition-all rounded-full p-2 bg-blue-500 text-white m-1">
                  Update
                </button>
                <button
                  className="transition-all rounded-full p-2 bg-red-700 text-white m-1"
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
    </div>
  );
};

export default My_listing;
