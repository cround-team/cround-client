import * as S from "./styled";

type FileInputProps = {
  fileRef: React.RefObject<HTMLInputElement>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileInput({ fileRef, onFileChange }: FileInputProps) {
  return (
    <S.Input
      ref={fileRef}
      type="file"
      accept="image/*"
      onChange={onFileChange}
    />
  );
}
