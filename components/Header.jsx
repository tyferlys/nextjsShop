import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <Link href="/" className={"hover:text-gray-300"}>
            MyStore
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/products" className={"hover:text-gray-300"}>
                Продукты
              </Link>
            </li>
            <li>
              <Link href="/cart" className={"hover:text-gray-300"}>
                Корзина
              </Link>
            </li>
            <li>
              <Link href="/login" className={"hover:text-gray-300"}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
