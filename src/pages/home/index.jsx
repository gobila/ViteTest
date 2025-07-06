import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Header from '../../components/header';
import List from '../../components/List';

export const Home = () => {
  const userData = useSelector((state) => state.userData.userData);

  const isUserLoggedIn = Object.keys(userData).length > 0;

  if (!isUserLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Header />
      <List />
    </>
  );
};
