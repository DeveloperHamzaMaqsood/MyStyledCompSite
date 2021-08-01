import React , {useState , useEffect} from 'react'
import {
    Navbar,
    NavbarContainer,
    Navlogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';
import { FaTimes,FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../GlobalStyled';


function NavbarFunc() {
    const [click , setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const [button , setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    const closeMobileWindow = () => {
        
    }

    useEffect(() =>  {showButton()} , [])

    window.addEventListener('resize' , showButton);

    return (
        <IconContext.Provider value = {
            {
                color: "#fff"
            }
        } >
            <Navbar>
                <NavbarContainer>
                    <Navlogo to="/">
                        <NavIcon/>
                            ULTRA
                    </Navlogo>
                    <MobileIcon onClick={handleClick}>
                        {
                            click ? <FaTimes/> : <FaBars/>
                        }
                    </MobileIcon>
                    <NavMenu  click={click}>
                        <NavItem  >
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem  >
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem  >
                            <NavLinks to="/products">Products</NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {
                                button ? (
                                    <NavBtnLink to="/signUp">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink>
                                        <Button  fontBig primary >SIGN UP  </Button>
                                    </NavBtnLink>
                                )
                            }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Navbar>
        </IconContext.Provider>
    )
}

export default NavbarFunc
