
import Card from "./components/Card";
import Header from "./components/Card/header";

const Home = async () => {
  const topAnimes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const topMangas = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`);

  const topAnime = await topAnimes.json();
  const topManga = await topMangas.json();
  return (
    <>
    <section>
      <Header title="Popular Anime" link="/popular" linkTitle="See All Anime" />
      <Card api={topAnime} />
    </section>
    
    <section>
      <Header title="Popular Manga" link="/Manga" linkTitle="See All Mangas" />
      <Card api={topManga} />
    </section>
    </>
    
  );
};

export default Home;