import { Children } from 'react';
import cardStyle from './card.module.css';

type Props = {
  category: string
}

export const Card: React.FC<Props> = ({ category } ) => {
  return (
    <div className={cardStyle.card}>
      <div>
        <span className={cardStyle.badge}>
          {category}
        </span>
      </div>
      <div>
        ここにコンポーネントが入ります。
      </div>
    </div>
  );
}
