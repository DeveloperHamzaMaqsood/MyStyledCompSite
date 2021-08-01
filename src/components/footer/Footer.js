import React from 'react'
import {
    FooterContainer,
    FooterSubs,
    FooterSubHead,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinkTitle,
    FooterLink
} from './Footer.elements';
import {Button} from '../../GlobalStyled'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubs>
                    <FooterSubHead>
                        Join Our Expclusive Membership to gain
                    </FooterSubHead>
                    <FooterSubText>
                        You can Subscribe at 
                    </FooterSubText>
                    <Form>
                        <FormInput  name="email" type ="email" placeholder="Your Email"></FormInput>
                        <Button fontBig >Subscribe</Button>
                    </Form>
                </FooterSubs>
                <FooterLinksContainer >
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinkTitle>
                            Home
                            </FooterLinkTitle>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/">Testinomials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                        </FooterLinksItem>

                        <FooterLinksItem>
                            <FooterLinkTitle>
                            About us
                            </FooterLinkTitle>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/">Testinomials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                        </FooterLinksItem>

                        <FooterLinksItem>
                            <FooterLinkTitle>
                            Contact Us
                            </FooterLinkTitle>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/">Testinomials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                        </FooterLinksItem>

                        <FooterLinksItem>
                            <FooterLinkTitle>
                            Gallery
                            </FooterLinkTitle>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/">Testinomials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterContainer>
        </>
    )
}

export default Footer
