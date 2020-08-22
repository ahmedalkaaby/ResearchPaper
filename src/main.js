import React from "react";
import { Link } from "react-router-dom";
import banner from "./styles/bannar_02.jpg";

class Main extends React.Component {
  render() {
    return (
      <div className="h-screen flex justify-center bg-blue-900">
        <div className="w-2/3 bg-white p-10 rounded-xl m-16">
          <div className="flex flex-col items-center">
            <div>
              <img src={banner} alt="banner"></img>
            </div>
            <div className="w-3/4  p-2 justify-center">
              <Link to="/Apply">
                <div className="flex shadow-lg h-48 justify-center items-center bg-indigo-200 hover:bg-indigo-300 border border-gray-400 rounded-xl m-20 cursor-pointer">
                  <h1 className="text-4xl font-semibold text-center">
                    ملئ الإستمارة
                  </h1>
                </div>
              </Link>
              <Link to="/View">
                <div className="flex shadow-lg h-48 justify-center items-center bg-indigo-200 hover:bg-indigo-300 border border-gray-400 rounded-xl m-20 cursor-pointer">
                  <h1 className="text-4xl font-semibold text-center">
                    تصفح الإستمارات المدرجة
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
