import fotterStyle from './fotter.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={fotterStyle.fotter}>
      <p className={fotterStyle.copyright}>Created By SSK Playground</p>
    </div>
  );
}
