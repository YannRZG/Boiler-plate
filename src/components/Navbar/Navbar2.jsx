import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { userAtom } from "../userAtom";
import Darkmode from "../../function/Darkmode";


export default function Navbars() {
  const [user, setUser] = useAtom(userAtom);

  const handleLogout = () => {
    Cookies.remove('token');
    setUser({ isLoggedIn: false });
    window.location.href = '/login';
  };

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">BoilerPlate</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/profile" aria-current="page">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {user.isLoggedIn ? (
          <NavbarItem>
            <Button onClick={handleLogout} color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>

          </>
        )}
        <NavbarItem>
            <Darkmode />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
