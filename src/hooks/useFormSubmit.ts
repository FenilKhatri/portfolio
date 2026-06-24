import { UseFormSubmitOptions } from '@/types/forms';
import { useState } from 'react';
import { toast } from 'sonner';

export const useFormSubmit = <T>({ url, successMessage = "Saved successfully!", method = "POST" }: UseFormSubmitOptions) => {
  const [loading, setLoading] = useState(false);

  const submit = async (data: T): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success !== false && response.ok) {
        toast.success(result.message || successMessage);
        return true;
      } else {
        toast.error(result.message || "Failed to save");
        return false;
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, setLoading };
};
