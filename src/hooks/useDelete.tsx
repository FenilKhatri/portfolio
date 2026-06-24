import { toast } from "sonner";

const useDelete = ({ endPoint, dataName, refetch }: { endPoint: string, dataName: string, refetch: () => void }) => {

  const handleDelete = async (data: any) => {
    if (window.confirm(`Are you sure you want to delete this ${dataName} entry?`)) {
      try {
        const response = await fetch(endPoint, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: data.id })
        });
        const result = await response.json();
        if (result.success) {
          toast.success(result.message || `${dataName} deleted successfully`);
          refetch();
        } else {
          toast.error(result.message || `Failed to delete ${dataName}`);
        }
      } catch (error) {
        toast.error("An error occurred");
      }
    }
  };

  return { handleDelete }
}

export default useDelete