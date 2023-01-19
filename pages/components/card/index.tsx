import React from 'react';
import cardStyle from './card.module.css';

type Props = {
  category: string
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ category, children } ) => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.badgeWrapper}>
        <span className={cardStyle.badge}>
          {category}
        </span>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Card;
