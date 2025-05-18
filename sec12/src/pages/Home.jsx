import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return <div>{searchParams.get("q")} - home sweet home</div>;
};

export default Home;
