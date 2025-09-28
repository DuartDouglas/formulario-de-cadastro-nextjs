import { FaSpinner } from "react-icons/fa6";

interface ILoadingProps {
  size?: string;
  color?: string;
}

/**
 * Component Loading
 *
 * @example
 * <Loading />
 * or
 * <Loading size="text-2xl" color="text-red-500"/>
 */
export default function Loading({ size, color }: ILoadingProps) {
  return (
    <div>
      <FaSpinner className={`animate-spin ${size} ${color}`} />
    </div>
  );
}
