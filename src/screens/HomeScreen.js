import React from 'react';
import MainHeader from '../components/Dashboard/Header/MainHeader';
import VehicleTypeCard from '../components/Dashboard/VehicleType/VehicleTypeCard';
import PopularLocationCard from '../components/Dashboard/PopularLocations/PopularLocationCard';
import Layout from '../common/Layout';

const HomeScreen = ({navigation}) => {
  return (
    <Layout>
      <MainHeader />
      <VehicleTypeCard />
      <PopularLocationCard navigation={navigation} />
    </Layout>
  );
};

export default HomeScreen;
