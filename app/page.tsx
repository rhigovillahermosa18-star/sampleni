import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center py-16 px-6 bg-white dark:bg-black">
        
        
        <header className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            VapeShop
          </h1>
          <nav className="flex gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Flavors</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        
        <section
          className="relative w-full min-h-[80vh] flex items-center bg-cover bg-center mt-16 rounded-2xl overflow-hidden"
          style={{ backgroundImage: "url('/vape-hero.png')" }}
        >
          
          <div className="absolute inset-0 bg-black/60"></div>

          
          <div className="relative z-10 max-w-2xl px-8 py-20 text-white">
            <h2 className="text-5xl font-bold leading-tight">
              Premium Vapes. <br /> Ultimate Experience.
            </h2>

            <p className="mt-6 text-lg text-zinc-200">
              Discover top-quality vape devices, premium e-liquids, and the
              latest accessories. Elevate your vaping journey with VapeShop.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-medium"
              >
                Shop Now
              </a>

              <a
                href="#"
                className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition font-medium"
              >
                Explore Flavors
              </a>
            </div>
          </div>
        </section>

        
        <section className="w-full mt-24">
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-8 text-center">
            Featured Products
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Vape X Pro",
                price: "₱ 1,000.00",
                img: "/product1.png",
              },
              {
                name: "CloudMax 3000",
                price: "₱ 799.00",
                img: "/product2.png",
              },
              {
                name: "Yakult Ice Black",
                price: "₱ 499.00",
                img: "/yakult.png",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 object-contain"
                />
                <h4 className="text-lg font-semibold text-black dark:text-white">
                  {product.name}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {product.price}
                </p>
                <button className="mt-4 px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-80 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="w-full mt-24 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} VapeShop. All rights reserved.
        </footer>
      </main>
    </div>
  );
}