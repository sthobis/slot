import classes from "./Button.module.css";

function Button({
  onClick,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={classes.button}
      onClick={onClick}
      {...props}
    >
      <span className={classes.text}>{children}</span>
    </button>
  );
}

export default Button;
