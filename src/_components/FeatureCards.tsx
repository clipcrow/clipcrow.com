import type { Feature, FeatureGroup, UsageGroup } from "@/Type.ts";
import getUsage from "@/getUsage.ts";

const FeatureCard = (props: { usages: UsageGroup[]; card: Feature }) => (
  <div class="case" id={`feature${props.card.id}`}>
    <div class="case__badge">
      {props.card.badge.map((n) => (
        <img src={`/images/badge0${n}.png`} alt={`badge ${n}`} />
      ))}
    </div>
    <p class="case__title">{props.card.title}</p>
    <p class="case__body">{props.card.body}</p>
    {props.card.usage
      ? (
        <p class="case__relation-link">
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
    <div class="features__case">
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
      <section class="features__maincont">
        <h3 class="title">
          <div class={`title__bg ${align(index)}`}></div>
          {section.section}
        </h3>
        <div class="img-ellipse">
          <div class="img-ellipse__wrapper">
            <div class="ellipse"></div>
            <img
              src={section.image}
            />
          </div>
          <div class="img-ellipse__text">{section.text}</div>
        </div>
        <div class="features__case-wrapper">
          {createTable(props.usages, section.details)}
        </div>
      </section>
    ))}
  </>
);
