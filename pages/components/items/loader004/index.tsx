import loaderStyle from './loader004.module.css';

const Loader004 = () => {
  return (
    <div className={loaderStyle.wrapper}>
      <div className={loaderStyle.circle}></div>
      <div className={loaderStyle.circle}></div>
      <div className={loaderStyle.circle}></div>
    </div>
    );
}

export default Loader004;
