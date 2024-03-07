import React from "react";

const About = () => {
	return (
		<div className="w-full h-fit bg-cover about-background pt-64 pb-48">
			<div className="mx-auto w-fit h-fit flex items-center space-x-10">
				<div className="bg-eerie-black w-[0.5rem] h-[16rem] rounded-full bg-gradient-to-b  from-[#BC1531] to-[#0737A4]"></div>
				<div className="space-y-4">
					<p className="uppercase text-[#2044FF] font-bold tracking-widest text-xl">Who is this for?</p>
					<p className="text-2xl w-[45rem] font-medium leading-loose">Simply put, this community is for any Filipino who is eager to learn skills and knowledge typically covered in Philippines' education system. So whether you are a student, educator, professional, or lifelong learner, this community is for you.</p>
				</div>
			</div>
		</div>
	)
}

export default About