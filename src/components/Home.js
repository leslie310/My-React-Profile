import React from 'react';


export default function Home(props) {
    const {
        currentTab,
        handleTabChange,
    
      } = props;
  return (

<div class="">

    <h5 class="card-title text-dark">About Me</h5>
    <p class="card-text text-dark">Welcome to my Portfolio! I am a Web Developer from Seattle.</p>
    <p class='text-dark'>Talented, ambitious and hardworking individual, with broad skills and experience in JavaScript, HTML, CSS, Node.JS, and React.</p>
    <p class='text-dark'>Currently enrolled in UW Coding Program and enjoy making websites and learn new things that help me become a better developer. </p>
    
<div class='container marketing d-flex justify-content-center'>
    <div class='row flex-wrap-reverse'>
        <div class='col-lg-4'>
        <img class='rounded-circle' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cherry-blossom-or-sakura-in-japan-close-up-royalty-free-image-937809942-1546893872.jpg?crop=0.66658xw:1xh;center,top&resize=480:*'alt='image' width='140' height='140'></img>
            <h2>Resume</h2>
        <a class='btn btn-secondary' href='Resume' onClick={() => handleTabChange('About')}     c
        className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >View </a>
    </div>
        
    <div class='col-lg-4'>
            
        <img class='rounded-circle' src='https://as2.ftcdn.net/v2/jpg/01/09/64/51/1000_F_109645166_6QE2xgQAbvV9GWatxxN43ovXDgSlQmlM.jpg'alt='image' width='140' height='140'></img>
           
        <h2>About Me</h2>
        
        <a class='btn btn-secondary' href='About' onClick={() => handleTabChange('About')}     c
        className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
        >View </a>
        </div>
        
    <div class='col-lg-4'>
        <img class='rounded-circle' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Qhy7skzRBCD9du39uzQ5UKP6WpXcv4LpFfuSx5U6ELnwGH81DRa6Aa3akeIFv_AmWA4&usqp=CAU'alt='image' width='140' height='140'></img>
            
        <h2>Contact</h2>

        <a class='btn btn-secondary' href='Contact' onClick={() => handleTabChange('Contact')}     
        className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >View</a>
        
    </div>
</div>
</div>
</div>




  )}
