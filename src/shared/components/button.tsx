export function Button({ text, className, onHandle }: Button) {
  return (
    <button className={className} onClick={onHandle}>
      {text}
    </button>
  );
}
