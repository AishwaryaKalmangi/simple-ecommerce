import Link from "next/link";

const Header: React.FC = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
