"use client";

import Button from "@/components/common/button/base/Button";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import TextArea from "@/components/common/textarea/TextArea";
import Avatar from "@/components/common/avatar/Avatar";
import { useUploadImage } from "@/hooks/useUploadImage";
import useCreatorRegister from "@/hooks/form/useCreatorRegister";
import * as S from "./styled";
import { creatorCreateApi } from "@/utils/api/creator";

export default function CreatorRegisterBasePage() {
  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();

  const {
    inputValues,
    errorMessage,
    isDisabled,
    validMessage,

    handleChangeForm,
    handleSubmit,
  } = useCreatorRegister();

  const testSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (selectedImage) {
        // 이미지 파일 추가
        formData.append("profileImage", selectedImage);
        console.log(selectedImage);
      }

      const creatorSaveRequest = {
        nickname: "테스트닉넴",
        description: "테스트중입니다",
        platformHeadType: "youtube",
        platformHeadTheme: "이겨낸다",
        platformUrl: "https://www.youtube.com",
        tags: ["테스트", "테스트트"],
        activityPlatforms: ["youtube", "tiktok"],
        // tags: JSON.stringify(["테스트", "테스트트"]),
        // activityPlatforms: JSON.stringify(["youtube", "tiktok"]),
      };

      formData.append(
        "creatorSaveRequest",
        new Blob([JSON.stringify(creatorSaveRequest)], {
          type: "application/json",
        })
      );

      // // 기타 데이터 추가
      // formData.append("nickname", "테스트닉넴");
      // formData.append("description", "테스트중입니다");
      // formData.append("platformHeadType", "youtube");
      // formData.append("platformHeadTheme", "이겨낸다");
      // formData.append("platformUrl", "https://www.youtube.com");
      // formData.append("tags", JSON.stringify(["테스트", "테스트트"]));
      // formData.append(
      //   "activityPlatforms",
      //   JSON.stringify(["youtube", "tiktok"])
      // );

      console.log("formData", formData);
      const res = await creatorCreateApi(formData);
      console.log("res", res);
      if (res.status === 201) {
        console.log("201", res);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <S.Form onSubmit={testSubmit}>
      <Avatar
        css={S.Avatar}
        previewImage={previewImage}
        fileRef={fileInputRef}
        alt="My profile image"
        onFileChange={handleFileChange}
      />
      <RegisterInput
        label="크리에이터 닉네임"
        autoFocus={true}
        css={S.Nickname}
        size="md"
        id="nickname"
        name="nickname"
        placeholder="닉네임을 입력해 주세요"
        validMessage={validMessage}
        errorMessage={errorMessage}
        onChange={handleChangeForm}
      />
      <TextArea
        css={S.Description}
        id="desc"
        name="desc"
        value={inputValues.desc}
        placeholder="간단한 소개글을 입력해 주세요"
        label="크리에이터 소개글"
        onChange={handleChangeForm}
      />
      <Button
        isDisabled={isDisabled}
        label="다음"
        size="56"
        variant="primary"
      />
    </S.Form>
  );
}
