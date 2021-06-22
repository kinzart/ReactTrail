import { Button1 } from './components/Button1'
import { Button2 } from './components/Button2'
import { Home } from './pages/Home';



function App() {

  return (

    <div>
      <Home />
      <h1>Hello, I am the App.tsx</h1>
      <Button1 txtId={1} text="Botão1" />
      <Button2 />

    </div>
  );
}

export default App;
