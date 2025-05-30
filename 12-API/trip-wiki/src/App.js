//COMPONENTS
import Header from './components/Header.js';
import RegionList from './components/RegionList.js';
import CityList from './components/CityList.js';
import CityDetail from './components/CityDetail.js';

export default function App($app) {
  this.state = {};

  const header = new Header();
  const regionList = new RegionList();
  const cityList = new CityList();
  const cityDetail = new CityDetail();

  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  const init = async () => {

  };

  init();
};