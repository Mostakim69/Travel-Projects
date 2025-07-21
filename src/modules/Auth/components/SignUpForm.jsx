import { Link } from "react-router";
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

export default SignUpForm;
