import cardStyle from './card.module.css';

type Props = {
  category: string
}

const Card: React.FC<Props> = ({ category } ) => {
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

export default Card;
