import { useNavigate } from "react-router-dom";
import useReview from "../../hook/useReview";
import image from "../../image/right-img.png";
import "./Home.css";

const Home = () => {
  const [review] = useReview();
  const newReview = review.slice(0, 3);
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex home">
        <div className="info">
          <h1 className="heading">Plants For Our Earth</h1>
          <p>
            Indoor plants are popular because they are relatively easy to take
            care of, provide health benefits and can be used in a variety of
            indoor decor themes. Indoor plants are a great option for those who
            have little yard space for an outdoor garden or for those who live
            in climates with severely cold winters.
          </p>
          <button className="live-demo-btn">Live demo</button>
        </div>
        <div className="image pt-5 mt-5">
          <img src={image} alt="" />
        </div>
      </div>
      <section className="review mb-5">
        <h2 className="section-heading">REVIEW</h2>
        <div className="row row-cols-3 p-5">
          {newReview.map((data) => (
            <div key={data.id} className="col fw-bold">
              <img src="" alt="" />
              <h3>{data.name}</h3>
              <p>
                <span>Rating: {data.rating}</span>
              </p>
              <p>{data.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => navigate('/review')} className="live-demo-btn">see all reviews</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
