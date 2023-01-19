import Card from '../card';
import Button001 from '../items/button001';
import galleryStyle from './gallery.module.css';

const Gallery: React.FC = () => {
  return (
    <div className={galleryStyle.container}>
      <div className={galleryStyle.board}>
        <Card category='button'>
          <Button001 />
        </Card>
        <Card category='button'>
          ここにコンポーネントが入ります。
        </Card>
        <Card category='button'>
          ここにコンポーネントが入ります。
        </Card>
        <Card category='loader'>
          ここにコンポーネントが入ります。
        </Card>
        <Card category='icon'>
          ここにコンポーネントが入ります。
        </Card>
      </div>
    </div>
  );
}

export default Gallery;
