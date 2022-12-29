import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FlexX from 'component/extends/FlexX';
import FlexY from 'component/extends/FlexY';
import styled from 'styled-components';
import BannerImage1 from 'asset/content/main_swiper_1.png';
import { Palette, Color } from 'style/variable/color';

const MainBanner = () => {
    return (
        <Wrapper>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
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
