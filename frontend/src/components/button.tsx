interface IButton {
  title: string;
  type: "button" | "submit";
}
export const ButtonBase = ({ title, type }: IButton) => {
  return (
    <button className="bg-primary w-full rounded-md py-2 text-black font-medium" type={type}>
      <span>{title}</span>
    </button>
  );
};
