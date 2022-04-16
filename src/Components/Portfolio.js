import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/nischaybikramthapa/Identifying-Potential-Clusters-for-COVID-19-Vaccination-in-U.S." className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/06.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Identifying-Potential-Clusters-for-COVID-19-Vaccination-in-U.S.</h3>
                      <p>A prototype of an application that provides machine-learning backed information and interactive simulation to support the United States public health officials in developing an effective and well-informed vaccine deployment strategy.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        {/* <li><a href="https://final-capstonejx.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li> */}
                        <li><a href="https://github.com/nischaybikramthapa/Identifying-Potential-Clusters-for-COVID-19-Vaccination-in-U.S." className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-python-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/nischaybikramthapa/multi-task-activity-recognition" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/08.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Human Activity Recognition as Multi-task learning </h3>
                      <p>This project is about identifying human actions and action class from Standard40 dataset. The solution is a multi-task learner built using different CNN mdoels like VGG-16, InceptionV2 and NasNetMobile.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/nischaybikramthapa/multi-task-activity-recognition" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-tensorflow-original colored technology"></i>
                        <i className="devicon-python-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/react_capstone" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/07.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Detection of Colon Cancer and its Cell Types using Histopathological Images</h3>
                      <p>This project attempts to detect Colon Cancer Cell and its types using deep learning. Due to limited training data, it uses semi-supervised learning approach to increase the size of training sample thereby improving the performance of the model. </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        {/* <li><a href="https://react-capstonejsx.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li> */}
                        <li><a href="https://github.com/nischaybikramthapa/colon-cancer-detection" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-tensorflow-original colored technology"></i>
                        <i className="devicon-python-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              {/* <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/js_capstone_rpg" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/09.png" alt="js-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Final Warrior</h3>
                      <p>An RPG game mainly focused on collecting as many chests as possible while having to combat against monsters (watch ouf for covid monsters).</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://rammazzoti2000.github.io/js_capstone_rpg/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/rammazzoti2000/js_capstone_rpg" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain technology"></i>
                        <i className="devicon-webpack-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div> */}
              {/* <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/ror-capstone-lifestyle" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/01.jpg" alt="ror-capstone-lifestyle" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>LifeOpedia! WebApp</h3>
                      <p>Webapp where users can publish lifestyle articles, bookmark favourite articles, leave comments and upvote an article.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://ror-capstone-lifeopedia.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/rammazzoti2000/ror-capstone-lifestyle" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-rails-plain-wordmark technology"></i>
                        <i className="devicon-sass-original technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div> */}
              {/* <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/tic-toc-toe" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/02.jpg" alt="tic-toc-toe" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Tic Tac Toe Terminal App</h3>
                      <p>Customized version of the well known two player <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank" rel="noopener noreferrer">Tic Tac Toe</a> game built in Ruby and played directly from a console or terminal.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://tic-toc-toe.rammazzoti2000.repl.run/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/rammazzoti2000/tic-toc-toe" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-ruby-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div> */}
              {/* <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/HTML-CSS-capstone-project" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/03.jpg" alt="HTML-CSS-capstone-project" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>PETFinder WebApp</h3>
                      <p>Webapp to lookup for shelters and find a new pet-pal. It has a search function (to be implemented) able to look up all over Europe.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://rammazzoti2000.github.io/HTML-CSS-capstone-project/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/rammazzoti2000/HTML-CSS-capstone-project" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-less-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div> */}
              {/* <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/Using-Bootstrap" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/04.jpg" alt="Using-Bootstrap" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>NewsWeek Replica</h3>
                      <p>NewsWeek website replica built mainly with bootstrap. This project is part of <a href="https://www.microverse.org/#world-className-curriculum" target="_blank" rel="noopener noreferrer">Microverse</a> curriculum with the purpose to learn and achieve mastery on the <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> framework.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://rammazzoti2000.github.io/Using-Bootstrap/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/rammazzoti2000/Using-Bootstrap" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-bootstrap-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div> */}
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/nischaybikramthapa" className="button portfolio-button" target="_blank" rel="noopener noreferrer">See More</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
