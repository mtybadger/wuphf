type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  // No changes needed in the Button component as the primary color is being
  // updated in the tailwind.config.js file, which will automatically apply
  // the new color to the 'bg-primary-800' class used in this component.
  return (
    <div className="text-white bg-primary-800 inline-block rounded-md text-center font-extrabold text-xl py-4 px-6">
      {props.children}
    </div>
  );
};

export { Button };