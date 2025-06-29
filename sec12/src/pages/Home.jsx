import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { use, useState } from "react";
import { DiaryStateContext } from "../App";
import { useContext } from "react";

const getMonthlyData = (mockData, year, month) => {
  const startDate = new Date(year, month, 1, 0, 0, 0).getTime();
  const endDate = new Date(year, month + 1, 0, 23, 59, 59).getTime();

  return mockData.filter(
    (item) => item.date >= startDate && item.date <= endDate
  );
};

const Home = () => {
  const [date, setDate] = useState(new Date());
  const mockData = useContext(DiaryStateContext);

  const handleLeftClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handleRightClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const montlyData = getMonthlyData(
    mockData,
    date.getFullYear(),
    date.getMonth()
  );

  return (
    <div>
      <Header
        title={`${date.getFullYear()}년 ${date.getMonth() + 1} 월`}
        leftChildren={<Button text={"<"} onClick={handleLeftClick}></Button>}
        rightChildren={<Button text={">"} onClick={handleRightClick}></Button>}
      ></Header>
      <DiaryList items={montlyData} />
    </div>
  );
};

export default Home;
