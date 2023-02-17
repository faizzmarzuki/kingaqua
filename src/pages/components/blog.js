import BlogCard from "./blogCard";

export default function Blog() {
  return (
    <div className="bg-white py-10">
      <h1 className="text-center font-bold text-5xl pb-10">What's News</h1>
      <div className="flex flex-row gap-5 justify-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
