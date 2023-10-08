export const LoadingSkeleton = () => (
  <div
    role="status"
    className="animate-pulse w-2/3 flex flex-col items-center justify-center"
  >
    <div className="flex mt-2.5 items-center justify-center h-24 w-44 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
    <div className="h-2.5 w-full mt-8 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
    <div className="h-2.5 w-44 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
    <div className="flex mt-8 items-center justify-center h-8 w-44 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
    <span className="sr-only">Loading...</span>
  </div>
);
