import Image from "next/image";
import Link from "next/link";

const BlogDetail = ({ params }) => {
  const { id } = params;

  const relatedArticles = [
    {
      id: 1,
      title: "Pop-punk is back in fashion",
      imageUrl: "/placeholder.svg?width=400&height=300",
      label: "Fashion",
    },
    {
      id: 2,
      title: "The next generation of leather alternatives",
      imageUrl: "/placeholder.svg?width=400&height=300",
      label: "Sustainability",
    },
    {
      id: 3,
      title: "An Exclusive Clothing Collaboration",
      imageUrl: "/placeholder.svg?width=400&height=300",
      label: "Collaboration",
    },
  ];

  return (
    <main className="container mx-auto py-10">
      <article className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-5">
          Something About This Style Of Jeans
        </h1>
        <div className="text-center text-gray-500 mb-4">
          By <span className="font-semibold">admin</span> on{" "}
          <span className="font-semibold">Oct 02</span>
        </div>
        <Image
          src="/placeholder.svg?width=1200&height=600"
          alt="Blog Detail"
          width={1200}
          height={600}
          className="rounded-lg shadow-md mb-6"
        />

        <div className="prose prose-lg mx-auto">
          <blockquote className="border-l-4 border-primary pl-5 italic mb-6">
            Typography is the work of typesetters, compositors, typographers,
            graphic designers, art directors, manga artists, comic book artists,
            graffiti artists, and now—anyone who arranges words, letters,
            numbers, and symbols for publication, display, or distribution—from
            clerical workers and newsletter writers to anyone self-publishing
            materials.
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Image
              src="/placeholder.svg?width=600&height=400"
              alt="Blog Image 1"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/placeholder.svg?width=600&height=400"
              alt="Blog Image 2"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          <p>
            Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum
            vitae, vestibulum eu, molestie vel, lacus. Sed libero. Phasellus
            tempus. Etiam feugiat lorem non metus Maecenas vestibulum mollis
            diam. Pellentesque auctor neque nec urna. Pellentesque commodo eros
            a enim. Etiam sit amet orci eget eros faucibus tincidunt. Vestibulum
            purus quam, scelerisque ut, mollis sed, nonummy id, metus.In hac
            habitasse platea dictumst. Etiam ultricies nisi vel augue.
            Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla
            eleifend augue, ac auctor orci leo non est. Quisque rutrum. Duis
            leo.
          </p>
          <p>
            Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum
            vitae, vestibulum eu, molestie vel, lacus. Sed libero. Phasellus
            tempus. Etiam feugiat lorem non metus. Morbi mattis ullamcorper
            velit. Donec sodales sagittis magna. Curabitur a felis in nunc
            fringilla tristique. Quisque malesuada placerat nisl. Phasellus
            gravida semper nisi.
          </p>
          <p>
            Curabitur blandit mollis lacus. Phasellus nec sem in justo
            pellentesque facilisis. Mauris turpis nunc, blandit et, volutpat
            molestie, porta ut, ligula. Fusce ac felis sit amet ligula pharetra
            condimentum. Integer tincidunt.
          </p>
          <p>
            Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna.
            Pellentesque commodo eros a enim. Etiam sit amet orci eget eros
            faucibus tincidunt. Vestibulum purus quam, scelerisque ut, mollis
            sed, nonummy id, metus.In hac habitasse platea dictumst. Etiam
            ultricies nisi vel augue. Pellentesque egestas, neque sit amet
            convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo
            non est. Quisque rutrum. Duis leo.
          </p>
        </div>

        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <div className="flex items-center">
            <span className="mr-2">Tags:</span>
            <div className="flex flex-wrap gap-2">
              <Link href="#" className="btn btn-sm rounded-full">
                Accessories
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Share:</span>
            <div className="flex gap-2">
              <Link href="#" className="btn btn-circle btn-sm">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="#" className="btn btn-circle btn-sm">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="#" className="btn btn-circle btn-sm">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 border-t pt-4">
          <Link href="#" className="btn btn-ghost">
            ← Previous Article
          </Link>
          <Link href="#" className="btn btn-ghost">
            Next Article →
          </Link>
        </div>
      </article>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <div
              key={article.id}
              className="border rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={300}
                className="object-cover h-48 w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.label}</p>
                <Link href="#" className="btn btn-primary mt-3">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
