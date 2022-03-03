import { Link } from "react-router-dom";

const NotFoundMessage = ({ message, linkUrl, linkText }) => {
  return (
    <div className="font-bold text-center mt-20">
      {message}
      <br />
      <div className="border-2 border-slate-300 mt-2 p-2 font-normal bg-white rounded">
        <Link to={linkUrl}>{linkText}</Link>
      </div>
    </div>
  );
};

export default NotFoundMessage;
