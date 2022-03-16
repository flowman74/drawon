import MainMenuBtn from '../components/MainMenuBtn';

const MainMenu = () => {
  return (
    <div className='text-7xl font-bold text-center'>
      <h1>Drawon</h1>
      <ul className='text-5xl'>
        <MainMenuBtn href='/join'>Join Game</MainMenuBtn>
        <MainMenuBtn href='/create'>Create Game</MainMenuBtn>
        <MainMenuBtn href='/settings'>Settings</MainMenuBtn>
        <MainMenuBtn href='/about'>About</MainMenuBtn>
      </ul>
    </div>
  );
};

export default MainMenu;
