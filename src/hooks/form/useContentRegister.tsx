import { useRouter } from "next/navigation";

import { PATH } from "@/constants";
import { useContentRegisterContext } from "@/context/ContentRegisterContext";
import { useEffect } from "react";

export default function useContentRegister() {
  const router = useRouter();
  const {
    formData: { title, description },
    platforms,
    handleSetPlatforms,
  } = useContentRegisterContext();

  useEffect(() => {
    if (!title || !description) {
      router.push(PATH.CONTENTS.REGISTER.BASE);
    }
  }, []);

  const isBaseDisabled = !(title && description);

  const handleSubmitBase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(PATH.CONTENTS.REGISTER.PLATFORM);
  };

  const handleSubmitApi = (
    e: React.FormEvent<HTMLFormElement>,
    selected: string[]
  ) => {
    e.preventDefault();
    handleSetPlatforms(selected);
    // Api 통신 => 성공시 push
    //router.push(PATH.CONTENTS.REGISTER.SUCCESS);
  };

  return {
    isBaseDisabled,
    handleSubmitBase,
    handleSubmitApi,
  };
}
