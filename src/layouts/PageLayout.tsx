import React from 'react'
import Header from './../components/navigation/Header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>

    </>
  )
}

export default PageLayout
