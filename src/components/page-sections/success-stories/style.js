import styled from "styled-components"

import { SHADOW, COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Carousel = styled.div`
  width: 50%;
  min-height: 500px;
  position: relative;
  box-sizing: border-box;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 80%;
  }
`

export const CarouselContent = styled.div`
  position: absolute;
  width: 400%;
  box-sizing: border-box;
  display: flex;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 25}%)`};
  transition: transform 0.3s ease;
`

export const CarouselCard = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 500px;
  box-sizing: border-box;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  transition: all 0.3s ease;
  transform: ${({ isActive }) => (isActive ? "none" : "scale(0.8)")};

  > div {
    box-sizing: border-box;
    text-align: center;
    box-shadow: ${SHADOW.BOX};
    width: 100%;
    height: 100%;
    padding: 50px;

    @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
      padding: 20px;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
    margin-bottom: 20px;
    filter: grayscale(100%);

    @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
      width: 100px;
      height: 100px;
    }
  }
`

export const Btn = styled.button`
  position: absolute;
  left: ${({ side }) => (side === "left" ? "-50px" : "auto")};
  right: ${({ side }) => (side === "right" ? "-50px" : "auto")};
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  background-color: transparent;
  color: ${COLOR.BLUE_VIOLET};
  border: none;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }
`
