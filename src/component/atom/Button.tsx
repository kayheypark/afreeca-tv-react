import styled from 'styled-components';
import FlexX from 'component/atom/FlexX';

const Button = styled(FlexX).attrs({ as: 'button' })`
    background-position: center center;
    background-size: 22px 22px;
    background-color: transparent;
    background-repeat: no-repeat;
    font-size: 0;
    padding: 0;
    border: 0;
    width: 34px;
    height: 34px;
    cursor: pointer;
`;

export default Button;
