import react from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      <h2>Readme:</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, qui? Ad doloremque similique aperiam repellendus? Illum voluptatem sint non quaerat. Similique eveniet labore quisquam magni culpa, est cupiditate asperiores sint?</p>
      <h2>Concern</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quis dolore. Voluptatibus ea corrupti explicabo laborum repudiandae accusamus blanditiis repellat voluptas exercitationem, aliquam maiores nostrum, modi deserunt
        itaque dolores! Laboriosam nemo id, molestias officia sint accusamus eaque itaque molestiae consequatur voluptas? Explicabo ipsa, quo assumenda vel cupiditate optio commodi sapiente magni ex hic beatae, fuga aliquam? Ipsam nulla
        perspiciatis facilis, iure pariatur cumque quasi earum vero ipsa at eaque error reiciendis esse inventore repellat eveniet. Aut culpa consequatur animi, sequi quam nam similique id ipsa omnis quo consectetur sit officia. Modi dicta
        ipsam numquam saepe dolores voluptates aut nulla tempora iure! Eos iste consectetur praesentium voluptas qui commodi ducimus temporibus quibusdam, harum atque omnis quas hic rerum accusamus cum ipsa tempora officiis vitae quo
        similique, placeat corrupti iusto eius dignissimos! Provident deleniti rem aperiam beatae? Id tempora minima mollitia nobis aperiam omnis consequatur eveniet quas deserunt ratione magni necessitatibus animi officia quo, excepturi
        sequi. Quos facere ea ad id excepturi, consequuntur laboriosam soluta voluptates accusamus modi alias at quo totam beatae assumenda sint nihil recusandae fuga quod commodi officiis dolorum temporibus inventore autem. Quibusdam
        beatae quos dignissimos doloribus pariatur, laborum esse molestiae! Ut nulla blanditiis omnis, corporis neque veniam quibusdam?
      </p>

      <Link to="/">get back to Home</Link>
    </div>
  );
}

export default Product;
