import './course.css'

const course="HTML"
function Course(){
    return(
        <>
            <div className="card">
                <h3>{course}</h3>
                <p>This is an {course} by code.io</p>
            </div>
        </>
    )
}

export default Course