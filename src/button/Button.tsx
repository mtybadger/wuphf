
type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {

  return (
    <div className="text-white bg-primary-500 inline-block rounded-md text-center font-extrabold text-xl py-4 px-6">
      {props.children}
    </div>
  );
};

export { Button };