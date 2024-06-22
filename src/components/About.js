import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {

  return (
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    TextUtils: Efficient Text Analysis
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className={`accordion-body text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}`}>
                        TextUtils offers a fast and efficient way to analyze your text. Whether you need a word count, character count, or other text statistics, TextUtils has you covered.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free and Easy to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className={`accordion-body text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}`}>
                        TextUtils is a free tool that instantly provides character and word count statistics for any given text. It accurately reports the number of words and characters, making it ideal for writing tasks with specific word or character limits.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className={`accordion-body text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}`}>
                        This versatile word counter works seamlessly with any web browser, including Chrome, Firefox, Internet Explorer, Safari, and Opera. It is perfect for counting characters in Facebook posts, blog entries, books, Excel documents, PDFs, essays, and more.
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
        </div>
    </div>
  )
}

About.propTypes = {
    mode: PropTypes.string,
    state: PropTypes.string,
}

About.defaultProps = {
    mode: "light",
    state: "dark",
}