import Image from "next/image";

type Props = {
  imgUrl1?: string;
  altText1?: string;
  title1?: string;
  text1?: string;
  imgUrl2?: string;
  altText2?: string;
  title2?: string;
  text2?: string;
  imgUrl3?: string;
  altText3?: string;
  title3?: string;
  text3?: string;
};

const FloatImage: React.FC<Props> = ({
  imgUrl1 = "/aaa/bbb/ccc.svg",
  altText1 = "",
  title1 = "ペンギン",
  text1 = "ペンギンズの経験を積みましょう。",
  imgUrl2 = "/aaa/bbb/ddd.svg",
  altText2 = "",
  title2 = "ミニオン",
  text2 = "安価な値段でバナナを提供しています。",
  imgUrl3 = "/aaa/bbb/ddd.svg",
  altText3 = "",
  title3 = "オタククラブ",
  text3 = "現役オタクのみで構成されているため高いレベルの技術を教えることができます。",
}) => {
  return (
    <div className="mx-auto max-w-6xl my-20">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="mr-5">
          <div className="shadow-xl py-4 px-8 h-full">
            <Image width={700} height={700} src={imgUrl1} alt={altText1} />
            <h4 className="mb-2 mt-3 text-xl font-bold text-gray-800">{title1}</h4>
            <p className="text-lg text-gray-700">{text1}</p>
          </div>
        </div>
        <div className="mx-2.5">
          <div className="shadow-xl py-4 px-8 h-full">
            <Image width={700} height={700} src={imgUrl2} alt={altText2} />
            <h4 className="mb-2 mt-3 text-xl font-bold text-gray-800">{title2}</h4>
            <p className="text-lg text-gray-700">{text2}</p>
          </div>
        </div>
        <div className="ml-5">
          <div className="shadow-xl py-4 px-8 h-full">
            <Image width={700} height={700} src={imgUrl3} alt={altText3} />
            <h4 className="mb-2 mt-3 text-xl font-bold text-gray-800">{title3}</h4>
            <p className="text-lg text-gray-700">{text3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatImage;
