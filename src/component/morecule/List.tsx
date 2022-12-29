import styled from 'styled-components';
import FlexX from 'component/atom/FlexX';
import FlexY from 'component/atom/FlexY';
import { Palette } from 'style/variable/color';

export const List = styled(FlexY).attrs({ as: 'ol' })``;

export const Item = styled(FlexX).attrs({ as: 'li' })`
    a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 33px;
        padding-left: 15px;
        &:hover {
            background-color: ${Palette.BlueOC};
        }
    }
`;
