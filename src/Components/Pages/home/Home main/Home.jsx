import ProductsList from '../Home/axios/Service/service.jsx'
import {Categoryitems} from '../Home/Categoryitems/Categoryitem.jsx';
import {Carousel} from '../Home/Carousel/Carousel.jsx';
import Imagecontent from '../Home/ImagesContent/Imagescontent.jsx';
import Products from '../Home/Products/Products.jsx'
import Ourproducts from '../Home/OurProducts/Ourproducts.jsx';
import { Footer } from '../Home/Footer/Footer.jsx';

function Home() {
  return (
    <div className='container-fluid'>
      <div>
      <Categoryitems />
      <Carousel />
      <Imagecontent />
      <Products/>
      <Ourproducts/>
      <ProductsList />
      <Footer/>
      </div>
    </div>
  )
}

export default Home;
