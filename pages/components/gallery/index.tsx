import Card from '../card';
import Button001 from '../items/button001';
import Button002 from '../items/button002';
import Button003 from '../items/button003';
import Loader001 from '../items/loader001';
import Loader002 from '../items/loader002';
import Loader003 from '../items/loader003';
import Loader004 from '../items/loader004';
import Background001 from '../items/background001';
import Background002 from '../items/background002';
import Card001 from '../items/card001';
import Card002 from '../items/card002';
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
        <Card category='loader'>
          <Loader002 />
        </Card>
        <Card category='card'>
          <Card001 />
        </Card>
        <Card category='background'>
          <Background002 />
        </Card>
        <Card category='card'>
          <Card002 />
        </Card>
        <Card category='button'>
          <Button002 />
        </Card>
        <Card category='loader'>
          <Loader003 />
        </Card>
        <Card category='loader'>
          <Loader004 />
        </Card>
        <Card category='button'>
          <Button003 />
        </Card>
      </div>
    </div>
  );
}

export default Gallery;
