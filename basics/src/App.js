import Greeting from './Greeting'
import Home from './Home'
import Contact from './Contact'
import About from './About'

function App() {
  return (
    <div>
    <h1>Hello from React JS</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
    <Home name = {'Pooja'}  age = {24}/>
    <About />
    <Contact />
    </div>
  );
}
export default App;