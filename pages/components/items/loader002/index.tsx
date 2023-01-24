import loaderStyle from './loader002.module.css';

const Loader002 = () => {
  return (
    <>
      <div className={loaderStyle.locus}>
        <div className={loaderStyle.point}></div>
     </div>
      <div className={loaderStyle.locus}>
        <div className={loaderStyle.point}></div>
      </div>
      <div className={loaderStyle.locus}>
        <div className={loaderStyle.point}></div>
      </div>
    </>
  );
}

export default Loader002;
