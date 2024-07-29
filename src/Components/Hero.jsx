import SignUpForm from "./SignUpForm";
import ImageBlock from "./ImageBlock";
const Hero = ({ handleIsOpen }) => {
  return (
    <main
      className="bg-White rounded-3xl   grid sm:grid-rows-1 sm:grid-cols-2  xs:grid-rows-[400px_600px]
    xxs:grid-rows-2 sm:px-4 sm:py-2 sm:max-w-[800px]"
    >
      <SignUpForm handleIsOpen={handleIsOpen} />
      <ImageBlock />
    </main>
  );
};

export default Hero;
