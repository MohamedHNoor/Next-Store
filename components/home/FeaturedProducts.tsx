import { fetchFeaturedProducts } from '@/utils/actions';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';
import EmptyList from '../global/EmptyList';

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList heading='No Products' />;

  return (
    <section className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
