import { faQ } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const faq = () => {
  return (
    <div>
      <div className='FAQ'>
        <h1 className='main_heading'>General</h1>
        <br />

        <h3>How can I create account?</h3>
        <br />
        <p>
          Click on 'Login & Sign up' at the top of the page. Then fill out your
          information in the 'Create an account' section and click the 'Sign Up'
          button. You can also create an account directly after placing an
          order. Your address and the order details will then be saved
          in your account.
        </p>
        <br />

        <h3>Will I be charged?</h3>
        <br />
        <p>No, You will not be charged for anything as its for free. You can watch the educational videos for free and download the books for free</p>
        <br />

        <h3>I don't remember my password?</h3>
        <br />
        <p>
          You have already created an account but you can't remember your
          password? Click on 'Login/Sign Up' at the top of the page. Then click
          on 'Forgot Password?'. Fill out your phone number and a password
          recovery will be sent to you by phone.
        </p>
        <br />

        <h3>How much time it takes to learn and understand the quizzes?</h3>
        <br />
        <p>
          Generally it takes between 5 minutes to 10 minsutes time to undertand the functionality. But once you understand it, you carry on doing it more often 
          
        </p>
        <br />

        <h1 className='main_heading'>Books</h1>
        <br />

        <h3>How do I know what book is suitable?</h3>
        <br />
        <p>
          We have tried out every book and have also left a rating based on previous and current customer users.
        </p>
        <br />

        <h3>How do I open the books?</h3>
        <br />
        <p>Please visit the page and select on the tab "Ebooks" and once you find a book you like, click on it and 
            it will be downloadable in PDF and you can enjoy with ypur child.</p>
        <br />

        <h1 className='main_heading'>Quizzes</h1>
        <br />

        <h3>How will be able to keep track of the results?</h3>
        <br />
        <p>
          Your results will be kept a track of as you progress through the tests.
          It will also let you know about the questions you got right and the questions
          you have got wrong.
          
        </p>
        <br />

        <h3>Will i be tracked during the quizzes?</h3>
        <br />
        <p>
          No you will not be tracked location wise, The system will only take account of the 
          mistakes and corrects on the Quiz.
        </p>
        <br />

        <h1 className='main_heading'>Signing in / Sign up</h1>
        <br />

        <h3>When do i have to sign in?</h3>
        <br />
        <p>
          You will have to sign in or sign up to use the content.
          Details we send to you via email.
        </p>
        <br />

        <h3>Why do i have to provide an email?</h3>
        <br />
        <p>
          Just so that we can ensure your account is safe and we can send you news and updates. We will soon be
          introducing more methods.
        </p>
        <br />

        <h3>Will I get charged for subscription?</h3>
        <br />
        <p>
          No. You will not be charged for subcscribing as its completely free.
          Hello 2021ß
        </p>
        <br />
      </div>
      )
    </div>
  );
};

export default FAQ;