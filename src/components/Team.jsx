import React from 'react';
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'
import team3 from '../images/team3.png'

const TeamPage = () => {
    return (
        <div className=" p-4  sm:p-8 mt-8 bg-white  shadow-md">
            <div className='mb-2'>
            <h1 className='text-xl font-bold mb-2'>Team</h1>
            <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo ac libero pharetra dapibus. Integer eu nisl quis augue lobortis luctus id eget ipsum. Ut ac metus et ex varius lacinia non nec justo. Aenean feugiat orci auctor turpis convallis, non feugiat libero eleifend. Sed condimentum, nunc ut vestibulum suscipit, augue odio luctus tortor, vitae tincidunt arcu ligula vel odio</p> </div>
           <div className='flex flex-col items-center '>
           <Team
                image={team1}
                name="John Doe"
                designation="Software Engineer"
                description="John is a skilled software engineer with a passion for coding and problem-solvingdfgdsfgsdfgvsdfgsdfgdfgs."
            />

            <Team
                image={team2}
                name="Jane Smith"
                designation="UX Designer"
                description="Jane specializes in creating delightful user experiences and is passionate about user-centered design sdfasdfasdf."
            />

            <Team
                image={team3}
                name="Bob Johnson"
                designation="Marketing Manager"
                description="Bob is an experienced marketing professional with a strategic mindset and creative approach.dfgsadfgadsvasfasdga"
            />
           </div>
            
        </div>
    );
};

export default TeamPage;

const Team = ({ image, name, designation, description }) => (
    <div className="flex  flex-col items-center sm:flex-row sm:items-start  justify-between  p-4 mb-4 bg-blue-50  rounded-md shadow-md">
        <div className="flex mr-2 flex-col justify-center items-center w-32">
            <img src={image} alt="image..."  className="w-24 object-cover rounded-md" />
            
                <h2 className="text-sm font-semibold text-center">{name}</h2>
                <p className="text-gray-300 text-sm text-center ">{designation}</p>
            
        </div>


        <p className="ml-4  text-center  sm:text-left">{description}</p>


    </div>
);
