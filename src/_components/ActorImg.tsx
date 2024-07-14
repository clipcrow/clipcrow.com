export type Actor = "admin" | "staff" | "worker" | "guest";

export default (props: { actor: Actor }) => {
  if (props.actor == "admin") {
    return <img src="/assets/images/common/mark_admin.png" alt="管理者" />;
  }

  if (props.actor == "staff") {
    return <img src="/assets/images/common/mark_staff.png" alt="スタッフ" />;
  }

  if (props.actor == "worker") {
    return <img src="/assets/images/common/mark_worker.png" alt="ワーカー" />;
  }

  if (props.actor == "guest") {
    return <img src="/assets/images/common/mark_guest.png" alt="ゲスト" />;
  }

  throw "actorパラメータ値が不正";
};
