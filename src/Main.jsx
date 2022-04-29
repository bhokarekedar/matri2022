import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from './routes/routes';
// import ErrorBoundary from './components/ErrorBoundary';
import FallBackLoader from './components/FallBackLoader';
import ResponsiveAppBar from './components/Appbar';
import Login from './pages/Login';

function Main() {
    const [IsAuthenticated, setIsAuthenticated] = useState(true)

    return (
        <>

            {/* <ErrorBoundary> */}
            <Suspense fallback={<FallBackLoader />}>
                <BrowserRouter>
                    <ResponsiveAppBar />
                    <Routes>
                        {routes.map((Item, index) => (
                           IsAuthenticated ? <Route key={index} path={Item.path} element={<Item.Component />}>
                            </Route> : <Route path="/login" element={<Login />}>
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