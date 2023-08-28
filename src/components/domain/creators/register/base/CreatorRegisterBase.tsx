import { Avatar, Button, RegisterInput, TextArea } from "@/components/common";
import * as S from "./styled";

type CreatorRegisterBaseProps = {
  isLoading: boolean;
  isDisabledSubmit: boolean;
  nickname: string;
  description: string;
  previewImage: string | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function CreatorRegisterBase({
  isLoading,
  isDisabledSubmit,
  nickname,
  description,
  previewImage,
  fileInputRef,
  handleFileChange,
  handleChangeForm,
  handleSubmit,
}: CreatorRegisterBaseProps) {
  return (
    <S.Form onSubmit={handleSubmit}>
      <Avatar
        isLoading={isLoading}
        previewImage={previewImage}
        fileRef={fileInputRef}
        alt="My profile image"
        onFileChange={handleFileChange}
      />
      <S.Container>
        <RegisterInput
          autoFocus={true}
          css={S.Nickname}
          label="크리에이터 닉네임"
          size="md"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력해 주세요"
          validMessage="한글, 영어, 또는 숫자로 2글자 이상 6글자 이내"
          value={nickname}
          onChange={handleChangeForm}
        />
        <TextArea
          css={S.Description}
          label="크리에이터 소개글"
          id="description"
          name="description"
          placeholder="간단한 소개글을 입력해 주세요"
          value={description}
          onChange={handleChangeForm}
        />
        <Button
          isDisabled={isDisabledSubmit}
          label="다음"
          size="56"
          variant="primary"
        />
      </S.Container>
    </S.Form>
  );
}
