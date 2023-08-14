const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="header"> Social Buttons </h1>
    <div className="card">
      <Button className="like" buttonText="Like" />
      <Button className="comment" buttonText="Comment" />
      <Button className="share" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
