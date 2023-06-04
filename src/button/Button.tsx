type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  // Use the blue-500 color for the button background
  return (
    <div className="text-white bg-blue-500 inline-block rounded-md text-center font-extrabold text-xl py-4 px-6">
      {props.children}
    </div>
  );
};

export { Button };