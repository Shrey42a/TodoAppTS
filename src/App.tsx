import TodoPage from './TodoPage';

  function App() {
	const path = window.location.pathname;

	return (
		<>
      {path === '/' && <TodoPage localStorage={localStorage}></TodoPage>}
		</>
	);
}
export default App
