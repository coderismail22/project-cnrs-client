import ArticleCard from "../../../components/ArticleCard/ArticleCard";

const Articles = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white ">
      <h1 className="font-palanquin text-3xl font-extrabold text-white">
        Read articles and case stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Articles;
