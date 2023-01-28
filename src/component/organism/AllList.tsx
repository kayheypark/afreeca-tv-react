import Grid from 'component/atom/Grid';
import Title from 'component/atom/TItle';
import StreamCard from 'component/morecule/StreamCard';
import { DummyStreamCard } from 'lib/dummy/StreamCard';

const AllList = () => {
    return (
        <section>
            <Title>전체</Title>
            <Grid rowCount={4} gap={20}>
                {DummyStreamCard.map((item) => {
                    return <StreamCard isStatic streamCard={item} />;
                })}
            </Grid>
        </section>
    );
};

export default AllList;
