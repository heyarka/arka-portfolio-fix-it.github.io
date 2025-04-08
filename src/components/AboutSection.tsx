
import { Code, PenTool, Globe, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'UI/UX Design', percentage: 70 },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 heading-gradient">Who am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate web developer and designer with a keen eye for detail and a love for creating seamless, 
              user-friendly experiences. With several years of experience in the field, I specialize in building modern, 
              responsive websites that help businesses achieve their goals.
            </p>
            <p className="text-gray-300 mb-8">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only 
              look great but also perform exceptionally. I stay up-to-date with the latest trends and technologies to 
              ensure my clients receive cutting-edge digital experiences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-secondary/50 p-4 rounded-lg text-center">
                <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-medium">Web Development</h4>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg text-center">
                <PenTool className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-medium">UI/UX Design</h4>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg text-center">
                <Globe className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-medium">Responsive Design</h4>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg text-center">
                <BookOpen className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <h4 className="font-medium">Continuous Learning</h4>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 heading-gradient">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
