import { useState } from "react";

export default function CurtainMenu() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-start">
          <h2 className="p-5 font-bold text-black">Taxi Booking</h2>
        </div>
        <button
          onClick={toggle}
          className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-black"
        >
          Open
        </button>
        <Menu open={open}>
          <button
            aria-label="Close"
            className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
            onClick={toggle}
          >
            &times;
          </button>
          <MenuContainer>
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/contact">Contact</MenuItem>
            <MenuItem href="/service">Services</MenuItem>
            <MenuItem href="/about">About</MenuItem>
            <MenuItem href="/book">CarFleet</MenuItem>
          </MenuContainer>
        </Menu>
      </div>
    </>
  );
}

/* Logic*/
const style = {
  container: `relative top-1/4 w-full text-center mt-8`,
  item: `text-3xl text-gray-400 cursor-pointer hover:text-white`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
  },
};

function Menu({ children, open }) {
  return (
    <div
      className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}

function MenuItem({ children, href }) {
  return (
    <div className="p-2">
      <a href={href} className={style.item}>
        {children}
      </a>
    </div>
  );
}
