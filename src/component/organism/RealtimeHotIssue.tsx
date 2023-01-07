import Icon from 'component/atom/Icon';
import Title from 'component/atom/TItle';
import { IconClockRollback, IconSliderArrowNext, IconSliderArrowPrev, IconUsers } from 'lib/icon';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Thumb1 from 'asset/content/realtime_hotissue_1.jpeg';
import Badge from 'component/atom/Badge';
import Button from 'component/atom/Button';
import ProfileImageSample from 'asset/content/realtime_hotissue_thumb_1.jpeg';
import FlexX from 'component/atom/FlexX';
import { Color } from 'style/variable/color';
import FlexY from 'component/atom/FlexY';
import { Transition } from 'style/variable/transition';

const RealtimeHotIssue = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    return (
        <section>
            <Title>
                실시간 핫이슈
                {/* <div>
                    <PrevBtn ref={prevRef}>이전 슬라이드</PrevBtn>
                    <NextBtn ref={nextRef}>다음 슬라이드</NextBtn>
                </div> */}
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
                wrapperTag="ul"
            >
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <SwiperSlide key={index} tag="li">
                            <Anchor to={'/'} target="_blank">
                                <Thumbnail src={Thumb1} />
                                <ExplorableBadge>탐방허용</ExplorableBadge>
                                <ViewLaterBtn>
                                    <Icon src={IconClockRollback} />
                                    나중에보기
                                </ViewLaterBtn>
                                <StreamInformation>
                                    <ProfileImg src={ProfileImageSample} />
                                    <StreamTitle>
                                        {'신입롤여캠 금이루 새해의 솔랭 ㅇ_< !! (맞즐 [괴인협회]'}
                                    </StreamTitle>
                                    <Details>
                                        <Nickname>서금이</Nickname>
                                        <span>∙</span>
                                        <ViewCoount>
                                            <Icon src={IconUsers}></Icon>
                                            {'11'}
                                        </ViewCoount>
                                    </Details>
                                    <TimeBadge>{'01-01 15:13 방송시작'}</TimeBadge>
                                </StreamInformation>
                            </Anchor>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default RealtimeHotIssue;

const Anchor = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    padding-bottom: calc(100% * (9 / 16));
    border-radius: 12px;
    overflow: hidden;
    &:hover {
        .StreamTitle {
            max-height: 44px;
        }
        .ExplorableBadge,
        .ViewLaterBtn,
        .TimeBadge {
            opacity: 1;
        }
    }
    &::after {
        position: absolute;
        bottom: 0;
        content: '';
        display: block;
        width: 100%;
        height: 50%;
        background-image: linear-gradient(to bottom, transparent 5%, rgba(0, 0, 0, 0.85));
    }
`;

const Thumbnail = styled(Icon)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-size: cover;
    padding-bottom: calc(100% * (9 / 16));
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
`;

const PrevBtn = styled(NavBtn)`
    background-image: url(${IconSliderArrowPrev});
    left: 0;
`;

const NextBtn = styled(NavBtn)`
    background-image: url(${IconSliderArrowNext});
    right: 0;
`;

const ExplorableBadge = styled(Badge).attrs({ className: 'ExplorableBadge' })`
    position: absolute;
    top: 7px;
    left: 7px;
    font-size: 12px;
    content: '';
    display: flex;
    border: 1px solid red;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid #36caef;
    color: #36caef;
    font-weight: 400;

    opacity: 0;
    transition: ${Transition.StreamCard};
`;

const ViewLaterBtn = styled(Button).attrs({ className: 'ViewLaterBtn' })`
    position: absolute;
    top: 7px;
    right: 7px;
    opacity: 0;
    transition: ${Transition.StreamCard};
    .Icon {
        width: 30px;
        height: 30px;
        background-size: 100%;
    }
`;

const StreamInformation = styled(FlexY)`
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 10px;
    color: ${Color.Empty};
    z-index: 1;
    margin-top: 11px;
    .Details {
        margin-left: 54px;
        font-size: 13px;
    }
`;

const ProfileImg = styled(Icon)`
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    border-radius: 100px;
    width: 42px;
    height: 42px;
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

const Details = styled(FlexX).attrs({ className: 'Details' })`
    align-items: center;
    column-gap: 6px;
    line-height: 1.2;
    margin-top: 2px;
`;

const Nickname = styled(FlexX).attrs({ as: 'span' })``;

const ViewCoount = styled(FlexX).attrs({ as: 'span' })`
    align-items: center;
    .Icon {
        width: 12px;
        height: 9px;
    }
`;

const TimeBadge = styled(Badge).attrs({ className: 'TimeBadge' })`
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(calc(-100% - 6px));
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.25px;

    opacity: 0;
    transition: ${Transition.Default};
`;
