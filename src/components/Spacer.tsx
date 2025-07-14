const Spacer = ({ gap, direction }: { gap: number; direction: "vertical" | "horizontal" }) => {
  return (
    <div
      style={{
        [direction === "vertical" ? "height" : "width"]: `${gap}px`,
      }}
    />
  );
};

export default Spacer;
