import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import RecommendationSlider from './components/RecommendationSlider';
import BigSales from './components/BigSales';
import NewsSection from './components/NewsSection';
import SelectCategories from './components/SelectCategories';
import DeliverySection from './components/DeliverySection';
import BrandedProduct from './components/BrandedProduct';

export default function Home() {
  return (
    <section>
      <div>
        <Banner></Banner>
        <RecommendationSlider></RecommendationSlider>
        <SelectCategories></SelectCategories>
        <DeliverySection></DeliverySection>
        <ProductSection></ProductSection>
        <NewsSection></NewsSection>
        <BrandedProduct></BrandedProduct>
        <BigSales></BigSales>

      </div>
    </section>
  );
}
