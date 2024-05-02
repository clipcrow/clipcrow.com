import type { Feature, FeatureGroup, UsageGroup } from "@/Type.ts";
import getUsage from "@/getUsage.ts";

const FeatureCard = (props: { usages: UsageGroup[]; card: Feature }) => (
  <div className="case" id={`feature${props.card.id}`}>
    <div className="case__badge">
      {props.card.badge.map((n) => (
        <img src={`/images/badge0${n}.png`} alt={`badge ${n}`} />
      ))}
    </div>
    <p className="case__title">{props.card.title}</p>
    <p className="case__body">{props.card.body}</p>
    {props.card.usage
      ? (
        <p className="case__relation-link">
          <a href={`/usage-example/#step${props.card.usage}`}>
            {getUsage(props.usages, props.card.usage).title}
          </a>
        </p>
      )
      : null}
  </div>
);

function createTable(usages: UsageGroup[], details: Feature[]) {
  const rows: Feature[][] = [];
  for (let i = 0; i < details.length; i += 3) {
    rows.push(details.slice(i, i + 3));
  }
  return rows.map((row) => (
    <div className="features__case">
      {row.map((card) => <FeatureCard usages={usages} card={card} />)}
    </div>
  ));
}

function align(index: number) {
  return (index + 1) % 2 ? "left" : "right";
}

export default (props: { usages: UsageGroup[]; features: FeatureGroup[] }) => (
  <>
    {props.features.map((section, index) => (
      <section className="features__maincont">
        <h3 className="title">
          <div className={`title__bg ${align(index)}`}></div>
          {section.section}
        </h3>
        <div className="img-ellipse">
          <div className="img-ellipse__wrapper">
            <div className="ellipse"></div>
            <img
              src={section.image}
            />
          </div>
          <div className="img-ellipse__text">{section.text}</div>
        </div>
        <div className="features__case-wrapper">
          {createTable(props.usages, section.details)}
        </div>
      </section>
    ))}
  </>
);
