import { useState } from 'react';
import styled from 'styled-components';
import FlexX from 'component/parts/FlexX';
import FlexY from 'component/parts/FlexY';

const GlobalSearch = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');

    const handleClcikRemoveKeyword = () => {
        setKeyword('');
    };

    return (
        <Wrapper>
            <InputWrapper>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                />
                <button type="button" onClick={handleClcikRemoveKeyword}>
                    검색어 지우기
                </button>
                <button
                    type="button"
                    onClick={() => {
                        console.info(keyword);
                    }}
                >
                    검색
                </button>
            </InputWrapper>
            {isActive && <div>최근검색어, 실시간인기검색어, 개인화추천검색어</div>}
        </Wrapper>
    );
};

export default GlobalSearch;

const Wrapper = styled(FlexY).attrs({ as: 'div' })``;
const InputWrapper = styled(FlexX).attrs({ as: 'div' })`
    border: 1px solid #4279ff;
    border-radius: 36px;
    height: 34px;
    padding: 0 34px 0 17px;
    align-items: center;
    input {
        border: 0;
        height: 80%;
        font-size: 15px;
    }
`;
