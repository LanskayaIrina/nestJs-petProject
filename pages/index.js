import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const Meetup = (props) => {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   const response = await fetch("/api/meetups");
//   const data = await response.json();
//   console.log("data", data);
//   const req = context.req;
//   const res = context.res;
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ira:cb998585m@cluster0.tjw4ggx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  console.log("meetups", meetups);
  await client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
      })),
    },
    revalidate: 1,
  };
}

export default Meetup;
