import ListSection from 'component/atom/ListSection';
import AdvertisingBanner from 'component/organism/AdvertisingBanner';
import AllList from 'component/organism/AllList';
import MainBanner from 'component/organism/MainBanner';
import RealtimeHotIssue from 'component/organism/RealtimeHotIssue';

const TemplateHome = () => {
    return (
        <>
            <MainBanner />
            <ListSection>
                <AdvertisingBanner />
                <RealtimeHotIssue />
                <AllList />
            </ListSection>
        </>
    );
};

export default TemplateHome;
