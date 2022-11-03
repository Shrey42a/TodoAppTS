import TodoPage from './TodoPage';
import Upgrade from "./Upgrade";
import Card from "./Card";

function App() {
  const path = window.location.pathname;

  return (
    <>
      {path === '/' && <TodoPage></TodoPage>}
      {path === '/upgrade' && <Upgrade></Upgrade>}
      {path === '/card' && <Card></Card>}
    </>
  );
}
export default App
