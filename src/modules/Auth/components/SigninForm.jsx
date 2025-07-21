import { Link } from "react-router";
import { Button, Input } from "../../shared/ui";
import SocialLogin from "./SocialLogin";

const SigninForm = () => {
  return (
    <form
      className="flex-1 bg-base-200 border-base-300 border rounded-box   w-fit   p-4
      max-sm:max-w-[300px]      "
    >
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign In Now
      </h2>
      <fieldset className="p-4 fieldset">
        <Input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full max-sm:w-"
        />
        <Input
          type="email"
          label="Password"
          placeholder="Write your password"
          className="mb- w-full sm:min-w-[400px] rounded-full input-info"
        />
        <p className="mb-3 text-gray-500">
          <Link to="/auth/forgot-pass">Forgot your password?</Link>
        </p>

        <Button className="btn-block btn-info rounded-full" variant="info">
          Sign In
        </Button>
        <p className="mt-3">
          Not a member? <Link to="/auth/signup">Sign Up</Link>
        </p>
        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SigninForm;
