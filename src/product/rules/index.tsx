import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "利用規約 | Essential Workware";

export default () => (
  <main>
    <section id="product_top">
      <h1>Essential Workware</h1>
    </section>
    <div className="bread_crumb product_crumb">
      <ul>
        <li>
          <a href="/">TOP</a>
        </li>
        <li>
          <a href="/product/">Essential Workware</a>
        </li>
        <li>利用規約</li>
      </ul>
    </div>
    <section className="product_title">
      <h1>
        Essential Workware <br className="viewsp" />利用規約
      </h1>
    </section>

    <section className="main_contents">
      <article className="inner terms_contents">
        <p>
          この利用規約（以下、「本規約」といいます。）は、クリップクロウ合同会社（以下、「当社」といいます。）が提供するEssential
          Workwareのアプリケーションとサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスを利用するユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
        </p>
        <h2>
          <span>第1条（適用）</span>
        </h2>
        <p>
          本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
        </p>
        <ol className="marginleft30">
          <li>
            ユーザーは，当社の定める終了手続により，いつでも本サービスの利用を終了できるものとします。
          </li>
          <li>
            当社は，ユーザーへの事前の告知をもって、本サービスの内容を変更、追加又は廃止することがあり、ユーザーはこれを承諾するものとします。
          </li>
          <li>
            当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。
          </li>
        </ol>
        <h2>
          <span>第2条（保証の否認および免責事項）</span>
        </h2>
        <ol>
          <li>
            当社は，本サービスに事実上又は法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。
          </li>
          <li>
            当社は，本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
          </li>
          <li>
            当社の故意又は重過失による場合を除き、債務不履行又は不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
          </li>
          <li>
            当社は，本サービスに関して，ユーザーと他のユーザー又は第三者との間において生じた取引，連絡又は紛争等について一切責任を負いません。
          </li>
        </ol>
        <h2>
          <span>第3条（認証情報の管理）</span>
        </h2>
        <ol>
          <li>
            ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
          </li>
          <li>
            ユーザーはいかなる場合にも、認証情報を第三者に譲渡又は貸与し，もしくは第三者と共用することはできません。当社は，本サービスに認証が行われた時点でその認証情報を保有するユーザー自身による利用とみなします。
          </li>
          <li>
            認証情報が第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
          </li>
        </ol>
        <h2>
          <span>第4条（利用料金および支払方法）</span>
        </h2>
        <ol>
          <li>
            ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。
          </li>
          <li>
            ユーザーが利用料金の支払を遅滞した場合には，当社は本サービスの有料部分の提供を停止することがあります。
          </li>
          <li>
            ユーザーは停止された本サービスの有料部分の利用再開を望む場合、停止までに累積した未払いの利用料金について、年14.6%の割合による遅延損害金を添えて支払いを完了する必要があります。
          </li>
        </ol>
        <h2>
          <span>第5条（禁止事項）</span>
        </h2>
        <p>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
        </p>
        <ol className="marginleft30">
          <li>法令又は公序良俗に違反する行為。</li>
          <li>
            本サービスに関連して，反社会的勢力に対して利益を供与する行為。
          </li>
          <li>本サービスの運営を妨害するおそれのある行為。</li>
          <li>
            本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為。
          </li>
          <li>その他，当社が不適切と判断する行為。</li>
        </ol>
        <h2>
          <span>第６条（利用制限および登録抹消）</span>
        </h2>
        <ol>
          <li>
            当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限することができるものとします。
          </li>
          <ul>
            <li>本規約のいずれかの条項に違反した場合。</li>
            <li>料金等の支払債務の不履行があった場合。</li>
            <li>当社からの連絡に対し，一定期間返答がない場合。</li>
            <li>本サービスについて，最終の利用から一定期間利用がない場合。</li>
            <li>その他，当社が本サービスの利用を適当でないと判断した場合。</li>
          </ul>
          <li>
            当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
          </li>
        </ol>
        <h2>
          <span>第７条（本サービスの提供の停止等）</span>
        </h2>
        <ol>
          <li>
            当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部又は一部の提供を停止又は中断することができるものとします。
          </li>
          <ul>
            <li>
              本サービスにかかるコンピュータシステムの保守点検又は更新を行う場合。
            </li>
            <li>
              地震，落雷，火災，停電又は天災などの不可抗力により，本サービスの提供が困難となった場合。
            </li>
            <li>コンピュータ又は通信回線等が事故により停止した場合。</li>
            <li>その他，当社が本サービスの提供が困難と判断した場合。</li>
          </ul>
          <li>
            当社は，本サービスの提供の停止又は中断により，ユーザー又は第三者が被ったいかなる不利益又は損害について，一切の責任を負わないものとします。
          </li>
        </ol>
        <h2>
          <span>第８条（利用規約の変更）</span>
        </h2>
        <ol>
          <li>
            当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
            <ul>
              <li>本規約の変更がユーザーの一般の利益に適合するとき。</li>
              <li>
                本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
              </li>
            </ul>
          </li>
          <li>
            当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
          </li>
        </ol>
        <h2>
          <span>第９条（準拠法・裁判管轄）</span>
        </h2>
        <ol>
          <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
          <li>
            本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </li>
        </ol>
        <p className="align_right">2022年09月01日 制定・施行</p>
      </article>
    </section>
    <DownloadButtons />
  </main>
);
