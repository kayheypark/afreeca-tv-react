import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import FlexX from 'component/atom/FlexX';
import FlexY from 'component/atom/FlexY';
import styled from 'styled-components';
import BannerImage1 from 'asset/content/main_swiper_1.png';
import { Palette, Color } from 'style/variable/color';
import React, { useRef } from 'react';
import { IconSliderArrowNext, IconSliderArrowPrev } from 'lib/icon';

const MainBanner = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    return (
        <Wrapper>
            <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        if (swiper.params.navigation) {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            swiper.params.navigation.prevEl = prevRef.current;
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            swiper.params.navigation.nextEl = nextRef.current;

                            // Re-init navigation
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    });
                }}
                spaceBetween={0}
                slidesPerView={3}
                slidesOffsetAfter={42}
                loop={true}
                wrapperTag="ul"
            >
                {[1, 2, 3, 4].map((item) => {
                    return (
                        <SwiperSlide tag="li">
                            <Anchor to="">
                                <Image />
                                <TextWapper>
                                    <span>12/29(목) 오후 4시 30분</span>
                                    <strong>22-23 WKBL 퓨처스리그</strong>
                                    <p>하나원큐 vs 삼성생명</p>
                                </TextWapper>
                            </Anchor>
                        </SwiperSlide>
                    );
                })}
                <PrevBtn ref={prevRef}>이전 슬라이드</PrevBtn>
                <NextBtn ref={nextRef}>다음 슬라이드</NextBtn>
            </Swiper>
        </Wrapper>
    );
};

export default MainBanner;

const Wrapper = styled(FlexX).attrs({ as: 'div' })`
    width: 100%;
    border-bottom: 1px solid ${Palette.Gray_f0f0f0};
`;

const Anchor = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Color.Empty};
    border-right: 1px solid ${Palette.Gray_f0f0f0};
`;

const TextWapper = styled(FlexY).attrs({ as: 'div' })`
    align-self: baseline;
    padding-top: 11px;
    row-gap: 4px;
    span {
        font-size: 12px;
        color: ${Palette.Gray9};
        letter-spacing: -1px;
    }
    strong {
        color: ${Palette.Gray3};
        font-weight: 700;
        letter-spacing: -1.7px;
    }
    p {
        font-size: 15px;
        color: ${Palette.Gray5};
    }
`;

const Image = styled(FlexX).attrs({ as: 'div' })`
    background-image: url(${BannerImage1});
    background-repeat: no-repeat;
    width: 184px;
    height: 100px;
`;

const NavBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0;
    width: 42px;
    height: calc(100% + 2.4px);
    background-size: 10px auto;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border: 0;
`;

const PrevBtn = styled(NavBtn)`
    background-image: url(${IconSliderArrowPrev});
    left: 0;
`;

const NextBtn = styled(NavBtn)`
    background-image: url(${IconSliderArrowNext});
    right: 0;
`;
