import cn from "classnames";

type Props = {
  type: 5 | 10 | 14 | 20 | 24 | 28 | 32 | 40 | 52 | 60;
};

const Space: React.FC<Props> = ({ type }) => {
  return (
    <div
      className={cn({
        ["my-5"]: type === 5,
        ["my-10"]: type === 10,
        ["my-14"]: type === 14,
        ["my-20"]: type === 20,
        ["my-24"]: type === 24,
        ["my-28"]: type === 28,
        ["my-32"]: type === 32,
        ["my-40"]: type === 40,
        ["my-52"]: type === 52,
        ["my-60"]: type === 60,
      })}
    />
  );
};

export default Space;
