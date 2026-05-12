import img1 from "../assets/portfolio1.png";
import img2 from "../assets/Full-Stack.png";
import img3 from "../assets/porfolio3.png";
import img4 from "../assets/joanblog.png";

import portfolio1 from "../assets/slide2.jpg";
import portfolio2 from "../assets/z5 2.jpg";
import portfolio3 from "../assets/portfolio2.png";

import avatar1 from "../assets/human.png";
import avatar2 from "../assets/man (1).png";
import avatar3 from "../assets/man.png";

const data = {
  skills: [
    {
      id: "1",
      src: img1,
      title: "Front-End",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    },
    {
      id: "2",
      src: img2,
      title: "Back-End",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    },
    {
      id: "3",
      src: img3,
      title: "UI & UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    },
    {
      id: "4",
      src: img4,
      title: "Webflow Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    }
  ],

  portfolio: [
    {
      id: "1",
      src: portfolio1,
      title: "Ahuse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      link: "View In Github"
    },
    {
      id: "2",
      src: portfolio2,
      title: "App Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      link: "View In Github"
    },
    {
      id: "3",
      src: portfolio3,
      title: "Easy Rentn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      link: "View In Github"
    }
  ],

  testimonial: [
    {
      id: "1",
      count: "5",
      src: avatar1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      author_name: "Dianne Russel",
      author_designation: "Starbucks"
    },
    {
      id: "2",
      count: "5",
      src: avatar2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      author_name: "Kristin Watson",
      author_designation: "Louis Vuitton"
    },
    {
      id: "3",
      count: "5",
      src: avatar3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      author_name: "Kathryn Murphy",
      author_designation: "McDonald's"
    }
  ]
};

export default data;