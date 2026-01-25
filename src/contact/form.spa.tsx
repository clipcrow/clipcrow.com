import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EMAIL_REG =
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

type ContactForm = {
  name: string;
  email: string;
  business: string;
  content: string;
};

const App = () => {
  const { register, handleSubmit, formState: { dirtyFields, errors } } =
    useForm<ContactForm>();
  const [formData, setFormData] = useState<ContactForm | null>(null);
  const [stage, setStage] = useState<"input" | "submitted" | "posted">("input");
  const [focusID, setFocusID] = useState<string | null>(null);

  if (stage == "posted") {
    return (
      <div className="column_contents contact_contents">
        <h2>送信完了</h2>
        <p>
          この度はお問い合わせいただきまして誠にありがとうございます。<br />
          内容を確認次第、担当者より折返しご連絡させていただきます。<br className="viewpc" />今しばらくお待ちください。
        </p>
      </div>
    );
  }

  const postForm = async () => {
    // Send data to Slack
    if (formData) {
      const { name, email, business, content } = formData;
      try {
        await fetch("/slack", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text:
              `お問い合わせ\nお名前: ${name}\nメール: ${email}\nご用件: ${business}\n内容: ${content}`,
          }),
        });
        setStage("posted");
      } catch (error) {
        console.error("お問い合わせフォーム送信エラー:", error);
      }
    }
  };

  if (stage == "submitted") {
    return (
      <div className="column_contents contact_contents">
        <h2>内容確認</h2>
        <p>
          ご入力いただいた内容をご確認いただき、よろしければ「送信」ボタンをクリックしてください。
        </p>
        <div className="contact_form">
          <div className="input_box">
            <div className="input_title">
              お名前<span className="ness">必須</span>
            </div>
            <div className="confirm_text">{formData?.name}</div>
          </div>
          <div className="input_box">
            <div className="input_title">
              メールアドレス<span className="ness">必須</span>
            </div>
            <div className="confirm_text">{formData?.email}</div>
          </div>
          <div className="radio_box">
            <div className="input_title">
              ご用件<span className="ness">必須</span>
            </div>
            <div className="confirm_text">{formData?.business}</div>
          </div>
          <div className="input_box">
            <div className="input_title">
              お問い合わせ内容<span className="ness">必須</span>
            </div>
            <div className="confirm_text">{formData?.content}</div>
          </div>
          <div className="btn_area">
            <button type="button" onClick={() => setStage("input")} className="back_button">
              戻る
            </button>
            <button type="button" onClick={postForm} className="submit_button">送信</button>
          </div>
        </div>
      </div>
    );
  }

  const nameBinder = register("name", {
    required: { value: true, message: "お名前を入力してください" },
    maxLength: { value: 30, message: "お名前は30文字以内で入力してください" },
  });
  const emailBinder = register("email", {
    required: { value: true, message: "メールアドレスを入力してください" },
    pattern: {
      value: EMAIL_REG,
      message: "有効なメールアドレスではありません",
    },
    maxLength: {
      value: 254,
      message: "メールアドレスは254文字以内で入力してください",
    },
  });
  const businessBinder = register("business", {
    required: { value: true, message: "ご用件を選択してください" },
  });
  const contentBinder = register("content", {
    required: { value: true, message: "お問い合わせ内容を入力してください" },
    maxLength: {
      value: 300,
      message: "お問い合わせ内容は300文字以内で入力してください",
    },
  });

  const inputClass = (id: keyof ContactForm) => {
    const list = [id === "content" ? "input_textarea" : "input_text"];
    if (errors[id]) {
      list.push("input_error");
    }
    return list.join(" ");
  };

  const labelClass = (id: keyof ContactForm) => {
    const list = ["input_label"];
    if (focusID === id || dirtyFields[id]) {
      list.push("input_after");
    }
    if (errors[id]) {
      list.push("label_error");
    }
    return list.join(" ");
  };

  const submitForm = handleSubmit((data: ContactForm) => {
    setFormData(data);
    setStage("submitted");
  });

  return (
    <div className="column_contents contact_contents">
      <h2>お問い合わせフォーム</h2>
      <p>
        土日祝を除く3営業日以内に担当者よりご連絡させていただきます。<br />
        お問い合わせ内容により、ご回答までにお時間をいただく場合または、ご回答が出来ない場合がございます。
      </p>
      <form className="contact_form" onSubmit={submitForm}>
        <div className="input_box">
          <input
            type="text"
            {...nameBinder}
            className={inputClass("name")}
            onFocus={() => setFocusID("name")}
            onBlur={() => setFocusID(null)}
          />
          <label className={labelClass("name")}>
            お名前<span className="ness">必須</span>
          </label>
          <div className="error-message">{errors.name?.message}</div>
        </div>

        <div className="input_box">
          <input
            type="text"
            {...emailBinder}
            className={inputClass("email")}
            onFocus={() => setFocusID("email")}
            onBlur={() => setFocusID(null)}
          />
          <label className={labelClass("email")}>
            メールアドレス<span className="ness">必須</span>
          </label>
          <div className="error-message">{errors.email?.message}</div>
        </div>

        <div className="radio_box">
          <label className="radio_title">
            ご用件<span className="ness">必須</span>
          </label>
          <div className="radio_section">
            <input
              type="radio"
              id="dev"
              value="開発案件プロデュースのご依頼・ご相談"
              {...businessBinder}
            />
            <label htmlFor="dev">開発案件プロデュースのご依頼・ご相談</label>
          </div>
          <div className="radio_section">
            <input
              type="radio"
              id="info"
              value="ClipCrowについて"
              {...businessBinder}
            />
            <label htmlFor="info">ClipCrowについて</label>
          </div>
          <div className="radio_section">
            <input type="radio" id="other" value="その他" {...businessBinder} />
            <label htmlFor="other">その他</label>
          </div>
          <div className="error-message">{errors.business?.message}</div>
        </div>

        <div className="input_box">
          <textarea
            id="text"
            cols={30}
            rows={8}
            {...contentBinder}
            className={inputClass("content")}
            onFocus={() => setFocusID("content")}
            onBlur={() => setFocusID(null)}
          >
          </textarea>
          <label className={labelClass("content")}>
            お問い合わせ内容<span className="ness">必須</span>
          </label>
          <div className="error-message">{errors.content?.message}</div>
        </div>

        <div className="btn_area">
          <input className="submit_button" type="submit" value="内容確認" />
        </div>
      </form>
    </div>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) {
    createRoot(rootEl).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
