import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  console.log("App Rendered");
  return (
    <>
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={0} />
    </>
  );
}

export default App;
