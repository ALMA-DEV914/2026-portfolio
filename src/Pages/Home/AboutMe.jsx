import heroImg from "../../assets/aboutme.png";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={heroImg} alt="About Me" className="aboutme-img" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I’m a Web Developer who enjoys bringing ideas to life through clean and functional web design. I’m passionate about creating seamless user experiences and continuously improving my craft through new challenges and technologies. Beyond the screen, I find balance and inspiration in hiking mountain trails and rock climbing—activities that push my limits, strengthen my focus, and remind me to keep exploring and growing.
          </p>
          
        </div>
      </div>
    </section>
  );
}