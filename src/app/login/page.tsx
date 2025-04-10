"use client";

import { signIn } from "@/auth";
import BubbleImages from "./components/bubbleImages";
import LoginInputComponent from "./components/loginInput";
import SnsButton from "./components/snsButton";
import ToggleButtonGroup from "./components/toggleBtnGroup";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrap}>
        <div className={styles.leftContainer}>
          {/* <HeaderComponent /> */}
          <header className={styles.header}>
            <a href="/" className={styles.logo}>
              <div className={styles.imgBox}></div>
              Grow X SEL
            </a>
          </header>
          <BubbleImages />
        </div>
        <div className={styles.rightContainer}>
          <form
            action=""
            className={styles.loginForm}
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;

              await signIn("credentials", {
                email,
                password,
                redirect: true, // 로그인 후 자동 리디렉션
                callbackUrl: "/dashboard", // 로그인 성공 후 이동할 페이지
              });
            }}
          >
            <div className={styles.formTitWrap}>
              <h2 className={styles.formTit}>Sign in</h2>
              <p className={styles.formTxt}>
                Welcome, Please enter your details
              </p>
            </div>
            <ToggleButtonGroup />
            <LoginInputComponent
              label="Email"
              type="text"
              name="email"
              placeholder="Enter your email"
              errorMsg="Please fill out Email field"
            />
            <LoginInputComponent
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              errorMsg="Please fill out Password field"
              isPassword
            />
            <div className={styles.btnBox}>
              <button type="submit" className={styles.btnLogin}>
                Sign in
              </button>
              <span className={styles.dividerTxt}>OR</span>
              <SnsButton provider="Google" />
            </div>
            <div className={styles.labelRow}>
              <a href="" className={styles.linkUtility}>
                Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
