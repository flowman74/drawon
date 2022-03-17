import { Link } from 'wouter';

interface Props { children: string; href: string };

const MainMenu = ({ children, href }: Props) => {
  return (
    <>
      <button className='m-2 p-1 hover:border-4 border-black rounded-2xl transition-all'>
        <Link href={href} className='no-link-style'>
          {children}
        </Link>
      </button>
      <br />
    </>
  );
};

export default MainMenu;
