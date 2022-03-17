interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return <div className='flex flex-col mx-auto my-0 w-1/3'>{children}</div>;
};

export default Layout;
