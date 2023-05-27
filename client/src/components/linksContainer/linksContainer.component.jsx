import './linksContainer.styles.scss'

import LinksCard from "../links/linksCard.component"

const Links = [{
  title: 'Google',
  url: 'https://www.google.com',
  image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
  keywords: ['search, all']
},
  {
    title: 'YouTube',
    url: 'https://www.youtube.com',
    image: 'https://www.youtube.com/s/desktop/4b1b9b7e/img/favicon_144.png',
    description: 'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
    keywords: ['videos, music, upload, share']
  }
]

const LinksContainer = () => {
  return (
    <div className="links-container">
      {Links.map((link, index) => (
        <LinksCard key={index} link={link} />
      ))}
    </div>
  )
}

export default LinksContainer