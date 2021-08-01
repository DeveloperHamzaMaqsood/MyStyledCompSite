import styled from 'styled-components';

export const FooterContainer = styled.div`
    background : #101522;
    display : flex ;
    flex-direction :column;
    padding : 4rem 0 2rem 0;
    justify-content : center;
    align-items : center;
`;

export const FooterSubs = styled.div`
    display :flex;
    flex-direction :column;
    justify-content : center;
    align-items : center;
    margin-bottom: 24px;
    padding : 24px;
    color : #fff;
`;


export const FooterSubHead = styled.p`
    margin-bottom: 24px;
    font-size : 24px;
`;


export const FooterSubText = styled.p `
    margin-bottom: 24px;
    font-size : 28px;
`;


export const Form = styled.form`
    display : flex;
    justify-content :center;
    align-items :center;

    @media screen and (max-width :820px){
        flex-direction :column;
        width : 80%;
    }
`;


export const FormInput = styled.input`
    padding : 10px 20px;
    border-radius : 2px;
    margin-right : 10px;
    outline : none;
    font-size : 16px;
    border : 1px solid #fff;

    @media screen and (max-width:820px){
        margin : 0 0 16px 0;
        min-width:350px;
    }
`;

export const FooterLinksContainer =  styled.div`
    padding-left: 50px;
    padding-right: 50px;
    margin-top:10px;
    margin-bottom:10px;
    width: 100%;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    padding-left : 50px;
    padding-right : 50px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;


export const FooterLinksItem = styled.div`
    display : flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-right: 80px;
    margin-left : 80px;
    
    @media screen and (max-width : 820px) {
        margin-top : 50px;
    }
`;


export const FooterLinkTitle = styled.h2`
    justify-content:center;
    font-size : 25px;
    color : #fff;
    margin-bottom : 25px;

    @media screen and (max-width: 820px){
        font-size : 24px;
    }
`;

export const FooterLink = styled.h6`
    font-size : 13px;
    color : #fff;
    margin-bottom : 10px;

    @media screen and (max-width: 820px){
        font-size : 12px;
    }
`;