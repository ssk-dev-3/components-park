import cardStyle from './card002.module.css';

const Card002 = () => {
  return (
    <div className={cardStyle.wrapper}>
      <div className={`${cardStyle.circle} ${cardStyle.bottomLeft}`}></div>
      <div className={`${cardStyle.circle} ${cardStyle.topRight}`}></div>
      <p className={cardStyle.text}>glass<br/>card</p>
      <div className={cardStyle.glassCard}></div>
    </div>
  );
}

export default Card002;
