import FlexY from 'component/parts/FlexY';
import { ColorUI } from 'style/variable/color';
import styled from 'styled-components';

export const GNB = () => {
    return (
        <SideBar>
            <ul>
                <li>홈</li>
                <li>2022 카타르월드컵</li>
                <li>2022 BJ대상</li>
                <li>e스포츠</li>
                <li>VOD</li>
                <li>MY</li>
            </ul>
            <hr />
            <ul>
                <li>샵프리카</li>
                <li>랭킹</li>
                <li>소통센터</li>
                <li>고객센터</li>
                <li>이벤트</li>
            </ul>
        </SideBar>
    );
};

export default GNB;

const SideBar = styled(FlexY).attrs({ as: 'aside' })`
    border-right: 1px solid ${ColorUI.LayoutDivider};
    padding-right: 46px;
    padding-top: 15px;
`;
