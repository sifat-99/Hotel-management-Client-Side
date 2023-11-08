import { Typography } from "@material-tailwind/react";
 
export function FooterWithLogo() {
  return (
    <footer className="w-11/12 mx-auto bg-gray-300 rounded-sm p-8">
      <div data-aos="zoom-in-down" className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-300 text-center md:justify-between">
        <img src="/Hotel.png" alt="logo-ct" className="w-100" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Relax Pacific Mirpur Dhaka. All rights reserved.
      </Typography>
    </footer>
  );
}