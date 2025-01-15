import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[80px]  bg-blue-500">
        <div className="w-[90%] h-[100%] flex justify-end items-center bg-slate-300 pr-4">
          <button className="px-3 py-2 rounded-md bg-blue-500 text-white flex items-center justify-center font-semibold text-[14px] ">
            <Link to="/auth/register">Sign up</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-[60px] font-semibold text-blue-500">
          Welcome To eStore product <br /> signUp to see the lastest <br /> top
          notch product
        </p>
      </div>
    </div>
  );
};

export default Landingpage;
