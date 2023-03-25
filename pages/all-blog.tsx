import { GetStaticProps } from "next";
import { client } from "../libs/client";
import Link from "next/link";
import { Blog, Data } from "../types/Types";

type Props = {
  data: Blog[];
};

const AllBlog = ({ data }: Props) => {
  return (
    <div className="m-10">
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data: Data = await client.get({ endpoint: "all-blog" });
  return {
    props: {
      data: data.contents,
    },
  };
};

export default AllBlog;
