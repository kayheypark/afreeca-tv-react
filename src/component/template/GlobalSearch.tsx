import { useRef, useState } from 'react';
import styled from 'styled-components';
import FlexX from 'component/parts/FlexX';
import FlexY from 'component/parts/FlexY';
import { Color } from 'style/variable/color';
import useBoxblur from 'hook/useBoxblur';
import icoSearch from 'asset/icon/ico_search.svg';
import Button from 'component/parts/Button';

const GlobalSearch = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [isActive, setIsActive] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');

    const handleClickRemoveKeyword = () => {
        setKeyword('');
    };

    useBoxblur({
        wrapperRef: wrapperRef,
        setState: setIsActive,
    });

    return (
        <Wrapper ref={wrapperRef} isActive={isActive} onClick={() => setIsActive(true)}>
            <InputWrapper>
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <RemoveKeywordButton keyword={keyword} onClick={handleClickRemoveKeyword}>
                    검색어 지우기
                </RemoveKeywordButton>
                <SubmitButton onClick={() => console.info(keyword)}>검색</SubmitButton>
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
    position: relative;
    border: 1px solid ${Color.Blue};
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

const SubmitButton = styled(Button)`
    position: absolute;
    right: 10px;
    background-image: ${`url(${icoSearch})`};
`;
