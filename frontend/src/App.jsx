import Protected from "./components/protected";
import Public from "./components/public";
import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();

  return isLogin ? <Protected /> : <Public />;
}

export default App;