import React from "react";
import './linksCard.styles.scss';

const LinksCard = ({ link }) => {
  const { title, url, image, description, keywords } = link;

  return (
    <div className="link-card">
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
          {keywords.map((keyword, index) => (
            <span key={index} className="link-keyword">{keyword}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksCard;
