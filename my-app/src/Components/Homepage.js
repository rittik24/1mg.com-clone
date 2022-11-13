import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { health, topSellingProducts, topSlidingImage } from "../Components/Constants";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "@fontsource/clear-sans";
import ProductsCard from "../Components/ProductsCard";
import BrandsCard from "../Components/BrandsCard";
import ProductsAndBrandsBox from "../Components/ProductsAndBrandsBox";

const Homepage = () => {
  return (
    <Box fontFamily="Clear Sans">
      {/* Top carousel and image */}
      <Box display={"flex"} border="1px solid lightgrey" p="0.5">
        <Box w={"70%"}>
          <AliceCarousel
            autoPlay
            autoPlayInterval="2000"
            disableButtonsControls="true"
            disableDotsControls="true"
          >
            {topSlidingImage.map((e, i) => (
              <Image w="100%" key={i} src={e.img} />
            ))}
          </AliceCarousel>
        </Box>
        <Box w="30%">
          <Link
            target="_blank"
            href="https://www.1mg.com/labs/test/advanced-cardiac-risk-markers-34953"
          >
            <Image
              h="100%"
              src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/f62e9238-d4c6-4c5b-9493-2535f6f57205.png"
            />
          </Link>
        </Box>
      </Box>

      {/* Top Carousel and image done */}

      {/* Baisic line */}
      <Box textAlign={"center"} p="2rem" border="1px solid lightgrey">
        <Text
          fontWeight={"400"}
          fontSize={"25px"}
          lineHeight={"31px"}
          color={"#666666"}
        >
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </Text>
      </Box>

      {/* End */}

      {/* Brands and Products */}
      
      <ProductsAndBrandsBox />
      <BrandsCard something={health} />
      <ProductsCard something={topSellingProducts} />

     
    </Box>
  );
};

export default Homepage;
