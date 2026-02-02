export const title = "ClipCrow | クリップクロウ - 製品トップ";
export const bodyClass = "bg_w";

export default () => (
  <main>
    <section className="product_top" style={{ padding: "100px 0", textAlign: "center" }}>
      <h1>ClipCrow</h1>
      <p style={{ margin: "20px 0" }}>
        もっと手軽に、もっと自由に。<br />
        ビジネスの現場を変える新しいSaaS。
      </p>
      <div className="btn_detail_g" style={{ display: "inline-block", marginTop: "30px" }}>
        <a href="/product/">
            製品詳細はこちら<span className="arrow-right"></span>
        </a>
      </div>
      <div className="btn_detail_g" style={{ display: "inline-block", marginTop: "30px", marginLeft: "20px" }}>
        <a href="/corporate/">
            企業情報はこちら<span className="arrow-right"></span>
        </a>
      </div>
    </section>

    {/* Dummy Content similar to Product Page */}
    <section style={{ background: "#f5f5f5", padding: "60px 0" }}>
      <div className="inner">
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          <div style={{ background: "#fff", padding: "30px", borderRadius: "8px" }}>
            <h3>Communication</h3>
            <p>円滑なコミュニケーションを実現します。</p>
          </div>
          <div style={{ background: "#fff", padding: "30px", borderRadius: "8px" }}>
            <h3>Database</h3>
            <p>情報を整理し、活用しやすい形に。</p>
          </div>
          <div style={{ background: "#fff", padding: "30px", borderRadius: "8px" }}>
            <h3>Task Management</h3>
            <p>日々の業務を効率化。</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);
