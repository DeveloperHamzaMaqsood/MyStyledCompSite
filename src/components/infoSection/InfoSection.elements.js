import styled from 'styled-components';

export const InfoSec = styled.div`
    color : #fff;
    padding : 160px 0px; 
    background : ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div `
    display : flex;
    flex-direction : row;
    justify-content :center;
    align-items :center;
    margin : 0 -15px -15px -15px;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

    @media screen and (max-width:767px){
        flex-direction: column;
    }
`;


export const InfoColumn = styled.div `
    margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    max-width:50%;
    flex-basis : 50%;
    display : flex;

    @media screen and (max-width:768px){
        max-width:100%;
        flex-basis : 100%;
        flex-direction : column;
        justify-content : center;
    }
`;


export const TextWrapper = styled.div`
    max-width : 540px;
    padding-top: 50px;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom: 65px;
    }
`; 


export const TopLine = styled.div`
    color : ${({LightTopLine}) => (LightTopLine ? '#a9b3c1' : '#4859F7')};
    font-size : 18px;
    line-height :16px;
    letter-spacing: 1.4px;
    margin-bottom:16px;
`;

export const Heading = styled.h1`
    margin-bottom : 24px;
    font-size : 48px;
    line-height :1.1;
    color : ${({color})=> (color ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
    max-width : 440px;
    margin-bottom: 35px;
    font-size : 18px;
    line-height : 24px;
    color : ${({LightTextDesc}) => (LightTextDesc ? '#a9b3c1' : '#1c2237')};
`;


export const ImgWrapper = styled.div`
    max-width: 555px;
    display : flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;


export const Img = styled.img`
    padding-right: 0;
    border : 0;
    max-width : 100%;
    vertical-align : middle;
    display : inline-block;
    max-height :500px;
`;