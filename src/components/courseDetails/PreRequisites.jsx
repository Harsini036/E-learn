function PreRequisites({ prerequisites }) {
  //console.log(prerequisites);
  return (
    <div className="prerequisites">
      <h3>Prerequisites for taking this course</h3>
      <ul>
        {prerequisites?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default PreRequisites;
