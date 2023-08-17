import type { Feature, FeatureGroup } from "@/getFeature.ts";
import getUsage, { UsageGroup } from "@/getUsage.ts";

const FeatureCard = (props: { usages: UsageGroup[], feature: Feature }) => (
  <div class="case">
    <div class="case__badge">
      {
        props.feature.badge.map((n) => (
          <img src={`/images/badge0${n}.png`} alt={`badge ${n}`} />
        ))
      }
    </div>
    <p class="case__title">{props.feature.title}</p>
    <p class="case__body">{props.feature.body}</p>
    {
      props.feature.usage ? (
        <p class="case__relation-link">
          <a href={`/usage-example/#step${props.feature.usage}`}>
            {getUsage(props.usages, props.feature.usage).title}
          </a>
        </p>
      ) : null
    }
  </div>
);

const align = (index: number) => ((index + 1) % 2 ? "left" : "right"); 

export default (props: { usages: UsageGroup[], features: FeatureGroup[] }) => {
  return (
    <>
      {
        props.features.map((feature, index) => (
          <section class="features__maincont">
            <h3 class="title">
              <div class={`title__bg ${align(index)}`}></div>
              {feature.section}
            </h3>
            <div class="img-ellipse">
              <div class="img-ellipse__wrapper">
                <div class="ellipse"></div>
                <img
                  class={`features__img-${index + 1}}`}
                  src={feature.image}
                />
              </div>
              <div class="img-ellipse__text">{feature.text}</div>
            </div>
            <div class="features__case-wrapper">
              <div class="features__case">
                {
                  feature.details.map((card) => (
                    <FeatureCard usages={props.usages} feature={card} />
                  ))
                }
              </div>
            </div>
          </section>      
        ))
      }
    </>
  );
}
