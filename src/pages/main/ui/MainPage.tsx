import { LatestNews, NewsByFilters } from '@/widgets/news';

const MainPage = () => {
  return (
    <main className='grid grid-cols-2 gap-5'>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default MainPage;
