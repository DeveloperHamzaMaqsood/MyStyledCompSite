import  styled , {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
    margin : 0;
    padding :0;
    font-family : Source Sans Pro;
    box-sizing : border-box;
    `;

export const Container = styled.div`
    z-index :1;
    width: 100%;
    max-width :1300px;
    margin-left :auto;
    margin-right :auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 991 px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;


export const Button = styled.button `
    border-radius : 4px;
    background : ${({primary}) => (primary ? '#4859F7' : '#0467FB')};
    white-space : nowrap;
    padding : ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color : #fff;
    font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline : none;
    border : none;
    cursor : pointer;

    @media screen and (max-width: 960px){
        width : 100%;
    }
`;





export default GlobalStyle;

