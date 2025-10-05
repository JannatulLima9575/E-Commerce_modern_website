import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import RecommendationSlider from './components/RecommendationSlider';
import BigSales from './components/BigSales';
import NewsSection from './components/NewsSection';

export default function Home() {
  return (
    <section>
      <div>
        <Banner></Banner>
        <RecommendationSlider></RecommendationSlider>
        <ProductSection></ProductSection>
        <NewsSection></NewsSection>
        <BigSales></BigSales>

      </div>
    </section>
  );
}
