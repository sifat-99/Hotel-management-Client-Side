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
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import swal from "sweetalert";


export function RegistrationCard() {
  const { createUser, logOut } = useContext(AuthContext);
  const [valid, setValid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.text.value;
    const image = e.target.image.value;
    if (password.length < 6) {
      setValid("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setValid("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setValid("Password must contain at least one lowercase letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setValid("Password must contain at least one number");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setValid("Password must contain at least one special character");
      return;
    } else {
      setValid("");
    }
    setErrorMessage("");
    createUser(email, password,name,image)
      .then(() => {
        // console.log(res.user);
        swal({
          title: "Good job!",
          text: "Registration successful!",
          icon: "success",
          button: " Login Now!!!",
        }).then(function () {
          window.location = "/login";
          // for force the new registered user to login again after registration to access everything.
          logOut();
        });
      })
      .catch(() => {
        // console.log(err.message);
        setErrorMessage("Email already in use");
      });

    // console.log(email, password, image, name);
    e.target.reset();
  };

  return (
    <Card className="w-96 mx-auto mt-32">
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
        <form onSubmit={handleRegistration}>
          <Input label="Name" name="text" type="text"  size="lg" />
          <br />
          <Input label="PhotoURL" name="image" type="text"  size="lg" />
          <br />
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
            <Checkbox label="Remember Me" required />
          </div>
          <Button type="submit" variant="gradient" fullWidth>
            Sign up
          </Button>
        </form>
      </CardBody>
      <CardFooter className="pt-0">
      <Typography  variant="small" className="mt-6 text-purple-700 font-semibold flex justify-center">
          {valid}
          {errorMessage}
          </Typography>
        <Typography  variant="small" className="mt-6 text-purple-700 font-semibold flex justify-center">
          Already have an account?
          <Typography
            
            as="a"
            href="/login"
            variant="small"
            color="blue-gray"
            className="ml-1  text-red-500 font-bold"
          >
             Login
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
