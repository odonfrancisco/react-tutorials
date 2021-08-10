import React, {useState} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

// Context has two portions to it. The provider, and consumer
// Provider allews us to pass out a value
// Consumer consumes that value
export const ThemeContext = React.createContext();

function App() {
  console.log("App Rendered");
  const [theme, setTheme] = useState('green');
  return (
    // Provider wraps all itn child code to be able to consume the context
    // 'value' must always be called 'value'
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red';
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
