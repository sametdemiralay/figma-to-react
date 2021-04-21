import React from "react";
import image from "../../assets/hero.png";
import bg from "../../assets/bg.png";
import BannerText from "../BannerText";
import {
  Container,
  Wrapper,
  InnerWrapper,
  Left,
  TiltWrapper,
  Img,
} from "./BannerElements";

export default function Index() {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <BannerText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt="@gouthamgtronics" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}
