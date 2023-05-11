import SkeletonLoading from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonProps {
  count?: number;
}

export function Skeleton(props: SkeletonProps) {
  const { count = 1 } = props;
  return <SkeletonLoading count={count} />;
}
