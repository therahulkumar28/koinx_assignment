import React from 'react';
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'
import team3 from '../images/team3.png'

const TeamPage = () => {
    return (
        <div className="  mt-8 bg-white p-3">
            <div className='m-8'>
            <h1 className='text-xl font-bold'>Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo ac libero pharetra dapibus. Integer eu nisl quis augue lobortis luctus id eget ipsum. Ut ac metus et ex varius lacinia non nec justo. Aenean feugiat orci auctor turpis convallis, non feugiat libero eleifend. Sed condimentum, nunc ut vestibulum suscipit, augue odio luctus tortor, vitae tincidunt arcu ligula vel odio</p> </div>
           
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
    );
};

export default TeamPage;

const Team = ({ image, name, designation, description }) => (
    <div className="flex justify-around p-5 m-6 bg-blue-50  rounded-md shadow-md">
        <div className=" mr-4 w-30 h-30">
            <img src={image} alt="image..."  className="w-24 h-24 object-cover rounded-md" />
            <div>
                <h2 className="text-sm font-semibold text-center">{name}</h2>
                <p className="text-gray-300 text-sm text-center ">{designation}</p>
            </div>
        </div>


        <p className="mt-2 ml-3 w-646 h-110 text-left">{description}</p>


    </div>
);
