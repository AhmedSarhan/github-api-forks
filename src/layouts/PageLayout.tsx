import React from 'react'
import Header from './../components/navigation/Header';
import { ReducerStateType } from '../Store/Utils/storeTypes';
import { useSelector } from 'react-redux';


const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const currentTheme: string = useSelector((state: ReducerStateType) => state.currentTheme)

  return (
    <div className={currentTheme === "light" ? "lightTheme" : "darkTheme"}>
      <Header />
      <div className="container">
        {children}
      </div>

    </div>
  )
}

export default PageLayout
