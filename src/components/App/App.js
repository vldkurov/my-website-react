import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../../pages/HomePage/HomePage";
import ContactPage from "../../pages/Contact/ContactPage";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route index element={<HomePage/>}/>
        <Route path={'contact'} element={<ContactPage/>}/>
    </Route>
));

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
