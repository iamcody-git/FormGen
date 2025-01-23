import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-screen h-screen flrx items-center justify-center'>
      {children}
    </div>
  )
}

export default Layout
