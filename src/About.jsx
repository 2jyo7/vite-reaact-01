import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";


const About = () => {
   return (
      <Wrapper>
         <div className="container grid grid-two-column">
         <div className="section-hero-data">
            <h1 className="hero-heading">Virgin-River-Reign </h1>
            <p className="hero-para">Welcom to Virgin River! Here you will get Informations about travelling services.
               Have a pleasurable experience.</p>
               <span className="hero-top-data">For more Information...,Please Contact:
                  <NavLink to={"/contact"}>
                     <Button className="btn hireme-btn">
                        Contact For More
                     </Button>
                     </NavLink></span> </div>
     
      <div className="image-sec">
      <picture>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbiyxzVYgrWEEKAbR_gnE4Dr52iFWhaaVlQ&usqp=CAU"
         alt="about-img"
         className="about-image" />
      </picture>
    </div>
    </div>
    </Wrapper>
   )
};
const Wrapper = styled.section`
padding: 9rem 0;
.section-hero-data {
   display: flex;
   flex-direction: column;
   justify-content: center;
 }

 .btn {
   max-width: 16rem;
 }

 .hero-top-data {
   text-transform: uppercase;
   font-weight: 500;
   font-size: 1.5rem;
   color: ${({ theme }) => theme.colors.helper};
 }

 .hero-heading {
   text-transform: uppercase;
   font-size: 6.4rem;
 }

 .hero-para {
   margin-top: 1.5rem;
   margin-bottom: 3.4rem;
   max-width: 60rem;
 }

.image-sec {
   display: flex;
   justify-content: center;
   align-items: center;
}
.about-image {
   
   max-width: 100%;
}
picture {
   text-alignment: center;
   position: relative;

   &::after {
     content: "";
     width: 60%;
     height: 80%;
     background-color: rgba(81, 56, 238, 0.4);
     position: absolute;
     left: 40%;
     top: -4rem;
     z-index: -1;
   }
 }
 @media (max-width: ${({ theme }) => theme.media.mobile}) {
   .grid {
     gap: 7.2rem;
   }
 }

`;

export default About;