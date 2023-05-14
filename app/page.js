import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Store!</h1>
      <p className="mb-8">
        We offer a wide selection of products to meet all of your needs. Browse
        our collections below to get started.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">
          <Link
            href="/category1"
            className="text-xl font-bold hover:text-gray-600"
          >
            Category 1
          </Link>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
            mauris nec arcu tempus sagittis id quis tellus. In posuere semper
            libero, eget eleifend massa congue a.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <Link
            href="/category2"
            className="text-xl font-bold hover:text-gray-600"
          >
            Category 2
          </Link>
          <p className="mt-2">
            Nam vel ex eu nunc varius bibendum. Sed fermentum vehicula diam, nec
            aliquam dolor faucibus eget. Sed dignissim ex eu finibus placerat.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <Link
            href="/category3"
            className="text-xl font-bold hover:text-gray-600"
          >
            Category 3
          </Link>
          <p className="mt-2">
            Nulla facilisi. Pellentesque faucibus metus a mauris bibendum, sed
            rhoncus lacus commodo. Aenean eget nunc ac massa commodo commodo sed
            ut turpis.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <Link
            href="/category4"
            className="text-xl font-bold hover:text-gray-600"
          >
            Category 4
          </Link>
          <p className="mt-2">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Morbi vel ex ut tortor bibendum laoreet ac
            non purus.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <Link
            href="/category5"
            className="text-xl font-bold hover:text-gray-600"
          >
            Category 5
          </Link>
          <p className="mt-2">
            Donec eget faucibus nibh. Duis eget eleifend ipsum, at ultricies
            enim. Etiam id fringilla magna. Aenean consectetur elit vel ex
            pharetra, id rutrum dolor feugiat.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <Link
            href="/category6"
            className="text-xl font-bold hover:text-gray-600"
          >
            Category 6
          </Link>
          <p className="mt-2">
            Vivamus sit amet est a quam gravida sodales. Nam non tellus non nisi
            posuere consequat eget vel nisl. Nullam lacinia varius risus in
            tincidunt. Sed eget euismod lacus.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
