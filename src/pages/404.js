import { Link } from "react-router-dom";

const NotFoundMessage = ({ message, linkUrl, linkText }) => {
  return (
    <div className="font-bold text-center mt-20">
      {message}
      <br />
      <div className="max-w-fit inline-block px-4 border border-slate-600 mt-4 p-2 font-normal bg-white rounded shadow-md">
        <Link to={linkUrl}>{linkText}</Link>
      </div>
    </div>
  );
};

export default NotFoundMessage;
