export default function Test() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Test page
      </h1>
      <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 text-center">
        Timestamp below is fetched from GraphQL server from Next.js server route
        and cached on server for 30s. GraphQL response is manually delayed for
        5s.
      </p>
    </>
  );
}
