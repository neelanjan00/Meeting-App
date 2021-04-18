import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'

const AboutMe = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '40px', backgroundColor: '#f2f2f2', width: '100vw' }}>
        <p style={{ fontSize: '2rem' }}>About Me</p>
        <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '10vh', boxShadow: '0px 3px 4px 0px rgba(138,138,138,1)' }}>
          <p>Name: Neelanjan Manna</p>
          <p>Roll: 1828251</p>
          <p>Github Profile: <a href="https://github.com/neelanjan00" target="blank">github.com/neelanjan00</a></p>
          <p>Skills: Full Stack Developer, Javascript, React.js, Express, Node.js, MongoDB, Firebase, HTML, CSS</p>
          <br /><p>Project:</p><br />
          <p><b>1. Portfolio:</b> A serverless portfolio web application developed using React.js and 
             Firebase to showcase projects and blogs. The application uses a database to store 
             the details of the projects, performs API calls to fetch the blog posts from Medium, 
             and, also performs authentication for making modifications to the database.
             <br />
             Deployed Link: <a href="https://neelanjanmanna.ml">neelanjanmanna.ml</a>
          </p><br />
          <p><b>2. Sorting Visualizer:</b> A web application for visualising Bubble Sort, Insertion Sort, 
            Selection Sort, Merge Sort and Quick Sort. The application is developed in next.js 
            application developed along with react.js for server side rendering of react js 
            application for improved SEO and support for hardware resources constrained devices. 
            The codebase is written in Typescript instead of Javascript for better code understandability 
            and maintainability.
            <br />
            Deployed Link: <a href="https://sorting-visualizer-lilac.vercel.app/">https://sorting-visualizer-lilac.vercel.app/</a>
          </p><br />
          <p><b>3. Neural Style Trasfer:</b> A neural style transfer algorithm which uses a CNN trained 
            with a style-cost function. The style-cost function makes use of two images, the style-image 
            and the content-image to produce an image which is the content-image re-drawn in the style of 
            the style-image, referred to as the generated image. The generated-image thus resembles an 
            artwork similar to the original content-image but bearing the style of the style-image.
            <br />
            Deployed Link: <a href="https://styletransferai.herokuapp.com/">https://styletransferai.herokuapp.com/</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;