import React from "react";
import CardItem from "./CardItem";

const PriceCard = () => {
  return (
    <div className="flex flex-col xl:mt-72 lg:mt-60 md:mt-40 sm:mt-32 mt-20 transition-all md:px-10 px-4 bg-neutral-950 py-20">
      <h1 className="mx-auto text-3xl font-bold mb-10 uppercase">
        Membership Options
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-x-4">
        <CardItem
          title={"Free Trial"}
          description={"Let's get started with 3 days free trial"}
          price={0}
          lists={["3 days free trial", "All classes accessible"]}
          type={"month"}
        />
        <CardItem
          title={"Monthly Membership"}
          description={"Monthly membership with only $12 bi-weekly"}
          price={24}
          lists={[
            "All classes accessible",
            "1 free fitness assessment",
            "1 free nutrition consultation",
          ]}
          type={"month"}
        />
        <CardItem
          title={"Yearly Membership"}
          description={"Yearly memberhip with as little as $8 bi-weekly"}
          price={194.99}
          lists={[
            "All classes accessible",
            "1 free fitness assessment per month",
            "1 free nutrition consultation per month",
            "1 free message from RMT",
          ]}
          type={"year"}
        />
      </div>
    </div>
  );
};

export default PriceCard;
