import type { FeatureGroup } from "@/getFeature.ts";

const IndexCard = (props: { card: FeatureGroup }) => (
  <div className="features__card">
    <h4>{props.card.section}</h4>
    <img src={props.card.image} />
    <p>{props.card.text}</p>
  </div>
);

function createTable(features: FeatureGroup[]) {
  const rows: FeatureGroup[][] = [];
  for (let i = 0; i < features.length; i += 2) {
    rows.push(features.slice(i, i + 2));
  }
  return rows.map((row) => (
    <div className="features__grid">
      {row.map((card) => <IndexCard card={card} />)}
    </div>
  ));
}

export default (props: { features: FeatureGroup[] }) => (
  <div className="features__grid-wrapper">
    {createTable(props.features)}
  </div>
);
