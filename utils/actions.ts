import { redirect } from 'next/navigation';
import db from './db';

// fetch featured products
export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

// fetch all products and filter it when it is searched
export const fetchAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        {
          name: { contains: search, mode: 'insensitive' },
        },
        {
          company: { contains: search, mode: 'insensitive' },
        },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// fetch single product
export const fetchSingleProduct = async ({
  productId,
}: {
  productId: string;
}) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect('/products');
  return product;
};
