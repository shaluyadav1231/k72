import React, { createContext, useState } from 'react'


export const NavContaxt = ({children}) => {
  const NavbarContext = createContext()
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
          {children}
          </NavbarContext.Provider>
    </div>
  )
}

export default NavContaxt