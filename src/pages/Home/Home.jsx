import React from "react";

import { AiOutlineRise } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { RiTakeawayFill } from "react-icons/ri";

import BoxAmont from "../../components/BoxAmont/BoxAmont";
import Header from "../../components/Header/Header";

import "./Home.scss";
import BoxAreaChart from "../../components/BoxAreaChart/BoxAreaChart";
import BoxChartCircle from "../../components/BoxChartCircle/BoxChartCircle";
import BoxOrderTrending from "../../components/BoxOrderTrending/BoxOrderTrending";

const Home = () => {
  const listBoxAmount = [
    {
      title: "revenue",
      amount: "$ 2.047",
      percent: -10,
      icon: <AiOutlineRise />,
      colorIcon: "#EF9235",
    },
    {
      title: "order",
      amount: "356",
      percent: 20,
      icon: <BsFillCartFill />,
      colorIcon: "#58C893",
    },
    {
      title: "dine in",
      amount: "220",
      percent: 10,
      icon: <GiKnifeFork />,
      colorIcon: "#EC4235",
    },
    {
      title: "take away",
      amount: "135",
      percent: -5,
      icon: <RiTakeawayFill />,
      colorIcon: "#FFC147",
    },
  ];
  const listOrderTreding = [
    {
      img : 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
      name : 'american favorite',
      order : 120
    },
    {
      img : 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
      name : 'super supreme',
      order : 90
    },
    {
      img : 'https://healthiersteps.com/wp-content/uploads/2021/02/mango-juice-drink2.jpg',
      name : 'orange juice',
      order : 110
    },
    {
      img : 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
      name : 'chicken mushroom',
      order : 80
    }
  ]
  const listOutofStock = [
    {
      img : 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
      name : 'american favorite',
      available : 'tomorow'
    },
    {
      img : 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
      name : 'super supreme',
      available : '12:00 am'
    },
    {
      img : 'https://healthiersteps.com/wp-content/uploads/2021/02/mango-juice-drink2.jpg',
      name : 'orange juice',
      available : '3:00pm'
    },
    {
      img : 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
      name : 'chicken mushroom',
      available : 'tomorow'
    }
  ]
  return (
    <div className="home container">
      <Header title={"Home"} type='only-title'/>
      <div className="home__content">
        {listBoxAmount.map((item, index) => (
          <BoxAmont
            key={`boxAmount-${index}`}
            title={item.title}
            amount={item.amount}
            percent={item.percent}
            icon={item.icon}
            colorIcon={item.colorIcon}
          />
        ))}

        <BoxAreaChart />

        <BoxChartCircle totalIncome={200} />

        <BoxOrderTrending title = {'trending dishes'} data = {listOrderTreding}/>
        <BoxOrderTrending title = {'out of stock'} data = {listOutofStock}/>
        
      </div>
    </div>
  );
};

export default Home;
