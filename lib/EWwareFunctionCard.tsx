export default (
  props: {
    id: string;
    manager?: boolean;
    staff?: boolean;
    worker?: boolean;
    step: number;
    title: string;
    // deno-lint-ignore no-explicit-any
    children: any;
  },
) => (
  <div class="case card round gray-pale" id={props.id}>
    <div class="badge">
      {props.manager
        ? (
          <div>
            <img src="badge-manager.png" alt="for経営者" />
          </div>
        )
        : null}
      {props.staff
        ? (
          <div>
            <img src="badge-staff.png" alt="forスタッフ" />
          </div>
        )
        : null}
      {props.worker
        ? (
          <div>
            <img src="badge-worker.png" alt="forワーカー" />
          </div>
        )
        : null}
    </div>
    <p class="title">{props.title}</p>
    <p class="read">{props.children}</p>
    {props.step == 1
      ? (
        <p class="relation-link">
          <a href="/example#step1">活用例：勤務開始〜終了</a>
        </p>
      )
      : null}
    {props.step == 2
      ? (
        <p class="relation-link">
          <a href="/example#step2">活用例：締め作業</a>
        </p>
      )
      : null}
    {props.step == 3
      ? (
        <p class="relation-link">
          <a href="/example#step3">活用例：組織の改善</a>
        </p>
      )
      : null}
  </div>
);
