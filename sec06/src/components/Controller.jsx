import Button from "./Button";

const Controller = ({ action }) => {
  return (
    <div>
      <Button input="-1" onClick={action} />
      <Button input="-10" onClick={action} />
      <Button input="-100" onClick={action} />
      <Button input="+100" onClick={action} />
      <Button input="+10" onClick={action} />
      <Button input="+1" onClick={action} />
    </div>
  );
};

export default Controller;
