import FlexY from 'component/parts/FlexY';
import { NavLink } from 'react-router-dom';
import { ColorUI } from 'style/variable/color';
import styled from 'styled-components';
import IconHome from 'asset/icon/ico_home.svg';
import IconWorldcup from 'asset/icon/ico_worldcup.svg';
import IconCrown from 'asset/icon/ico_crown.svg';
import IconEsports from 'asset/icon/ico_esports.svg';
import IconVideo from 'asset/icon/ico_video.svg';
import IconStar from 'asset/icon/ico_star.svg';

const activeStyle: React.CSSProperties = {
    backgroundColor: ColorUI.GNBActiveBG,
};

export const GNB = () => {
    return (
        <GNBWrapper>
            <MainGNB>
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <NavIcon src={IconHome} />
                            <NavText>홈</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/worldcup2022">
                            <NavIcon src={IconWorldcup} />
                            <NavText>2022 카타르월드컵</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/awards2022">
                            <NavIcon src={IconCrown} />
                            <NavText>2022 BJ대상</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/esports">
                            <NavIcon src={IconEsports} />
                            <NavText>e스포츠</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vod">
                            <NavIcon src={IconVideo} />
                            <NavText>VOD</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mypage" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <NavIcon src={IconStar} />
                            <NavText>MY</NavText>
                        </NavLink>
                    </li>
                </ul>
            </MainGNB>
            <hr />
            <ul>
                <li>샵프리카</li>
                <li>랭킹</li>
                <li>소통센터</li>
                <li>고객센터</li>
                <li>이벤트</li>
            </ul>
        </GNBWrapper>
    );
};

export default GNB;

const GNBWrapper = styled(FlexY).attrs({ as: 'aside' })`
    border-right: 1px solid ${ColorUI.LayoutDivider};
    padding: 15px 13px 30px 12px;
    width: 210px;
`;

const MainGNB = styled(FlexY).attrs({ as: 'nav' })`
    a {
        display: flex;
        align-items: center;
        height: 38px;
        border-radius: 6px;
        font-size: 15px;
        column-gap: 10px;
        padding-left: 16px;
    }
    ul {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
`;

const NavIcon = styled.div<{ src: React.FunctionComponent<React.SVGAttributes<SVGElement>> }>`
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 22px;
    height: 22px;
`;

const NavText = styled.h2`
    font-weight: normal;
    font-size: 16px;
`;
