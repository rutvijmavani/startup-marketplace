import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({searchParams}: {searchParams: Promise< {query?: string} >}) {

  const query = (await searchParams).query

  const posts = await client.fetch(STARTUPS_QUERY)
  console.log(JSON.stringify(posts , null , 2))

  // const posts = [
  //   {
  //     _createdAt : new Date(),
  //     views : 55,
  //     author : {
  //       _id : 1,
  //       name : 'adrian'
  //     },
  //     _id : 1,
  //     description : 'This is a description.',
  //     image : 'https://unsplash.com/photos/orange-flower-in-tilt-shift-lens-lt_zJH4GT_M',
  //     category : 'robots' ,
  //     title : 'we robots'
  //   },
  //   {
  //     _createdAt : new Date(),
  //     views : 55,
  //     author : {
  //       _id : 1,
  //       name : 'adrian'
  //     },
  //     _id : 2,
  //     description : 'This is a description.',
  //     image : 'https://unsplash.com/photos/orange-flower-in-tilt-shift-lens-lt_zJH4GT_M',
  //     category : 'robots' ,
  //     title : 'we robots'
  //   },
  // ]

  return (
    <>
    <section className = "pink_container">
      <h1 className = "heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
      <p className = "sub-heading !max-w-3xl">Submit Ideas, Vote On Pitches, and Get Noticed In Virtual Competitions.</p>
      <SearchForm query= {query} />
    </section>

    <section className = "section_container">
      <p className = "text-30-semibold">
        {query ? `Search results for "${query}"` : 'All Startups'}
      </p>

      <ul className = "mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType , index: number) => (
            <StartupCard key = {post?._id} post = {post} />
          ))
        ) : (
          <p className = "no-results"> No startups found.</p>
        )}
      </ul>
    </section>
    </>
  );
}
