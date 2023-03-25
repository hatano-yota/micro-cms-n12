import Image from "next/image";
import cn from "classnames";

//  <ImageWithText
//    type="left"
//    title="タイトル"
//    text="ダミーテキスト"
//    imgUrl="/example.png"
//    width={900}
//    height={600}
//  />

type Props = {
  type: "left" | "right";
  title: string;
  text: string;
  imgUrl: string;
  altText: string;
  width: number;
  height: number;
};

const ImageWithText: React.FC<Props> = ({ type, title, text, imgUrl, altText, width, height }) => {
  return (
    <div className="max-w-6xl mx-auto p-2 my-10  md:p-6 md:my-20">
      <div
        className={cn({
          ["flex flex-col md:flex-row"]: type === "left",
          ["flex flex-col md:flex-row-reverse"]: type === "right",
        })}
      >
        <div className="md:w-1/2">
          <Image src={imgUrl} width={width} height={height} alt={altText} />
        </div>
        <div className="flex items-center md:w-1/2">
          <div className="p-1 md:p-10">
            <h2 className="my-1 md:my-4 font-bold text-lg md:text-2xl">{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
