import React, { Fragment } from "react";

import { SEO, useSEO } from "gatsby-plugin-seo";
import Navbar from "../Header/NavBar";
import { Container } from "@material-ui/core";

const Layout = ({ children })=> {

    const { siteUrl } = useSEO();


    return (
        <React.Fragment>
                 <SEO
        title="Home"
        description="Description of the site/home page."
        pagePath="/"
        schema={`{
              "@context": "http://schema.org",
              "@type": "WebPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Example Company",
                "image": "${siteUrl}/img/logo.png"
              }
            }`}
      />
       <Navbar />

       <Container>
           <main>
           {children}
           </main>

      
       </Container>

       

       {/* <Footer/> */}


        </React.Fragment>
       
       
       
        
    )
}

export default Layout;
