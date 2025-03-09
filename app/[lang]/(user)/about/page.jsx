import Image from "next/image";

const AboutUs = () => {
  return (
    <main className="overflow-hidden">
      {/* Banner */}
      <section className="relative">
        <Image
          src="/images/slider/about-banner-01.jpg"
          alt="About Us Banner"
          width={1920}
          height={600}
          className="w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <div className="text-2xl md:text-4xl font-semibold">
            Empowering women to achieve <br className="hidden xl:block" />{" "}
            fitness goals with style
          </div>
        </div>
      </section>

      {/* We are Ecomus */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">We are Ecomus</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our classic women's clothing store, where we believe{" "}
              <br className="hidden xl:block" />
              that timeless style never goes out of fashion. Our collection
              features classic <br className="hidden xl:block" />
              pieces that are both stylish and versatile, perfect for building a{" "}
              <br className="hidden xl:block" />
              wardrobe that will last for years.
            </p>
          </div>
        </div>
      </section>

      {/* Line */}
      <div className="container">
        <div className="border-b border-gray-200"></div>
      </div>

      {/* Established - 1995 */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/collections/collection-69.jpg"
                alt="Established 1995"
                width={768}
                height={512}
                className="w-full object-cover rounded-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">
                Established - 1995
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ecomus was founded in 1995 by Jane Smith, a fashion lover with a{" "}
                <br className="hidden xl:block" />
                passion for timeless style. Jane had always been drawn to
                classic <br className="hidden xl:block" />
                pieces that could be worn season after season, and she believed
                that <br className="hidden xl:block" />
                there was a gap in the market for a store that focused solely on
                classic <br className="hidden xl:block" />
                women's clothing. She opened the first store in a small town in
                New <br className="hidden xl:block" />
                England, where it quickly became a local favorite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower people through sustainable fashion.{" "}
                <br className="hidden xl:block" />
                We want everyone to look and feel good, while also doing our
                part to <br className="hidden xl:block" />
                help the environment. We believe that fashion should be stylish,{" "}
                <br className="hidden xl:block" />
                affordable and accessible to everyone. Body positivity and
                inclusivity <br className="hidden xl:block" />
                are values that are at the heart of our brand.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/images/collections/collection-71.jpg"
                alt="Collection 71"
                width={384}
                height={256}
                className="w-full object-cover rounded-md"
              />
              <Image
                src="/images/collections/collection-70.jpg"
                alt="Collection 70"
                width={384}
                height={256}
                className="w-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality is our priority */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Quality is our priority
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our talented stylists have put together outfits that are perfect
              for the season.
              <br />
              They've variety of ways to inspire your next fashion-forward look.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-2">
                <i className="icon-materials"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                High-Quality Materials
              </h4>
              <p className="text-gray-700">
                Crafted with precision and excellence, our activewear is
                meticulously engineered using premium materials to ensure
                unmatched comfort and durability.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-2">
                <i className="icon-design"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Laconic Design</h4>
              <p className="text-gray-700">
                Simplicity refined. Our activewear embodies the essence of
                minimalistic design, delivering effortless style that speaks
                volumes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-2">
                <i className="icon-sizes"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Various Sizes</h4>
              <p className="text-gray-700">
                Designed for every body and anyone, our activewear embraces
                diversity with a wide range of sizes and shapes, celebrating the
                beauty of individuality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our customer’s reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="text-yellow-500 mb-2">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
              </div>
              <p className="text-gray-700 mb-4">
                "I have been shopping with this web fashion site for over a year
                now and I can confidently say it is the best online fashion site
                out there. The shipping is always fast and the customer service
                team is friendly and helpful. I highly recommend this site to
                anyone looking for affordable clothing."
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/item/tets3.jpg"
                  alt="Robert Smith"
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Robert Smith</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="text-yellow-500 mb-2">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
              </div>
              <p className="text-gray-700 mb-4">
                "I have been shopping with this web fashion site for over a year
                now and I can confidently say it is the best online fashion site
                out there. The shipping is always fast and the customer service
                team is friendly and helpful. I highly recommend this site to
                anyone looking for affordable clothing."
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/item/tets4.jpg"
                  alt="Jenifer Unix"
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Jenifer Unix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Gram */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Shop Gram</h2>
            <p className="text-gray-700">
              Inspire and let yourself be inspired, from one unique fashion to
              another.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/shop/gallery/gallery-7.jpg"
                alt="Gallery 7"
                width={256}
                height={256}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/shop/gallery/gallery-3.jpg"
                alt="Gallery 3"
                width={256}
                height={256}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/shop/gallery/gallery-5.jpg"
                alt="Gallery 5"
                width={256}
                height={256}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/shop/gallery/gallery-8.jpg"
                alt="Gallery 8"
                width={256}
                height={256}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/shop/gallery/gallery-6.jpg"
                alt="Gallery 6"
                width={256}
                height={256}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
