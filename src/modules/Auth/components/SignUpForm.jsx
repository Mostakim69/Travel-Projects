import { Link } from "react-router";
import { Button, Input } from "../../shared/ui";
import SocialLogin from "./SocialLogin";

const SignUpForm = () => {
  return (
    <form
      className="flex-1 w-fit max-w-xl p-6 sm:p-8 glass bg-base-200/50 border border-base-300 
      rounded-box shadow-xl glow-border backdrop-blur-md transition-all"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-100 drop-shadow-md mb-4">
        Create Your DeshGuide Account
      </h2>

      <fieldset className="w-full flex flex-col gap-4">
        <Input
          label="Name"
          placeholder="Write your name"
          className="input input-info rounded-full w-full input-glow"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="input input-info rounded-full w-full input-glow"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Write your password"
          className="input input-info rounded-full w-full input-glow"
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          className="input input-info rounded-full w-full input-glow"
        />
        <Input
          type="text"
          label="Photo URL"
          placeholder="Paste your profile photo link"
          className="input input-info rounded-full w-full input-glow"
        />

        <Button
          className="btn-block mt-3 btn-info rounded-full font-semibold tracking-wide glow-border hover:pulse-glow transition-all"
          variant="info"
        >
          Sign Up
        </Button>

        <p className="mt-3 text-sm text-center text-gray-400">
          Already a member?{" "}
          <Link
            to="/auth/signin"
            className="text-info hover:underline hover:text-blue-300 transition"
          >
            Sign In
          </Link>
        </p>

        <div className="divider before:bg-gray-600 after:bg-gray-600 text-gray-400 text-sm mt-4">
          or continue with
        </div>

        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SignUpForm;

/* import { Link } from "react-router";
import { Button, Input } from "../../shared/ui";
import SocialLogin from "./SocialLogin";

const SignUpForm = () => {
  return (
    <form className="flex-1 bg-base-200 border-base-300 border rounded-box   w-fit   p-4">
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign Up Now
      </h2>
      <fieldset className="w-xs p-4 fieldset">
        <Input
          label="Name"
          placeholder="Write your name"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Write your password"
          className="mb-2 w-full sm:min-w-[400px] rounded-full input-info"
        />

        <Input
          type="password"
          label="Confirm Password"
          placeholder="Write your password"
          className="mb-2 w-full sm:min-w-[400px] rounded-full input-info"
        />
        <Input
          type="text"
          label="Photo Url"
          placeholder="Give your photo url"
          className=" w-full sm:min-w-[400px] rounded-full input-info"
        />

        <Button className="btn-block btn-info rounded-full mt-3" variant="info">
          Sign Up
        </Button>
        <p className="mt-3">
          Already a member? <Link to="/auth/signin">Sign In</Link>
        </p>
        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SignUpForm; */
