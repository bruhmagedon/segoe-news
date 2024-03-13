import { DirectionType, SkeletonType } from "../../pages/interfaces";

interface IProps {
  count?: number;
  type?: SkeletonType;
  direction?: DirectionType;
}

const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column",
}: IProps) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column"
              ? "flex flex-col gap-[12px] "
              : "banners-list w-full gap-[12px]"
          }
        >
          {[...Array(count)].map((_, index) => {
            return (
              <li
                key={index}
                className={
                  type === "banner"
                    ? "pt-[100%] relative skeleton"
                    : "h-[80px] skeleton"
                }
              ></li>
            );
          })}
        </ul>
      ) : (
        <li
          className={
            type === "banner"
              ? "pt-[100%] relative skeleton"
              : "h-[80px] skeleton"
          }
        ></li>
      )}
    </>
  );
};

export default Skeleton;
