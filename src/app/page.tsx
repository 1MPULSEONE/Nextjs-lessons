 import { type Titles } from './widgets/header/model/types';
import {Header}  from './widgets/header/ui/Header';
 
 const Home = () =>  {

  const titles: Array<Titles> = [
    {
      id: "1",
      value: "test1"
    },
    {
      id: "2",
      value: "test2"
    },
    {
      id: "3",
      value: "test3"
    },
    {
      id: "4",
      value: "test4"
    }
  ]

  return (
      <>
        <Header titles={titles}/>
      </>
  );


}

export default Home

