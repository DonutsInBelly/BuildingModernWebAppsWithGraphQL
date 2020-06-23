import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { GraphQLClient } from "graphql-request";

let roster = [
  { name: "ada lovelace", isInAttendance: false },
  { name: "grace hopper", isInAttendance: false },
  { name: "margaret hamilton", isInAttendance: false },
];
export default function Home() {
  const [state, setState] = React.useState(roster);
  return (
    <div>
      <h1>In Attendance</h1>
      <List students={state} changeStatus={setState} isInAttendanceRoster />
      <h1>Not In Attendance</h1>
      <List students={state} changeStatus={setState} />
    </div>
  );
}

function List({ students, changeStatus, isInAttendanceRoster = false }) {
  function onClickHandler(changedStudent) {
    const index = students.indexOf(changedStudent);
    students[index].isInAttendance = !changedStudent.isInAttendance;
    console.dir(students);
    return students;
  }
  return (
    <ListGroup>
      {students.map((student) => {
        return student.isInAttendance == isInAttendanceRoster ? (
          <ListGroup.Item>
            <Button onClick={() => changeStatus([...onClickHandler(student)])}>
              Change Status
            </Button>
            {student.name}
          </ListGroup.Item>
        ) : null;
      })}
    </ListGroup>
  );
}

// export async function getServerSideProps() {
//   const graphcmsClient = new GraphQLClient(
//     "https://api-us-east-1.graphcms.com/v2/ckbqrbfzi008801z34ilieehq/master"
//   );

//   const query = `{
//     students {
//       name
//       isInAttendance
//     }
//   }`;

//   const result = await graphcmsClient.request(query);
//   const students = result.students;
//   return {
//     props: {
//       students,
//     },
//   };
// }
