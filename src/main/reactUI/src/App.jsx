import "./App.css";
import AllArticles from "./components/AllArticles/AllArticles";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavBar />
        <AllArticles />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
