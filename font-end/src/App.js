import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";
import { Container } from "react-bootstrap";
import Banner2 from "./components/Banner2";
function App() {
  const products1 = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    }
  ];
  const products2 = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    }
  ];
  const products3 = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    }
  ];
  const products4 = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    }
  ];
  const products5 = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      price: '36.990.000',
      oldPrice: '38.990.000',
      image: 'https://samcenter.vn/images/thumbs/0005504_tim_550.jpeg'
    }
  ];
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <Product heading="Samsung Galaxy" products ={products1} />  
        <Banner2 image="https://samcenter.vn/images/uploaded/Image%20product/Artboard%201.png" />
        <Product heading="Galaxy Watch" products = {products2}/>
        <Banner2 image="https://samcenter.vn/images/uploaded/Image%20product/Artboard%202.png" />
        <Product heading="Galaxy Tab" products = {products3}/>
        <Product heading="Galaxy Buds" products = {products4}/>
        <Product heading="Phụ kiện" products = {products5}/>

      </Container>
    </div>
  );
}

export default App;
