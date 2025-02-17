import './App.css';
// import Html from './img/html.svg';
import css from './img/css.svg';
import Javascript from './img/javascript.svg';
import bootstrap from './img/bootstrap.png';
import tailwind from './img/tailwind-css.svg';
import nodejs from './img/nodejs.svg';
import mongodb from './img/mongodb.svg';
import mysql from './img/mysql.svg';
import react from './img/react.png';
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import resuime from './img/Resume (1) (2).pdf'
function App() {
  const DownloadResume = () => {
    const link = document.createElement('a');
    link.href = resuime;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container">
          <a className="navbar-brand" href="#">SD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#About">ABOUT</a>
              <a className="nav-link" href="#">PROJECTS</a>
              <a className="nav-link " href='#CONTECT' >CONTECT</a>
            </div>
          </div>
        </div>
      </nav>
      <div id="background">
        <div className="container">
          <h1  >Surendra Dan</h1>
          <h2>Web Development & Designer</h2>
          <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contact Me</button>
        </div>
      </div>
      <div className='container mt-5' id='About'>
        <div className='row '>
          <div className="col-sm-4">
            <p>About Me</p>
          </div>
          <div className="col-sm-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis veniam ex sed ab, eum exercitationem accusamus fugiat incidunt laborum minus, sint provident cum nihil voluptates. Soluta quo iste obcaecati laboriosam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis veniam ex sed ab, eum exercitationem accusamus fugiat incidunt laborum minus, sint provident cum nihil voluptates. Soluta quo iste obcaecati laboriosam.</p>
            <button className='btn btn-dark ' onClick={DownloadResume}>Download Resume</button>
          </div>
        </div>
      </div>
      <div id='skils' className='mt-5'>
        <div className='container pt-5'>
          <h2 className='text-center'>My skils</h2>
          <div className='row'>
            <div className='col'>
              <img src={Javascript}></img>
              <p>Javascript</p>
            </div>
            <div className='col'>
              <img src={bootstrap}></img>
              <p>bootstrap</p>
            </div>
            <div className='col'>
              <img src={react}></img>
              <p>React.js</p>
            </div>  <div className='col'>
              <img src={css}></img>
              <p>css</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src={nodejs}></img>
              <p>node.js</p>
            </div>
            <div className='col'>
              <img src={mongodb}></img>
              <p>mongodb</p>
            </div>
            <div className='col'>
              <img src={tailwind}></img>
              <p>tailwind</p>
            </div>
            <div className='col'>
              <img src={mysql} alt='sdf'></img>
              <p>Mysql</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container' id='Porfoilio'>
        <h1 className='Porfoilio'>Porfoilio</h1>
        <div className='row '>
          <div className='col-sm-3'>
            <div className='p-3'>
              <p>WEB DESIGN</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='p-3'>
              <p>MOBILE DESIGN</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='p-3'>
              <p>LOGO DESIGN</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='p-3'>
              <p> WEB DEVELOPMENT  </p>
            </div>
          </div>
        </div>
        <div className='row  '>
          <div className='col-sm-4'>
            <div className='p-3'>
              <p>Full stack developer</p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <p>Front end developer</p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <p>Backend developer</p>
            </div>
          </div>

        </div>
      </div>
      <footer className='footer' id='CONTECT'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <h5>GET IN TOUCH</h5>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg> <span> Surendradan63@gmail.com </span><br></br>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M160-40v-80h640v80H160Zm0-800v-80h640v80H160Zm320 400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm70-80q45-56 109-88t141-32q77 0 141 32t109 88h70v-480H160v480h70Zm118 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-280q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0 40Z" /></svg> <span>6350584449</span>
            </div>
            <div className='col-lg-4 text-center'>
              <button type="button" class="btn btn-primary text-center mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Contact Me
              </button>
            </div>
            <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-dark" id="staticBackdropLabel">Contact Us</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form className='form'>
                      <div class="mb-3">
                        <label for="name" class="form-label text-dark  " >Name</label>
                        <input type="text" class="form-control" id="name" placeholder='Enter Your Full Name' />
                      </div>
                      <div class="mb-3">
                        <label for="number" class="form-label text-dark  ">Mobile number</label>
                        <input type="number" className="form-control" id="number" title="Please enter a 10-digit number" placeholder="Enter 10-digit number "
                        />
                      </div>
                      <div class="mb-3">
                        <label for="name" class="form-label text-dark text-right">work</label>
                        < textarea class="form-control" id="work" placeholder='Enter Your Work' />
                      </div>
                      <button type="Submit" class="btn btn-primary">Submit</button>

                    </form>
                  </div>

                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <p id='float-end'><FaInstagramSquare className='m-2' /><CiFacebook className='m-2' /><CiTwitter className='m-2' />  </p><br></br>
              <p >copyright &copy;</p>
            </div>
          </div>
        </div>
      </footer>
      <div></div>
    </div>
  );
};

export default App;
