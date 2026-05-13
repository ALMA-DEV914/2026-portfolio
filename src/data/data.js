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
        "Frontend Web Developer with experience building responsive and user-friendly web applications using React, JavaScript, HTML, CSS, and modern UI frameworks. Skilled in creating interactive interfaces, integrating APIs, and developing clean, mobile-friendly designs with a focus on performance and user experience. Passionate about turning ideas into functional and visually appealing websites."
    },
    {
      id: "2",
      src: img2,
      title: "Back-End",
      description:
        "Backend Developer with experience building scalable server-side applications and RESTful APIs using Node.js, Express.js, and MongoDB. Skilled in database management, authentication, API integration, and developing secure, efficient backend systems for full-stack web applications. Experienced in handling data operations, payment integrations, and deploying applications with clean and maintainable code practices."
    },
    {
      id: "3",
      src: img3,
      title: "UI & UX Design",
      description:
        "UI/UX Designer with experience creating intuitive, visually appealing, and user-centered digital experiences. Skilled in designing responsive layouts, improving user flows, wireframing, prototyping, and developing modern interfaces that enhance usability and engagement. Focused on combining creativity and functionality to deliver seamless user experiences across web and mobile platforms."
    },
    {
      id: "4",
      src: img4,
      title: "Webflow Development",
      description:
        "Webflow Developer with experience building responsive, modern, and visually engaging websites using Webflow. Skilled in creating custom layouts, animations, CMS integration, and optimizing websites for performance and user experience. Experienced in transforming design concepts into fully functional, mobile-friendly websites with clean structure and smooth interactions."
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