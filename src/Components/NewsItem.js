import { DefafultImage } from "../utils/constant";
import Image from "../assets/news.png";

const NewsItem = ({ title, description, src, url, publishDate }) => {
  return (
    <div
      className="card  text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "320px", backgroundColor: "#21342E" }}
    >
      <img
        style={{ height: "200px", width: "300px" }}
        className="card-img-top"
        src={src ? src : Image}
        alt="Card image cap"
        // below is onError of loading of image i am giving another backup image as fallback
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = Image;
        }}
      />
      <div className="card-body">
        <p className="card-text">publish date: {publishDate.slice(0, 10)}</p>
        <h5 className="card-title">{title.slice(0, 80)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "check out more about the news by clicking readmore button"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
