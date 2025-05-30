import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title="제목: 집에가고싶다"
        leftChildren={<Button text={"<"}></Button>}
        rightChildren={<Button text={">"}></Button>}
      ></Header>
      <DiaryList />
    </div>
  );
};

export default Home;
