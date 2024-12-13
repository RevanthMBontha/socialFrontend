import { useState } from "react";

const Login = () => {
  const [showSignup, setShowSignup] = useState(true);
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="z-0 flex h-full w-full gap-x-2 bg-white">
        <div className="flex h-full w-full flex-col gap-y-2">
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/09.jpg"
            alt="09"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/053.jpg"
            alt="053"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/05.jpg"
            alt="05"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/10.jpg"
            alt="10"
          />
        </div>
        <div className="flex h-full w-full flex-col gap-y-2">
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/12.jpg"
            alt="12"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/06.jpg"
            alt="06"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/08.jpg"
            alt="08"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/052.jpg"
            alt="052"
          />
        </div>
        <div className="flex h-full w-full flex-col gap-y-2">
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/04.jpg"
            alt="04"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/03.jpg"
            alt="03"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/101.jpg"
            alt="101"
          />
          <img
            loading="lazy"
            className="h-auto w-full"
            src="/images/login/022.jpg"
            alt="022"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-10 flex h-1/3 w-full flex-col items-center justify-center gap-y-8 rounded-3xl rounded-b-none bg-white shadow-md">
        <div className="w-full text-center">
          <h1 className="text-3xl">Vibesnap</h1>
          <p className="text-sm">Moments that matter, shared forever!</p>
        </div>
        {showSignup ? (
          <div className="flex w-full flex-col items-center justify-center">
            <button className="rounded-md bg-black p-2 px-4 text-lg text-white">
              Sign up with Google
            </button>
            <p>
              Already a member?{" "}
              <span
                className="text-blue-500"
                onClick={() => setShowSignup(!showSignup)}
              >
                Login here!
              </span>
            </p>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <button className="rounded-md bg-black p-2 px-4 text-lg text-white">
              Log in with Google
            </button>
            <p>
              New to Vibesnap?{" "}
              <span
                className="text-blue-500"
                onClick={() => setShowSignup(!showSignup)}
              >
                Signup here!
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
