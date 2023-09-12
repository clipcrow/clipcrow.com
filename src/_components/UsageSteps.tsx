import getFeature, { FeatureGroup } from "@/getFeature.ts";
import type { Usage, UsageGroup } from "@/getUsage.ts";

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
  <div class={`case ${align(props.index)}`}>
    <p class={`roll ${getColorClass(props.circle.target)}`}>
      {props.circle.target}
    </p>
    <div class="image-container">
      <img src={props.circle.image} />
    </div>
    <p class="action">{props.circle.title}</p>
  </div>
);

function createTable(details: Usage[]) {
  const rows: Usage[][] = [];
  for (let i = 0; i < details.length; i += 2) {
    rows.push(details.slice(i, i + 2));
  }
  return rows.map((row) => (
    <div class="case__wrapper">
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
      <section class="step__wrapper step__01" id={`step${step.step}`}>
        <div class="example-title">
          <div class={`example-title__bg ${align(index)}`}></div>
          <h3 class="num">
            <span class="num__inner">
              <span class="num__inner-step">step</span>
              <span class="num__inner-figure">{displayStep(step.step)}</span>
            </span>
            {step.title}
          </h3>
        </div>
        <h5 class="step-wrapper__text">{step.text}</h5>
        <div class="example__case">
          {createTable(step.details)}
        </div>
        <div class="example__link">
          <h6>このステップで活用できる主な機能</h6>
          {step.feature.map((id) => {
            const feature = getFeature(props.features, id);
            return (
              <p class="case__relation-link">
                <a href={`/features/#feature${feature.id}`}>{feature.title}</a>
              </p>
            );
          })}
        </div>
      </section>
    ))}
  </>
);
