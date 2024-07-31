import image from '../assets/newss.jpg';

export const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card">
      <img src={src ? src : image} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News can be seen by below link"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};
