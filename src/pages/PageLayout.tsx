type Props = { children: any; title: string };

const PageLayout = ({ children, title }: Props) => {
  document.title = `${title} - Drawon`;

  return <>{children}</>;
};

export default PageLayout;
