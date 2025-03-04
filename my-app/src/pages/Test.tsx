import logo from '../logo.svg';
import '../App.css';
import Hello from '../components/Hello';
import { Counter } from '../components/Counter';
import ClickButton from '../components/ClickButton';
import Form from '../components/Form';
import FormWithMultipleInputs from '../components/FormWithMultipleInputs';
import FormWithReducer from '../components/FormWithReducer';
import { CounterProvider } from '../context/CounterContext';
import { FormProvider } from '../context/FormContext';
import { FormPreview } from '../components/FormPreview';

export const Test = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <Hello name="React" />
    <CounterProvider>
      <Counter />
    </CounterProvider>
    <ClickButton />
    <FormProvider>
      <FormWithMultipleInputs />
    <FormPreview />
    </FormProvider>
    <Form />
    <FormWithReducer />
  </div>
  );
};