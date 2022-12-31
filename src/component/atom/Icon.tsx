import styled from 'styled-components';

const Icon = styled.div.attrs({ className: 'Icon' })<{ src: string }>`
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 22px;
    height: 22px;
`;

export default Icon;
