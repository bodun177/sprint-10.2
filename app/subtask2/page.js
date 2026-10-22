export default async function Subtask2({ searchParams }) {
  const params = await searchParams;

  const pairs = Object.entries(params).flatMap(([key, value]) =>
    [].concat(value).map((item) => `${key}=${item}`),
  );

  return <div>Subtask2, query parameters: {pairs.join(', ')}</div>;
}
