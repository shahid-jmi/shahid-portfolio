import React from 'react';

const About = () => {
    return (
        <div className="p-4 max-w-screen-lg">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right  p-4 rounded-lg">
                    <div className="font-bold text-4xl mb-4">Hello there!</div>
                    <div className="font-bold text-4xl mb-4">I'm Shahid,</div>
                    <p className="text-xl">
                        A passionate Full Stack Web Developer hailing from the picturesque region of Jammu and Kashmir, India.
                    </p>
                </div>
                <div className="md:text-left">
                    <h2 className="text-3xl font-bold mb-4">My Journey</h2>
                    <p className="mb-4">
                        My journey into the world of technology began at a young age, where I found myself naturally drawn to computers
                        and their endless possibilities. This early fascination blossomed into a strong passion, leading me to pursue a
                        Bachelor's degree in Information Technology, followed by a Master's in Computer Applications. These academic
                        years were transformative, helping me gain a solid foundation in various programming languages and web
                        technologies.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">Love for Web Development</h2>
                    <p className="mb-4">
                        Web development has been an integral part of my life, and I find immense joy in crafting seamless user
                        experiences and innovative solutions. It's a fascinating space where creativity meets functionality, and every
                        day, I discover new ways to push the boundaries of what's possible on the web.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">Gold Medalist</h2>
                    <p className="mb-4">
                        During my academic journey, I was honored to be recognized as a Gold Medalist in my university. While this
                        achievement has been gratifying, I believe that true success lies not just in accolades but in the positive
                        impact we create with our work. My focus has always been on creating meaningful projects that benefit users and
                        contribute to the tech community.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">Future Endeavors</h2>
                    <p className="mb-4">
                        As I continue to grow as a developer, I strive to stay at the forefront of technology by constantly learning
                        and exploring emerging trends. My goal is to contribute to innovative projects that make a difference in people's
                        lives and shape the future of the digital landscape.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">Beyond the Screen</h2>
                    <p>
                        Beyond coding and building websites, I love exploring the stunning landscapes of Jammu and Kashmir, immersing
                        myself in its rich culture, and capturing moments through photography. I also enjoy spending quality time with my
                        family and friends, cherishing the simple joys of life.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
