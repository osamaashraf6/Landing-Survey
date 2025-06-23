import { createPublishLink, getAllPreview } from "@/services/previewService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const usePreview = () => {
  const queryClient = useQueryClient();
  // ! getAll without filter
  const useGetAllPreviewQuery = (surveyId) => {
    return useQuery({
      queryKey: ["preview", surveyId],
      queryFn: () => getAllPreview(surveyId),
      enabled: !!surveyId,
    });
  };
  // ! createPublishLink
  const createPublishLinkMutation = useMutation({
    mutationFn: createPublishLink,
    onSuccess: () => {
      queryClient.invalidateQueries(["preview"]);
    },
  });
  return {
    useGetAllPreviewQuery,
    createPublishLinkMutation,
  };
};

export default usePreview;
