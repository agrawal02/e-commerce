import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Product from './components/Product';
import FeaturedProduct from './components/FeaturedProduct';
import Blog from './components/Blog';
import NewsLetter from "./components/NewsLetter"
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Product/>
      <FeaturedProduct/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
