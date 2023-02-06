import cardStyle from './card003.module.css';

const Card003 =() => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.cardInner}>
        <div className={cardStyle.cardFront}>hover me</div>
        <div className={cardStyle.cardBack}>leave me</div>
      </div>
    </div>
  );
}

export default Card003;
