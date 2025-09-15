export default function CmdOutput({ items }: { items: JSX.Element[] }) {
  return <>{items.map((li) => li)}</>;
}
