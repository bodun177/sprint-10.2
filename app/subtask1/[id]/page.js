export default async function Subtask1({ params }) {
  const { id } = await params;

  return <div>Subtask1, parameter: {id}</div>;
}
