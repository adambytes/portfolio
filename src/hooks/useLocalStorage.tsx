"use client";
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: string
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}
