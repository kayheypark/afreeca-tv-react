import AfreecaTVLogo from 'asset/logo.svg';
import FlexX from 'component/atom/FlexX';
import FlexY from 'component/atom/FlexY';
import Input from 'component/atom/Input';
import { useState } from 'react';
import { Color, Palette } from 'style/variable/color';
import styled from 'styled-components';

const Login = () => {
    const [isCheckedMaintainLogin, setIsCheckedMaintainLogin] = useState<boolean>(false);
    const [isCheckedSaveId, setIsCheckedSaveId] = useState<boolean>(false);

    const [id, setId] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);

    const handleClickCheckbox = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter((prev) => !prev);
    };

    const handleSubmit = () => {
        const paylaod = {
            id: id,
            password: password,
            isCheckedMaintainLogin: isCheckedMaintainLogin,
            isCheckedSaveId: isCheckedSaveId,
        };
        console.info('paylaod', paylaod);
    };

    return (
        <Wrapper>
            <Logo>
                <a href="/">afreeca tv</a>
            </Logo>
            <Display>로그인 후 이용하실 수 있습니다.</Display>
            <FlexY style={{ rowGap: '10px', width: '100%' }}>
                <Input type="text" defaultValue={id} placeholder="아이디" onChange={(e) => setId(e?.target?.value)} />
                <Input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e?.target?.value)} />
                <LoginButton onClick={handleSubmit}>로그인</LoginButton>
            </FlexY>
            <div>
                <input
                    type="checkbox"
                    id="maintainLogin"
                    defaultChecked={isCheckedMaintainLogin}
                    onClick={() => handleClickCheckbox(setIsCheckedMaintainLogin)}
                />
                <label htmlFor="maintainLogin">로그인 상태 유지</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="saveId"
                    defaultChecked={isCheckedSaveId}
                    onClick={() => handleClickCheckbox(setIsCheckedSaveId)}
                />
                <label htmlFor="saveId">아이디 저장</label>
            </div>
            <a href="#">도움말</a>
            <ul>
                <li>
                    <a href="">아이디 찾기</a>
                </li>
                <li>
                    <a href="">비밀번호 찾기</a>
                </li>
                <li>
                    <a href="">회원가입</a>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Login;

const Logo = styled(FlexX).attrs({ as: 'h1' })`
    a {
        background-image: ${`url(${AfreecaTVLogo})`};
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 266px;
        height: 45px;
        color: transparent;
        font-size: 0;
    }
`;

const Wrapper = styled(FlexY)`
    width: 340px;
    margin: 0 auto;
    padding-top: 125px;
    align-items: center;
`;

const Display = styled.p`
    padding: 27px 0;
    font-size: 18px;
    color: ${Palette.BlueDeep};
    letter-spacing: -1px;
`;

const LoginButton = styled.button`
    color: ${Color.Empty};
    background-color: ${Palette.Blue_2e6afd};
    height: 50px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
    border-radius: 3px;
`;
