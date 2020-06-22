import Head from "next/head";
import { Button, Badge, ListGroup } from "react-bootstrap";
import { GraphQLClient } from "graphql-request";

export default function Home() {
  let roster = ["ada lovelace", "grace hopper", "margaret hamilton"];
  let currentRoster = [];
  return (
    <div>
      <h1>In Attendance</h1>
      <List students={currentRoster} />
      <h1>Not In Attendance</h1>
      <List students={roster} />
    </div>
  );
}

function List({ students }) {
  return (
    <ListGroup>
      {students.map((student) => (
        <ListGroup.Item>{student}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
// export async function getServerSideProps() {
//   const graphCMSClient = new GraphQLClient(
//     "https://api-us-east-1.graphcms.com/v2/ckbqrbfzi008801z34ilieehq/master"
//   );

//   const query = `{
//     students {
//       name
//       isInClass
//     }
//   }`;

//   const result = await graphCMSClient.request(query);
//   const students = result.students;
//   return {
//     props: {
//       students,
//     },
//   };
// }
