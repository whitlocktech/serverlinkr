import { useApi } from '../../contexts/api.context';
import './linksCard.styles.scss';

const LinksCard = ({ link }) => {
  const { title, url, image, description, keywords } = link;

  const handleClick = () => { 
    window.open(url, "_blank");
  }

  const linkData = {
    keywords: Array.isArray(keywords) ? keywords : keywords ? [keywords] : [],
  }

  // Make a limit to the description length of 160 characters
  // make keywords clickable and load up the page for just that keyword

  return (
    <div className="link-card" onClick={handleClick}>
      <div className="link-card-header">
        <h3 className="link-title">{title}</h3>
      </div>
      <div className="link-card-body">
        <div className="link-image">
          <img src={image} alt={title} />
        </div>
        <p className="link-url">{url}</p>
        <p className="link-description">{description}</p>
        <div className="link-keywords">
          {linkData.keywords.map((keyword, index) => (
            <p className='link-keyword' key={index}>
              {keyword}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksCard;
