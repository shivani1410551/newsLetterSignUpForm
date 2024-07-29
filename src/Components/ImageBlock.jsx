const ImageBlock = () => {
  return (
    <div className="grid justify-self-center self-center sm:justify-self-end ">
      <img
        src="./assets/images/illustration-sign-up-desktop.svg"
        alt="desktop image"
        className="sm:block xs:hidden xxs:hidden sm:col-start-2 sm:h-[500px] "
      />
      <img
        src="./assets/images/illustration-sign-up-mobile.svg"
        alt="mobile image"
        className="sm:hidden   xxs:block xxs:w-[430px] xs:w-[450px] xs:h-[400px] 
        xxs:h-[480px]"
      />
    </div>
  );
};

export default ImageBlock;
