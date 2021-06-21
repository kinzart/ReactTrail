import { Button1 } from './components/Button1'
import { Button2 } from './components/Button2'



function App() {

  return (

    <div>

      <h1>Hello, I am the App.tsx</h1>
      <Button1 txtId={1} text="Botão1" />
      <Button2 />

    </div>
  );
}

export default App;
