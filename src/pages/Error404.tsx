import { Link } from 'wouter';

const Error404 = () => {
  return (
    <div className='flex flex-col space-y-8 text-center'>
      <h1 className='text-7xl font-bold'>404 - Not Found</h1>
      <p className='text-5xl'>Couldn't find the page you were looking for.</p>
      <Link href='/' className='text-5xl link'>
        &larr; Go back to home
      </Link>
    </div>
  );
};

export default Error404;
