import { Spinner } from "@/components";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollContainerProps {
  children: React.ReactNode;
  hasNextPage?: boolean;
  onScrollEndCallback?: () => void;
  isFetching: boolean;
  isFetchingNextPage: boolean;
}

export const InfiniteScrollContainer = ({
  children,
  hasNextPage,
  onScrollEndCallback,
  isFetching,
  isFetchingNextPage,
}: InfiniteScrollContainerProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      onScrollEndCallback?.();
    }
  }, [hasNextPage, inView]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div>
      {children}
      {isFetchingNextPage && <Spinner />}
      <div ref={ref} />
    </div>
  );
};
