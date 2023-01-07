import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from './routes/routes';
// import ErrorBoundary from './components/ErrorBoundary';
import FallBackLoader from './components/FallBackLoader';
import ResponsiveAppBar from './components/Appbar';
import HomePage from './pages/HomePage';

function Main() {
    const [IsAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <>
            {/* <ErrorBoundary>  */}
             <Suspense fallback={<FallBackLoader />}>
                <BrowserRouter>
                    <ResponsiveAppBar />
                    <Routes>
                        {routes.map((Item, index) => (
                          <Route key={index} path={Item.path} element={<Item.Component />}>
                            </Route> 
                        ))}
                    </Routes>
                </BrowserRouter>
            </Suspense> 
           {/* </ErrorBoundary> */}
        </>
    )
}

export default Main