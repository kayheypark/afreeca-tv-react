import { Palette } from 'style/variable/color';
import styled from 'styled-components';

interface IProps {
    type?: string;
    placeholder?: string;
    defaultValue?: string;
    onChange?(e: any): void;
}

const Input = ({ type = 'text', placeholder = '', defaultValue = '', onChange }: IProps) => {
    return <Component type={type} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} />;
};

const Component = styled.input`
    border: 1px solid ${Palette.Gray_bbbbbb};
    background-color: transparent;
    height: 48px;
    line-height: 60px;
    padding-left: 13px;
    width: 100%;
    border-radius: 3px;
    font-size: 14px;
    &:focus {
        border-color: #2e6afd;
    }
`;

export default Input;
