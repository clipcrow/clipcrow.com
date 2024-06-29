import { useState } from "react";
import { useForm } from "react-hook-form";

const EMAIL_REG = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

type FormData = {
  name: string;
  email: string;
  business: string;
  content: string;
};

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSave = (data: FormData) => {
    setFormData(data);
    setIsConfirmed(true);
  };

  const handleEdit = () => {
    setIsConfirmed(false);
  };

  const handleConfirm = async () => {
    // Send data to Slack
    if (formData) {
      try {
        await fetch("/slack", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text:
              `お問い合わせ:\nお名前:  ${formData.name}\nメール:  ${formData.email}\nご用件:  ${formData.business}\n内容:  ${formData.content}`,
          }),
        });
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error sending form data to Slack:", error);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="column_contents contact_contents">
        <h2>送信完了</h2>
        <p>この度はお問い合わせいただきまして誠にありがとうございます。<br />
          内容を確認次第、担当者より折返しご連絡させていただきます。<br className="viewpc" />今しばらくお待ちください。</p>
      </div>    
    );
  }

  if (isConfirmed) {
    return (
      <div className="column_contents contact_contents">
        <h2>内容確認</h2>
        <p>ご入力いただいた内容をご確認いただき、よろしければ「送信」ボタンをクリックしてください。</p>
        <div className="contact_form">
          <div className="input_box">
            <div className="input_title">お名前<span className="ness">必須</span></div>
            <div className="confirm_text">{formData?.name}</div>
          </div>
          <div className="input_box">
            <div className="input_title">メールアドレス<span className="ness">必須</span></div>
            <div className="confirm_text">{formData?.email}</div>
          </div>
          <div className="radio_box">
            <div className="input_title">ご用件<span className="ness">必須</span></div>
            <div className="confirm_text">{formData?.business}</div>
          </div>
          <div className="input_box">
            <div className="input_title">お問い合わせ内容<span className="ness">必須</span></div>
            <div className="confirm_text">{formData?.content}</div>
          </div>
          <div className="btn_area">
            <button onClick={handleEdit} className="back_button">戻る</button>
            <button onClick={handleConfirm} className="submit_button">送信</button>
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
    pattern: { value: EMAIL_REG, message: "有効なメールアドレスではありません" },
    maxLength: { value: 254, message: "メールアドレスは254文字以内で入力してください" },
  });
  const businessBinder = register("business", {
    required: { value: true, message: "ご用件を選択してください" },
  });
  const contentBinder = register("content", {
    required: { value: true, message: "お問い合わせ内容を入力してください" },
    maxLength: { value: 300, message: "お問い合わせ内容は300文字以内で入力してください" },
  });

  return (
    <div className="column_contents contact_contents">
      <h2>お問い合わせ</h2>
      <p>土日祝を除く3営業日以内に担当者よりご連絡させていただきます。<br />
      お問い合わせ内容により、ご回答までにお時間をいただく場合または、ご回答が出来ない場合がございます。</p>
      <form className="contact_form" onSubmit={handleSubmit(handleSave)}>

        <div className="input_box">
          <input className={`input_text${errors.name ? " input_error" : ""}`} type="text" placeholder=" " {...nameBinder} />
          <label className={`input_label${errors.name ? " label_error" : ""}`}>
            お名前<span className="ness">必須</span>
          </label>
          <div className="error_message">{errors.name?.message}</div>
        </div>

        <div className="input_box">
          <input className={`input_text${errors.email ? " input_error" : ""}`} type="text" placeholder=" " {...emailBinder} />
          <label className={`input_label${errors.email ? " label_error" : ""}`}>
            メールアドレス<span className="ness">必須</span>
          </label>
          <div className="error_message">{errors.email?.message}</div>
        </div>
        
        <div className="radio_box">
          <label className="radio_title">ご用件<span className="ness">必須</span></label>
          <div className="radio_section">
            <input type="radio" id="dev" value="開発案件プロデュースのご依頼・ご相談" {...businessBinder} />
            <label htmlFor="dev">開発案件プロデュースのご依頼・ご相談</label>
          </div>
          <div className="radio_section">
            <input type="radio" id="info" value="Essential Workwareについて" {...businessBinder} />
            <label htmlFor="info">Essential Workwareについて</label>
          </div>
          <div className="radio_section">
            <input type="radio" id="other" value="その他" {...businessBinder} />
            <label htmlFor="other">その他</label>
          </div>
          <div className="error_message">{errors.business?.message}</div>
        </div>

        <div className="input_box">
          <textarea className={`input_textarea${errors.content ? " input_error" : ""}`} placeholder=""
            id="text" cols={30} rows={8} {...contentBinder}></textarea>
          <label className={errors.content ? "input_label label_error" : "input_label"}>
            お問い合わせ内容<span className="ness">必須</span>
          </label>
          <div className="error_message">{errors.content?.message}</div>
        </div>

        <div className="btn_area">
          <input className="submit_button" type="submit" value="内容確認" />
        </div>
      </form>
    </div>
  );
}

export default App;
