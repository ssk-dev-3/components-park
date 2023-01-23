import mvStyle from './mv.module.css'

const Mv: React.FC = () => {
  return (
    <div className={mvStyle.mv}>
      <div className={mvStyle.titleWrapper}>
        <h1 className={mvStyle.title}>Components Park</h1>
        <p className={mvStyle.subtitle}>HTMLとCSSとJavaScriptの遊び場</p>
      </div>
    </div>
  )
}

export default Mv;
