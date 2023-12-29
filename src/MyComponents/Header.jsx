import { Button, Navbar } from "flowbite-react";

const Header = () => {
  const resumeLink =
    "https://docs.google.com/document/d/1iiUdY4-qzZn1aCpZ6ZOeqS0AX_cmZV7V/edit?usp=sharing&ouid=113332697539049869624&rtpof=true&sd=true";

  return (
    <Navbar fluid rounded style={{ background: "unset" }}>
      <Navbar.Brand href="#">
        <img
          src={require("./assets/photo_6224083313795118721_y.jpg")}
          className="w-10 h-10 p-1 mr-3 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          alt="Bordered avatar"
        />
        <span className="logo-name self-center text-2xl md:text-xl font-semibold whitespace-nowrap text-blue-700 dark:text-white">
          <span> &lt;</span> Siddanth Reddy <span>/&gt; </span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href={resumeLink} className="Resume-btn bg-blue-600">
          Resume
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="text-gray-400 text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about-div" className="text-gray-400 text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="#work-experience" className="text-gray-400 text-lg">
          Experience
        </Navbar.Link>
        <Navbar.Link href="#projects" className="text-gray-400 text-lg">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#message-form" className="text-gray-400 text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
