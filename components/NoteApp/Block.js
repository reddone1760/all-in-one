const Block = ({ value, blockDataId, type }) => {
  return (
    <div
      aria-data-block-id={blockDataId}
      className={`bg-red-500 w-full relative
        ${
          type === "h1"
            ? "text-3xl"
            : type === "h2"
            ? "text-2xl"
            : type === "h3" && "text-lg"
        }`}
    >
      <input
        type="text"
        value={value}
        className="border-none outline-none bg-transparent w-full"
      />
      <div></div>
    </div>
  );
};

export default Block;
