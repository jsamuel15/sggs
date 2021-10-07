import React from 'react';

// Images
import bolo1 from '../../assets/bolo1.jpg';
import bolo2 from '../../assets/bolo2.jpg';
import bolo3 from '../../assets/bolo3.jpg';

import {
    Home,
    Text,
    Body,
    Header,
    DivHeader,
    DivSlider,
    DivSection,
    DivSlideWidth,
    DivSlideItem,
    DivButtonSlide,
    ButtonSlide,
} from './homePageStyles';

const HomePage: React.FC = () => {
    function ViewSlide() {
        let totalSlides: any = document.querySelectorAll("slide-item").length;
        let currentSlide = 0;

        console.log(totalSlides);
        // window.("#slide-width").style.width = `calc(100vw * ${totalSlides}*)`;
        // (document.getElementById("slide-control") as HTMLElement).style.height = `${(document.querySelector("slider") as HTMLElement).clientHeight}px`;
    
        function goPrev() {
            currentSlide--;
            if (currentSlide < 0){
                currentSlide = totalSlides -1;
            }
            updateMargin();
        };
    
        function goNext(){
            currentSlide++;
            if (currentSlide > (totalSlides -1)){
                currentSlide = 0;
            }
            updateMargin();
        };
    
        function updateMargin() {
            let newMargin = (currentSlide * document.body.clientWidth);
            (document.getElementById("slide-width") as HTMLElement).style.marginLeft = `-${newMargin}`;
        }
        return (
            <>
                <DivButtonSlide id="slide-control">
                    <ButtonSlide onClick={goPrev}>Voltar</ButtonSlide>
                    <ButtonSlide onClick={goNext}>Próximo</ButtonSlide>
                </DivButtonSlide>
                <DivSlideWidth id="slide-width">
                    <DivSlideItem id="slide-item" src={bolo1} />
                    <DivSlideItem id="slide-item" src={bolo2} />
                    <DivSlideItem id="slide-item" src={bolo3} />
                </DivSlideWidth>
            </>
        )
    }

    return (
        <Home>
            <Body>
                <Header>
                    <DivHeader />
                    <DivSlider id="slider">
                        {ViewSlide()}
                    </DivSlider>
                </Header>
                <DivSection>
                    <Text>Hello!</Text>
                </DivSection>
            </Body>
        </Home> 
    );
};

export default HomePage;