type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  // Add the mainButton class to the button element
  const buttonClasses = `text-white bg-primary-800 inline-block rounded-md text-center font-extrabold py-4 px-6 mainButton ${
    props.xl ? "text-2xl" : "text-xl"
  }`;

  return (
    <div className={buttonClasses}>
      {props.children}
    </div>
  );
};

export { Button };