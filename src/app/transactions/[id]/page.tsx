// TODO > criar pagaina da transação

export default function Transaction({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1>Transaction {id}</h1>
    </div>
  );
}
