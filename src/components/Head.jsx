import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className='bg-black text-white p-4'>
        <nav className='flex justify-between'>
            <Link to="/">Home</Link>
            <Link to='/cart'>
        <ShoppingCart    />
        </Link>
        </nav>
    </header>
);

export default Header