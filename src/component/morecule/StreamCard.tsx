import FlexX from 'component/atom/FlexX';
import Icon from 'component/atom/Icon';
import { Link } from 'react-router-dom';
import { Color, Palette } from 'style/variable/color';
import styled from 'styled-components';
import { IconClockRollback, IconUsers, IconUsersGray } from 'lib/icon';
import Badge from 'component/atom/Badge';
import { Transition } from 'style/variable/transition';
import Button from 'component/atom/Button';
import FlexY from 'component/atom/FlexY';
import { IStreamCard } from 'lib/model/StreamCard';

interface IProps {
    isStatic?: boolean;
    streamCard: IStreamCard;
}

const StreamCard = ({ isStatic = false, streamCard }: IProps) => {
    return (
        <div>
            <Anchor to={'/'} target="_blank">
                <Thumbnail src={streamCard?.thumbnailUrl} />
                {streamCard?.isAllowToExplore && <ExplorableBadge>탐방허용</ExplorableBadge>}
                <ViewLaterBtn>
                    <Icon src={IconClockRollback} />
                    나중에보기
                </ViewLaterBtn>
                <StreamInformation>
                    {!isStatic && <ProfileImg src={streamCard?.profileImageUrl} />}
                    {!isStatic && <StreamTitle>{streamCard?.title}</StreamTitle>}
                    {!isStatic && (
                        <Details>
                            <Nickname>{streamCard?.nickName}</Nickname>
                            <span>∙</span>
                            <ViewCoount>
                                <Icon src={IconUsers}></Icon>
                                {streamCard?.viewCount}
                            </ViewCoount>
                        </Details>
                    )}
                    <TimeBadge>{'01-01 15:13 방송시작'}</TimeBadge>
                </StreamInformation>
            </Anchor>
            {isStatic && (
                <StreamInformationForStatic>
                    <ProfileImg src={streamCard?.profileImageUrl} />
                    <StreamTitle>{streamCard?.title}</StreamTitle>
                    <Details>
                        <Nickname>{streamCard?.nickName}</Nickname>
                        <span>∙</span>
                        <ViewCoount>
                            <Icon src={IconUsersGray}></Icon>
                            {streamCard?.viewCount}
                        </ViewCoount>
                    </Details>
                </StreamInformationForStatic>
            )}
        </div>
    );
};

export default StreamCard;

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

const ProfileImg = styled(Icon).attrs({ as: 'a', href: '#' })`
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    border-radius: 100px;
    width: 42px;
    height: 42px;
`;

const StreamTitle = styled(FlexX).attrs({ as: 'a', className: 'StreamTitle', href: '#' })`
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
    color: ${Color.Empty};
`;

const Details = styled(FlexX).attrs({ className: 'Details' })`
    align-items: center;
    column-gap: 6px;
    line-height: 1.2;
    margin-top: 2px;
`;

const Nickname = styled(FlexX).attrs({ as: 'button', className: 'NickName' })`
    background-color: transparent;
    color: ${Color.Empty};
    &:hover {
        text-decoration: underline;
    }
`;

const ViewCoount = styled(FlexX).attrs({ as: 'span', className: 'ViewCount' })`
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

const StreamInformationForStatic = styled(FlexY)`
    position: relative;
    margin-top: 11px;
    min-height: 107px;
    .StreamTitle {
        margin-left: 50px;
        max-height: unset;
        font-weight: 400;
        color: ${Palette.Gray1};
    }
    .Details {
        margin-left: 50px;
        margin-top: 6px;
    }
    .NickName {
        color: ${Color.Primary};
    }
    .ViewCount,
    span {
        color: ${Color.Secondary};
    }
`;
