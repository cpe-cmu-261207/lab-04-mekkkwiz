export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <div class="card">
    <div>
      <p>name : {props.name}</p>
    </div>
    <div>
      <p>grade : {props.grd}</p>
    </div>
    <div>
      <p>credit : {props.crd}</p>
    </div>
    <div>
      <button class = "delete_button" onClick = {() =>props.del(props.name)}>x</button>
    </div>
  </div>;
};
