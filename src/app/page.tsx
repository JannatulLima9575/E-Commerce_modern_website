import Banner from './components/Banner';
import ProductSection from './components/ProductSection';

export default function Home() {
  return (
    <section>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <ProductSection></ProductSection>
      </div>
    </section>
  );
}
