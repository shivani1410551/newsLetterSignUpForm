import * as Yup from "yup";
import { Field, Form, ErrorMessage, Formik } from "formik";
const formSchema = Yup.object({
  email: Yup.string().email().required("Valid email required"),
});
const TextBlock = ({ handleIsOpen }) => {
  return (
    <div
      className="xxs:row-start-2 xxs:row-end-4 mx-auto
    xs:row-start-2 xs:row-end-4
    xxs:py-3 xs:py-6 xxs:px-4 xs:px-5 text-DarkSlateGrey
    sm:row-start-1
    grid justify-self-center self-center
    "
    >
      <h1 className="font-bold py-2 xxs:text-[1.5rem] xs:text-[2rem] ">
        Stay updated!
      </h1>
      <p className="text-xs xxs:py-2 xs:py-2">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="space-y-4 xxs:text-xs xxs:py-4 xs:py-4">
        <li className="flex items-start ">
          <img
            src="./assets/images/icon-list.svg"
            alt="icon list"
            className="inline-block mr-2"
          />
          Product discovery and building what matters
        </li>
        <li className="flex items-start">
          <img
            src="./assets/images/icon-list.svg"
            alt="icon list"
            className="mr-2"
          />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="flex items-start">
          <img
            src="./assets/images/icon-list.svg"
            alt="icon list"
            className="mr-2"
          />
          <p> And much more!</p>
        </li>
      </ul>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(value, { resetForm }) => {
          console.log(value.email);
          resetForm();
        }}
        validateSchema={formSchema}
      >
        <Form action="" className="space-y-3 xxs:mt-2">
          {" "}
          <article className="flex items-center justify-between">
            <label className="xxs:text-xs xs:text-sm font-bold -mb-1">
              Email address
            </label>
          </article>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder="email@company.com"
            className="rounded border-[Grey] border py-3 px-1 cursor-pointer
          xxs:text-xs xs:text-sm
          xxs:placeholder:text-xs
          xs:placeholder:text-sm
          xxs:w-full
          outline-none
          ${ErrorMessage && `bg-rose-100 border-rose-400`}
          "
          />
          <ErrorMessage
            name="email"
            className="text-red-400 sm:text-xs md:text-base py-2"
          />
          <button
            type="submit"
            className="bg-DarkSlateGrey rounded text-white xxs:w-full my-2 py-3 px-1  font-bold xxs:text-xs xs:text-sm bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-colors
        "
            onClick={handleIsOpen}
          >
            {" "}
            Subscribe to monthly newsletter
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TextBlock;
