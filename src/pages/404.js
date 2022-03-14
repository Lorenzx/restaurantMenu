import Button from "../components/button/button";

const NotFoundMessage = ({ message, linkUrl, linkText }) => {
  return (
    <div className="font-bold text-center mt-20 bg-white p-4 rounded">
      {message}
      <br />
      <Button
        btnStyle="p-2 pl-4 pr-4 text-white rounded font-bold bg-yellow-500 hover:bg-yellow-700"
        link={linkUrl}
        text={linkText}
      />
    </div>
  );
};

export default NotFoundMessage;
