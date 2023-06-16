'use client';

import { User } from "@prisma/client";
import Logo from "./Logo"
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {

  console.log('currentUser', currentUser)

  return (
    <div className="sticky w-full bg-white z-10">
      <div className="
        py-3 
        md:px-10
        px-4
        border-b-[1px]
        flex
        flex-row
        justify-between"
      >
          <Logo />
          <UserMenu currentUser={currentUser} />
      </div>
    </div>
  )
}

export default Navbar