import { Link } from "react-router-dom";
import { Icon } from "@fluentui/react/lib/Icon";

const Button = ({
  text,
  textStyle,
  link,
  btnStyle,
  clickHandler,
  iconName,
  iconStyle,
}) => {
  return (
    <button className={btnStyle} onClick={() => clickHandler()}>
      {link && text && (
        <Link className={textStyle} to={link}>
          {text}
        </Link>
      )}
      {text && !link && <span className={textStyle}>{text}</span>}
      {iconName && <Icon iconName={iconName} className={iconStyle} />}
    </button>
  );
};
export default Button;
