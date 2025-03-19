import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { NewsList } from '@/features/news';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className='rounded-lg bg-[#f9f9f9] p-5 shadow-md dark:bg-[#272727]'>
      <NewsList type='item' direction='row' news={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
