import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import GoogleLogin from "./GoogleLogin";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  useTitle("Register");
  
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      setError(
        "Password must have at least 6 characters, 1 uppercase, 1 lowercase"
      );
      toast.error(
        "Weak password! Password must have at least 6 characters, 1 uppercase, 1 lowercase"
      );
      return;
    }
    try {
      const userCredential = await createUser(email, password);
      await updateUser({
        displayName: name,
        photoURL: photoURL || "/default-profile.png",
      });
      toast.success("Registration successful!!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to register! Please try again.");
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await googleLogin();
      const loggedUser = result.user;
      const displayName = loggedUser.displayName || "User!!";
      const photoURL = loggedUser.photoURL || "/default-profile.png";
      await updateUser({ displayName, photoURL });
      toast.success(`Welcome ${displayName}!!`);
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Google login failed! Please try again.");
    }
  };

  return (
    <div className="card bg-[#bacbb7] w-full max-w-sm shrink-0 shadow-2xl my-9">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="input w-full mr-20"
              placeholder="Name"
              required
            />
            {/* PhotoURL */}
            <label value={photoURL} className="label">
              PhotoURL
            </label>
            <input
              onChange={(e) => setPhotoURL(e.target.value)}
              type="text"
              className="input w-full mr-20"
              placeholder="Photo URL"
              required
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input w-full mr-20"
              placeholder="Email"
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="input w-full mr-20"
                placeholder="Password"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <button className="btn bg-linear-to-br from-[#7d89ca] to-[#b484f8] text-white mt-4">
              Register
            </button>
            <div className="mt-2 text-xs">
              <div className="mb-4">
                <GoogleLogin
                  handleGoogleLogin={handleGoogleLogin}
                ></GoogleLogin>
              </div>
              <p>
                Already have an account?
                <Link
                  to="/auth/login"
                  className="text-[#954ef9] text-sm font-bold link link-hover pl-2"
                >
                  Login
                </Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
