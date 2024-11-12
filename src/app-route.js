import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import ContactForm from "./contact-form-app/ContactForm";

export const router=createBrowserRouter([{path:"/",element:<Home></Home>},{path:"/contact-form-app",element:<ContactForm></ContactForm>}])