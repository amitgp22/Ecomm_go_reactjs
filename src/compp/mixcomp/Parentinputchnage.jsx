import ChildInputchnage from "./ChildInputchnage"
const Parentinputchnage = () => {
  const handleInputChange = (value) => {
    console.log("Typed value:", value);
  };

  return <ChildInputchnage onInputChange={handleInputChange} />;
};
export default Parentinputchnage;