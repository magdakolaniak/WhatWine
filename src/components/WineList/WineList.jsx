import './WineList.css';
import '../Rotate/Rotate.jsx';
import MyNav from '../MyNav/MyNav';
import Rotate from '../Rotate/Rotate.jsx';

const WineList = () => {
  return (
    <>
      <MyNav />
      <div className="wine-list-main">
        <Rotate />
      </div>
    </>
  );
};
export default WineList;
