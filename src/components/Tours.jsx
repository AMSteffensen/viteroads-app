import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} />;
          })}
        </div>
      </section>
    </div>
  );
};
export default Tours;
