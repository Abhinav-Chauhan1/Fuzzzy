import Chat from './chat';
import NewNavbar from '../../components/navbar/NewNavbar'

const Home = () => {
  return (
    <main className="flex h-screen overflow-hidden flex-col">
      <NewNavbar />
      <Chat />
    </main>
  );
};
export default Home;
