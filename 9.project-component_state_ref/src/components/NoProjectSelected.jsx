import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ handleStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
        no project selected
      </h2>
      <p className="text-stone-400 mb-4">
        selected a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={handleStartAddProject}>create new project</Button>
      </p>
    </div>
  );
}
