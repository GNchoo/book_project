import { styled } from "styled-components";

export const BooksContainer = styled.div`
  background-color: white;
  padding: 30px;
`;

export const Inner = styled.div`
  width: 97%;
  height: 1000px;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 280px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  .text1 {
    height: 50%;
    font-size: 50px;
    font-weight: 600;
    color: #333;
    line-height: 60px;
  }
  .text2 {
    height: 50%;
    font-size: 23px;
    color: #767676;
    line-height: 30px;
  }
`;

export const ImageBox = styled.div`
  height: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* 
  @keyframes slidein {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .slide-animation {
    animation: slidein 10s ease-in-out infinite;
  }

  .slide-animation-reverse {
    animation-direction: reverse;
  }

  .book-image {
    width: 130px;
    height: 180px;
    margin-right: 20px;
  } */

  .swiper-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    transition-timing-function: linear;
  }
  .swiper-slide {
    display: flex;
  }
`;