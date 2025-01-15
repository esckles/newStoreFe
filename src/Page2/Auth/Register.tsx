/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../API/api";

const Register = () => {
  const [userName, setuserName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const [loading, setloading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    await signup({ userName, email, password })
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/create-account-notification");
        } else {
          alert("error");
        }
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div>
      <div className="w-full min-h-screen items-center justify-center flex ">
        <form onSubmit={handleSubmit}>
          <div className="w-[400px] min-h-[400px] rounded-md border flex flex-col m-4 p-4 shadow-md">
            <p className=" mb-10 font-semibold">Register page</p>
            <div className="flex flex-col mb-5">
              <label htmlFor="" className="mb-2 font-semibold">
                userName
              </label>
              <input
                type="text"
                placeholder="Enter userName..."
                className="px-4 py-3 rounded-md border outline-none"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="" className="mb-2 font-semibold">
                email
              </label>
              <input
                type="text"
                placeholder="Enter email..."
                className="px-4 py-3 rounded-md border outline-none"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="" className="mb-2    font-semibold">
                password
              </label>
              <input
                type="text"
                placeholder="Enter password..."
                className="px-4 py-3 rounded-md border outline-none"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button
              className="px-4 py-4 rounded-md mb-5 bg-blue-500 text-white font-semibold w-full"
              onClick={handleSubmit}
            >
              {loading ? <CgSpinner /> : "Submit"}
            </button>
            <p className="w-full flex items-center justify-center gap-2 font-semibold text-[12px]">
              <p> Already have an account</p>
              <Link to="/auth/login">
                <u>Login</u>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
