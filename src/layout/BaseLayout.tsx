import styled from 'styled-components';

interface IProps {
    children: JSX.Element;
}

const BaseLayout = ({ children }: IProps) => (
    <>
        <Header>
            <div>
                <h1>
                    <a href="/">afreeca tv</a>
                </h1>
            </div>
            <div>
                <div>검색창</div>
            </div>
            <div>
                <button type="button">방송하기</button>
                <button type="button">알림</button>
                <button type="button">로그인</button>
                <button type="button">설정</button>
                <button type="button">더보기</button>
            </div>
        </Header>
        <View>
            <div>
                <ul>
                    <li>홈</li>
                    <li>2022 카타르월드컵</li>
                    <li>2022 BJ대상</li>
                    <li>e스포츠</li>
                    <li>VOD</li>
                    <li>MY</li>
                </ul>
                <hr />
                <ul>
                    <li>샵프리카</li>
                    <li>랭킹</li>
                    <li>소통센터</li>
                    <li>고객센터</li>
                    <li>이벤트</li>
                </ul>
            </div>
            <main>{children}</main>
        </View>
    </>
);

export default BaseLayout;

const Header = styled.header`
    display: flex;
`;

const View = styled.div`
    display: flex;
`;
