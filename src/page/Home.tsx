import styled from 'styled-components';

const Home = () => {
    return (
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
            <div>
                <div>사이드바</div>
                <main>메인 컨텐츠</main>
            </div>
        </>
    );
};

export default Home;

const Header = styled.header``;
