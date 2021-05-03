import React from 'react'
import Header from './../components/navigation/Header';
import { ReducerStateType } from '../Store/Utils/storeTypes';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const currentTheme: string = useSelector((state: ReducerStateType) => state.currentTheme)

  return (
    <div className={currentTheme === "light" ? "lightTheme" : "darkTheme"}>
      <Header />
      <div className="container">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        {children}

      </div>

    </div>
  )
}

export default PageLayout
