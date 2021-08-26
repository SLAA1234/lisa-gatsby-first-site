import React from "react";
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
	return (
		<Layout pageTitle="Home">
			   <p>
			   		I'm making this by following the Gatsby Tutorial.					   
			   </p>
			   {/* <StaticImage src="https://wallpapercave.com/wp/wp2649679.jpg" 
					   		alt="detective conan"/> */}
				<StaticImage src="../images/kudo Shinichi.jpg" 
					   		alt="gugu"/>
		</Layout>
	);
};

export default IndexPage;
