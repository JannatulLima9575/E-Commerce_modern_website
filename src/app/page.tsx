import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import RecommendationSlider from './components/RecommendationSlider';
import BigSales from './components/BigSales';

export default function Home() {
  return (
    <section>
      <div>
        <Banner></Banner>
        <RecommendationSlider></RecommendationSlider>
      </div>
      <div>
        <ProductSection></ProductSection>
        <BigSales></BigSales>

      </div>
    </section>
  );
}
