import getFeature from "@/getFeature.ts";
import type { FeatureGroup, Usage, UsageGroup } from "@/Type.ts";

function align(index: number) {
  return (index + 1) % 2 ? "left" : "right";
}

function getColorClass(target: string) {
  switch (target) {
    case "スタッフ":
      return "ex-staff";
    case "ワーカー":
      return "ex-worker";
    default:
      return "ex-manager";
  }
}

const UsageCircle = (props: { circle: Usage; index: number }) => (
  <div className={`case ${align(props.index)}`}>
    <p className={`roll ${getColorClass(props.circle.target)}`}>
      {props.circle.target}
    </p>
    <div className="image-container">
      <img src={props.circle.image} />
    </div>
    <p className="action">{props.circle.title}</p>
  </div>
);

function createTable(details: Usage[]) {
  const rows: Usage[][] = [];
  for (let i = 0; i < details.length; i += 2) {
    rows.push(details.slice(i, i + 2));
  }
  return rows.map((row) => (
    <div className="case__wrapper">
      {row.map((circle, index) => (
        <UsageCircle
          circle={circle}
          index={index}
        />
      ))}
    </div>
  ));
}

function displayStep(index: number) {
  const temp = `0${index}`;
  return temp.slice(-2);
}

export default (props: { usages: UsageGroup[]; features: FeatureGroup[] }) => (
  <>
    {props.usages.map((step, index) => (
      <section className="step__wrapper step__01" id={`step${step.step}`}>
        <div className="example-title">
          <div className={`example-title__bg ${align(index)}`}></div>
          <h3 className="num">
            <span className="num__inner">
              <span className="num__inner-step">step</span>
              <span className="num__inner-figure">{displayStep(step.step)}</span>
            </span>
            {step.title}
          </h3>
        </div>
        <h5 className="step-wrapper__text">{step.text}</h5>
        <div className="example__case">
          {createTable(step.details)}
        </div>
        <div className="example__link">
          <h6>このステップで活用できる主な機能</h6>
          {step.feature.map((id) => {
            const feature = getFeature(props.features, id);
            return (
              <p className="case__relation-link">
                <a href={`/features/#feature${feature.id}`}>{feature.title}</a>
              </p>
            );
          })}
        </div>
      </section>
    ))}
  </>
);
