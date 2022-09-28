import React from 'react'

function SocialLinks() {
  const socialLinks = ["fb", "ln", "tw", "ig", "yt"];

  return (
    <>
      {socialLinks.map((link, ind) => {
        return (
          <li key={ind}>
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