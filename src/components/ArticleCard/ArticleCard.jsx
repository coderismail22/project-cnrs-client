const ArticleCard = ({ card }) => {
  //   const { title, description, imageUrl, pageUrl } = card;
  return (
    <a
      href="https://github.com/coderismail22"
      target="_blank"
      className="block"
    >
      <div className="p-5">
        {/* Image */}
        <div>
          <img
            src="/assets/article_1.jpg"
            alt="articleImg"
            className="my-5 w-full"
          />
        </div>
        {/* Title */}
        <h1 className="font-serif font-extrabold text-2xl">Waste Management</h1>
        {/* Description */}
        <p className="my-5">
          In the reporting period, CNRS started a new waste management project
          at Kanchan-1 Drilling Site, Maheshkhali, Cox&apos;s Bazar, with the
          support of Sinopec International Petroleum Service Corporation.
        </p>
      </div>
    </a>
  );
};

export default ArticleCard;
