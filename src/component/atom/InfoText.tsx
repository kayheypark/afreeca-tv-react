import { Color, ColorUI } from 'style/variable/color';
import styled from 'styled-components';
import FlexX from './FlexX';

const InfoText = styled(FlexX).attrs({ as: 'p' })`
    padding: 37px 0;
    justify-content: center;
    color: ${ColorUI.Text};
    font-size: 14px;
    em {
        color: ${Color.Primary};
    }
`;

export default InfoText;
