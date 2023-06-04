type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {

  // Update the background color to use the new pink color scheme
  return (
    <div className="text-white bg-pink-800 inline-block rounded-md text-center font-extrabold text-xl py-4 px-6">
      {props.children}
    </div>
  );
};

export { Button };