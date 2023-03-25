import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../libs/client";
import { Blog, Data } from "../../types/Types";

type Props = {
  data: Blog;
};
const OneBlog = ({ data }: Props) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <small>created at {data.createdAt}</small>
      <div dangerouslySetInnerHTML={{ __html: `${data.body}` }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Data = await client.get({ endpoint: "all-blog" });
  const pathList = data.contents.map((blog) => {
    return {
      params: { id: blog.id },
    };
  });
  return {
    paths: pathList,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as string;
  const data: Blog = await client.get({ endpoint: "all-blog", contentId: id });
  return {
    props: {
      data: data,
    },
  };
};

export default OneBlog;
