import styles from "./Skeleton.module.css";

interface ISkeletonProps {
  width?: string;
}

/**
 * Component Skeleton for loading content
 * @example
 * <Skeleton />
 * or
 * <Skeleton width="w-20" />
 */
export default function Skeleton({ width = "w-full" }: ISkeletonProps) {
  return <div className={`${styles.skeletonBase} ${width}`}></div>;
}
