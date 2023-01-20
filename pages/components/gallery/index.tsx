import Card from '../card';
import Button001 from '../items/button001';
import Loader001 from '../items/loader001';
import Background001 from '../items/background001';
import galleryStyle from './gallery.module.css';

const Gallery: React.FC = () => {
  return (
    <div className={galleryStyle.container}>
      <div className={galleryStyle.board}>
        <Card category='button'>
          <Button001 />
        </Card>
        <Card category='loader'>
          <Loader001 />
        </Card>
        <Card category='background'>
          <Background001 />
        </Card>
      </div>
    </div>
  );
}

export default Gallery;
