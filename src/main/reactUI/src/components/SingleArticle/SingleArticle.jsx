import PropTypes from "prop-types";
import "./SingleArticle.css";
import Tags from "../Tags/Tags";

export default function SingleArticle({ article }) {
  return (
    <>
      <div className="TeamMember">
        <img src={article.image} alt={article.author} />
        <div className="TagParent">
          {article.tags.map((tag, index) => {
            return <Tags key={index} tagArray={tag} />;
          })}
        </div>

        <h4>{article.headline}</h4>
        <p>{article.abstract}</p>
        <p>by {article.author}</p>

        <p>{article.date}</p>
      </div>
    </>
  );
}
SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};
