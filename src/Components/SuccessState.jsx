import Checkbox from "/assets/images/icon-list.svg";
const SuccessState = ({ handleIsOpen }) => {
  return (
    <div
      className="p-4 bg-White 
    rounded-3xl
    sm:w-[20rem]
    sm:h-[20rem]
    flex flex-col sm:space-y-6
    sm:py-6 sm:px-8
    xs:h-screen
    "
    >
      <div
        className=" 
flex flex-col sm:space-y-4
items-start
xs:h-full
xs:justify-center
xs:space-y-6
      "
      >
        {" "}
        <img
          src={Checkbox}
          alt="checkbox image"
          className="xxs:h-[4rem]
        xs:h-[4rem] sm:h-[2rem]
        "
        />
        <h1
          className="font-bold xs:text-4xl xxs:4xl 
        sm:text-3xl
        "
        >
          Thanks for subscribing!
        </h1>
        <p
          className=" xxs:text-sm xs:text-sm
        sm:text-xs
        "
        >
          A confirmation email has been sent to <b> ash@loremcompany.com. </b>{" "}
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>

      <button
        className="bg-DarkSlateGrey text-white rounded py-3 font-bold  bg-gradient-to-r 
      cursor-pointer
      hover:from-pink-500 hover:to-orange-500 "
        onClick={handleIsOpen}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessState;
