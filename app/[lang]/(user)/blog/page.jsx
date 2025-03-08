import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Pop-punk is back in fashion",
      imageUrl: "/placeholder.svg?width=600&height=400",
      label: "Fashion",
      description:
        "And while these alternatives are theoretically more animal-friendly, in that they don't actually require animal...",
      date: "Oct 02",
      author: "admin",
    },
    {
      id: 2,
      title: "The Limited Edition Club des Sports Courchevel",
      imageUrl: "/placeholder.svg?width=600&height=400",
      label: "Style",
      description:
        "Explore the exclusive Club des Sports Courchevel collection, blending luxury and athletic inspiration.",
      date: "Oct 15",
      author: "admin",
    },
    {
      id: 3,
      title: "Christine Is A True Style Icon",
      imageUrl: "/placeholder.svg?width=600&height=400",
      label: "Trends",
      description:
        "Discover why Christine is hailed as a style icon, influencing fashion trends worldwide.",
      date: "Nov 01",
      author: "admin",
    },
    {
      id: 4,
      title: "Hello Fashion by Colombian-American",
      imageUrl: "/placeholder.svg?width=600&height=400",
      label: "Inspiration",
      description:
        "Get inspired by the vibrant and unique fashion sense of Colombian-American designers.",
      date: "Nov 10",
      author: "admin",
    },
  ];

  const blogCategories = [
    "Accessories",
    "Bag",
    "Cookware & Kitchen",
    "Decor",
    "Decorate",
    "Denim",
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Effortlessly Blends The Carefree Style",
      imageUrl: "/placeholder.svg?width=100&height=70",
      label: "Accessories",
    },
    {
      id: 2,
      title: "The Limited Edition Club des Sports Courchevel",
      imageUrl: "/placeholder.svg?width=100&height=70",
      label: "Style",
    },
    {
      id: 3,
      title: "Christine Is A True Style Icon",
      imageUrl: "/placeholder.svg?width=100&height=70",
      label: "Fashion",
    },
  ];

  const blogTags = ["Bags", "Fashion", "Style", "Trends"];

  const instagramImages = Array(6).fill(
    "/placeholder.svg?width=100&height=100"
  );

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-5">Blog List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {blogPosts.map((post) => (
            <div key={post.id} className="mb-6 p-4 border rounded-lg shadow-md">
              <Link href={`/blog/${post.id}`}>
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-md mb-3"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    {post.label}
                  </span>
                  <span className="text-gray-500 text-xs">{`${post.author} - ${post.date}`}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.description}</p>
              </Link>
            </div>
          ))}
          <div className="flex justify-center mt-5">
            <div className="join">
              <button className="join-item btn">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Blog Categories</h3>
            <ul>
              {blogCategories.map((category) => (
                <li key={category} className="mb-2">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-primary transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul>
              {recentPosts.map((post) => (
                <li key={post.id} className="mb-4">
                  <Link href="#" className="flex items-center">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      width={70}
                      height={70}
                      className="rounded-md mr-3"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors duration-200">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500">{post.label}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold mb-3">Blog Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogTags.map((tag) => (
                <Link key={tag} href="#" className="btn btn-sm rounded-full">
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 border rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold mb-3">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl || "/placeholder.svg"}
                  alt={`Instagram Post ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogList;
