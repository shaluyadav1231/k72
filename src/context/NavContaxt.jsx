import React, { createContext, useState } from 'react'


const NavContaxt = ({children}) => {
  const NavbarContext = createContext()
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
        <NavbarContext>{children}</NavbarContext>
    </div>
  )
}

export default NavContaxt