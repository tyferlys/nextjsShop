import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex-shrink-0">
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold">MyStore</p>
          <p className="mt-2">123 Московская</p>
          <p>Москва, Россия 12345</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className={"hover:text-gray-300"}>
                О нас
              </Link>
            </li>
            <li>
              <Link href="/contact" className={"hover:text-gray-300"}>
                Связаться с нами
              </Link>
            </li>
            <li>
              <Link href="/faq" className={"hover:text-gray-300"}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-2 text-center">
          <p>&copy; MyStore 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
