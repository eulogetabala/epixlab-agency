import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";
import TeamCard from "../cards/TeamCard";

function TeamSection() {
  const appReviewData = [
    {
      id: 0,
      imgUrl: "/images/vanessa.jpg",
      name: "Vanessa Laird",
      profession:
        "UI Designer",
    },

    {
      id: 1,
      imgUrl: "/images/mason.jpg",
      name: "Mason Campbell",
      profession:
        "UI Designer",
    },

    {
      id: 2,
      imgUrl: "/images/irea.jpg",
      name: "Irea Evans",
      profession:
        "client manager",
    },

   
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="OUR TEAM" subtitle="Meet The Team" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[3.75rem]">
        {appReviewData.map((team) => (
          <TeamCard
            key={team.id}
            imgUrl={team.imgUrl}
            name={team.name}
            profession={team.profession}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
