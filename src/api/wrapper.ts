// src/api/apiHandler.ts
import { AxiosError } from "axios";

export async function Warpper<T>(
  promise: Promise<T>
): Promise<{ data: T | null; error: string | null }> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (err) {
    let message = "Đã xảy ra lỗi";
    if (err instanceof AxiosError) {
      message =
        (err.response?.data as any)?.message ||
        err.message ||
        "Lỗi không xác định";
    }
    return { data: null, error: message };
  }
}
