import ProjectEntries from "../static/Projects";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-4 md:mt-8 px-4">
      <h1 className="text-3xl md:text-5xl font-bold font-sans mb-12 text-center text-white">
        My Hobby Projects
      </h1>
      
      <div className="w-full max-w-[90%] md:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectEntries.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-[#1f1f1f] text-white p-6 rounded-lg shadow-lg flex flex-col border border-gray-800 transition-all hover:scale-105 hover:border-accent"
          >
            <h2 className="text-2xl font-bold text-accent mb-3">{project.name}</h2>
            <p className="text-gray-300 text-lg mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors font-semibold border border-gray-600"
              >
                Source
              </a>
              {project.liveUrl ? (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-accent hover:bg-accent/80 text-dark-bg py-2 px-4 rounded transition-colors font-bold"
                >
                  View Live
                </a>
              ) : (
                <div className="flex-1 text-center bg-gray-900 text-gray-500 py-2 px-4 rounded font-semibold cursor-not-allowed border border-gray-800">
                  Coming Soon
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
