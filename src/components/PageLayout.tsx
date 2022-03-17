import { Link } from 'wouter';
import Layout from './Layout';

interface Props {
  children: any;
  title: string;
}

const PageLayout = ({ children, title }: Props) => {
  document.title = `${title} - Drawon`;

  const resetTitle = () => (document.title = 'Drawon');

  return (
    <Layout>
      <div className='flex order-1 text-6xl'>
        <Link
          href='/'
          className='p-1 px-[0.45rem] border-4 border-black rounded-2xl hover:bg-gray-200 text-5xl absolute no-link-style'
          onClick={resetTitle}>
          &larr;
        </Link>
        <div className='my-0 mx-auto relative text-center'>{children}</div>
      </div>
    </Layout>
  );
};

export default PageLayout;
