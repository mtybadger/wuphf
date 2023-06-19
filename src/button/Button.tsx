type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  // Add a conditional class for the xl prop
  const buttonSizeClass = props.xl ? 'text-2xl' : 'text-xl';

  return (
    <div
      className={`text-white bg-primary-800 inline-block rounded-md text-center font-extrabold py-4 px-6 ${buttonSizeClass}`}
    >
      {props.children}
    </div>
  );
};

export { Button };