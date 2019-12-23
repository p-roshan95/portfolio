const recData = [
      {
         "rid":"101",
         "rname":"Cesar Neri",
         "rdesg":"Product Owner",
         "rcompany":"Calero Software",
         "rrel":"Cesar was Client of Prabhu",
         "recomnd":"As a client working with Prabhu for about two years, I can say that he has a profession client centric mindset that demonstrated effective and meaningful results on the data analysis and software development field."
      },
      {
         "rid":"103",
         "rname":"Ajmal Mohammad",
         "rdesg":"Big Data Architect",
         "rcompany":"HCL Technologies",
         "rrel":"Ajmal worked with Prabhu in same group",
         "recomnd":"Prabhu has been very passionate about learning upcoming technologies and implementing those to work. Getting tasks done independently and quickly are his core strengths. Keep doing the good work."
      },
      {
         "rid":"104",
         "rname":"Amit Pundir",
         "rdesg":"Technical Lead",
         "rcompany":"HCL Technologies",
         "rrel":"Amit worked with Prabhu in same group",
         "recomnd":"We worked together for just less than a year. I find Prabhu very energetic and dynamic as a personality. With his level of experience he's able to showcase capabilities far above that. He has great hold on Bigdata, Spark, Scala you ask one he'll produce solutions/results of high quality. He's not restricted to just these technologies infact he comes with a strong java background which makes more dynamic. I have seen him creating good streaming solutions too. overall I would say it's fun and result oriented to work with him."
      },
      {
         "rid":"105",
         "rname":"Deepak Kumar",
         "rdesg":"Lead Engineer",
         "rcompany":"HCL Technologies",
         "rrel":"Deepak worked with Prabhu in different groups",
         "recomnd":"Prabhu is a rare breed of person bringing talent, hard work and an incredible energy to his work. In just a few weeks a month working on Azure MarketPlace BI project, he is able to accomplish an incredible amount that keeps the project moving forward in the ever-changing client requirements. With the amount of high quality work he can complete and contagious energy he brings, any company would be lucky to have him on their team."
      },
      {
         "rid":"106",
         "rname":"Vijender Kumar",
         "rdesg":"Solution Consultant",
         "rcompany":"Iris Software Inc.",
         "rrel":"Vijender was senior to Prabhu but didn't manage directly",
         "recomnd":"I had the pleasure of working with Prabhu on a critical system that was used for a critical function by our client organization. I found Prabhu to be an exceptional resource who possesses excellent technical skills. He is a highly motivated, detail oriented and a very good team player, who is not only appreciated by clients & leaders, but highly regarded by the team he was working with during the development process."
      },
      {
         "rid":"107",
         "rname":"Sanjay Goel",
         "rdesg":"Senior Project Manager",
         "rcompany":"Iris Software Inc.",
         "rrel":"Sanjay managed Prabhu directly",
         "recomnd":"Prabhu is a very talented professional who is a good problem solver, good team player and he gives 100% for the project which makes him a very valuable resource."
      },
      {
         "rid":"108",
         "rname":"Mahfooz Ahmad",
         "rdesg":"Solution Consultant",
         "rcompany":"Iris Software Inc.",
         "rrel":"Mahfooz worked with Prabhu in same group",
         "recomnd":"I am really happy to write about Prabhu because I have a unique honor of being his technology mentor. He was a newcomer when he joined our team, but he was a real standout compared to others. Prabhu is very proactive and tireless contributor who was a great addition to the team. Despite being in a project with complex nature and multiple things going in parallel, he was very patient and he could quickly adapt. One thing what stands out it his patience and the willingness to go that extra mile to get things done. He was always willing to take extra responsibilities and deliver. His thinking about technology is different from others, he never give up and tried till get success. It is my pleasure to work with him. I would really like to have him on our team again and recommend highly to others too."
      },
      {
         "rid":"109",
         "rname":"Haneesh Singhal",
         "rdesg":"Project Manager",
         "rcompany":"Iris Software Inc.",
         "rrel":"Haneesh was mentor of Prabhu",
         "recomnd":"I evaluated Prabhu as trainee in IRIS and I observed that Prabhu has very good knowledge in Core Java and J2EE and he is always ready to take new challenges. He is always focused on on-time delivery with almost 0 defects and with following best coding practices.\n\nI am really impressed with his eagerness to learn new things without any guidance."
      }
   ];

function clientTemplate(person){
	return `
		<div class="client row">
	        <div class="col-lg-4 col-md-12 client-img">
	            <img src="./img/testimonials/${person.rid}.jpg" alt="${person.rname}" class="img-fluid">
	            <h6>${person.rrel}</h6>
	        </div>
	        <div class="col-lg-8 col-md-12 about-client">
	            <h4 class="text-uppercase">${person.rname}</h4>
	             <h6>${person.rdesg}, ${person.rcompany}</h6>
	            <p class="para">${person.recomnd}</p>
	        </div>
    	</div>
		`
}

function myFunction(){
	document.getElementById('gp').innerHTML = `
	${recData.map(clientTemplate).join("")}
	`
}
