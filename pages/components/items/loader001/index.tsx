import loaderStyle from './loader001.module.css';

const Loader001 = () => {
  return (
    <>
      <div className={loaderStyle.circle}></div>
      <div className={loaderStyle.shadow}></div>
    </>
  );
}

export default Loader001;
