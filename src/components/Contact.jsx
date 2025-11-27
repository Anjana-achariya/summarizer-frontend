import React from "react";
import { assets } from "../assets/assets.js";

const Contact = () => {
  const items = [
    { icon: assets.emailIcon, label: "Email", link: "mailto:anjanar266@gmail.com" },
    { icon: assets.linkedinIcon, label: "LinkedIn", link: "https://www.linkedin.com/in/anjana-ramachandran-achariya/" },
    { icon: assets.githubIcon, label: "GitHub", link: "https://github.com/Anjana-achariya" },
    { icon: assets.hfIcon, label: "HuggingFace", link: "https://huggingface.co/anjanaR" },
  ];

  return (
    <div id="contact" className="w-full py-16 flex flex-col items-center">
      <h2 
        className="text-2xl font-bold mb-10 drop-shadow-md"
        style={{ color: "var(--color-primary)" }}
      >
        Let's Connect
      </h2>
      <p className="text-text opacity-70 text-center mb-10">
        Available for projects, collabs, and creative chats.
      </p>
      

      <div className="flex gap-12 flex-wrap justify-center">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-16 h-16 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_var(--color-primary)]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
