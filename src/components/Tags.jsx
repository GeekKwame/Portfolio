/** Outlined pill per technology. */
function Tags({ items, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-x-3 gap-y-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-ink/60 px-3 py-1.5 font-syne text-sm font-medium leading-none text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
