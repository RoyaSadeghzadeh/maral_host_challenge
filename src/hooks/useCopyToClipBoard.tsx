"use client"
import { useState, useCallback } from "react";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      setCopied(false);
    }
  }, []);

  const resetCopiedState = useCallback(() => {
    setCopied(false);
  }, []);

  return { copied, copyToClipboard, resetCopiedState };
};

export default useCopyToClipboard;
