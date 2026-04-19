import { educationEntries } from "./../static/Education";
import Timeline from "./Timeline";

export const Education = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center mt-auto w-full">
      <div className="mb-12 text-lg text-gray-300 w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] mx-auto text-center leading-relaxed">
        I have always been interested in technology, so all my formal education has been in Computer Science.
        While I did publish a research paper during my bachelor's degree, I quickly realized that I find a lot more joy in building things.
        My master's degree was therefore focused on Applied Computer Science, and now I work full-time as a software engineer.
      </div>
      <Timeline data={educationEntries} />
    </div>
  );
};
