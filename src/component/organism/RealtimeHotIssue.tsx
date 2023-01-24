import Icon from 'component/atom/Icon';
import Title from 'component/atom/TItle';
import { IconClockRollback, IconSliderArrowBoldNext, IconSliderArrowBoldPrev, IconUsers } from 'lib/icon';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Thumb1 from 'asset/content/realtime_hotissue_1.jpeg';
import Badge from 'component/atom/Badge';
import Button from 'component/atom/Button';
import ProfileImageSample from 'asset/content/realtime_hotissue_thumb_1.jpeg';
import FlexX from 'component/atom/FlexX';
import { Color, ColorUI } from 'style/variable/color';
import FlexY from 'component/atom/FlexY';
import { Transition } from 'style/variable/transition';
import StreamCard from 'component/morecule/StreamCard';

const RealtimeHotIssue = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    SwiperCore.use([Autoplay]);
    return (
        <section>
            <Title>
                실시간 핫이슈
                <SliderNavBtnWrap>
                    <PrevBtn ref={prevRef}>이전 목록</PrevBtn>
                    <NextBtn ref={nextRef}>다음 목록</NextBtn>
                </SliderNavBtnWrap>
            </Title>
            <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        if (swiper?.params?.navigation) {
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
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                autoplay={{ delay: 3000 }}
                wrapperTag="ul"
            >
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <SwiperSlide key={index} tag="li">
                            <StreamCard />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default RealtimeHotIssue;

const NavBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    width: 27px;
    height: 27px;
    border: 1px solid ${ColorUI.SliderNavigationBorderColor};
    background-size: 7px 11px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
`;

const PrevBtn = styled(NavBtn)`
    background-image: url(${IconSliderArrowBoldPrev});
    border-radius: 3px 0 0 3px;
    transform: translateX(1px);
`;

const NextBtn = styled(NavBtn)`
    background-image: url(${IconSliderArrowBoldNext});
    border-radius: 0 3px 3px 0;
`;

const StreamTitle = styled(FlexX).attrs({ as: 'h3', className: 'StreamTitle' })`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-left: 54px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    max-height: 22px;
    font-weight: 700;
    line-height: 22px;
    font-size: 16px;
    transition: ${Transition.StreamCard};
`;

const SliderNavBtnWrap = styled(FlexX)`
    position: absolute;
    top: 0;
    right: 0;
`;
