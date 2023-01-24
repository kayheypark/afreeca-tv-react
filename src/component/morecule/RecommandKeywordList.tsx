import FlexX from 'component/atom/FlexX';
import InfoText from 'component/atom/InfoText';
import { Color, ColorUI } from 'style/variable/color';
import styled from 'styled-components';

interface IProps {
    items?: string[];
}

const RecommandKeywordList = ({ items }: IProps) => {
    return (
        <>
            <div>
                {!items ? (
                    <InfoText>개인화 추천 검색어가 없습니다.</InfoText>
                ) : (
                    <ul>
                        {items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default RecommandKeywordList;
