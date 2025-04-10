"use server";

import { auth, signIn, signOut, update } from "@/auth";
import { loginSchema } from "@/types/schema";
import { AuthError } from "next-auth";

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return {
      message: "invalid form data",
      errors: {
        fieldErrors: {
          email: "이메일이 유효하지 않습니다.",
          password: "비밀번호가 유효하지 않습니다.",
        },
        formError: "입력값 오류",
      },
    };
  }

  const validatedFields = loginSchema.safeParse({ email, password });

  if (!validatedFields.success) {
    return {
      message: "validation error",
      errors: {
        fieldErrors: validatedFields.error.flatten().fieldErrors,
        formError: "입력값을 확인해주세요.",
      },
    };
  }

  try {
    await signIn("credentials", {
      redirect: true, // 기본은 redirect false
      email,
      password,
    });

    return {
      message: "success",
      errors: {
        fieldErrors: {},
        formError: "",
      },
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "credentials error",
            errors: {
              fieldErrors: {},
              formError: "이메일 또는 비밀번호가 올바르지 않습니다.",
            },
          };
        default:
          return {
            message: "unknown error",
            errors: {
              fieldErrors: {},
              formError: "알 수 없는 오류가 발생했습니다.",
            },
          };
      }
    }

    throw error; // 그 외 예외는 그대로 전달
  }
}

export async function logout() {
  await signOut();
}

export { auth as getSession, update as updateSession };
