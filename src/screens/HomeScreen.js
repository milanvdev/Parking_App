import React from 'react';
import Layout from '../components/Layout';
import MainHeader from '../components/Dashboard/Header/MainHeader';
import VehicleTypeCard from '../components/Dashboard/VehicleType/VehicleTypeCard';
import PopularLocationCard from '../components/Dashboard/PopularLocations/PopularLocationCard';

const HomeScreen = () => {
  return (
    <Layout>
      <MainHeader />
      <VehicleTypeCard />
      <PopularLocationCard />
    </Layout>
  );
};

export default HomeScreen;
