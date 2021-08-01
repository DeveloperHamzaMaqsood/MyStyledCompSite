import React from 'react'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';
import {Container , Button} from '../../GlobalStyled';
import {Link} from 'react-router-dom'


const InfoSection = ({
        lightBg,
        imgStart,
        LightTopLine,
        LightText,
        LightTextDesc,
        ButtonLabel,
        topLine,
        HeadLine,
        Description,
        primary,
        start,
        img,
        alt
    }) => {

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow  imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine LightTopLine={LightTopLine}>{topLine}</TopLine>
                                <Heading LightText={LightText}>{HeadLine}</Heading>
                                <Subtitle LightTextDesc={LightTextDesc}>{Description}</Subtitle>
                                <Link to="/signUp">
                                    <Button big fontBig primary={primary} >
                                        {ButtonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start = {start} >
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
