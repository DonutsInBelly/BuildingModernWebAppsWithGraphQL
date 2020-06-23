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
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
/**
 * The GraphCMS Query using Next.js' getServerSideProps
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * On each Page Load, this code will call GraphCMS and
 * return props for the Home component.
 */
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

/**
 * List with API Call
 * This List contains the necessary components to update the student's status
 * in GraphCMS when the Button is clicked.
 */
// function List({ students, changeStatus, isInAttendanceRoster = false }) {
//   function updateGraphCMS(changedStudent) {
//     const graphcmsClient = new GraphQLClient(
//       "https://api-us-east-1.graphcms.com/v2/ckbqrbfzi008801z34ilieehq/master"
//     );
//     const mutation = `
//     mutation {
//       updateStudent(
//         where: {name: "${changedStudent.name}"},
//         data: {isInAttendance: ${!changedStudent.isInAttendance}}
//       ){
//         name
//         isInAttendance
//       }
//     }
//     `;
//     graphcmsClient.request(mutation);
//   }
//   function onClickHandler(changedStudent) {
//     const index = students.indexOf(changedStudent);
//     students[index].isInAttendance = !changedStudent.isInAttendance;
//     return students;
//   }
//   return (
//     <ListGroup>
//       {students.map((student) => {
//         return student.isInAttendance == isInAttendanceRoster ? (
//           <ListGroup.Item>
//             <Button
//               onClick={() => {
//                 updateGraphCMS(student);
//                 return changeStatus([...onClickHandler(student)]);
//               }}
//             >
//               Change Status
//             </Button>
//             {student.name}
//           </ListGroup.Item>
//         ) : null;
//       })}
//     </ListGroup>
//   );
// }
