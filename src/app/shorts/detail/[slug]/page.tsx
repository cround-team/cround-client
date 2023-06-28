"use client";

import {
  CreatorInfoBox,
  DeleteModal,
  ModifyDropdown,
  YoutubeShort,
} from "@/components/common";
import useShortDetail from "@/components/domain/shorts/hooks/useShortDetail";
import { DotsVerticalIcon } from "@/assets/icons";
import * as S from "./styled";

type ShortDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function ShortDetailPage({ params }: ShortDetailPageProps) {
  const {
    isOpenDropdown,
    isOpenDeleteModal,
    handleToggleDropdown,
    getBaseInfoProps,
    getCreatorInfoProps,
    getDropdownProps,
    getDeleteModalProps,
  } = useShortDetail({ id: params.slug });

  return (
    <>
      <S.Section>
        <YoutubeShort
          css={S.Video}
          videoId={getBaseInfoProps().shortFormUrl as string}
        />
        <S.TextWrapper>
          <S.Head>
            <span>{getBaseInfoProps().platformType}</span>
            {getBaseInfoProps().isOwned && (
              <button type="button" onClick={handleToggleDropdown}>
                <DotsVerticalIcon />
              </button>
            )}
            {isOpenDropdown && <ModifyDropdown {...getDropdownProps()} />}
          </S.Head>
          <h3>{getBaseInfoProps().title}</h3>
          <p>{getBaseInfoProps().content}</p>
        </S.TextWrapper>
        <CreatorInfoBox {...getCreatorInfoProps()} />
      </S.Section>
      {/* 모달 */}
      {isOpenDeleteModal && (
        <DeleteModal {...getDeleteModalProps()}>
          <h3>숏클래스를 정말 삭제하시겠습니까?</h3>
          <p>
            한번 삭제한 숏클래스는
            <br />
            복구가 불가능합니다.
          </p>
        </DeleteModal>
      )}
    </>
  );
}
