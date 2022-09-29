import React from 'react'
import { nanoid } from 'nanoid';

function SocialLinks() {
  const socialLinks = ["fb", "ln", "tw", "ig", "yt"];

  return (
    <>
      {socialLinks.map((link) => {
        return (
          <li key={nanoid()}>
            <a href="#">
              <img
                src={`../../public/assets/${link}.png`}
                alt="socialmedia logo"
              />
            </a>
          </li>
        );
      })}
    </>
  )
}

export default SocialLinks