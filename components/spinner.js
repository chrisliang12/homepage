export default function Spinner() {
  return (
    <div className="absolute w-100 h-100 bottom-3/4 left-1/2 md:bottom-3/4 -translate-x-1/2 -translate-y-1/2">
      <button className="btn border-0 loading bg-primary">loading</button>
    </div>
  );
}
