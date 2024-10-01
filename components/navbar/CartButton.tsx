import Link from 'next/link';
import { Button } from '../ui/button';
import { FaShoppingCart } from 'react-icons/fa';

function CartButton() {
  // temp
  const numItemsInCart = 5;
  return (
    <Button
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/cart'>
        <FaShoppingCart />
        <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center text-sm'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
