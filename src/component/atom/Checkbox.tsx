import { Palette } from 'style/variable/color';
import styled from 'styled-components';
import FlexX from 'component/atom/FlexX';

interface IProps {
    defaultChecked?: boolean;
    onClick?: () => void;
    id?: string;
    label?: string;
}

const Checkbox = ({ defaultChecked, onClick, id, label }: IProps) => {
    return (
        <Wrapper>
            <input type="checkbox" id={id} defaultChecked={defaultChecked} onClick={onClick} />
            <label htmlFor={id}>{label}</label>
        </Wrapper>
    );
};

const Wrapper = styled(FlexX)`
    align-items: center;
    column-gap: 4px;
    cursor: pointer;

    input {
        margin: 0;
        width: 14px;
        height: 14px;
        cursor: inherit;
    }

    label {
        color: #7a7a7a;
        font-size: 14px;
        cursor: inherit;
    }
`;

export default Checkbox;
