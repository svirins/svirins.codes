'use client';
import { IconContext } from 'react-icons';
import { SOCIALS } from '../ui/StackIcon';

export default function FooterSocials() {
  return (
    <div className="flex my-2 space-x-4">
      <IconContext.Provider
        value={{
          className:
            'w-4 h-4 fill-gray-700  dark:fill-gray-400  hover:fill-gray-800 dark:hover:fill-gray-200'
        }}
      >
        {SOCIALS.map((social, index) => (
          <a
            key={index}
            href={social.url}
            title={social.iconTitle}
            className="duration-150 transform  ease-in-out hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.Icon}
          </a>
        ))}
      </IconContext.Provider>
    </div>
  );
}
