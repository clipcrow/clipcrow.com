import type { ComponentChildren } from "preact";
import EWwareCategoryLink from "@/EWwareCategoryLink.tsx";

export default (
  props: {
    id: string;
    manager?: boolean;
    staff?: boolean;
    worker?: boolean;
    step?: number;
    title: string;
    children: ComponentChildren;
  },
) => (
  <div class="case card round gray-pale" id={props.id}>
    <div class="badge">
      {props.manager
        ? (
          <div>
            <img src="/images/badge-manager.png" alt="for 経営者" />
          </div>
        )
        : null}
      {props.staff
        ? (
          <div>
            <img src="/images/badge-staff.png" alt="for スタッフ" />
          </div>
        )
        : null}
      {props.worker
        ? (
          <div>
            <img src="/images/badge-worker.png" alt="for ワーカー" />
          </div>
        )
        : null}
    </div>
    <p class="title">{props.title}</p>
    <p class="read">{props.children}</p>
    {props.step === 1
      ? (
        <EWwareCategoryLink class="relation-link" link="/example/#step1">
          活用例：勤務開始〜終了
        </EWwareCategoryLink>
      )
      : null}
    {props.step === 2
      ? (
        <EWwareCategoryLink class="relation-link" link="/example/#step2">
          活用例：締め作業
        </EWwareCategoryLink>
      )
      : null}
    {props.step === 3
      ? (
        <EWwareCategoryLink class="relation-link" link="/example/#step3">
          活用例：組織の改善
        </EWwareCategoryLink>
      )
      : null}
  </div>
);
