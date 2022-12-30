import { IMainBanner } from 'lib/model/MainBanner';
import BannerImage1 from 'asset/content/main_swiper_1.png';
import BannerImage2 from 'asset/content/main_swiper_2.png';
import BannerImage3 from 'asset/content/main_swiper_3.png';

export const DummyMainBanner: IMainBanner[] = [
    {
        periodText: '12/19(월) ~ 1/2(월)',
        titleText: '강남좀비',
        subText: '시사회 이벤트\n댓글달고 영화보자!',
        imageURL: BannerImage1,
    },
    {
        periodText: '1/10(화) 오후 2시',
        titleText: '취미가 곧 컨텐츠다',
        subText: '당신의 취미를\n보여주세요!',
        imageURL: BannerImage2,
    },
    {
        periodText: '1/7(토) 저녁 6시',
        titleText: '데니안 Danny’s Day',
        subText: '덴생네컷!\n온라인 관람 티켓 판매 중',
        imageURL: BannerImage3,
    },
];
