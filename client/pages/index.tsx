import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../components/Navbar/Navbar";
import { getContactPage } from "../redux/actions/contactActions";
import { Contacts } from "../components/Contacts/Contacts";

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getContactPage({ page: 0, dispatch });
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <Contacts />
    </div>
  );
};

export default Home;
