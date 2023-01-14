import { Card } from '../card';
import galleryStyle from './gallery.module.css';

export const Gallery: React.FC = () => {
  return (
    <div className={galleryStyle.container}>
      <div className={galleryStyle.board}>
        <Card category='button' />
        <Card category='button' />
        <Card category='button' />
        <Card category='loader' />
        <Card category='icon' />
      </div>
    </div>
  );
}
