import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Importing ArrowUpRight icon

// Button component accepts `link` as a prop
function Button({ link }) {
  return (
    <div>
      <button className="group/button bg-white text-black hover:bg-gray-200">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          View Project
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
        </a>
      </button>
    </div>
  );
}

export default Button;
