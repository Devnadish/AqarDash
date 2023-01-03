import { useState } from "react";
import { BrowserRouter  } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ErrorBoundary} from "react-error-boundary"
// import PageNotFound from "./pages/404/PageNotFound";


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MyRoutes from "./component/utils/Routes/MyRoutes";
import { MenuItem } from "./component/menu/MenuItem";
 
 



const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  /* align-items: center; */
  max-width: 100vw;
  min-width: 300px;
  width: 100%;
  /* max-height: 100vh; */
  height: 100%;
  /* border:12px solid red; */
  /* align-items: start; */

 
`;


 


const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: "TB";
 
  `;

const SideWrapper = styled.div`
position: sticky;
    position: -webkit-sticky;
    top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: rgba(29,29,31);
  color: #FFFFFF;
  min-width: 0px;
  z-index: 100;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  `;

const queryClient = new QueryClient()

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
    <ErrorBoundary fallback={<h1> Error  </h1>} >
     <QueryClientProvider client={queryClient}> 
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {/* <Container1> */}
        <Container>
          <BrowserRouter>
            <SideWrapper><MenuItem/></SideWrapper>
              <BodyWrapper>
             <MyRoutes/>
            </BodyWrapper>  
          </BrowserRouter>
          
        </Container>
        {/* </Container1> */}
      </ThemeProvider>
      </QueryClientProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </ErrorBoundary>
    </>
  );
}

export default App;


