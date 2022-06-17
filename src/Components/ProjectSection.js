import React from 'react'

export default function ProjectSection() {
  return (
    <div>
        <h2 id="myProjects"> My Projects</h2>
        <div className='ProjectsSources'>
            <div className='Card-item'>
                <a href='https://loveragabriel.github.io/uncaffeperfavore/' alt="Web page bootstrap" target="_blank"><img src='https://cdn.pixabay.com/photo/2016/03/26/23/23/starbucks-1281880_960_720.jpg'></img></a>
                <p>Web Page</p>
                <p>HTML-CSS</p>
            </div>
            <div className='Card-item'>
                <a href='https://loveragabriel.github.io/gallery/' alt="gallery website" target="blank"><img src='https://cdn.pixabay.com/photo/2017/11/12/22/50/people-2944065_960_720.jpg'></img></a>
                <p>Gallery Page</p>
                <p>HTML-CSS</p>
            </div>
            <div className='Card-item'>
                <a href='https://github.com/loveragabriel/myapp' alt="react app" target="blank"><img src='https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_960_720.jpg'></img></a>
                <p>Web App</p>
                <p>HTML-CSS-JAVASCRIPT-REACT</p>
            </div>
            
        </div>
    </div>
  )
}
