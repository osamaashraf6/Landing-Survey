import { getAllQuestionsFromPublishLink } from "@/services/fillingFormService";
import { useQuery } from "@tanstack/react-query";

const usePublishLink = () => {
  // ! getAll without filter
  const useGetAllQuestionsFromPublishLinkQuery = (link) => {
    return useQuery({
      queryKey: ["publish", link],
      queryFn: () => getAllQuestionsFromPublishLink(link),
      enabled: !!link,
    });
  };
  return { useGetAllQuestionsFromPublishLinkQuery };
};
export default usePublishLink;
