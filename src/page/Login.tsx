import AfreecaTVLogo from 'asset/logo.svg';
import FlexX from 'component/atom/FlexX';
import { useState } from 'react';
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
        <div>
            <Logo>
                <a href="/">afreeca tv</a>
            </Logo>
            <p>로그인 후 이용하실 수 있습니다.</p>
            <input type="text" defaultValue={id} onChange={(e) => setId(e?.target?.value)} />
            <input type="password" defaultValue={password} onChange={(e) => setPassword(e?.target?.value)} />
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
            <button type="button" onClick={handleSubmit}>
                로그인
            </button>
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
        </div>
    );
};

export default Login;

const Logo = styled(FlexX).attrs({ as: 'h1' })`
    a {
        background-image: ${`url(${AfreecaTVLogo})`};
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 157px;
        height: 50px;
        color: transparent;
        font-size: 0;
    }
`;
