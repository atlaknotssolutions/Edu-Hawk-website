// import React from 'react'
// import Navbar from './component/Navbar'
// import HeroSection from './pages/HeroSection'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <HeroSection/>

//     </div>
//   )
// }

// export default App

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/layouts/MainLayout.jsx";

// Pages
import Home from "./pages/HeroSection.jsx"; // ← yeh tera purana HeroSection hai
import About from "./pages/About.jsx";
import Russian from "./pages/Country/Russian.jsx";
import Bangladesh from "./pages/Country/Bangladesh.jsx";
import Services from "./pages/Component/Services.jsx";
import Contact from "./pages/Component/Contact.jsx";
import Kazakhstan from "./pages/Country/Kazakhstan.jsx";
import Kyrgyzstan from "./pages/Country/Kyrgyzstan.jsx";
import Armernia from "./pages/Country/Armernia.jsx";
import Belarus from "./pages/Country/Belarus.jsx";
import China from "./pages/Country/China.jsx";
import Egypt from "./pages/Country/Egypt.jsx";
import Georgia from "./pages/Country/Georgia.jsx";
import Iran from "./pages/Country/Iran.jsx";
import Nepal from "./pages/Country/Nepal.jsx";
import Tejikistan from "./pages/Country/Tejikistan.jsx";
import Uzbekistan from "./pages/Country/Uzbekistan.jsx";
import Vietnam from "./pages/Country/Vietnam.jsx";
import BlogSection from "./pages/Blog/BlogSection.jsx";
import Blog from "./pages/Component/Blog.jsx";
import BlogDetail from "./pages/Component/BlogDetail.jsx";

// import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // default route (/)
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "mbbs-abroad/russia",
        element: <Russian />,
      },
      {
        path: "mbbs-abroad/bangladesh",
        element: <Bangladesh />,
      },

      {
        path: "mbbs-abroad/kazakhstan",
        element: <Kazakhstan />,
      },

      {
        path: "mbbs-abroad/armernia",
        element: <Armernia />,
      },

      {
        path: "mbbs-abroad/belarus",
        element: <Belarus />,
      },

      {
        path: "mbbs-abroad/china",
        element: <China />,
      },

      {
        path: "mbbs-abroad/egypt",
        element: <Egypt />,
      },

      {
        path: "mbbs-abroad/georgia",
        element: <Georgia />,
      },

      {
        path: "mbbs-abroad/iran",
        element: <Iran />,
      },

      {
        path: "mbbs-abroad/nepal",
        element: <Nepal />,
      },

      {
        path: "mbbs-abroad/tajikisatin",
        element: <Tejikistan />,
      },

      {
        path: "mbbs-abroad/uzbekistan",
        element: <Uzbekistan />,
      },

      {
        path: "mbbs-abroad/vintnam",
        element: <Vietnam />,
      },

      {
        path: "blog/education-blog",
        element: <BlogSection />,
      },
      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "services",
        element: <Services />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      // aur jitne page chahiye add kar sakte ho
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
