// pages/index.js

import React from 'react';

const IndexPage = () => {
  // Replace the following with your actual data
  const developerData = {
    name: 'David Palmer',
    skills: ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML'],
    bio: 'I\'ve done a lot of different things and many times without a role title. (I like a startup, less formal situation.)',
    // Add more data as needed
	/*It typically boils down to the operations side of product development. Here's what I've been doing:
• CRM DB design & administration (heavy on back end stuff like internal process—i.e. customer journey stuff like sales processes, customer success operations; custom integrations, reporting, data analysis)
• CMS administration - everything from "webmaster" stuff like server and module configuration to custom software engineering as well as integrations and process design on the front end
• vision setting - high level roadmapping / strategic direction with C-levels, the board, cross-functional teams with department directors etc. 
• UX design - sprint management working with devs based on customer feedback, business planning, technical needs, etc. 
• team lead - I've often been leading internal cross-functional teams or contractors or working with external vendors to manage projects

In brief, I'm a highly technical (with software engineering experience) product development leader with tons of operations experience at all levels, and from every perspective: PM stuff, PjM stuff, detailed engineering stuff, and high level business stuff. 

My preference would be to work with a small team in a progressive environment (flexible schedule / remote optional / good benefits / ample PD, etc) on products or services that work toward some social good. For instance, I'm not looking for a product marketing position, or financial analytics. My experience has primed me better for something that builds community and lifts them up (a la "a rising tide that lifts all boats"). I've applied recently for very specific orgs that fit this profile like the Kinnu team (a community learning app), DuoLingo (language learning platform). I have also applied at larger companies that I think would still be comfortable in terms of workplace culture like Donors Choose, Wordpress.

My linkedin is https://www.linkedin.com/in/davidinnovates/ and I'm happy to send a resume if you'd like to take a look at my experience in that format.'*/
  };

  return (
    <div>
      <header>
        <h1>{developerData.name}, ' Product Developer'</h1>
      </header>

      <section>
        <h2>Skills</h2>
        <ul>
          {developerData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Bio</h2>
        <p>{developerData.bio}</p>
      </section>

    </div>
  );
};

export default IndexPage;
