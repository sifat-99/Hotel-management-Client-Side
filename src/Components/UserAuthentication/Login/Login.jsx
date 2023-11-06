import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import {FcGoogle }from 'react-icons/fc'
import { GoogleAuthProvider } from "firebase/auth";


export function LoginCard() {
  const AuthProvider = new GoogleAuthProvider();

  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = {
      email,
      password,
    };
    console.log(userInfo);

    signIn(email, password)
    .then((res)=>{
      console.log(res?.user)
      navigate(location ? location?.state : "/");
        redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

    e.target.reset();
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(AuthProvider)
    .then((res)=>{
      console.log(res?.user)
      navigate(location ? location?.state : "/");
        redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  }


  return (
    <Card className=" w-80 md:w-96 mx-auto mt-32">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <form onSubmit={handleLogin}>
          <Input label="Email" name="email" type="email" required size="lg" />
          <br />
          <Input
            label="Password"
            type="password"
            name="password"
            required
            size="lg"
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me"  />
          </div>
          <Button type="submit" variant="gradient" fullWidth>
            Sign In
          </Button>
        </form>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/register"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
        <div className="flex items-center justify-center">
        <button onClick={handleGoogleLogin}><FcGoogle className="text-4xl" ></FcGoogle></button>
        </div>
      </CardFooter>
    </Card>
  );
}
