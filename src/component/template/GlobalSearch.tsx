import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FlexX from 'component/parts/FlexX';
import FlexY from 'component/parts/FlexY';

const GlobalSearch = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [isActive, setIsActive] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');

    const handleClickRemoveKeyword = () => {
        setKeyword('');
    };

    const handleClickOutside = (e: any) => {
        if (!wrapperRef.current?.contains(e.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <Wrapper ref={wrapperRef} isActive={isActive} onClick={() => setIsActive(true)}>
            <InputWrapper>
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <RemoveKeywordButton keyword={keyword} onClick={handleClickRemoveKeyword}>
                    검색어 지우기
                </RemoveKeywordButton>
                <button type="button" onClick={() => console.info(keyword)}>
                    검색
                </button>
            </InputWrapper>
            {isActive && <div>최근검색어, 실시간인기검색어, 개인화추천검색어</div>}
        </Wrapper>
    );
};

export default GlobalSearch;

const Wrapper = styled(FlexY).attrs({ as: 'div' })<{ isActive: boolean }>`
    padding: 12px;
    border: ${(props) => (props.isActive ? '1px solid #ecf0f5' : 'none')};
    box-shadow: ${(props) => (props.isActive ? '0 0 4px #efefef' : 'none')};
`;

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

const RemoveKeywordButton = styled(FlexX).attrs({ as: 'button' })<{ keyword: string }>`
    display: ${(props) => (props.keyword === '' ? 'none' : 'flex')};
`;
