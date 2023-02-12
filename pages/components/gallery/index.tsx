import Card from '../card';
import Button001 from '../items/button001';
import Button002 from '../items/button002';
import Button003 from '../items/button003';
import Button004 from '../items/button004';
import Button005 from '../items/button005';
import Button006 from '../items/button006';
import Button007 from '../items/button007';
import Loader001 from '../items/loader001';
import Loader002 from '../items/loader002';
import Loader003 from '../items/loader003';
import Loader004 from '../items/loader004';
import Loader005 from '../items/loader005';
import Loader006 from '../items/loader006';
import Loader007 from '../items/loader007';
import Background001 from '../items/background001';
import Background002 from '../items/background002';
import Card001 from '../items/card001';
import Card002 from '../items/card002';
import Card003 from '../items/card003';
import TextBox001 from '../items/textbox001';
import Others001 from '../items/others001';
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
        <Card category='button'>
          <Button004 />
        </Card>
        <Card category='button'>
          <Button005 />
        </Card>
        <Card category='button'>
          <Button006 />
        </Card>
        <Card category='loader'>
          <Loader005 />
        </Card>
        <Card category='card'>
          <Card003 />
        </Card>
        <Card category='text box'>
          <TextBox001 />
        </Card>
        <Card category='button'>
          <Button007 />
        </Card>
        <Card category='others'>
          <Others001 />
        </Card>
        <Card category='loader'>
          <Loader006 />
        </Card>
        <Card category='loader'>
          <Loader007 />
        </Card>
      </div>
    </div>
  );
}

export default Gallery;
